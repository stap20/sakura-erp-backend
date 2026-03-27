import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { ISalesOrderRepository } from '../../../domain/repositories/sales-order.repo.interface';
import { SalesOrderId } from '../../../domain/value-objects/sales-order-id.vo';
import { SalesOrderNotFoundApplicationError } from '../../errors/sales-order.errors';
import { RemoveDiscountCommand } from './remove-discount.command';

@Injectable()
export class RemoveDiscountHandler extends CommandHandlerBase<RemoveDiscountCommand, void> {
    constructor(
        @Inject(ISalesOrderRepository)
        private readonly repo: ISalesOrderRepository,
    ) {
        super();
    }

    async handle(command: RemoveDiscountCommand): Promise<void> {
        const id = SalesOrderId.create(command.orderId);
        const order = await this.repo.getById(id);
        if (!order) throw new SalesOrderNotFoundApplicationError(command.orderId);

        order.removeDiscount();
        await this.repo.save(order);
        this.logger.info('Discount removed from order', { orderId: command.orderId });
    }
}
