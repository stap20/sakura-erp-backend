import { GetProductionOrderResponse } from '../../../application/queries/get-production-order/get-production-order.response';
import { ProductionOrderResponseDto } from '../../dtos/responses/production-order.response.dto';

export function toProductionOrderResponseDto(
    response: GetProductionOrderResponse,
): ProductionOrderResponseDto {
    const dto = new ProductionOrderResponseDto();
    dto.id = response.id;
    dto.productId = response.productId;
    dto.productName = response.productName;
    dto.unitWeightGm = response.unitWeightGm;
    dto.recipeVersionId = response.recipeVersionId;
    dto.recipeVersionNumber = response.recipeVersionNumber;
    dto.quantityUnits = response.quantityUnits;
    dto.totalBatchWeightGm = response.totalBatchWeightGm;
    dto.wastePercent = response.wastePercent;
    dto.status = response.status;
    dto.notes = response.notes;
    dto.totalMaterialCost = response.totalMaterialCost;
    dto.executedAt = response.executedAt;
    dto.lines = response.lines.map((l) => ({
        id: l.id,
        itemId: l.itemId,
        itemName: l.itemName,
        isAddOn: l.isAddOn,
        ingredientCategory: l.ingredientCategory,
        recipePercent: l.recipePercent,
        adjustedQuantityGm: l.adjustedQuantityGm,
        unitPrice: l.unitPrice,
        lineCost: l.lineCost,
    }));
    dto.createdAt = response.createdAt;
    dto.updatedAt = response.updatedAt;
    return dto;
}
