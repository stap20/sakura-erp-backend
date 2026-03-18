import { Injectable } from '@nestjs/common';
import { IGetAllRecipeVersionsHandler } from '../../application/queries/get-all-recipe-versions/get-all-recipe-versions.handler.interface';
import { GetAllRecipeVersionsQuery } from '../../application/queries/get-all-recipe-versions/get-all-recipe-versions.query';
import { GetAllRecipeVersionsResponse } from '../../application/queries/get-all-recipe-versions/get-all-recipe-versions.response';
import { ReadRecipeVersionRepository } from '../repositories/read-recipe-version.repository';
import { mapToRecipeVersionResponse } from './get-recipe-version.handler';

@Injectable()
export class GetAllRecipeVersionsHandler implements IGetAllRecipeVersionsHandler {
    constructor(private readonly readRepo: ReadRecipeVersionRepository) {}

    async handle(query: GetAllRecipeVersionsQuery): Promise<GetAllRecipeVersionsResponse> {
        const entities = await this.readRepo.findAll(
            { productId: query.productId, status: query.status },
            query.offset,
            query.limit,
        );
        return new GetAllRecipeVersionsResponse(entities.map(mapToRecipeVersionResponse));
    }
}
