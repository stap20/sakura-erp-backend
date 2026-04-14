import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IFillingOrderRepository } from '../../../domain/repositories/filling-order.repo.interface';
import { FillingOrderId } from '../../../domain/value-objects/filling-order-id.vo';
import { FillingOrderNotFoundApplicationError } from '../../errors/production.errors';
import { UpdateFillingOrderCommand } from './update-filling-order.command';

@Injectable()
export class UpdateFillingOrderHandler extends CommandHandlerBase<UpdateFillingOrderCommand, void> {
    constructor(
        @Inject(IFillingOrderRepository)
        private readonly repo: IFillingOrderRepository,
    ) {
        super();
    }

    async handle(command: UpdateFillingOrderCommand): Promise<void> {
        const id = FillingOrderId.create(command.orderId);
        const order = await this.repo.getById(id);
        if (!order) throw new FillingOrderNotFoundApplicationError(command.orderId);

        order.update({ notes: command.notes });

        await this.repo.save(order);

        this.logger.info('Filling order updated', { orderId: command.orderId });
    }
}
