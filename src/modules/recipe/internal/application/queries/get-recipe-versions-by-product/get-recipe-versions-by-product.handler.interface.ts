import { IQueryHandler } from 'src/shared/application/query.handler.interface';
import { GetRecipeVersionsByProductQuery } from './get-recipe-versions-by-product.query';
import { GetRecipeVersionsByProductResponse } from './get-recipe-versions-by-product.response';

export interface IGetRecipeVersionsByProductHandler
    extends IQueryHandler<GetRecipeVersionsByProductQuery, GetRecipeVersionsByProductResponse> {}

export const IGetRecipeVersionsByProductHandler = Symbol('IGetRecipeVersionsByProductHandler');
