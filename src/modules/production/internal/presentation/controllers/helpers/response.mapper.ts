import { GetProductionOrderResponse } from '../../../application/queries/get-production-order/get-production-order.response';
import { ProductionOrderResponseDto } from '../../dtos/responses/production-order.response.dto';
import { GetFillingOrderResponse } from '../../../application/queries/get-filling-order/get-filling-order.response';
import { FillingOrderResponseDto } from '../../dtos/responses/filling-order.response.dto';

export function toProductionOrderResponseDto(response: GetProductionOrderResponse): ProductionOrderResponseDto {
    const dto = new ProductionOrderResponseDto();
    dto.id = response.id;
    dto.productId = response.productId;
    dto.batchWeightGm = response.batchWeightGm;
    dto.wastePercent = response.wastePercent;
    dto.notes = response.notes;
    dto.status = response.status;
    dto.performedBy = response.performedBy;
    dto.executedAt = response.executedAt;
    dto.createdAt = response.createdAt;
    dto.updatedAt = response.updatedAt;
    return dto;
}

export function toFillingOrderResponseDto(response: GetFillingOrderResponse): FillingOrderResponseDto {
    const dto = new FillingOrderResponseDto();
    dto.id = response.id;
    dto.productId = response.productId;
    dto.bulkUsedGm = response.bulkUsedGm;
    dto.notes = response.notes;
    dto.status = response.status;
    dto.performedBy = response.performedBy;
    dto.executedAt = response.executedAt;
    dto.lines = response.lines.map((l) => ({
        id: l.id,
        variantItemId: l.variantItemId,
        variantName: l.variantName,
        quantityUnits: l.quantityUnits,
        unitWeightGm: l.unitWeightGm,
        bulkUsedGm: l.bulkUsedGm,
    }));
    dto.createdAt = response.createdAt;
    dto.updatedAt = response.updatedAt;
    return dto;
}
