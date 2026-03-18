import { Injectable } from '@nestjs/common';
import { IGetRecipeVersionHandler } from '../../application/queries/get-recipe-version/get-recipe-version.handler.interface';
import { GetRecipeVersionQuery } from '../../application/queries/get-recipe-version/get-recipe-version.query';
import { GetRecipeVersionResponse } from '../../application/queries/get-recipe-version/get-recipe-version.response';
import { ReadRecipeVersionRepository } from '../repositories/read-recipe-version.repository';
import { RecipeVersionNotFoundError } from '../../domain/errors/recipe.error';
import { RecipeVersionEntity } from '../database/entities/recipe-version.entity';

export function mapToRecipeVersionResponse(entity: RecipeVersionEntity): GetRecipeVersionResponse {
    return new GetRecipeVersionResponse(
        entity.id,
        entity.productId,
        entity.versionNumber,
        entity.status,
        entity.notes,
        entity.ingredients.map((i) => ({
            id: i.id,
            itemId: i.itemId,
            itemName: i.itemName,
            isAddOn: i.isAddOn,
            ingredientCategory: i.ingredientCategory,
            quantity: Number(i.quantity),
            notes: i.notes,
        })),
        entity.createdAt,
        entity.updatedAt,
    );
}

@Injectable()
export class GetRecipeVersionHandler implements IGetRecipeVersionHandler {
    constructor(private readonly readRepo: ReadRecipeVersionRepository) {}

    async handle(query: GetRecipeVersionQuery): Promise<GetRecipeVersionResponse> {
        const entity = await this.readRepo.getById(query.id);
        if (!entity) throw new RecipeVersionNotFoundError(query.id);
        return mapToRecipeVersionResponse(entity);
    }
}
