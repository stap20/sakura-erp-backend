import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { ICategoryRepository } from '../../../domain/repositories/category.repo.interface';
import { CategoryId } from '../../../domain/value-objects/category-id.vo';
import {
    CategoryNotFoundError,
    CategoryHasActiveItemsError,
} from '../../../domain/errors/category.error';
import { ArchiveCategoryCommand } from './archive-category.command';
import { ReadCategoryRepository } from '../../../infrastructure/repositories/read-category.repository';

@Injectable()
export class ArchiveCategoryHandler extends CommandHandlerBase<
    ArchiveCategoryCommand,
    void
> {
    constructor(
        @Inject(ICategoryRepository)
        private readonly categoryRepository: ICategoryRepository,
        private readonly readCategoryRepository: ReadCategoryRepository,
    ) {
        super();
    }

    async handle(command: ArchiveCategoryCommand): Promise<void> {
        const idVO = CategoryId.create(command.id);
        const category = await this.categoryRepository.getById(idVO);

        if (!category) {
            throw new CategoryNotFoundError(command.id);
        }

        const hasActiveItems =
            await this.readCategoryRepository.hasActiveItems(command.id);

        if (hasActiveItems) {
            throw new CategoryHasActiveItemsError(command.id);
        }

        category.archive();

        await this.categoryRepository.save(category);

        this.logger.info('Category archived', {
            categoryId: category.getId().value,
        });
    }
}
