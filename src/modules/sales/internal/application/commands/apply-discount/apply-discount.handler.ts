import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { ISalesOrderRepository } from '../../../domain/repositories/sales-order.repo.interface';
import { IDiscountCodeRepository } from '../../../domain/repositories/discount-code.repo.interface';
import { SalesOrderId } from '../../../domain/value-objects/sales-order-id.vo';
import {
    SalesOrderNotFoundApplicationError,
    DiscountCodeNotFoundApplicationError,
} from '../../errors/sales-order.errors';
import { ApplyDiscountCommand } from './apply-discount.command';

@Injectable()
export class ApplyDiscountHandler extends CommandHandlerBase<ApplyDiscountCommand, void> {
    constructor(
        @Inject(ISalesOrderRepository)
        private readonly orderRepo: ISalesOrderRepository,
        @Inject(IDiscountCodeRepository)
        private readonly discountRepo: IDiscountCodeRepository,
    ) {
        super();
    }

    async handle(command: ApplyDiscountCommand): Promise<void> {
        const id = SalesOrderId.create(command.orderId);
        const order = await this.orderRepo.getById(id);
        if (!order) throw new SalesOrderNotFoundApplicationError(command.orderId);

        const discountCode = await this.discountRepo.getByCode(command.code);
        if (!discountCode) throw new DiscountCodeNotFoundApplicationError(command.code);

        // Compute discount amount from non-gift line subtotal
        const subtotal = order.getLineSubtotal();
        let amount: number;
        if (discountCode.type === 'PERCENT') {
            amount = subtotal * (discountCode.value / 100);
        } else {
            amount = Math.min(discountCode.value, subtotal);
        }

        // Domain validates isActive, expiresAt, maxUses — throws DomainError → 409
        order.applyDiscount(command.code, amount, {
            isActive: discountCode.isActive,
            expiresAt: discountCode.expiresAt,
            maxUses: discountCode.maxUses,
            usedCount: discountCode.usedCount,
        });

        await this.orderRepo.save(order);
        this.logger.info('Discount applied to order', { orderId: command.orderId, code: command.code });
    }
}
