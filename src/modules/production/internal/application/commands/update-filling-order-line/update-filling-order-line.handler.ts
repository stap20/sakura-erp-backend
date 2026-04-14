import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IFillingOrderRepository } from '../../../domain/repositories/filling-order.repo.interface';
import { FillingOrderId } from '../../../domain/value-objects/filling-order-id.vo';
import { FillingOrderNotFoundApplicationError } from '../../errors/production.errors';
import { UpdateFillingOrderLineCommand } from './update-filling-order-line.command';

@Injectable()
export class UpdateFillingOrderLineHandler extends CommandHandlerBase<UpdateFillingOrderLineCommand, void> {
    constructor(
        @Inject(IFillingOrderRepository)
        private readonly repo: IFillingOrderRepository,
    ) {
        super();
    }

    async handle(command: UpdateFillingOrderLineCommand): Promise<void> {
        const order = await this.repo.getById(FillingOrderId.create(command.orderId));
        if (!order) throw new FillingOrderNotFoundApplicationError(command.orderId);

        order.updateLine(command.lineId, command.quantityUnits);
        await this.repo.save(order);

        this.logger.info('Filling order line updated', {
            orderId: command.orderId,
            lineId: command.lineId,
        });
    }
}
