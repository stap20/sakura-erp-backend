import { RecipeVersion } from '../aggregates/recipe-version.aggregate';
import { RecipeVersionId } from '../value-objects/recipe-version-id.vo';

export interface IRecipeVersionRepository {
    getById(id: RecipeVersionId): Promise<RecipeVersion | null>;
    getActiveByProductId(productId: string): Promise<RecipeVersion | null>;
    save(recipe: RecipeVersion): Promise<void>;
    activateVersion(
        toActivate: RecipeVersion,
        previousActive: RecipeVersion | null,
    ): Promise<void>;
}

export const IRecipeVersionRepository = Symbol('IRecipeVersionRepository');
