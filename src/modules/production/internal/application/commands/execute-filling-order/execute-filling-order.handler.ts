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

        // Per line: restock variant + deduct packaging components
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

            // Get item to find packaging components
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
