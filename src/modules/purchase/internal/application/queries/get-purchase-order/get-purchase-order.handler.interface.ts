import { IQueryHandler } from 'src/shared/application/query.handler.interface';
import { GetPurchaseOrderQuery } from './get-purchase-order.query';
import { GetPurchaseOrderResponse } from './get-purchase-order.response';

export interface IGetPurchaseOrderHandler
    extends IQueryHandler<GetPurchaseOrderQuery, GetPurchaseOrderResponse> {}

export const IGetPurchaseOrderHandler = Symbol('IGetPurchaseOrderHandler');
