import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IProductionOrderRepository } from '../../../domain/repositories/production-order.repo.interface';
import { ProductionOrderId } from '../../../domain/value-objects/production-order-id.vo';
import { ProductionOrderNotFoundApplicationError } from '../../errors/production.errors';
import { ConfirmProductionOrderCommand } from './confirm-production-order.command';

@Injectable()
export class ConfirmProductionOrderHandler extends CommandHandlerBase<ConfirmProductionOrderCommand, void> {
    constructor(
        @Inject(IProductionOrderRepository)
        private readonly repo: IProductionOrderRepository,
    ) {
        super();
    }

    async handle(command: ConfirmProductionOrderCommand): Promise<void> {
        const id = ProductionOrderId.create(command.orderId);
        const order = await this.repo.getById(id);
        if (!order) throw new ProductionOrderNotFoundApplicationError(command.orderId);

        order.confirm();
        await this.repo.save(order);

        this.logger.info('Production order confirmed', { orderId: command.orderId });
    }
}
