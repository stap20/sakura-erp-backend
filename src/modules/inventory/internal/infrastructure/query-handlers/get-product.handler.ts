import { Injectable } from '@nestjs/common';
import { IGetProductHandler } from '../../application/queries/get-product/get-product.handler.interface';
import { GetProductQuery } from '../../application/queries/get-product/get-product.query';
import { GetProductResponse } from '../../application/queries/get-product/get-product.response';
import { ReadProductRepository } from '../repositories/read-product.repository';
import { ProductNotFoundApplicationError } from '../../application/errors/product.errors';

@Injectable()
export class GetProductHandler implements IGetProductHandler {
    constructor(private readonly readProductRepository: ReadProductRepository) {}

    async handle(query: GetProductQuery): Promise<GetProductResponse> {
        const product = await this.readProductRepository.getById(query.id);
        if (!product) throw new ProductNotFoundApplicationError(query.id);

        return new GetProductResponse(
            product.id,
            product.name,
            product.description,
            product.referenceBatchGm,
            product.referenceDurationMin,
            product.referenceWastePercent,
            product.createdAt,
            product.updatedAt,
        );
    }
}
