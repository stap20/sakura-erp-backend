import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IPurchaseOrderRepository } from '../../../domain/repositories/purchase-order.repo.interface';
import { PurchaseOrderId } from '../../../domain/value-objects/purchase-order-id.vo';
import { PurchaseOrderNotFoundError } from '../../../domain/errors/purchase.error';
import { RemoveLineCommand } from './remove-line.command';

@Injectable()
export class RemoveLineHandler extends CommandHandlerBase<RemoveLineCommand, void> {
    constructor(
        @Inject(IPurchaseOrderRepository)
        private readonly repo: IPurchaseOrderRepository,
    ) {
        super();
    }

    async handle(command: RemoveLineCommand): Promise<void> {
        const id = PurchaseOrderId.create(command.orderId);
        const order = await this.repo.getById(id);
        if (!order) throw new PurchaseOrderNotFoundError(command.orderId);

        order.removeLine(command.lineId);
        await this.repo.save(order);
    }
}
