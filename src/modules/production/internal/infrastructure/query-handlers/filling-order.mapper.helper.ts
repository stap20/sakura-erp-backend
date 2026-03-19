import { FillingOrderEntity } from '../database/entities/filling-order.entity';
import { GetFillingOrderResponse, FillingOrderLineResponse } from '../../application/queries/get-filling-order/get-filling-order.response';

export function mapToFillingOrderResponse(entity: FillingOrderEntity): GetFillingOrderResponse {
    const lines: FillingOrderLineResponse[] = entity.lines.map((l) => ({
        id: l.id,
        variantItemId: l.variantItemId,
        variantName: l.variantName,
        quantityUnits: l.quantityUnits,
        unitWeightGm: l.unitWeightGm,
        bulkUsedGm: l.bulkUsedGm,
    }));

    return new GetFillingOrderResponse(
        entity.id,
        entity.productId,
        entity.bulkUsedGm,
        entity.notes,
        entity.status,
        entity.performedBy,
        entity.executedAt,
        lines,
        entity.createdAt,
        entity.updatedAt,
    );
}
