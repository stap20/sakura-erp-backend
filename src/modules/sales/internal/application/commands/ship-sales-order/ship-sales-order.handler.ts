import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { ISalesOrderRepository } from '../../../domain/repositories/sales-order.repo.interface';
import { SalesOrderId } from '../../../domain/value-objects/sales-order-id.vo';
import { SalesOrderNotFoundApplicationError } from '../../errors/sales-order.errors';
import { InventoryGateway } from '../../../infrastructure/gateways/inventory.gateway';
import { DeductItemDto } from 'src/modules/inventory/shared/contracts/deduct-item.dto';
import { ShipSalesOrderCommand } from './ship-sales-order.command';

@Injectable()
export class ShipSalesOrderHandler extends CommandHandlerBase<ShipSalesOrderCommand, void> {
    constructor(
        @Inject(ISalesOrderRepository)
        private readonly repo: ISalesOrderRepository,
        private readonly inventoryGateway: InventoryGateway,
    ) {
        super();
    }

    async handle(command: ShipSalesOrderCommand): Promise<void> {
        const id = SalesOrderId.create(command.orderId);
        const order = await this.repo.getById(id);
        if (!order) throw new SalesOrderNotFoundApplicationError(command.orderId);

        order.ship();

        for (const line of order.getLines()) {
            await this.inventoryGateway.deductItem(
                new DeductItemDto(
                    line.itemId,
                    line.quantity,
                    'SALES_MODULE',
                    `SO ${order.getId().value}`,
                ),
            );
        }

        await this.repo.save(order);
        this.logger.info('Sales order shipped and inventory deducted', {
            orderId: command.orderId,
            linesCount: order.getLines().length,
        });
    }
}
