import { IQueryHandler } from 'src/shared/application/query.handler.interface';
import { GetPurchaseOrdersByVendorQuery } from './get-purchase-orders-by-vendor.query';
import { GetPurchaseOrdersByVendorResponse } from './get-purchase-orders-by-vendor.response';

export interface IGetPurchaseOrdersByVendorHandler
    extends IQueryHandler<GetPurchaseOrdersByVendorQuery, GetPurchaseOrdersByVendorResponse> {}

export const IGetPurchaseOrdersByVendorHandler = Symbol('IGetPurchaseOrdersByVendorHandler');
