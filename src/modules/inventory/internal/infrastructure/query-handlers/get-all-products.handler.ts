import { Injectable } from '@nestjs/common';
import { IGetAllProductsHandler } from '../../application/queries/get-all-products/get-all-products.handler.interface';
import { GetAllProductsQuery } from '../../application/queries/get-all-products/get-all-products.query';
import { GetAllProductsResponse } from '../../application/queries/get-all-products/get-all-products.response';
import { ReadProductRepository } from '../repositories/read-product.repository';

@Injectable()
export class GetAllProductsHandler implements IGetAllProductsHandler {
    constructor(private readonly readProductRepository: ReadProductRepository) {}

    async handle(query: GetAllProductsQuery): Promise<GetAllProductsResponse> {
        const products = await this.readProductRepository.search(
            query.search,
            query.offset,
            query.limit,
        );

        return new GetAllProductsResponse(
            products.map((p) => ({
                id: p.id,
                name: p.name,
                description: p.description,
                referenceBatchGm: p.referenceBatchGm,
                referenceDurationMin: p.referenceDurationMin,
                referenceWastePercent: p.referenceWastePercent,
                createdAt: p.createdAt,
                updatedAt: p.updatedAt,
            })),
        );
    }
}
