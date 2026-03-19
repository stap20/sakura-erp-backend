import { Injectable } from '@nestjs/common';
import { FillingOrder } from '../../../domain/aggregates/filling-order.aggregate';
import { FillingOrderEntity } from '../entities/filling-order.entity';

@Injectable()
export class FillingOrderMapper {
    toDomain(entity: FillingOrderEntity): FillingOrder {
        return FillingOrder.createFromPersistence({
            id: entity.id,
            productId: entity.productId,
            bulkUsedGm: entity.bulkUsedGm,
            notes: entity.notes,
            status: entity.status,
            performedBy: entity.performedBy,
            executedAt: entity.executedAt,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
            lines: entity.lines.map((l) => ({
                id: l.id,
                variantItemId: l.variantItemId,
                variantName: l.variantName,
                quantityUnits: l.quantityUnits,
                unitWeightGm: l.unitWeightGm,
                bulkUsedGm: l.bulkUsedGm,
            })),
        });
    }
}
