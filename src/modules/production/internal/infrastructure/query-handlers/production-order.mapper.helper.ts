import { ProductionOrderEntity } from '../database/entities/production-order.entity';
import { GetProductionOrderResponse } from '../../application/queries/get-production-order/get-production-order.response';

export function mapToProductionOrderResponse(entity: ProductionOrderEntity): GetProductionOrderResponse {
    return new GetProductionOrderResponse(
        entity.id,
        entity.productId,
        entity.batchWeightGm,
        entity.wastePercent,
        entity.notes,
        entity.status,
        entity.performedBy,
        entity.executedAt,
        entity.createdAt,
        entity.updatedAt,
    );
}
