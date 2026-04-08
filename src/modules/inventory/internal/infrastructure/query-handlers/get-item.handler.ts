import { Injectable } from '@nestjs/common';
import { IGetItemHandler } from '../../application/queries/get-item/get-item.handler.interface';
import { GetItemQuery } from '../../application/queries/get-item/get-item.query';
import { GetItemResponse } from '../../application/queries/get-item/get-item.response';
import { ReadItemRepository } from '../repositories/read-item.repository';
import { ReadAddonBomRepository } from '../repositories/read-addon-bom.repository';
import { ItemNotFoundApplicationError } from '../../application/errors/item.errors';

@Injectable()
export class GetItemHandler implements IGetItemHandler {
    constructor(
        private readonly readItemRepository: ReadItemRepository,
        private readonly readAddonBomRepository: ReadAddonBomRepository,
    ) {}

    async handle(query: GetItemQuery): Promise<GetItemResponse> {
        const item = await this.readItemRepository.getById(query.id);

        if (!item) {
            throw new ItemNotFoundApplicationError(query.id);
        }

        const addonComponents = await this.readAddonBomRepository.getByVariantItemId(item.id);

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
            item.weightedAverageUnitPrice ?? null,
            item.productId ?? null,
            addonComponents.map((c) => ({ ingredientCategory: c.ingredientCategory, addonItemId: c.addonItemId })),
        );
    }
}
