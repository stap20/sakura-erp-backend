import { IQueryHandler } from 'src/shared/application/query.handler.interface';
import { GetFillingOrderQuery } from './get-filling-order.query';
import { GetFillingOrderResponse } from './get-filling-order.response';

export interface IGetFillingOrderHandler
    extends IQueryHandler<GetFillingOrderQuery, GetFillingOrderResponse> {}

export const IGetFillingOrderHandler = Symbol('IGetFillingOrderHandler');
