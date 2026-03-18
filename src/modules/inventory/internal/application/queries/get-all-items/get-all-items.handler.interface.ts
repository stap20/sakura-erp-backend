import { IQueryHandler } from 'src/shared/application/query.handler.interface';
import { GetAllItemsQuery } from './get-all-items.query';
import { GetAllItemsResponse } from './get-all-items.response';

export interface IGetAllItemsHandler
    extends IQueryHandler<GetAllItemsQuery, GetAllItemsResponse> {}

export const IGetAllItemsHandler = Symbol('IGetAllItemsHandler');
