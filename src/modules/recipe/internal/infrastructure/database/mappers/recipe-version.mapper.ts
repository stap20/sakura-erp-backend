import { Injectable } from '@nestjs/common';
import { RecipeVersion } from '../../../domain/aggregates/recipe-version.aggregate';
import { RecipeIngredient } from '../../../domain/entities/recipe-ingredient.entity';
import { RecipeVersionEntity } from '../entities/recipe-version.entity';
import { RecipeIngredientEntity } from '../entities/recipe-ingredient.entity';

@Injectable()
export class RecipeVersionMapper {
    toDomain(entity: RecipeVersionEntity): RecipeVersion {
        const ingredients = entity.ingredients.map(
            (i) =>
                new RecipeIngredient({
                    id: i.id,
                    itemId: i.itemId,
                    itemName: i.itemName,
                    isAddOn: i.isAddOn,
                    ingredientCategory: i.ingredientCategory,
                    quantity: Number(i.quantity),
                    notes: i.notes,
                    resolutionPhase: i.resolutionPhase ?? 'FILLING',
                }),
        );

        return RecipeVersion.createFromPersistence({
            id: entity.id,
            productId: entity.productId,
            versionNumber: entity.versionNumber,
            status: entity.status,
            notes: entity.notes,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
            ingredients,
        });
    }

    ingredientToPersistence(
        recipeId: string,
        ingredient: RecipeIngredient,
    ): Omit<RecipeIngredientEntity, never> {
        return {
            id: ingredient.id,
            recipeId,
            itemId: ingredient.itemId,
            itemName: ingredient.itemName,
            isAddOn: ingredient.isAddOn,
            ingredientCategory: ingredient.ingredientCategory,
            quantity: ingredient.quantity,
            notes: ingredient.notes,
            resolutionPhase: ingredient.resolutionPhase,
        };
    }
}
