import { Injectable } from '@nestjs/common';
import { IGetItemHandler } from '../../application/queries/get-item/get-item.handler.interface';
import { GetItemQuery } from '../../application/queries/get-item/get-item.query';
import { GetItemResponse } from '../../application/queries/get-item/get-item.response';
import { ReadItemRepository } from '../repositories/read-item.repository';
import { ItemNotFoundApplicationError } from '../../application/errors/item.errors';

@Injectable()
export class GetItemHandler implements IGetItemHandler {
    constructor(private readonly readItemRepository: ReadItemRepository) {}

    async handle(query: GetItemQuery): Promise<GetItemResponse> {
        const item = await this.readItemRepository.getById(query.id);

        if (!item) {
            throw new ItemNotFoundApplicationError(query.id);
        }

        return new GetItemResponse(
            item.id,
            item.name,
            item.type,
            item.measureUnit,
            item.currentStock,
            item.categoryId,
            item.status,
            item.createdAt,
            item.updatedAt,
            item.unitWeightGm ?? null,
        );
    }
}
