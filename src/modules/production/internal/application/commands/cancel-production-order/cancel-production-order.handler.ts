import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IProductionOrderRepository } from '../../../domain/repositories/production-order.repo.interface';
import { ProductionOrderId } from '../../../domain/value-objects/production-order-id.vo';
import { ProductionOrderNotFoundApplicationError } from '../../errors/production.errors';
import { CancelProductionOrderCommand } from './cancel-production-order.command';

@Injectable()
export class CancelProductionOrderHandler extends CommandHandlerBase<CancelProductionOrderCommand, void> {
    constructor(
        @Inject(IProductionOrderRepository)
        private readonly repo: IProductionOrderRepository,
    ) {
        super();
    }

    async handle(command: CancelProductionOrderCommand): Promise<void> {
        const id = ProductionOrderId.create(command.orderId);
        const order = await this.repo.getById(id);
        if (!order) throw new ProductionOrderNotFoundApplicationError(command.orderId);

        order.cancel();
        await this.repo.save(order);

        this.logger.info('Production order cancelled', { orderId: command.orderId });
    }
}
