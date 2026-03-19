import { Injectable } from '@nestjs/common';
import { IGetCategoryHandler } from '../../application/queries/get-category/get-category.handler.interface';
import { GetCategoryQuery } from '../../application/queries/get-category/get-category.query';
import { GetCategoryResponse } from '../../application/queries/get-category/get-category.response';
import { ReadCategoryRepository } from '../repositories/read-category.repository';
import { CategoryNotFoundApplicationError } from '../../application/errors/category.errors';

@Injectable()
export class GetCategoryHandler implements IGetCategoryHandler {
    constructor(
        private readonly readCategoryRepository: ReadCategoryRepository,
    ) {}

    async handle(query: GetCategoryQuery): Promise<GetCategoryResponse> {
        const category = await this.readCategoryRepository.getById(query.id);

        if (!category) {
            throw new CategoryNotFoundApplicationError(query.id);
        }

        return new GetCategoryResponse(
            category.id,
            category.name,
            category.description,
            category.status,
            category.createdAt,
            category.updatedAt,
        );
    }
}
