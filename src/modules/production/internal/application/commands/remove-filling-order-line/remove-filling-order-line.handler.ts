import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IFillingOrderRepository } from '../../../domain/repositories/filling-order.repo.interface';
import { FillingOrderId } from '../../../domain/value-objects/filling-order-id.vo';
import { FillingOrderNotFoundApplicationError } from '../../errors/production.errors';
import { RemoveFillingOrderLineCommand } from './remove-filling-order-line.command';

@Injectable()
export class RemoveFillingOrderLineHandler extends CommandHandlerBase<RemoveFillingOrderLineCommand, void> {
    constructor(
        @Inject(IFillingOrderRepository)
        private readonly repo: IFillingOrderRepository,
    ) {
        super();
    }

    async handle(command: RemoveFillingOrderLineCommand): Promise<void> {
        const order = await this.repo.getById(FillingOrderId.create(command.orderId));
        if (!order) throw new FillingOrderNotFoundApplicationError(command.orderId);

        order.removeLine(command.lineId);
        await this.repo.save(order);

        this.logger.info('Filling order line removed', {
            orderId: command.orderId,
            lineId: command.lineId,
        });
    }
}
