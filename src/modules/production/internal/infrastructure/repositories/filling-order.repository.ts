import { Injectable, Inject } from '@nestjs/common';
import { IFillingOrderRepository } from '../../domain/repositories/filling-order.repo.interface';
import { FillingOrder } from '../../domain/aggregates/filling-order.aggregate';
import { FillingOrderId } from '../../domain/value-objects/filling-order-id.vo';
import { IProductionPrismaClient } from '../database/production.prisma.client.interface';
import { FillingOrderMapper } from '../database/mappers/filling-order.mapper';

@Injectable()
export class FillingOrderRepository implements IFillingOrderRepository {
    constructor(
        @Inject(IProductionPrismaClient)
        private readonly prisma: IProductionPrismaClient,
        private readonly mapper: FillingOrderMapper,
    ) {}

    async getById(id: FillingOrderId): Promise<FillingOrder | null> {
        const entity = await this.prisma.fillingOrder.findUnique({
            where: { id: id.value },
            include: { lines: true },
        });
        if (!entity) return null;
        return this.mapper.toDomain(entity as any);
    }

    async save(order: FillingOrder): Promise<void> {
        const id = order.getId().value;
        const lines = order.getLines().map((l) => ({
            id: l.getId().value,
            fillingOrderId: id,
            variantItemId: l.getVariantItemId(),
            variantName: l.getVariantName(),
            quantityUnits: l.getQuantityUnits(),
            unitWeightGm: l.getUnitWeightGm(),
            bulkUsedGm: l.getBulkUsedGm(),
        }));

        await this.prisma.$transaction([
            this.prisma.fillingOrderLine.deleteMany({ where: { fillingOrderId: id } }),
            this.prisma.fillingOrder.upsert({
                where: { id },
                update: {
                    bulkUsedGm: order.getBulkUsedGm(),
                    notes: order.getNotes(),
                    status: order.getStatus().value,
                    performedBy: order.getPerformedBy(),
                    executedAt: order.getExecutedAt(),
                    updatedAt: order.getUpdatedAt(),
                },
                create: {
                    id,
                    productId: order.getProductId(),
                    bulkUsedGm: order.getBulkUsedGm(),
                    notes: order.getNotes(),
                    status: order.getStatus().value,
                    performedBy: order.getPerformedBy(),
                    executedAt: order.getExecutedAt(),
                    createdAt: order.getCreatedAt(),
                    updatedAt: order.getUpdatedAt(),
                },
            }),
            ...lines.map((line) =>
                this.prisma.fillingOrderLine.create({ data: line as any }),
            ),
        ]);
    }
}
