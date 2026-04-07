import { RecipeVersionResponseDto } from '../../dtos/responses/recipe-version.response.dto';
import { IngredientResponseDto } from '../../dtos/responses/ingredient.response.dto';

interface RecipeVersionLike {
    id: string;
    productId: string;
    versionNumber: number;
    status: string;
    notes: string | null;
    ingredients: {
        id: string;
        itemId: string | null;
        itemName: string | null;
        isAddOn: boolean;
        ingredientCategory: string | null;
        quantity: number;
        notes: string | null;
        resolutionPhase?: string;
    }[];
    createdAt: Date;
    updatedAt: Date;
}

export function toRecipeVersionResponseDto(r: RecipeVersionLike): RecipeVersionResponseDto {
    return new RecipeVersionResponseDto(
        r.id,
        r.productId,
        r.versionNumber,
        r.status,
        r.notes,
        r.ingredients.map(
            (i) =>
                new IngredientResponseDto(
                    i.id,
                    i.itemId,
                    i.itemName,
                    i.isAddOn,
                    i.ingredientCategory,
                    i.quantity,
                    i.notes,
                    i.resolutionPhase ?? 'FILLING',
                ),
        ),
        r.createdAt,
        r.updatedAt,
    );
}
