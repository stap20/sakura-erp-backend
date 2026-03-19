import { Injectable, Inject } from '@nestjs/common';
import { IInventoryPrismaClient } from '../database/inventory.prisma.client.interface';
import { ItemEntity } from '../database/entities/item.entity';

@Injectable()
export class ReadItemRepository {
    constructor(
        @Inject(IInventoryPrismaClient)
        private readonly prisma: IInventoryPrismaClient,
    ) {}

    async getById(id: string): Promise<ItemEntity | null> {
        const item = await this.prisma.item.findUnique({
            where: { id },
            include: {
                transactions: {
                    where: { type: 'RESTOCK', unitPrice: { not: null } },
                    orderBy: { createdAt: 'desc' },
                    take: 1,
                },
            },
        });

        if (!item) return null;

        const lastUnitPrice = item.transactions[0]?.unitPrice
            ? Number(item.transactions[0].unitPrice)
            : null;

        return new ItemEntity({
            ...item,
            currentStock: Number(item.currentStock),
            unitWeightGm: item.unitWeightGm ?? null,
            lastUnitPrice,
        });
    }

    async search(
        offset: number = 0,
        limit: number = 20,
        filter: object = {},
    ): Promise<ItemEntity[]> {
        const items = await this.prisma.item.findMany({
            where: filter,
            skip: offset,
            take: limit,
            orderBy: [{ name: 'asc' }],
        });

        return items.map(
            (item) =>
                new ItemEntity({
                    ...item,
                    currentStock: Number(item.currentStock),
                    unitWeightGm: item.unitWeightGm ?? null,
                    lastUnitPrice: null,
                }),
        );
    }

    async hasTransactions(itemId: string): Promise<boolean> {
        const count = await this.prisma.inventoryTransaction.count({
            where: { itemId },
        });
        return count > 0;
    }
}
