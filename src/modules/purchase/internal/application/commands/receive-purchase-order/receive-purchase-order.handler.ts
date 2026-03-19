import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IPurchaseOrderRepository } from '../../../domain/repositories/purchase-order.repo.interface';
import { PurchaseOrderId } from '../../../domain/value-objects/purchase-order-id.vo';
import { PurchaseOrderNotFoundError } from '../../../domain/errors/purchase.error';
import { RestockItemHandler } from 'src/modules/inventory/internal/application/commands/restock-item/restock-item.handler';
import { RestockItemCommand } from 'src/modules/inventory/internal/application/commands/restock-item/restock-item.command';
import { ReceivePurchaseOrderCommand } from './receive-purchase-order.command';

@Injectable()
export class ReceivePurchaseOrderHandler extends CommandHandlerBase<ReceivePurchaseOrderCommand, void> {
    constructor(
        @Inject(IPurchaseOrderRepository)
        private readonly repo: IPurchaseOrderRepository,
        private readonly restockItemHandler: RestockItemHandler,
    ) {
        super();
    }

    async handle(command: ReceivePurchaseOrderCommand): Promise<void> {
        const id = PurchaseOrderId.create(command.orderId);
        const order = await this.repo.getById(id);
        if (!order) throw new PurchaseOrderNotFoundError(command.orderId);

        order.receive();

        for (const line of order.getLines()) {
            await this.restockItemHandler.handle(
                new RestockItemCommand(
                    line.itemId,
                    line.quantity,
                    'PURCHASE_MODULE',
                    order.getVendorId(),
                    line.unitPrice,
                    `PO ${order.getId().value}`,
                ),
            );
        }

        await this.repo.save(order);

        this.logger.info('Purchase order received and inventory restocked', {
            orderId: command.orderId,
            linesCount: order.getLines().length,
        });
    }
}
