import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IPurchaseOrderRepository } from '../../../domain/repositories/purchase-order.repo.interface';
import { PurchaseOrderId } from '../../../domain/value-objects/purchase-order-id.vo';
import { PurchaseOrderNotFoundError } from '../../../domain/errors/purchase.error';
import { CancelPurchaseOrderCommand } from './cancel-purchase-order.command';

@Injectable()
export class CancelPurchaseOrderHandler extends CommandHandlerBase<CancelPurchaseOrderCommand, void> {
    constructor(
        @Inject(IPurchaseOrderRepository)
        private readonly repo: IPurchaseOrderRepository,
    ) {
        super();
    }

    async handle(command: CancelPurchaseOrderCommand): Promise<void> {
        const id = PurchaseOrderId.create(command.orderId);
        const order = await this.repo.getById(id);
        if (!order) throw new PurchaseOrderNotFoundError(command.orderId);

        order.cancel();
        await this.repo.save(order);

        this.logger.info('Purchase order cancelled', { orderId: command.orderId });
    }
}
