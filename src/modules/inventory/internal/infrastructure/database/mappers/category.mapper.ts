import { Injectable } from '@nestjs/common';
import { Category } from '../../../domain/aggregates/category.aggregate';
import { CategoryEntity } from '../entities/category.entity';

@Injectable()
export class CategoryMapper {
    toDomain(entity: CategoryEntity): Category {
        return Category.createFromPersistence({
            id: entity.id,
            name: entity.name,
            description: entity.description,
            status: entity.status,
        });
    }

    toPersistence(
        category: Category,
    ): Omit<CategoryEntity, 'createdAt' | 'updatedAt'> {
        return {
            id: category.getId().value,
            name: category.getName().value,
            description: category.getDescription(),
            status: category.getStatus().value,
        };
    }
}
