import { Injectable } from '@nestjs/common';
import { Product } from '../../../domain/aggregates/product.aggregate';
import { ProductEntity } from '../entities/product.entity';

@Injectable()
export class ProductMapper {
    toDomain(entity: ProductEntity): Product {
        return Product.createFromPersistence({
            id: entity.id,
            name: entity.name,
            description: entity.description,
        });
    }

    toPersistence(product: Product): Omit<ProductEntity, 'createdAt' | 'updatedAt'> {
        return {
            id: product.getId().value,
            name: product.getName(),
            description: product.getDescription(),
        };
    }
}
