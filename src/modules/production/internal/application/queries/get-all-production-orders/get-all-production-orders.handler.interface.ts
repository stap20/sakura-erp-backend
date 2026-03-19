import { IQueryHandler } from 'src/shared/application/query.handler.interface';
import { GetAllProductionOrdersQuery } from './get-all-production-orders.query';
import { GetAllProductionOrdersResponse } from './get-all-production-orders.response';

export interface IGetAllProductionOrdersHandler
    extends IQueryHandler<GetAllProductionOrdersQuery, GetAllProductionOrdersResponse> {}

export const IGetAllProductionOrdersHandler = Symbol('IGetAllProductionOrdersHandler');
