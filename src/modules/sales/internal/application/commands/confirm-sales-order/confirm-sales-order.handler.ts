import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { ISalesOrderRepository } from '../../../domain/repositories/sales-order.repo.interface';
import { SalesOrderId } from '../../../domain/value-objects/sales-order-id.vo';
import { SalesOrderNotFoundApplicationError } from '../../errors/sales-order.errors';
import { ConfirmSalesOrderCommand } from './confirm-sales-order.command';

@Injectable()
export class ConfirmSalesOrderHandler extends CommandHandlerBase<ConfirmSalesOrderCommand, void> {
    constructor(
        @Inject(ISalesOrderRepository)
        private readonly repo: ISalesOrderRepository,
    ) {
        super();
    }

    async handle(command: ConfirmSalesOrderCommand): Promise<void> {
        const id = SalesOrderId.create(command.orderId);
        const order = await this.repo.getById(id);
        if (!order) throw new SalesOrderNotFoundApplicationError(command.orderId);

        order.confirm();
        await this.repo.save(order);
        this.logger.info('Sales order confirmed', { orderId: command.orderId });
    }
}
