import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IFillingOrderRepository } from '../../../domain/repositories/filling-order.repo.interface';
import { FillingOrderId } from '../../../domain/value-objects/filling-order-id.vo';
import { FillingOrderNotFoundApplicationError } from '../../errors/production.errors';
import { CancelFillingOrderCommand } from './cancel-filling-order.command';

@Injectable()
export class CancelFillingOrderHandler extends CommandHandlerBase<CancelFillingOrderCommand, void> {
    constructor(
        @Inject(IFillingOrderRepository)
        private readonly repo: IFillingOrderRepository,
    ) {
        super();
    }

    async handle(command: CancelFillingOrderCommand): Promise<void> {
        const id = FillingOrderId.create(command.orderId);
        const order = await this.repo.getById(id);
        if (!order) throw new FillingOrderNotFoundApplicationError(command.orderId);

        order.cancel();
        await this.repo.save(order);

        this.logger.info('Filling order cancelled', { orderId: command.orderId });
    }
}
