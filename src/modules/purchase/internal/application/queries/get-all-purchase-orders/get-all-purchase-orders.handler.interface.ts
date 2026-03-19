import { IQueryHandler } from 'src/shared/application/query.handler.interface';
import { GetAllPurchaseOrdersQuery } from './get-all-purchase-orders.query';
import { GetAllPurchaseOrdersResponse } from './get-all-purchase-orders.response';

export interface IGetAllPurchaseOrdersHandler
    extends IQueryHandler<GetAllPurchaseOrdersQuery, GetAllPurchaseOrdersResponse> {}

export const IGetAllPurchaseOrdersHandler = Symbol('IGetAllPurchaseOrdersHandler');
