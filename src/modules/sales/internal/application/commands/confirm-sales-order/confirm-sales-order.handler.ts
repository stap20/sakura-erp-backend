import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { ISalesOrderRepository } from '../../../domain/repositories/sales-order.repo.interface';
import { IDiscountCodeRepository } from '../../../domain/repositories/discount-code.repo.interface';
import { SalesOrderId } from '../../../domain/value-objects/sales-order-id.vo';
import { SalesOrderNotFoundApplicationError } from '../../errors/sales-order.errors';
import { ReadSalesOrderRepository } from '../../../infrastructure/repositories/read-sales-order.repository';
import { ConfirmSalesOrderCommand } from './confirm-sales-order.command';

@Injectable()
export class ConfirmSalesOrderHandler extends CommandHandlerBase<ConfirmSalesOrderCommand, void> {
    constructor(
        @Inject(ISalesOrderRepository)
        private readonly repo: ISalesOrderRepository,
        private readonly readRepo: ReadSalesOrderRepository,
        @Inject(IDiscountCodeRepository)
        private readonly discountRepo: IDiscountCodeRepository,
    ) {
        super();
    }

    async handle(command: ConfirmSalesOrderCommand): Promise<void> {
        const id = SalesOrderId.create(command.orderId);
        const order = await this.repo.getById(id);
        if (!order) throw new SalesOrderNotFoundApplicationError(command.orderId);

        order.confirm();

        // Generate invoice number: INV-YYYYMMDD-XXXX (sequential per day)
        const todayCount = await this.readRepo.countConfirmedToday();
        const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
        const seq = String(todayCount + 1).padStart(4, '0');
        order.setInvoiceNumber(`INV-${dateStr}-${seq}`);

        await this.repo.save(order);

        // Increment usedCount on the discount code if one was applied
        const discountCode = order.getDiscountCode();
        if (discountCode) {
            const codeEntity = await this.discountRepo.getByCode(discountCode);
            if (codeEntity) {
                codeEntity.incrementUsedCount();
                await this.discountRepo.save(codeEntity);
            }
        }

        this.logger.info('Sales order confirmed', { orderId: command.orderId });
    }
}
