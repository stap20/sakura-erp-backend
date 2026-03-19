import { Injectable, Inject } from '@nestjs/common';
import { IPurchaseOrderRepository } from '../../domain/repositories/purchase-order.repo.interface';
import { PurchaseOrder } from '../../domain/aggregates/purchase-order.aggregate';
import { PurchaseOrderId } from '../../domain/value-objects/purchase-order-id.vo';
import { IPurchasePrismaClient } from '../database/purchase.prisma.client.interface';
import { PurchaseOrderMapper } from '../database/mappers/purchase-order.mapper';

@Injectable()
export class PurchaseOrderRepository implements IPurchaseOrderRepository {
    constructor(
        @Inject(IPurchasePrismaClient)
        private readonly prisma: IPurchasePrismaClient,
        private readonly mapper: PurchaseOrderMapper,
    ) {}

    async getById(id: PurchaseOrderId): Promise<PurchaseOrder | null> {
        const entity = await this.prisma.purchaseOrder.findUnique({
            where: { id: id.value },
            include: { lines: true },
        });
        if (!entity) return null;
        return this.mapper.toDomain(entity as any);
    }

    async save(order: PurchaseOrder): Promise<void> {
        const id = order.getId().value;
        const lines = order.getLines().map((l) => this.mapper.lineToPersistence(id, l));

        await this.prisma.$transaction([
            this.prisma.purchaseOrderLine.deleteMany({ where: { orderId: id } }),
            this.prisma.purchaseOrder.upsert({
                where: { id },
                update: {
                    status: order.getStatus().value,
                    notes: order.getNotes(),
                    expectedDeliveryDate: order.getExpectedDeliveryDate(),
                    receivedAt: order.getReceivedAt(),
                    updatedAt: order.getUpdatedAt(),
                },
                create: {
                    id,
                    vendorId: order.getVendorId(),
                    vendorName: order.getVendorName(),
                    vendorPhone: order.getVendorPhone(),
                    vendorContact: order.getVendorContact(),
                    status: order.getStatus().value,
                    notes: order.getNotes(),
                    expectedDeliveryDate: order.getExpectedDeliveryDate(),
                    receivedAt: order.getReceivedAt(),
                    createdAt: order.getCreatedAt(),
                    updatedAt: order.getUpdatedAt(),
                },
            }),
            ...lines.map((line) =>
                this.prisma.purchaseOrderLine.create({ data: line as any }),
            ),
        ]);
    }
}
