import { RecipeVersionFacadeDto } from './recipe-version-facade.dto';

export interface IRecipeFacade {
    getActiveRecipeByProduct(productId: string): Promise<RecipeVersionFacadeDto | null>;
}

export const IRecipeFacade = Symbol('IRecipeFacade');
