import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IRecipeVersionRepository } from '../../../domain/repositories/recipe-version.repo.interface';
import { RecipeVersionId } from '../../../domain/value-objects/recipe-version-id.vo';
import { RecipeIngredient } from '../../../domain/entities/recipe-ingredient.entity';
import { RecipeVersionNotFoundError } from '../../../domain/errors/recipe.error';
import { AddIngredientCommand } from './add-ingredient.command';
import { AddIngredientResponse } from './add-ingredient.response';

@Injectable()
export class AddIngredientHandler extends CommandHandlerBase<
    AddIngredientCommand,
    AddIngredientResponse
> {
    constructor(
        @Inject(IRecipeVersionRepository)
        private readonly repo: IRecipeVersionRepository,
    ) {
        super();
    }

    async handle(command: AddIngredientCommand): Promise<AddIngredientResponse> {
        const id = RecipeVersionId.create(command.recipeVersionId);
        const recipe = await this.repo.getById(id);
        if (!recipe) throw new RecipeVersionNotFoundError(command.recipeVersionId);

        const ingredient = new RecipeIngredient({
            id: crypto.randomUUID(),
            isAddOn: command.isAddOn,
            itemId: command.itemId ?? null,
            itemName: command.itemName ?? null,
            ingredientCategory: command.ingredientCategory ?? null,
            quantity: command.quantity,
            notes: command.notes,
        });

        recipe.addIngredient(ingredient);
        await this.repo.save(recipe);

        return new AddIngredientResponse(
            recipe.getId().value,
            recipe.getProductId(),
            recipe.getVersionNumber(),
            recipe.getStatus().value,
            recipe.getNotes(),
            recipe.getIngredients(),
            recipe.getCreatedAt(),
            recipe.getUpdatedAt(),
        );
    }
}
