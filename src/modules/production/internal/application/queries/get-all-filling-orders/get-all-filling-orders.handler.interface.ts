import { IQueryHandler } from 'src/shared/application/query.handler.interface';
import { GetAllFillingOrdersQuery } from './get-all-filling-orders.query';
import { GetAllFillingOrdersResponse } from './get-all-filling-orders.response';

export interface IGetAllFillingOrdersHandler
    extends IQueryHandler<GetAllFillingOrdersQuery, GetAllFillingOrdersResponse> {}

export const IGetAllFillingOrdersHandler = Symbol('IGetAllFillingOrdersHandler');
