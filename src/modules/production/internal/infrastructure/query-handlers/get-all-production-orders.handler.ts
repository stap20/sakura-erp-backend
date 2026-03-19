import { Injectable } from '@nestjs/common';
import { IGetAllProductionOrdersHandler } from '../../application/queries/get-all-production-orders/get-all-production-orders.handler.interface';
import { GetAllProductionOrdersQuery } from '../../application/queries/get-all-production-orders/get-all-production-orders.query';
import { GetAllProductionOrdersResponse } from '../../application/queries/get-all-production-orders/get-all-production-orders.response';
import { ReadProductionOrderRepository } from '../repositories/read-production-order.repository';
import { mapToProductionOrderResponse } from './production-order.mapper.helper';

@Injectable()
export class GetAllProductionOrdersHandler implements IGetAllProductionOrdersHandler {
    constructor(private readonly readRepo: ReadProductionOrderRepository) {}

    async handle(query: GetAllProductionOrdersQuery): Promise<GetAllProductionOrdersResponse> {
        const entities = await this.readRepo.findAll(
            { productId: query.productId, status: query.status },
            query.offset,
            query.limit,
        );
        return entities.map(mapToProductionOrderResponse);
    }
}
