import { Injectable } from '@nestjs/common';
import { IGetPurchaseOrderHandler } from '../../application/queries/get-purchase-order/get-purchase-order.handler.interface';
import { GetPurchaseOrderQuery } from '../../application/queries/get-purchase-order/get-purchase-order.query';
import { GetPurchaseOrderResponse } from '../../application/queries/get-purchase-order/get-purchase-order.response';
import { ReadPurchaseOrderRepository } from '../repositories/read-purchase-order.repository';
import { PurchaseOrderNotFoundError } from '../../domain/errors/purchase.error';
import { mapToPurchaseOrderResponse } from './purchase-order.mapper.helper';

@Injectable()
export class GetPurchaseOrderHandler implements IGetPurchaseOrderHandler {
    constructor(private readonly readRepo: ReadPurchaseOrderRepository) {}

    async handle(query: GetPurchaseOrderQuery): Promise<GetPurchaseOrderResponse> {
        const entity = await this.readRepo.getById(query.id);
        if (!entity) throw new PurchaseOrderNotFoundError(query.id);
        return mapToPurchaseOrderResponse(entity);
    }
}
