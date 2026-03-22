import { IQueryHandler } from 'src/shared/application/query.handler.interface';
import { GetAllSalesOrdersQuery } from './get-all-sales-orders.query';
import { GetAllSalesOrdersResponse } from './get-all-sales-orders.response';

export interface IGetAllSalesOrdersHandler
    extends IQueryHandler<GetAllSalesOrdersQuery, GetAllSalesOrdersResponse[]> {}

export const IGetAllSalesOrdersHandler = Symbol('IGetAllSalesOrdersHandler');
