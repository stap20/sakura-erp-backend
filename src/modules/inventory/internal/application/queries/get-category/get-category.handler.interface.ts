import { IQueryHandler } from 'src/shared/application/query.handler.interface';
import { GetCategoryQuery } from './get-category.query';
import { GetCategoryResponse } from './get-category.response';

export interface IGetCategoryHandler
    extends IQueryHandler<GetCategoryQuery, GetCategoryResponse> {}

export const IGetCategoryHandler = Symbol('IGetCategoryHandler');
