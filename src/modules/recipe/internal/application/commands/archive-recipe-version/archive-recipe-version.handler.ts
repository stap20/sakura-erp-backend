import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IRecipeVersionRepository } from '../../../domain/repositories/recipe-version.repo.interface';
import { RecipeVersionId } from '../../../domain/value-objects/recipe-version-id.vo';
import { RecipeVersionNotFoundApplicationError } from '../../errors/recipe.errors';
import { ArchiveRecipeVersionCommand } from './archive-recipe-version.command';

@Injectable()
export class ArchiveRecipeVersionHandler extends CommandHandlerBase<
    ArchiveRecipeVersionCommand,
    void
> {
    constructor(
        @Inject(IRecipeVersionRepository)
        private readonly repo: IRecipeVersionRepository,
    ) {
        super();
    }

    async handle(command: ArchiveRecipeVersionCommand): Promise<void> {
        const id = RecipeVersionId.create(command.recipeVersionId);
        const recipe = await this.repo.getById(id);
        if (!recipe) throw new RecipeVersionNotFoundApplicationError(command.recipeVersionId);

        recipe.archive();
        await this.repo.save(recipe);
    }
}
