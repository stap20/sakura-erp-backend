import { Injectable } from '@nestjs/common';
import { ProductionOrder } from '../../../domain/aggregates/production-order.aggregate';
import { ProductionOrderEntity } from '../entities/production-order.entity';

@Injectable()
export class ProductionOrderMapper {
    toDomain(entity: ProductionOrderEntity): ProductionOrder {
        return ProductionOrder.createFromPersistence({
            id: entity.id,
            productId: entity.productId,
            productName: entity.productName,
            unitWeightGm: entity.unitWeightGm,
            recipeVersionId: entity.recipeVersionId,
            recipeVersionNumber: entity.recipeVersionNumber,
            quantityUnits: entity.quantityUnits,
            totalBatchWeightGm: entity.totalBatchWeightGm,
            wastePercent: entity.wastePercent,
            status: entity.status,
            notes: entity.notes,
            totalMaterialCost: entity.totalMaterialCost,
            executedAt: entity.executedAt,
            lines: entity.lines.map((l) => ({
                id: l.id,
                itemId: l.itemId,
                itemName: l.itemName,
                isAddOn: l.isAddOn,
                ingredientCategory: l.ingredientCategory,
                recipePercent: l.recipePercent,
                adjustedQuantityGm: l.adjustedQuantityGm,
                unitPrice: l.unitPrice,
                lineCost: l.lineCost,
            })),
        });
    }

    toPersistence(
        order: ProductionOrder,
    ): Omit<ProductionOrderEntity, 'createdAt' | 'updatedAt'> {
        return {
            id: order.getId().value,
            productId: order.getProductId(),
            productName: order.getProductName(),
            unitWeightGm: order.getUnitWeightGm(),
            recipeVersionId: order.getRecipeVersionId(),
            recipeVersionNumber: order.getRecipeVersionNumber(),
            quantityUnits: order.getQuantityUnits(),
            totalBatchWeightGm: order.getTotalBatchWeightGm(),
            wastePercent: order.getWastePercent(),
            status: order.getStatus().value,
            notes: order.getNotes(),
            totalMaterialCost: order.getTotalMaterialCost(),
            executedAt: order.getExecutedAt(),
            lines: order.getLines().map((l) => ({
                id: l.id,
                orderId: order.getId().value,
                itemId: l.itemId,
                itemName: l.itemName,
                isAddOn: l.isAddOn,
                ingredientCategory: l.ingredientCategory,
                recipePercent: l.recipePercent,
                adjustedQuantityGm: l.adjustedQuantityGm,
                unitPrice: l.unitPrice,
                lineCost: l.lineCost,
            })),
        };
    }
}
