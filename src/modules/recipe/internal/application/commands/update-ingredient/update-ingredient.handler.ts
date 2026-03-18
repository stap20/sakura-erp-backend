import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IRecipeVersionRepository } from '../../../domain/repositories/recipe-version.repo.interface';
import { RecipeVersionId } from '../../../domain/value-objects/recipe-version-id.vo';
import { RecipeVersionNotFoundError } from '../../../domain/errors/recipe.error';
import { UpdateIngredientCommand } from './update-ingredient.command';

@Injectable()
export class UpdateIngredientHandler extends CommandHandlerBase<
    UpdateIngredientCommand,
    void
> {
    constructor(
        @Inject(IRecipeVersionRepository)
        private readonly repo: IRecipeVersionRepository,
    ) {
        super();
    }

    async handle(command: UpdateIngredientCommand): Promise<void> {
        const id = RecipeVersionId.create(command.recipeVersionId);
        const recipe = await this.repo.getById(id);
        if (!recipe) throw new RecipeVersionNotFoundError(command.recipeVersionId);

        recipe.updateIngredient(command.ingredientId, command.quantity, command.notes);
        await this.repo.save(recipe);
    }
}
