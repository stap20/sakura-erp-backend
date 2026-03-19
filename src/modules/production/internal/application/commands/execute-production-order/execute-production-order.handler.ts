import { Injectable, Inject } from '@nestjs/common';
import { ExecuteProductionOrderCommand } from './execute-production-order.command';
import { IProductionOrderRepository } from '../../../domain/repositories/production-order.repo.interface';
import { ProductionOrderId } from '../../../domain/value-objects/production-order-id.vo';
import { InventoryGateway } from '../../../infrastructure/gateways/inventory.gateway';
import { ProductionOrderNotFoundApplicationError } from '../../errors/production.errors';
import { DeductItemDto } from 'src/modules/inventory/shared/contracts/deduct-item.dto';
import { RestockItemDto } from 'src/modules/inventory/shared/contracts/restock-item.dto';
import { ILogger } from 'src/shared/domain/contracts/logger.interface';

@Injectable()
export class ExecuteProductionOrderHandler {
    constructor(
        @Inject(IProductionOrderRepository)
        private readonly repo: IProductionOrderRepository,
        private readonly inventoryGateway: InventoryGateway,
        @Inject(ILogger) private readonly logger: ILogger,
    ) {}

    async handle(cmd: ExecuteProductionOrderCommand): Promise<void> {
        const order = await this.repo.getById(ProductionOrderId.create(cmd.orderId));
        if (!order) throw new ProductionOrderNotFoundApplicationError(cmd.orderId);

        // Fetch lastUnitPrice for each line that has an itemId
        const linePrices = new Map<string, number | null>();
        for (const line of order.getLines()) {
            if (line.itemId) {
                const item = await this.inventoryGateway.getItem(line.itemId);
                linePrices.set(line.id, item?.lastUnitPrice ?? null);
            } else {
                linePrices.set(line.id, null);
            }
        }

        // Execute: snapshot prices + compute costs
        order.execute(linePrices);

        // Deduct every ingredient with an itemId from inventory
        for (const line of order.getLines()) {
            if (line.itemId) {
                await this.inventoryGateway.deductItem(
                    new DeductItemDto(
                        line.itemId,
                        line.adjustedQuantityGm / 1000, // convert grams → kg (measureUnit is typically KG)
                        cmd.performedBy,
                        `Production order ${cmd.orderId}`,
                    ),
                );
            }
        }

        // Restock the final product
        await this.inventoryGateway.restockItem(
            new RestockItemDto(
                order.getProductId(),
                order.getQuantityUnits(),
                cmd.performedBy,
                undefined,
                undefined,
                `Production order ${cmd.orderId}`,
            ),
        );

        await this.repo.save(order);
        this.logger.info(`ProductionOrder executed: ${cmd.orderId}`);
    }
}
