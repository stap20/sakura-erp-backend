import { Injectable } from '@nestjs/common';
import { IGetProductionOrdersHandler } from '../../application/queries/get-production-orders/get-production-orders.handler.interface';
import { GetProductionOrdersQuery } from '../../application/queries/get-production-orders/get-production-orders.query';
import { GetProductionOrdersResponse } from '../../application/queries/get-production-orders/get-production-orders.response';
import { ReadProductionOrderRepository } from '../repositories/read-production-order.repository';
import { mapToProductionOrderResponse } from './get-production-order.handler';

@Injectable()
export class GetProductionOrdersHandler implements IGetProductionOrdersHandler {
    constructor(private readonly readRepo: ReadProductionOrderRepository) {}

    async handle(query: GetProductionOrdersQuery): Promise<GetProductionOrdersResponse> {
        const entities = await this.readRepo.findAll(
            { productId: query.productId, status: query.status },
            query.offset,
            query.limit,
        );
        return new GetProductionOrdersResponse(entities.map(mapToProductionOrderResponse));
    }
}
