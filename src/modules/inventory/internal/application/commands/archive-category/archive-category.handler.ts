import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { ICategoryRepository } from '../../../domain/repositories/category.repo.interface';
import { CategoryId } from '../../../domain/value-objects/category-id.vo';
import { CategoryNotFoundApplicationError, CategoryHasActiveItemsApplicationError } from '../../errors/category.errors';
import { ArchiveCategoryCommand } from './archive-category.command';

@Injectable()
export class ArchiveCategoryHandler extends CommandHandlerBase<
    ArchiveCategoryCommand,
    void
> {
    constructor(
        @Inject(ICategoryRepository)
        private readonly categoryRepository: ICategoryRepository,
    ) {
        super();
    }

    async handle(command: ArchiveCategoryCommand): Promise<void> {
        const idVO = CategoryId.create(command.id);
        const category = await this.categoryRepository.getById(idVO);

        if (!category) {
            throw new CategoryNotFoundApplicationError(command.id);
        }

        const hasActiveItems = await this.categoryRepository.hasActiveItems(idVO);

        if (hasActiveItems) {
            throw new CategoryHasActiveItemsApplicationError(command.id);
        }

        category.archive();

        await this.categoryRepository.save(category);

        this.logger.info('Category archived', {
            categoryId: category.getId().value,
        });
    }
}
