import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IItemRepository } from '../../../domain/repositories/item.repo.interface';
import { ItemName } from '../../../domain/value-objects/item-name.vo';
import { ItemAlreadyExistsApplicationError } from '../../errors/item.errors';
import { Item } from '../../../domain/aggregates/item.aggregate';
import { CreateItemCommand } from './create-item.command';
import { CreateItemResponse } from './create-item.response';

@Injectable()
export class CreateItemHandler extends CommandHandlerBase<
    CreateItemCommand,
    CreateItemResponse
> {
    constructor(
        @Inject(IItemRepository)
        private readonly itemRepository: IItemRepository,
    ) {
        super();
    }

    async handle(command: CreateItemCommand): Promise<CreateItemResponse> {
        const nameVO = ItemName.create(command.name);
        const existing = await this.itemRepository.getByName(nameVO);

        if (existing) {
            throw new ItemAlreadyExistsApplicationError(command.name);
        }

        const id = this.generateId();

        const item = Item.create({
            id,
            name: command.name,
            type: command.type,
            measureUnit: command.measureUnit,
            categoryId: command.categoryId,
            unitWeightGm: command.unitWeightGm,
        });

        await this.itemRepository.save(item);

        this.logger.info('Item created', {
            itemId: item.getId().value,
            name: item.getName().value,
            type: item.getType().value,
        });

        return new CreateItemResponse(
            item.getId().value,
            item.getName().value,
            item.getType().value,
            item.getMeasureUnit().value,
            item.getCurrentStock(),
            item.getCategoryId(),
            item.getStatus().value,
            item.getUnitWeightGm(),
            item.getWeightedAverageUnitPrice(),
        );
    }

    private generateId(): string {
        return crypto.randomUUID();
    }
}
