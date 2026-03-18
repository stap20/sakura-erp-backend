import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IRecipeVersionRepository } from '../../../domain/repositories/recipe-version.repo.interface';
import { RecipeVersionId } from '../../../domain/value-objects/recipe-version-id.vo';
import { RecipeVersionNotFoundError } from '../../../domain/errors/recipe.error';
import { RemoveIngredientCommand } from './remove-ingredient.command';

@Injectable()
export class RemoveIngredientHandler extends CommandHandlerBase<
    RemoveIngredientCommand,
    void
> {
    constructor(
        @Inject(IRecipeVersionRepository)
        private readonly repo: IRecipeVersionRepository,
    ) {
        super();
    }

    async handle(command: RemoveIngredientCommand): Promise<void> {
        const id = RecipeVersionId.create(command.recipeVersionId);
        const recipe = await this.repo.getById(id);
        if (!recipe) throw new RecipeVersionNotFoundError(command.recipeVersionId);

        recipe.removeIngredient(command.ingredientId);
        await this.repo.save(recipe);
    }
}
