import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { ICategoryRepository } from '../../../domain/repositories/category.repo.interface';
import { CategoryName } from '../../../domain/value-objects/category-name.vo';
import { CategoryAlreadyExistsApplicationError } from '../../errors/category.errors';
import { Category } from '../../../domain/aggregates/category.aggregate';
import { CreateCategoryCommand } from './create-category.command';
import { CreateCategoryResponse } from './create-category.response';

@Injectable()
export class CreateCategoryHandler extends CommandHandlerBase<
    CreateCategoryCommand,
    CreateCategoryResponse
> {
    constructor(
        @Inject(ICategoryRepository)
        private readonly categoryRepository: ICategoryRepository,
    ) {
        super();
    }

    async handle(
        command: CreateCategoryCommand,
    ): Promise<CreateCategoryResponse> {
        const nameVO = CategoryName.create(command.name);
        const existing = await this.categoryRepository.getByName(nameVO);

        if (existing) {
            throw new CategoryAlreadyExistsApplicationError(command.name);
        }

        const id = crypto.randomUUID();

        const category = Category.create({
            id,
            name: command.name,
            description: command.description,
        });

        await this.categoryRepository.save(category);

        this.logger.info('Category created', {
            categoryId: category.getId().value,
            name: category.getName().value,
        });

        return new CreateCategoryResponse(
            category.getId().value,
            category.getName().value,
            category.getDescription(),
            category.getStatus().value,
        );
    }
}
