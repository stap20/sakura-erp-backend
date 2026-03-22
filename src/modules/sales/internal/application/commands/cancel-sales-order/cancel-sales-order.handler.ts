import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { ISalesOrderRepository } from '../../../domain/repositories/sales-order.repo.interface';
import { SalesOrderId } from '../../../domain/value-objects/sales-order-id.vo';
import { SalesOrderNotFoundApplicationError } from '../../errors/sales-order.errors';
import { CancelSalesOrderCommand } from './cancel-sales-order.command';

@Injectable()
export class CancelSalesOrderHandler extends CommandHandlerBase<CancelSalesOrderCommand, void> {
    constructor(
        @Inject(ISalesOrderRepository)
        private readonly repo: ISalesOrderRepository,
    ) {
        super();
    }

    async handle(command: CancelSalesOrderCommand): Promise<void> {
        const id = SalesOrderId.create(command.orderId);
        const order = await this.repo.getById(id);
        if (!order) throw new SalesOrderNotFoundApplicationError(command.orderId);

        order.cancel();
        await this.repo.save(order);
        this.logger.info('Sales order cancelled', { orderId: command.orderId });
    }
}
