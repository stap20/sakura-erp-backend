import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IPurchaseOrderRepository } from '../../../domain/repositories/purchase-order.repo.interface';
import { PurchaseOrderId } from '../../../domain/value-objects/purchase-order-id.vo';
import { PurchaseOrderNotFoundApplicationError } from '../../errors/purchase-order.errors';
import { UpdateLineCommand } from './update-line.command';

@Injectable()
export class UpdateLineHandler extends CommandHandlerBase<UpdateLineCommand, void> {
    constructor(
        @Inject(IPurchaseOrderRepository)
        private readonly repo: IPurchaseOrderRepository,
    ) {
        super();
    }

    async handle(command: UpdateLineCommand): Promise<void> {
        const id = PurchaseOrderId.create(command.orderId);
        const order = await this.repo.getById(id);
        if (!order) throw new PurchaseOrderNotFoundApplicationError(command.orderId);

        order.updateLine(command.lineId, command.quantity, command.unitPrice);
        await this.repo.save(order);
    }
}
