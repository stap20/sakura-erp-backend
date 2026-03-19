import { GetProductQuery } from './get-product.query';
import { GetProductResponse } from './get-product.response';

export interface IGetProductHandler {
    handle(query: GetProductQuery): Promise<GetProductResponse>;
}

export const IGetProductHandler = Symbol('IGetProductHandler');
