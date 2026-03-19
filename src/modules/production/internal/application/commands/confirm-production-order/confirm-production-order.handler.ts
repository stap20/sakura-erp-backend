import { Injectable, Inject } from '@nestjs/common';
import { ConfirmProductionOrderCommand } from './confirm-production-order.command';
import { IProductionOrderRepository } from '../../../domain/repositories/production-order.repo.interface';
import { ProductionOrderId } from '../../../domain/value-objects/production-order-id.vo';
import { ProductionOrderNotFoundApplicationError } from '../../errors/production.errors';
import { ILogger } from 'src/shared/domain/contracts/logger.interface';

@Injectable()
export class ConfirmProductionOrderHandler {
    constructor(
        @Inject(IProductionOrderRepository)
        private readonly repo: IProductionOrderRepository,
        @Inject(ILogger) private readonly logger: ILogger,
    ) {}

    async handle(cmd: ConfirmProductionOrderCommand): Promise<void> {
        const order = await this.repo.getById(ProductionOrderId.create(cmd.orderId));
        if (!order) throw new ProductionOrderNotFoundApplicationError(cmd.orderId);

        order.confirm();
        await this.repo.save(order);
        this.logger.info(`ProductionOrder confirmed: ${cmd.orderId}`);
    }
}
