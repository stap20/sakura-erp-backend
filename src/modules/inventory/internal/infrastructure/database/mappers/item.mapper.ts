import { Injectable } from '@nestjs/common';
import { Item } from '../../../domain/aggregates/item.aggregate';
import { ItemEntity } from '../entities/item.entity';

@Injectable()
export class ItemMapper {
    toDomain(entity: ItemEntity): Item {
        return Item.createFromPersistence({
            id: entity.id,
            name: entity.name,
            type: entity.type,
            measureUnit: entity.measureUnit,
            currentStock: Number(entity.currentStock),
            categoryId: entity.categoryId,
            status: entity.status,
        });
    }

    toPersistence(
        item: Item,
    ): Omit<ItemEntity, 'createdAt' | 'updatedAt'> {
        return {
            id: item.getId().value,
            name: item.getName().value,
            type: item.getType().value,
            measureUnit: item.getMeasureUnit().value,
            currentStock: item.getCurrentStock(),
            categoryId: item.getCategoryId(),
            status: item.getStatus().value,
        };
    }
}
