import { IQueryHandler } from 'src/shared/application/query.handler.interface';
import { GetAllRecipeVersionsQuery } from './get-all-recipe-versions.query';
import { GetAllRecipeVersionsResponse } from './get-all-recipe-versions.response';

export interface IGetAllRecipeVersionsHandler
    extends IQueryHandler<GetAllRecipeVersionsQuery, GetAllRecipeVersionsResponse> {}

export const IGetAllRecipeVersionsHandler = Symbol('IGetAllRecipeVersionsHandler');
