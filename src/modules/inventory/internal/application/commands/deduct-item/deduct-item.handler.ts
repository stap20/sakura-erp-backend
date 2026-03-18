import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IItemRepository } from '../../../domain/repositories/item.repo.interface';
import { ItemId } from '../../../domain/value-objects/item-id.vo';
import { Quantity } from '../../../domain/value-objects/quantity.vo';
import { ItemNotFoundError } from '../../../domain/errors/item.error';
import { DeductItemCommand } from './deduct-item.command';
import { DeductItemResponse } from './deduct-item.response';

@Injectable()
export class DeductItemHandler extends CommandHandlerBase<
    DeductItemCommand,
    DeductItemResponse
> {
    constructor(
        @Inject(IItemRepository)
        private readonly itemRepository: IItemRepository,
    ) {
        super();
    }

    async handle(command: DeductItemCommand): Promise<DeductItemResponse> {
        const idVO = ItemId.create(command.id);
        const item = await this.itemRepository.getById(idVO);

        if (!item) {
            throw new ItemNotFoundError(command.id);
        }

        const quantity = Quantity.create(command.quantity);
        item.deduct(quantity);

        const transactionId = crypto.randomUUID();

        await this.itemRepository.saveWithTransaction(item, {
            id: transactionId,
            type: 'DEDUCT',
            quantity: quantity.value,
            vendorId: null,
            unitPrice: null,
            performedBy: command.performedBy,
            notes: command.notes ?? null,
        });

        this.logger.info('Item deducted', {
            itemId: item.getId().value,
            quantity: quantity.value,
            newStock: item.getCurrentStock(),
        });

        return new DeductItemResponse(
            item.getId().value,
            item.getCurrentStock(),
            transactionId,
            quantity.value,
        );
    }
}
