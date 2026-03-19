import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IFillingOrderRepository } from '../../../domain/repositories/filling-order.repo.interface';
import { FillingOrderId } from '../../../domain/value-objects/filling-order-id.vo';
import { FillingOrderNotFoundApplicationError } from '../../errors/production.errors';
import { ConfirmFillingOrderCommand } from './confirm-filling-order.command';

@Injectable()
export class ConfirmFillingOrderHandler extends CommandHandlerBase<ConfirmFillingOrderCommand, void> {
    constructor(
        @Inject(IFillingOrderRepository)
        private readonly repo: IFillingOrderRepository,
    ) {
        super();
    }

    async handle(command: ConfirmFillingOrderCommand): Promise<void> {
        const id = FillingOrderId.create(command.orderId);
        const order = await this.repo.getById(id);
        if (!order) throw new FillingOrderNotFoundApplicationError(command.orderId);

        order.confirm();
        await this.repo.save(order);

        this.logger.info('Filling order confirmed', { orderId: command.orderId });
    }
}
