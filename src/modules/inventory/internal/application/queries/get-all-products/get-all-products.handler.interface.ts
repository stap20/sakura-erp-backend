import { GetAllProductsQuery } from './get-all-products.query';
import { GetAllProductsResponse } from './get-all-products.response';

export interface IGetAllProductsHandler {
    handle(query: GetAllProductsQuery): Promise<GetAllProductsResponse>;
}

export const IGetAllProductsHandler = Symbol('IGetAllProductsHandler');
