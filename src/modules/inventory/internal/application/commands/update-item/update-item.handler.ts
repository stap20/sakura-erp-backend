import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IItemRepository } from '../../../domain/repositories/item.repo.interface';
import { ItemId } from '../../../domain/value-objects/item-id.vo';
import { ItemNotFoundError, MeasureUnitLockedError } from '../../../domain/errors/item.error';
import { UpdateItemCommand } from './update-item.command';
import { UpdateItemResponse } from './update-item.response';
import { ReadItemRepository } from '../../../infrastructure/repositories/read-item.repository';

@Injectable()
export class UpdateItemHandler extends CommandHandlerBase<
    UpdateItemCommand,
    UpdateItemResponse
> {
    constructor(
        @Inject(IItemRepository)
        private readonly itemRepository: IItemRepository,
        private readonly readItemRepository: ReadItemRepository,
    ) {
        super();
    }

    async handle(command: UpdateItemCommand): Promise<UpdateItemResponse> {
        const idVO = ItemId.create(command.id);
        const item = await this.itemRepository.getById(idVO);

        if (!item) {
            throw new ItemNotFoundError(command.id);
        }

        if (command.measureUnit !== undefined && command.measureUnit !== item.getMeasureUnit().value) {
            const hasTransactions = await this.readItemRepository.hasTransactions(command.id);
            if (hasTransactions) {
                throw new MeasureUnitLockedError();
            }
        }

        item.update({
            name: command.name,
            measureUnit: command.measureUnit,
            categoryId: command.categoryId,
        });

        await this.itemRepository.save(item);

        this.logger.info('Item updated', { itemId: item.getId().value });

        return new UpdateItemResponse(
            item.getId().value,
            item.getName().value,
            item.getType().value,
            item.getMeasureUnit().value,
            item.getCurrentStock(),
            item.getCategoryId(),
            item.getStatus().value,
        );
    }
}
