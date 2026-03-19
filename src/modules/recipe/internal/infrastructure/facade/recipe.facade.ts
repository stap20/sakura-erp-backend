import { Injectable } from '@nestjs/common';
import { IRecipeFacade } from 'src/modules/recipe/shared/contracts/recipe-facade.interface';
import { RecipeVersionFacadeDto } from 'src/modules/recipe/shared/contracts/recipe-version-facade.dto';
import { ReadRecipeVersionRepository } from '../repositories/read-recipe-version.repository';

@Injectable()
export class RecipeFacade implements IRecipeFacade {
    constructor(
        private readonly readRecipeVersionRepository: ReadRecipeVersionRepository,
    ) {}

    async getActiveRecipeByProduct(productId: string): Promise<RecipeVersionFacadeDto | null> {
        const entity = await this.readRecipeVersionRepository.getActiveByProductId(productId);
        if (!entity) return null;
        return new RecipeVersionFacadeDto(
            entity.id,
            entity.productId,
            entity.versionNumber,
            entity.ingredients
                .filter((i) => i.itemId !== null)
                .map((i) => ({
                    itemId: i.itemId!,
                    percentage: Number(i.quantity),
                    isAddOn: i.isAddOn,
                })),
        );
    }
}
