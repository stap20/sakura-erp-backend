import { Injectable } from '@nestjs/common';
import { IGetPurchaseOrdersByVendorHandler } from '../../application/queries/get-purchase-orders-by-vendor/get-purchase-orders-by-vendor.handler.interface';
import { GetPurchaseOrdersByVendorQuery } from '../../application/queries/get-purchase-orders-by-vendor/get-purchase-orders-by-vendor.query';
import { GetPurchaseOrdersByVendorResponse } from '../../application/queries/get-purchase-orders-by-vendor/get-purchase-orders-by-vendor.response';
import { ReadPurchaseOrderRepository } from '../repositories/read-purchase-order.repository';
import { mapToPurchaseOrderResponse } from './purchase-order.mapper.helper';

@Injectable()
export class GetPurchaseOrdersByVendorHandler implements IGetPurchaseOrdersByVendorHandler {
    constructor(private readonly readRepo: ReadPurchaseOrderRepository) {}

    async handle(query: GetPurchaseOrdersByVendorQuery): Promise<GetPurchaseOrdersByVendorResponse> {
        const entities = await this.readRepo.getByVendorId(query.vendorId);
        return entities.map(mapToPurchaseOrderResponse);
    }
}
