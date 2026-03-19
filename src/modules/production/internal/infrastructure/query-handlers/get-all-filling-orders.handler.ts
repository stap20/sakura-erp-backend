import { Injectable } from '@nestjs/common';
import { IGetAllFillingOrdersHandler } from '../../application/queries/get-all-filling-orders/get-all-filling-orders.handler.interface';
import { GetAllFillingOrdersQuery } from '../../application/queries/get-all-filling-orders/get-all-filling-orders.query';
import { GetAllFillingOrdersResponse } from '../../application/queries/get-all-filling-orders/get-all-filling-orders.response';
import { ReadFillingOrderRepository } from '../repositories/read-filling-order.repository';
import { mapToFillingOrderResponse } from './filling-order.mapper.helper';

@Injectable()
export class GetAllFillingOrdersHandler implements IGetAllFillingOrdersHandler {
    constructor(private readonly readRepo: ReadFillingOrderRepository) {}

    async handle(query: GetAllFillingOrdersQuery): Promise<GetAllFillingOrdersResponse> {
        const entities = await this.readRepo.findAll(
            { productId: query.productId, status: query.status },
            query.offset,
            query.limit,
        );
        return entities.map(mapToFillingOrderResponse);
    }
}
