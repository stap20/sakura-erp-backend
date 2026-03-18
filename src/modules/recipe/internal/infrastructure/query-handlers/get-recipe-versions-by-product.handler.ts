import { Injectable } from '@nestjs/common';
import { IGetRecipeVersionsByProductHandler } from '../../application/queries/get-recipe-versions-by-product/get-recipe-versions-by-product.handler.interface';
import { GetRecipeVersionsByProductQuery } from '../../application/queries/get-recipe-versions-by-product/get-recipe-versions-by-product.query';
import { GetRecipeVersionsByProductResponse } from '../../application/queries/get-recipe-versions-by-product/get-recipe-versions-by-product.response';
import { ReadRecipeVersionRepository } from '../repositories/read-recipe-version.repository';
import { mapToRecipeVersionResponse } from './get-recipe-version.handler';

@Injectable()
export class GetRecipeVersionsByProductHandler implements IGetRecipeVersionsByProductHandler {
    constructor(private readonly readRepo: ReadRecipeVersionRepository) {}

    async handle(query: GetRecipeVersionsByProductQuery): Promise<GetRecipeVersionsByProductResponse> {
        const entities = await this.readRepo.getVersionsByProductId(query.productId);
        return new GetRecipeVersionsByProductResponse(entities.map(mapToRecipeVersionResponse));
    }
}
