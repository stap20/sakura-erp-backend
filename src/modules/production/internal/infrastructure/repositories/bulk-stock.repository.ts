import { Injectable, Inject } from '@nestjs/common';
import { IBulkStockRepository } from '../../domain/repositories/bulk-stock.repo.interface';
import { BulkStock } from '../../domain/entities/bulk-stock.entity';
import { IProductionPrismaClient } from '../database/production.prisma.client.interface';

@Injectable()
export class BulkStockRepository implements IBulkStockRepository {
    constructor(
        @Inject(IProductionPrismaClient)
        private readonly prisma: IProductionPrismaClient,
    ) {}

    async getByProductId(productId: string): Promise<BulkStock | null> {
        const entity = await this.prisma.bulkStock.findUnique({
            where: { productId },
        });
        if (!entity) return null;
        return BulkStock.create(entity.id, entity.productId, entity.availableGm);
    }

    async save(bulkStock: BulkStock): Promise<void> {
        await this.prisma.bulkStock.upsert({
            where: { productId: bulkStock.getProductId() },
            update: {
                availableGm: bulkStock.getAvailableGm(),
            },
            create: {
                id: bulkStock.getId().value,
                productId: bulkStock.getProductId(),
                availableGm: bulkStock.getAvailableGm(),
            },
        });
    }
}
