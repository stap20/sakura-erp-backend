import { IQueryHandler } from 'src/shared/application/query.handler.interface';
import { GetActiveRecipeByProductQuery } from './get-active-recipe-by-product.query';
import { GetActiveRecipeByProductResponse } from './get-active-recipe-by-product.response';

export interface IGetActiveRecipeByProductHandler
    extends IQueryHandler<GetActiveRecipeByProductQuery, GetActiveRecipeByProductResponse> {}

export const IGetActiveRecipeByProductHandler = Symbol('IGetActiveRecipeByProductHandler');
