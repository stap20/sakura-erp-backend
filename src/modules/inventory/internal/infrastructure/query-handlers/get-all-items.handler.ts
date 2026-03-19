import { Injectable } from '@nestjs/common';
import { IGetAllItemsHandler } from '../../application/queries/get-all-items/get-all-items.handler.interface';
import { GetAllItemsQuery } from '../../application/queries/get-all-items/get-all-items.query';
import { GetAllItemsResponse } from '../../application/queries/get-all-items/get-all-items.response';
import { ReadItemRepository } from '../repositories/read-item.repository';

@Injectable()
export class GetAllItemsHandler implements IGetAllItemsHandler {
    constructor(private readonly readItemRepository: ReadItemRepository) {}

    async handle(query: GetAllItemsQuery): Promise<GetAllItemsResponse> {
        const filter = this.buildFilter(query);
        const items = await this.readItemRepository.search(
            query.offset,
            query.limit,
            filter,
        );

        return new GetAllItemsResponse(
            items.map((item) => ({
                id: item.id,
                name: item.name,
                type: item.type,
                measureUnit: item.measureUnit,
                currentStock: item.currentStock,
                categoryId: item.categoryId,
                status: item.status,
                createdAt: item.createdAt,
                updatedAt: item.updatedAt,
                unitWeightGm: item.unitWeightGm ?? null,
                weightedAverageUnitPrice: item.weightedAverageUnitPrice ?? null,
            })),
        );
    }

    private buildFilter(query: GetAllItemsQuery): object {
        const conditions: any = {};

        if (query.search) {
            conditions.name = { contains: query.search, mode: 'insensitive' };
        }

        if (query.type) {
            conditions.type = query.type;
        }

        if (query.categoryId) {
            conditions.categoryId = query.categoryId;
        }

        if (query.status) {
            conditions.status = query.status;
        } else {
            conditions.status = 'ACTIVE';
        }

        if (query.stockStatus === 'IN_STOCK') {
            conditions.currentStock = { gt: 0 };
        } else if (query.stockStatus === 'OUT_OF_STOCK') {
            conditions.currentStock = { equals: 0 };
        }

        if (query.vendorId) {
            conditions.transactions = {
                some: { vendorId: query.vendorId },
            };
        }

        return conditions;
    }
}
