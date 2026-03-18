import { IQueryHandler } from 'src/shared/application/query.handler.interface';
import { GetItemQuery } from './get-item.query';
import { GetItemResponse } from './get-item.response';

export interface IGetItemHandler
    extends IQueryHandler<GetItemQuery, GetItemResponse> {}

export const IGetItemHandler = Symbol('IGetItemHandler');
