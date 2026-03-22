import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { ISalesOrderRepository } from '../../../domain/repositories/sales-order.repo.interface';
import { SalesOrderId } from '../../../domain/value-objects/sales-order-id.vo';
import { SalesOrderNotFoundApplicationError } from '../../errors/sales-order.errors';
import { UpdateLineCommand } from './update-line.command';

@Injectable()
export class UpdateLineHandler extends CommandHandlerBase<UpdateLineCommand, void> {
    constructor(
        @Inject(ISalesOrderRepository)
        private readonly repo: ISalesOrderRepository,
    ) {
        super();
    }

    async handle(command: UpdateLineCommand): Promise<void> {
        const id = SalesOrderId.create(command.orderId);
        const order = await this.repo.getById(id);
        if (!order) throw new SalesOrderNotFoundApplicationError(command.orderId);

        order.updateLine(command.lineId, command.quantity, command.unitPrice, command.isGift);
        await this.repo.save(order);
    }
}
