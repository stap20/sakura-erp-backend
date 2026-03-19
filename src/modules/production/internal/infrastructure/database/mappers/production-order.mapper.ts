import { Injectable } from '@nestjs/common';
import { ProductionOrder } from '../../../domain/aggregates/production-order.aggregate';
import { ProductionOrderEntity } from '../entities/production-order.entity';

@Injectable()
export class ProductionOrderMapper {
    toDomain(entity: ProductionOrderEntity): ProductionOrder {
        return ProductionOrder.createFromPersistence({
            id: entity.id,
            productId: entity.productId,
            batchWeightGm: entity.batchWeightGm,
            wastePercent: entity.wastePercent,
            notes: entity.notes,
            status: entity.status,
            performedBy: entity.performedBy,
            executedAt: entity.executedAt,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        });
    }
}
