import { IQueryHandler } from 'src/shared/application/query.handler.interface';
import { GetRecipeVersionQuery } from './get-recipe-version.query';
import { GetRecipeVersionResponse } from './get-recipe-version.response';

export interface IGetRecipeVersionHandler
    extends IQueryHandler<GetRecipeVersionQuery, GetRecipeVersionResponse> {}

export const IGetRecipeVersionHandler = Symbol('IGetRecipeVersionHandler');
