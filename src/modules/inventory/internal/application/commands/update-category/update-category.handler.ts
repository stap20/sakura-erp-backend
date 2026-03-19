import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { ICategoryRepository } from '../../../domain/repositories/category.repo.interface';
import { CategoryId } from '../../../domain/value-objects/category-id.vo';
import { CategoryNotFoundApplicationError } from '../../errors/category.errors';
import { UpdateCategoryCommand } from './update-category.command';
import { UpdateCategoryResponse } from './update-category.response';

@Injectable()
export class UpdateCategoryHandler extends CommandHandlerBase<
    UpdateCategoryCommand,
    UpdateCategoryResponse
> {
    constructor(
        @Inject(ICategoryRepository)
        private readonly categoryRepository: ICategoryRepository,
    ) {
        super();
    }

    async handle(
        command: UpdateCategoryCommand,
    ): Promise<UpdateCategoryResponse> {
        const idVO = CategoryId.create(command.id);
        const category = await this.categoryRepository.getById(idVO);

        if (!category) {
            throw new CategoryNotFoundApplicationError(command.id);
        }

        category.update({
            name: command.name,
            description: command.description,
        });

        await this.categoryRepository.save(category);

        this.logger.info('Category updated', {
            categoryId: category.getId().value,
        });

        return new UpdateCategoryResponse(
            category.getId().value,
            category.getName().value,
            category.getDescription(),
            category.getStatus().value,
        );
    }
}
