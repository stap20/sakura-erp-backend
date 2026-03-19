import { IQueryHandler } from 'src/shared/application/query.handler.interface';
import { GetProductionOrdersQuery } from './get-production-orders.query';
import { GetProductionOrdersResponse } from './get-production-orders.response';

export interface IGetProductionOrdersHandler
    extends IQueryHandler<GetProductionOrdersQuery, GetProductionOrdersResponse> {}

export const IGetProductionOrdersHandler = Symbol('IGetProductionOrdersHandler');
