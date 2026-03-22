import { IQueryHandler } from 'src/shared/application/query.handler.interface';
import { GetSalesOrderQuery } from './get-sales-order.query';
import { GetSalesOrderResponse } from './get-sales-order.response';

export interface IGetSalesOrderHandler
    extends IQueryHandler<GetSalesOrderQuery, GetSalesOrderResponse> {}

export const IGetSalesOrderHandler = Symbol('IGetSalesOrderHandler');
