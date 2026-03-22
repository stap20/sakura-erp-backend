import { Injectable } from '@nestjs/common';
import { IGetItemPricingHandler } from '../../application/queries/get-item-pricing/get-item-pricing.handler.interface';
import { GetItemPricingQuery } from '../../application/queries/get-item-pricing/get-item-pricing.query';
import { GetItemPricingResponse } from '../../application/queries/get-item-pricing/get-item-pricing.response';
import { InventoryGateway } from '../gateways/inventory.gateway';
import { RecipeGateway } from '../gateways/recipe.gateway';
import { SettingsGateway } from '../gateways/settings.gateway';
import { ItemNotFoundForSaleError, InvalidItemTypeForSaleError } from '../../application/errors/sales-order.errors';
import { NotFoundError } from 'src/shared/application/errors/notfound.error';
import { BadRequestError } from 'src/shared/application/errors/bad-request.error';

@Injectable()
export class GetItemPricingHandler implements IGetItemPricingHandler {
    constructor(
        private readonly inventoryGateway: InventoryGateway,
        private readonly recipeGateway: RecipeGateway,
        private readonly settingsGateway: SettingsGateway,
    ) {}

    async handle(query: GetItemPricingQuery): Promise<GetItemPricingResponse> {
        // 1. Get the item
        const item = await this.inventoryGateway.getItem(query.itemId);
        if (!item) throw new ItemNotFoundForSaleError(query.itemId);
        if (item.type !== 'FINAL_PRODUCT') throw new InvalidItemTypeForSaleError(item.type);

        if (!item.productId) {
            throw new BadRequestError('Item is not linked to a Product. Configure the Product association first.');
        }
        if (item.unitWeightGm === null) {
            throw new BadRequestError('Item unitWeightGm is not set. Configure the item reference data first.');
        }

        // 2. Get the product
        const product = await this.inventoryGateway.getProduct(item.productId);
        if (!product) throw new NotFoundError(`Product ${item.productId} not found`);

        if (product.referenceBatchGm === null) {
            throw new BadRequestError('Product referenceBatchGm is not set. Configure the Product reference data first.');
        }
        if (product.referenceDurationMin === null) {
            throw new BadRequestError('Product referenceDurationMin is not set. Configure the Product reference data first.');
        }

        const wastePercent = product.referenceWastePercent ?? 0;

        // 3. Get active recipe
        const recipe = await this.recipeGateway.getActiveRecipeByProduct(item.productId);
        if (!recipe) throw new NotFoundError(`No active recipe found for product ${item.productId}`);

        const baseIngredients = recipe.ingredients.filter((i) => !i.isAddOn);

        // 4. Get cost config
        const costConfig = await this.settingsGateway.getCostConfig();
        if (!costConfig) throw new NotFoundError('Cost configuration not found. Configure settings first.');

        // 5. Calculations
        const unitsPerBatch = product.referenceBatchGm / item.unitWeightGm;

        // Labor per unit
        const hourlyRate = costConfig.monthlySalary / costConfig.monthlyWorkingHours;
        const minuteRate = hourlyRate / 60;
        const laborPerUnit = (minuteRate * product.referenceDurationMin) / unitsPerBatch;

        // Depreciation per unit
        const depreciationPerUnit = (costConfig.depreciationPerMinute * product.referenceDurationMin) / unitsPerBatch;

        // Material cost per unit
        let totalMaterialCost = 0;
        for (const ingredient of baseIngredients) {
            const ingredientItem = await this.inventoryGateway.getItem(ingredient.itemId);
            if (!ingredientItem) continue;
            const waup = ingredientItem.weightedAverageUnitPrice ?? 0;
            const gmsUsed = (ingredient.percentage / 100) * product.referenceBatchGm * (1 + wastePercent / 100);
            totalMaterialCost += gmsUsed * waup;
        }
        const materialPerUnit = totalMaterialCost / unitsPerBatch;

        // Packaging cost per unit
        let packagingPerUnit = 0;
        for (const component of item.packagingComponents) {
            const packagingItem = await this.inventoryGateway.getItem(component.packagingItemId);
            if (!packagingItem) continue;
            const waup = packagingItem.weightedAverageUnitPrice ?? 0;
            packagingPerUnit += component.qtyPerUnit * waup;
        }

        // Total COGS and suggested price
        const totalCogs = materialPerUnit + laborPerUnit + depreciationPerUnit + packagingPerUnit;
        const suggestedPrice = totalCogs * (1 + costConfig.defaultMarginPercent / 100);

        return new GetItemPricingResponse(
            item.id,
            item.name,
            unitsPerBatch,
            materialPerUnit,
            laborPerUnit,
            depreciationPerUnit,
            packagingPerUnit,
            totalCogs,
            costConfig.defaultMarginPercent,
            suggestedPrice,
        );
    }
}
