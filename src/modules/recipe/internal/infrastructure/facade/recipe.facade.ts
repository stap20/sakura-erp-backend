import { Injectable } from '@nestjs/common';
import { IRecipeFacade } from 'src/modules/recipe/shared/contracts/recipe-facade.interface';
import {
    RecipeVersionFacadeDto,
    IngredientFacadeDto,
} from 'src/modules/recipe/shared/contracts/recipe-version-facade.dto';
import { ReadRecipeVersionRepository } from '../repositories/read-recipe-version.repository';

@Injectable()
export class RecipeFacade implements IRecipeFacade {
    constructor(private readonly readRepo: ReadRecipeVersionRepository) {}

    async getActiveRecipeByProduct(productId: string): Promise<RecipeVersionFacadeDto | null> {
        const entity = await this.readRepo.getActiveByProductId(productId);
        if (!entity) return null;

        return new RecipeVersionFacadeDto(
            entity.id,
            entity.productId,
            entity.versionNumber,
            entity.ingredients.map(
                (i) =>
                    new IngredientFacadeDto(
                        i.id,
                        i.itemId,
                        i.isAddOn,
                        i.ingredientCategory,
                        Number(i.quantity),
                        i.notes,
                    ),
            ),
        );
    }
}
