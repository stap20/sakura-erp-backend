import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IPurchaseOrderRepository } from '../../../domain/repositories/purchase-order.repo.interface';
import { PurchaseOrderId } from '../../../domain/value-objects/purchase-order-id.vo';
import { PurchaseOrderNotFoundError } from '../../../domain/errors/purchase.error';
import { ConfirmPurchaseOrderCommand } from './confirm-purchase-order.command';

@Injectable()
export class ConfirmPurchaseOrderHandler extends CommandHandlerBase<ConfirmPurchaseOrderCommand, void> {
    constructor(
        @Inject(IPurchaseOrderRepository)
        private readonly repo: IPurchaseOrderRepository,
    ) {
        super();
    }

    async handle(command: ConfirmPurchaseOrderCommand): Promise<void> {
        const id = PurchaseOrderId.create(command.orderId);
        const order = await this.repo.getById(id);
        if (!order) throw new PurchaseOrderNotFoundError(command.orderId);

        order.confirm();
        await this.repo.save(order);

        this.logger.info('Purchase order confirmed', { orderId: command.orderId });
    }
}
