import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IItemRepository } from '../../../domain/repositories/item.repo.interface';
import { ItemId } from '../../../domain/value-objects/item-id.vo';
import { Quantity } from '../../../domain/value-objects/quantity.vo';
import { ItemNotFoundApplicationError } from '../../errors/item.errors';
import { RestockItemCommand } from './restock-item.command';
import { RestockItemResponse } from './restock-item.response';

@Injectable()
export class RestockItemHandler extends CommandHandlerBase<
    RestockItemCommand,
    RestockItemResponse
> {
    constructor(
        @Inject(IItemRepository)
        private readonly itemRepository: IItemRepository,
    ) {
        super();
    }

    async handle(command: RestockItemCommand): Promise<RestockItemResponse> {
        const idVO = ItemId.create(command.id);
        const item = await this.itemRepository.getById(idVO);

        if (!item) {
            throw new ItemNotFoundApplicationError(command.id);
        }

        const quantity = Quantity.create(command.quantity);

        // Update WAUP before restocking (uses pre-restock stock)
        if (command.unitPrice != null) {
            const oldStock = item.getCurrentStock();
            const oldWAUP = item.getWeightedAverageUnitPrice();
            const newWAUP =
                oldWAUP != null && oldStock > 0
                    ? (oldStock * oldWAUP + command.quantity * command.unitPrice) /
                      (oldStock + command.quantity)
                    : command.unitPrice;
            item.updateWAUP(newWAUP);
        }

        item.restock(quantity);

        const transactionId = crypto.randomUUID();

        await this.itemRepository.saveWithTransaction(item, {
            id: transactionId,
            type: 'RESTOCK',
            quantity: quantity.value,
            vendorId: command.vendorId ?? null,
            unitPrice: command.unitPrice ?? null,
            performedBy: command.performedBy,
            notes: command.notes ?? null,
        });

        this.logger.info('Item restocked', {
            itemId: item.getId().value,
            quantity: quantity.value,
            newStock: item.getCurrentStock(),
        });

        return new RestockItemResponse(
            item.getId().value,
            item.getCurrentStock(),
            transactionId,
            quantity.value,
        );
    }
}
