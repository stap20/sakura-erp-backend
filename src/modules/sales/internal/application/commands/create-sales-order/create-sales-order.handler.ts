import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { ISalesOrderRepository } from '../../../domain/repositories/sales-order.repo.interface';
import { SalesOrder } from '../../../domain/aggregates/sales-order.aggregate';
import { CreateSalesOrderCommand } from './create-sales-order.command';

@Injectable()
export class CreateSalesOrderHandler extends CommandHandlerBase<CreateSalesOrderCommand, string> {
    constructor(
        @Inject(ISalesOrderRepository)
        private readonly repo: ISalesOrderRepository,
    ) {
        super();
    }

    async handle(command: CreateSalesOrderCommand): Promise<string> {
        const id = crypto.randomUUID();
        const order = SalesOrder.create({
            id,
            customerName: command.customerName,
            customerPhone: command.customerPhone,
            customerContact: command.customerContact,
            notes: command.notes,
        });

        await this.repo.save(order);
        this.logger.info('Sales order created', { orderId: id });
        return id;
    }
}
