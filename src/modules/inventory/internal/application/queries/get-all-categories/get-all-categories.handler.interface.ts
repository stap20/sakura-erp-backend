import { IQueryHandler } from 'src/shared/application/query.handler.interface';
import { GetAllCategoriesQuery } from './get-all-categories.query';
import { GetAllCategoriesResponse } from './get-all-categories.response';

export interface IGetAllCategoriesHandler
    extends IQueryHandler<GetAllCategoriesQuery, GetAllCategoriesResponse> {}

export const IGetAllCategoriesHandler = Symbol('IGetAllCategoriesHandler');
