import { Injectable } from '@nestjs/common';
import { Item } from '../../../domain/aggregates/item.aggregate';
import { ItemEntity } from '../entities/item.entity';

@Injectable()
export class ItemMapper {
    toDomain(entity: Omit<ItemEntity, 'lastUnitPrice'>): Item {
        return Item.createFromPersistence({
            id: entity.id,
            name: entity.name,
            type: entity.type,
            measureUnit: entity.measureUnit,
            currentStock: Number(entity.currentStock),
            categoryId: entity.categoryId,
            status: entity.status,
            unitWeightGm: entity.unitWeightGm ?? null,
        });
    }

    toPersistence(
        item: Item,
    ): Omit<ItemEntity, 'createdAt' | 'updatedAt' | 'lastUnitPrice'> {
        return {
            id: item.getId().value,
            name: item.getName().value,
            type: item.getType().value,
            measureUnit: item.getMeasureUnit().value,
            currentStock: item.getCurrentStock(),
            categoryId: item.getCategoryId(),
            unitWeightGm: item.getUnitWeightGm(),
            status: item.getStatus().value,
        };
    }
}
