import { Injectable } from '@nestjs/common';
import { IGetActiveRecipeByProductHandler } from '../../application/queries/get-active-recipe-by-product/get-active-recipe-by-product.handler.interface';
import { GetActiveRecipeByProductQuery } from '../../application/queries/get-active-recipe-by-product/get-active-recipe-by-product.query';
import { GetActiveRecipeByProductResponse } from '../../application/queries/get-active-recipe-by-product/get-active-recipe-by-product.response';
import { ReadRecipeVersionRepository } from '../repositories/read-recipe-version.repository';
import { RecipeVersionNotFoundError } from '../../domain/errors/recipe.error';
import { mapToRecipeVersionResponse } from './get-recipe-version.handler';

@Injectable()
export class GetActiveRecipeByProductHandler implements IGetActiveRecipeByProductHandler {
    constructor(private readonly readRepo: ReadRecipeVersionRepository) {}

    async handle(query: GetActiveRecipeByProductQuery): Promise<GetActiveRecipeByProductResponse> {
        const entity = await this.readRepo.getActiveByProductId(query.productId);
        if (!entity) throw new RecipeVersionNotFoundError(query.productId);
        return mapToRecipeVersionResponse(entity) as GetActiveRecipeByProductResponse;
    }
}
