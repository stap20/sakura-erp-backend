import { Injectable } from '@nestjs/common';
import { IGetAllPurchaseOrdersHandler } from '../../application/queries/get-all-purchase-orders/get-all-purchase-orders.handler.interface';
import { GetAllPurchaseOrdersQuery } from '../../application/queries/get-all-purchase-orders/get-all-purchase-orders.query';
import { GetAllPurchaseOrdersResponse } from '../../application/queries/get-all-purchase-orders/get-all-purchase-orders.response';
import { ReadPurchaseOrderRepository } from '../repositories/read-purchase-order.repository';
import { mapToPurchaseOrderResponse } from './purchase-order.mapper.helper';

@Injectable()
export class GetAllPurchaseOrdersHandler implements IGetAllPurchaseOrdersHandler {
    constructor(private readonly readRepo: ReadPurchaseOrderRepository) {}

    async handle(query: GetAllPurchaseOrdersQuery): Promise<GetAllPurchaseOrdersResponse> {
        const entities = await this.readRepo.findAll(
            { vendorId: query.vendorId, status: query.status },
            query.offset,
            query.limit,
        );
        return entities.map(mapToPurchaseOrderResponse);
    }
}
