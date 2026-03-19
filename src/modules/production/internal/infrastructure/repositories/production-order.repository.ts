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
        });
        if (!entity) return null;
        return this.mapper.toDomain(entity as any);
    }

    async save(order: ProductionOrder): Promise<void> {
        const id = order.getId().value;
        await this.prisma.productionOrder.upsert({
            where: { id },
            update: {
                batchWeightGm: order.getBatchWeightGm(),
                wastePercent: order.getWastePercent(),
                notes: order.getNotes(),
                status: order.getStatus().value,
                performedBy: order.getPerformedBy(),
                executedAt: order.getExecutedAt(),
                updatedAt: order.getUpdatedAt(),
            },
            create: {
                id,
                productId: order.getProductId(),
                batchWeightGm: order.getBatchWeightGm(),
                wastePercent: order.getWastePercent(),
                notes: order.getNotes(),
                status: order.getStatus().value,
                performedBy: order.getPerformedBy(),
                executedAt: order.getExecutedAt(),
                createdAt: order.getCreatedAt(),
                updatedAt: order.getUpdatedAt(),
            },
        });
    }
}
