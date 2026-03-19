import { IQueryHandler } from 'src/shared/application/query.handler.interface';
import { GetProductionOrderQuery } from './get-production-order.query';
import { GetProductionOrderResponse } from './get-production-order.response';

export interface IGetProductionOrderHandler
    extends IQueryHandler<GetProductionOrderQuery, GetProductionOrderResponse> {}

export const IGetProductionOrderHandler = Symbol('IGetProductionOrderHandler');
