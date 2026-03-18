import { Injectable } from '@nestjs/common';
import { IGetAllCategoriesHandler } from '../../application/queries/get-all-categories/get-all-categories.handler.interface';
import { GetAllCategoriesQuery } from '../../application/queries/get-all-categories/get-all-categories.query';
import { GetAllCategoriesResponse } from '../../application/queries/get-all-categories/get-all-categories.response';
import { ReadCategoryRepository } from '../repositories/read-category.repository';

@Injectable()
export class GetAllCategoriesHandler implements IGetAllCategoriesHandler {
    constructor(
        private readonly readCategoryRepository: ReadCategoryRepository,
    ) {}

    async handle(
        query: GetAllCategoriesQuery,
    ): Promise<GetAllCategoriesResponse> {
        const filter = this.buildFilter(query);
        const categories = await this.readCategoryRepository.search(
            query.offset,
            query.limit,
            filter,
        );

        return new GetAllCategoriesResponse(
            categories.map((c) => ({
                id: c.id,
                name: c.name,
                description: c.description,
                status: c.status,
                createdAt: c.createdAt,
                updatedAt: c.updatedAt,
            })),
        );
    }

    private buildFilter(query: GetAllCategoriesQuery): object {
        const conditions: any = {};

        if (query.search) {
            conditions.name = { contains: query.search, mode: 'insensitive' };
        }

        if (query.status) {
            conditions.status = query.status;
        } else {
            conditions.status = 'ACTIVE';
        }

        return conditions;
    }
}
