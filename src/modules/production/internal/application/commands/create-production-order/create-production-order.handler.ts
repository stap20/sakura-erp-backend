import { Injectable, Inject } from '@nestjs/common';
import { CreateProductionOrderCommand } from './create-production-order.command';
import { CreateProductionOrderResponse } from './create-production-order.response';
import { IProductionOrderRepository } from '../../../domain/repositories/production-order.repo.interface';
import { ProductionOrder } from '../../../domain/aggregates/production-order.aggregate';
import { InventoryGateway } from '../../../infrastructure/gateways/inventory.gateway';
import { RecipeGateway } from '../../../infrastructure/gateways/recipe.gateway';
import {
    ProductItemNotFoundApplicationError,
    ProductItemNotFinalProductApplicationError,
    ProductItemMissingUnitWeightApplicationError,
    ActiveRecipeNotFoundApplicationError,
} from '../../errors/production.errors';
import { IIdGenerator } from 'src/shared/domain/contracts/id-generator.interface';
import { ILogger } from 'src/shared/domain/contracts/logger.interface';

@Injectable()
export class CreateProductionOrderHandler {
    constructor(
        @Inject(IProductionOrderRepository)
        private readonly repo: IProductionOrderRepository,
        private readonly inventoryGateway: InventoryGateway,
        private readonly recipeGateway: RecipeGateway,
        @Inject(IIdGenerator) private readonly idGenerator: IIdGenerator,
        @Inject(ILogger) private readonly logger: ILogger,
    ) {}

    async handle(cmd: CreateProductionOrderCommand): Promise<CreateProductionOrderResponse> {
        // 1. Validate the product item
        const product = await this.inventoryGateway.getItem(cmd.productId);
        if (!product) throw new ProductItemNotFoundApplicationError(cmd.productId);
        if (product.type !== 'FINAL_PRODUCT')
            throw new ProductItemNotFinalProductApplicationError(cmd.productId);
        if (!product.unitWeightGm)
            throw new ProductItemMissingUnitWeightApplicationError(cmd.productId);

        // 2. Find ACTIVE recipe
        const recipe = await this.recipeGateway.getActiveRecipeByProduct(cmd.productId);
        if (!recipe) throw new ActiveRecipeNotFoundApplicationError(cmd.productId);

        // 3. Build lines from recipe ingredients
        const totalBatchWeightGm = cmd.quantityUnits * product.unitWeightGm;
        const lines = recipe.ingredients.map((ingredient) => {
            const adjustedQuantityGm =
                (ingredient.quantity / 100) *
                totalBatchWeightGm *
                (1 + cmd.wastePercent / 100);

            // For add-ons, use the resolved itemId from addonItemIds if provided
            const resolvedItemId = ingredient.isAddOn
                ? (cmd.addonItemIds[ingredient.id] ?? ingredient.itemId)
                : ingredient.itemId;

            return {
                id: this.idGenerator.generate(),
                itemId: resolvedItemId,
                itemName: ingredient.itemId ?? `Add-on (${ingredient.ingredientCategory})`,
                isAddOn: ingredient.isAddOn,
                ingredientCategory: ingredient.ingredientCategory,
                recipePercent: ingredient.quantity,
                adjustedQuantityGm,
            };
        });

        const order = ProductionOrder.create({
            id: cmd.id,
            productId: cmd.productId,
            productName: product.name,
            unitWeightGm: product.unitWeightGm,
            recipeVersionId: recipe.id,
            recipeVersionNumber: recipe.versionNumber,
            quantityUnits: cmd.quantityUnits,
            wastePercent: cmd.wastePercent,
            notes: cmd.notes,
            lines,
        });

        await this.repo.save(order);
        this.logger.info(`ProductionOrder created: ${order.getId().value}`);

        return new CreateProductionOrderResponse(order.getId().value);
    }
}
