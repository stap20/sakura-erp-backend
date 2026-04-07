import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IFillingOrderRepository } from '../../../domain/repositories/filling-order.repo.interface';
import { IBulkStockRepository } from '../../../domain/repositories/bulk-stock.repo.interface';
import { FillingOrderId } from '../../../domain/value-objects/filling-order-id.vo';
import {
    FillingOrderNotFoundApplicationError,
    BulkStockNotFoundApplicationError,
} from '../../errors/production.errors';
import { InventoryGateway } from '../../../infrastructure/gateways/inventory.gateway';
import { RecipeGateway } from '../../../infrastructure/gateways/recipe.gateway';
import { RestockItemDto } from 'src/modules/inventory/shared/contracts/restock-item.dto';
import { DeductItemDto } from 'src/modules/inventory/shared/contracts/deduct-item.dto';
import { ExecuteFillingOrderCommand } from './execute-filling-order.command';

@Injectable()
export class ExecuteFillingOrderHandler extends CommandHandlerBase<ExecuteFillingOrderCommand, void> {
    constructor(
        @Inject(IFillingOrderRepository)
        private readonly repo: IFillingOrderRepository,
        @Inject(IBulkStockRepository)
        private readonly bulkStockRepo: IBulkStockRepository,
        private readonly inventoryGateway: InventoryGateway,
        private readonly recipeGateway: RecipeGateway,
    ) {
        super();
    }

    async handle(command: ExecuteFillingOrderCommand): Promise<void> {
        const id = FillingOrderId.create(command.orderId);
        const order = await this.repo.getById(id);
        if (!order) throw new FillingOrderNotFoundApplicationError(command.orderId);

        // Load BulkStock and deduct (throws InsufficientBulkStockError if not enough)
        const bulkStock = await this.bulkStockRepo.getByProductId(order.getProductId());
        if (!bulkStock) throw new BulkStockNotFoundApplicationError(order.getProductId());
        bulkStock.deductBulk(order.getBulkUsedGm());

        // Fetch active recipe once — needed for FILLING add-on deduction
        const recipe = await this.recipeGateway.getActiveRecipeByProduct(order.getProductId());
        const fillingAddOns = recipe
            ? recipe.ingredients.filter((i) => i.isAddOn && i.resolutionPhase === 'FILLING')
            : [];

        // Per line: restock variant + deduct packaging + deduct FILLING add-ons
        for (const line of order.getLines()) {
            // Restock the variant item
            await this.inventoryGateway.restockItem(
                new RestockItemDto(
                    line.getVariantItemId(),
                    line.getQuantityUnits(),
                    'SYSTEM',
                    null,
                    null,
                    `Filling order ${order.getId().value}`,
                ),
            );

            // Get item to find packaging + addon components
            const item = await this.inventoryGateway.getItem(line.getVariantItemId());
            if (item && item.packagingComponents) {
                for (const component of item.packagingComponents) {
                    const totalQty = component.qtyPerUnit * line.getQuantityUnits();
                    await this.inventoryGateway.deductItem(
                        new DeductItemDto(
                            component.packagingItemId,
                            totalQty,
                            'SYSTEM',
                            `Filling order ${order.getId().value}`,
                        ),
                    );
                }
            }

            // Deduct FILLING add-ons (e.g. colorant applied per-variant during filling)
            if (item && item.addonComponents && fillingAddOns.length > 0) {
                for (const addon of fillingAddOns) {
                    const addonComponent = item.addonComponents
                        .find((a) => a.ingredientCategory === addon.ingredientCategory);
                    if (!addonComponent) continue;

                    const qty = (addon.percentage / 100)
                        * line.getUnitWeightGm()
                        * line.getQuantityUnits();

                    await this.inventoryGateway.deductItem(
                        new DeductItemDto(
                            addonComponent.addonItemId,
                            qty,
                            'SYSTEM',
                            `Filling order ${order.getId().value}`,
                        ),
                    );
                }
            }
        }

        // Execute the order
        order.execute(command.performedBy);

        await this.repo.save(order);
        await this.bulkStockRepo.save(bulkStock);

        this.logger.info('Filling order executed', {
            orderId: command.orderId,
            bulkDeducted: order.getBulkUsedGm(),
        });
    }
}
