import { Injectable, Inject } from '@nestjs/common';
import { IGetItemTransactionsHandler } from '../../application/queries/get-item-transactions/get-item-transactions.handler.interface';
import { GetItemTransactionsQuery } from '../../application/queries/get-item-transactions/get-item-transactions.query';
import { GetItemTransactionsResponse } from '../../application/queries/get-item-transactions/get-item-transactions.response';
import { IInventoryPrismaClient } from '../database/inventory.prisma.client.interface';
import { InventoryTransactionEntity } from '../database/entities/inventory-transaction.entity';

@Injectable()
export class GetItemTransactionsHandler
    implements IGetItemTransactionsHandler
{
    constructor(
        @Inject(IInventoryPrismaClient)
        private readonly prisma: IInventoryPrismaClient,
    ) {}

    async handle(
        query: GetItemTransactionsQuery,
    ): Promise<GetItemTransactionsResponse> {
        const filter: any = { itemId: query.itemId };

        if (query.type) {
            filter.type = query.type;
        }

        const transactions = await this.prisma.inventoryTransaction.findMany({
            where: filter,
            skip: query.offset,
            take: query.limit,
            orderBy: [{ createdAt: 'desc' }],
        });

        return new GetItemTransactionsResponse(
            transactions.map((t) => ({
                id: t.id,
                itemId: t.itemId,
                type: t.type,
                quantity: Number(t.quantity),
                vendorId: t.vendorId,
                unitPrice: t.unitPrice ? Number(t.unitPrice) : null,
                performedBy: t.performedBy,
                notes: t.notes,
                createdAt: t.createdAt,
            })),
        );
    }
}
