import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { ISalesOrderRepository } from '../../../domain/repositories/sales-order.repo.interface';
import { SalesOrderId } from '../../../domain/value-objects/sales-order-id.vo';
import { SalesOrderNotFoundApplicationError } from '../../errors/sales-order.errors';
import { MarkAsPaidCommand } from './mark-as-paid.command';

@Injectable()
export class MarkAsPaidHandler extends CommandHandlerBase<MarkAsPaidCommand, void> {
    constructor(
        @Inject(ISalesOrderRepository)
        private readonly repo: ISalesOrderRepository,
    ) {
        super();
    }

    async handle(command: MarkAsPaidCommand): Promise<void> {
        const id = SalesOrderId.create(command.orderId);
        const order = await this.repo.getById(id);
        if (!order) throw new SalesOrderNotFoundApplicationError(command.orderId);

        order.markAsPaid(); // throws SalesOrderNotPayableError (→ 409) if not PENDING
        await this.repo.save(order);
        this.logger.info('Sales order marked as paid', { orderId: command.orderId });
    }
}
