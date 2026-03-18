import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IItemRepository } from '../../../domain/repositories/item.repo.interface';
import { ItemId } from '../../../domain/value-objects/item-id.vo';
import { ItemNotFoundError } from '../../../domain/errors/item.error';
import { ArchiveItemCommand } from './archive-item.command';

@Injectable()
export class ArchiveItemHandler extends CommandHandlerBase<
    ArchiveItemCommand,
    void
> {
    constructor(
        @Inject(IItemRepository)
        private readonly itemRepository: IItemRepository,
    ) {
        super();
    }

    async handle(command: ArchiveItemCommand): Promise<void> {
        const idVO = ItemId.create(command.id);
        const item = await this.itemRepository.getById(idVO);

        if (!item) {
            throw new ItemNotFoundError(command.id);
        }

        item.archive();

        await this.itemRepository.save(item);

        this.logger.info('Item archived', { itemId: item.getId().value });
    }
}
