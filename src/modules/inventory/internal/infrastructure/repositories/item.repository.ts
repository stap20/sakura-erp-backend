import { Injectable, Inject } from '@nestjs/common';
import { IItemRepository, StockTransactionData } from '../../domain/repositories/item.repo.interface';
import { Item } from '../../domain/aggregates/item.aggregate';
import { ItemId } from '../../domain/value-objects/item-id.vo';
import { ItemName } from '../../domain/value-objects/item-name.vo';
import { IInventoryPrismaClient } from '../database/inventory.prisma.client.interface';
import { ItemMapper } from '../database/mappers/item.mapper';

@Injectable()
export class ItemRepository implements IItemRepository {
    constructor(
        @Inject(IInventoryPrismaClient)
        private readonly prisma: IInventoryPrismaClient,
        private readonly itemMapper: ItemMapper,
    ) {}

    async getById(id: ItemId): Promise<Item | null> {
        const entity = await this.prisma.item.findUnique({
            where: { id: id.value },
        });

        if (!entity) return null;

        return this.itemMapper.toDomain({
            ...entity,
            currentStock: Number(entity.currentStock),
        });
    }

    async getByName(name: ItemName): Promise<Item | null> {
        const entity = await this.prisma.item.findUnique({
            where: { name: name.value },
        });

        if (!entity) return null;

        return this.itemMapper.toDomain({
            ...entity,
            currentStock: Number(entity.currentStock),
        });
    }

    async save(item: Item): Promise<void> {
        const data = this.itemMapper.toPersistence(item);

        await this.prisma.item.upsert({
            where: { id: data.id },
            update: {
                name: data.name,
                measureUnit: data.measureUnit,
                currentStock: data.currentStock,
                categoryId: data.categoryId,
                productId: data.productId,
                status: data.status,
                unitWeightGm: data.unitWeightGm,
                weightedAverageUnitPrice: data.weightedAverageUnitPrice,
                updatedAt: new Date(),
            },
            create: data,
        });
    }

    async saveWithTransaction(
        item: Item,
        transaction: StockTransactionData,
    ): Promise<void> {
        const data = this.itemMapper.toPersistence(item);

        await this.prisma.$transaction([
            this.prisma.item.update({
                where: { id: data.id },
                data: {
                    currentStock: data.currentStock,
                    updatedAt: new Date(),
                },
            }),
            this.prisma.inventoryTransaction.create({
                data: {
                    id: transaction.id,
                    itemId: data.id,
                    type: transaction.type,
                    quantity: transaction.quantity,
                    vendorId: transaction.vendorId,
                    unitPrice: transaction.unitPrice,
                    performedBy: transaction.performedBy,
                    notes: transaction.notes,
                },
            }),
        ]);
    }
}
