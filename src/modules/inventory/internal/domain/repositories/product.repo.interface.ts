import { Product } from '../aggregates/product.aggregate';
import { ProductId } from '../value-objects/product-id.vo';

export interface IProductRepository {
    getById(id: ProductId): Promise<Product | null>;
    getByName(name: string): Promise<Product | null>;
    save(product: Product): Promise<void>;
}

export const IProductRepository = Symbol('IProductRepository');
