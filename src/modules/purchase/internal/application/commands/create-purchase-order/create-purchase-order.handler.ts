import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IPurchaseOrderRepository } from '../../../domain/repositories/purchase-order.repo.interface';
import { PurchaseOrder } from '../../../domain/aggregates/purchase-order.aggregate';
import { CreatePurchaseOrderCommand } from './create-purchase-order.command';

@Injectable()
export class CreatePurchaseOrderHandler extends CommandHandlerBase<
    CreatePurchaseOrderCommand,
    string
> {
    constructor(
        @Inject(IPurchaseOrderRepository)
        private readonly repo: IPurchaseOrderRepository,
    ) {
        super();
    }

    async handle(command: CreatePurchaseOrderCommand): Promise<string> {
        const order = PurchaseOrder.create({
            id: crypto.randomUUID(),
            vendorId: command.vendorId,
            vendorName: command.vendorName,
            vendorPhone: command.vendorPhone,
            vendorContact: command.vendorContact,
            notes: command.notes,
            expectedDeliveryDate: command.expectedDeliveryDate,
        });

        await this.repo.save(order);

        this.logger.info('Purchase order created', { id: order.getId().value });

        return order.getId().value;
    }
}
