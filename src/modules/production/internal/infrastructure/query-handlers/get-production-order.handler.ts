import { Injectable } from '@nestjs/common';
import { IGetProductionOrderHandler } from '../../application/queries/get-production-order/get-production-order.handler.interface';
import { GetProductionOrderQuery } from '../../application/queries/get-production-order/get-production-order.query';
import {
    GetProductionOrderResponse,
    ProductionOrderLineResponse,
} from '../../application/queries/get-production-order/get-production-order.response';
import { ReadProductionOrderRepository } from '../repositories/read-production-order.repository';
import { ProductionOrderNotFoundApplicationError } from '../../application/errors/production.errors';
import { ProductionOrderEntity } from '../database/entities/production-order.entity';

export function mapToProductionOrderResponse(
    entity: ProductionOrderEntity,
): GetProductionOrderResponse {
    const lines: ProductionOrderLineResponse[] = entity.lines.map((l) => ({
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

    return new GetProductionOrderResponse(
        entity.id,
        entity.productId,
        entity.productName,
        entity.unitWeightGm,
        entity.recipeVersionId,
        entity.recipeVersionNumber,
        entity.quantityUnits,
        entity.totalBatchWeightGm,
        entity.wastePercent,
        entity.status,
        entity.notes,
        entity.totalMaterialCost,
        entity.executedAt,
        lines,
        entity.createdAt,
        entity.updatedAt,
    );
}

@Injectable()
export class GetProductionOrderHandler implements IGetProductionOrderHandler {
    constructor(private readonly readRepo: ReadProductionOrderRepository) {}

    async handle(query: GetProductionOrderQuery): Promise<GetProductionOrderResponse> {
        const entity = await this.readRepo.getById(query.orderId);
        if (!entity) throw new ProductionOrderNotFoundApplicationError(query.orderId);
        return mapToProductionOrderResponse(entity);
    }
}
