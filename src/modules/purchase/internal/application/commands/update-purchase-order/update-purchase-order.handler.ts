import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IPurchaseOrderRepository } from '../../../domain/repositories/purchase-order.repo.interface';
import { PurchaseOrderId } from '../../../domain/value-objects/purchase-order-id.vo';
import { PurchaseOrderNotFoundError } from '../../../domain/errors/purchase.error';
import { UpdatePurchaseOrderCommand } from './update-purchase-order.command';

@Injectable()
export class UpdatePurchaseOrderHandler extends CommandHandlerBase<UpdatePurchaseOrderCommand, void> {
    constructor(
        @Inject(IPurchaseOrderRepository)
        private readonly repo: IPurchaseOrderRepository,
    ) {
        super();
    }

    async handle(command: UpdatePurchaseOrderCommand): Promise<void> {
        const id = PurchaseOrderId.create(command.orderId);
        const order = await this.repo.getById(id);
        if (!order) throw new PurchaseOrderNotFoundError(command.orderId);

        if (command.notes !== undefined) {
            order.updateNotes(command.notes);
        }

        await this.repo.save(order);
    }
}
