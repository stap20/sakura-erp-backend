import { Injectable, Inject } from '@nestjs/common';
import { IProductionPrismaClient } from '../database/production.prisma.client.interface';

export interface BulkStockRecord {
    id: string;
    productId: string;
    availableGm: number;
    updatedAt: Date;
}

@Injectable()
export class ReadBulkStockRepository {
    constructor(
        @Inject(IProductionPrismaClient)
        private readonly prisma: IProductionPrismaClient,
    ) {}

    async findAll(): Promise<BulkStockRecord[]> {
        const rows = await this.prisma.bulkStock.findMany({
            orderBy: { updatedAt: 'desc' },
        });
        return rows.map((r: any) => ({
            id: r.id,
            productId: r.productId,
            availableGm: Number(r.availableGm),
            updatedAt: r.updatedAt,
        }));
    }
}
