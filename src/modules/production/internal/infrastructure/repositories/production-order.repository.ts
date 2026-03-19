import { Injectable, Inject } from '@nestjs/common';
import { IProductionOrderRepository } from '../../domain/repositories/production-order.repo.interface';
import { ProductionOrder } from '../../domain/aggregates/production-order.aggregate';
import { ProductionOrderId } from '../../domain/value-objects/production-order-id.vo';
import { IProductionPrismaClient } from '../database/production.prisma.client.interface';
import { ProductionOrderMapper } from '../database/mappers/production-order.mapper';

@Injectable()
export class ProductionOrderRepository implements IProductionOrderRepository {
    constructor(
        @Inject(IProductionPrismaClient)
        private readonly prisma: IProductionPrismaClient,
        private readonly mapper: ProductionOrderMapper,
    ) {}

    async getById(id: ProductionOrderId): Promise<ProductionOrder | null> {
        const entity = await this.prisma.productionOrder.findUnique({
            where: { id: id.value },
            include: { lines: true },
        });
        if (!entity) return null;
        return this.mapper.toDomain(entity as any);
    }

    async save(order: ProductionOrder): Promise<void> {
        const data = this.mapper.toPersistence(order);

        await this.prisma.productionOrder.upsert({
            where: { id: data.id },
            update: {
                status: data.status,
                notes: data.notes,
                totalMaterialCost: data.totalMaterialCost,
                executedAt: data.executedAt,
                updatedAt: new Date(),
                lines: {
                    deleteMany: {},
                    create: data.lines.map((l) => ({
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
                },
            },
            create: {
                id: data.id,
                productId: data.productId,
                productName: data.productName,
                unitWeightGm: data.unitWeightGm,
                recipeVersionId: data.recipeVersionId,
                recipeVersionNumber: data.recipeVersionNumber,
                quantityUnits: data.quantityUnits,
                totalBatchWeightGm: data.totalBatchWeightGm,
                wastePercent: data.wastePercent,
                status: data.status,
                notes: data.notes,
                totalMaterialCost: data.totalMaterialCost,
                executedAt: data.executedAt,
                lines: {
                    create: data.lines.map((l) => ({
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
                },
            },
        });
    }
}
