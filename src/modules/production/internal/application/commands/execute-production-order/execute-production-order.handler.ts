import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IProductionOrderRepository } from '../../../domain/repositories/production-order.repo.interface';
import { IBulkStockRepository } from '../../../domain/repositories/bulk-stock.repo.interface';
import { ProductionOrderId } from '../../../domain/value-objects/production-order-id.vo';
import { BulkStock } from '../../../domain/entities/bulk-stock.entity';
import {
    ProductionOrderNotFoundApplicationError,
    ActiveRecipeNotFoundApplicationError,
} from '../../errors/production.errors';
import { InventoryGateway } from '../../../infrastructure/gateways/inventory.gateway';
import { RecipeGateway } from '../../../infrastructure/gateways/recipe.gateway';
import { DeductItemDto } from 'src/modules/inventory/shared/contracts/deduct-item.dto';
import { ExecuteProductionOrderCommand } from './execute-production-order.command';

@Injectable()
export class ExecuteProductionOrderHandler extends CommandHandlerBase<ExecuteProductionOrderCommand, void> {
    constructor(
        @Inject(IProductionOrderRepository)
        private readonly repo: IProductionOrderRepository,
        @Inject(IBulkStockRepository)
        private readonly bulkStockRepo: IBulkStockRepository,
        private readonly inventoryGateway: InventoryGateway,
        private readonly recipeGateway: RecipeGateway,
    ) {
        super();
    }

    async handle(command: ExecuteProductionOrderCommand): Promise<void> {
        const id = ProductionOrderId.create(command.orderId);
        const order = await this.repo.getById(id);
        if (!order) throw new ProductionOrderNotFoundApplicationError(command.orderId);

        // Get active recipe for this product
        const recipe = await this.recipeGateway.getActiveRecipeByProduct(order.getProductId());
        if (!recipe) throw new ActiveRecipeNotFoundApplicationError(order.getProductId());

        // Deduct ingredients (non-add-on only)
        for (const ingredient of recipe.ingredients) {
            if (ingredient.isAddOn) continue;

            const qty = order.getBatchWeightGm()
                * (ingredient.percentage / 100)
                * (1 + order.getWastePercent() / 100);

            await this.inventoryGateway.deductItem(
                new DeductItemDto(
                    ingredient.itemId,
                    qty,
                    'SYSTEM',
                    `Production order ${order.getId().value}`,
                ),
            );
        }

        // Execute the order
        order.execute(command.performedBy);

        // Upsert BulkStock
        let bulkStock = await this.bulkStockRepo.getByProductId(order.getProductId());
        if (bulkStock) {
            bulkStock.addBulk(order.getBatchWeightGm());
        } else {
            bulkStock = BulkStock.create(
                crypto.randomUUID(),
                order.getProductId(),
                order.getBatchWeightGm(),
            );
        }

        await this.repo.save(order);
        await this.bulkStockRepo.save(bulkStock);

        this.logger.info('Production order executed', {
            orderId: command.orderId,
            bulkAdded: order.getBatchWeightGm(),
        });
    }
}
