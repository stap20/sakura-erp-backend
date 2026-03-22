import { Injectable, Inject } from '@nestjs/common';
import { IRecipeFacade } from 'src/modules/recipe/shared/contracts/recipe-facade.interface';
import { RecipeVersionFacadeDto } from 'src/modules/recipe/shared/contracts/recipe-version-facade.dto';

@Injectable()
export class RecipeGateway {
    constructor(
        @Inject(IRecipeFacade)
        private readonly recipeFacade: IRecipeFacade,
    ) {}

    async getActiveRecipeByProduct(productId: string): Promise<RecipeVersionFacadeDto | null> {
        return this.recipeFacade.getActiveRecipeByProduct(productId);
    }
}
