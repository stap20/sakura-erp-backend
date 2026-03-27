import { Injectable, Inject } from '@nestjs/common';
import { ISalesOrderRepository } from '../../domain/repositories/sales-order.repo.interface';
import { SalesOrder } from '../../domain/aggregates/sales-order.aggregate';
import { SalesOrderId } from '../../domain/value-objects/sales-order-id.vo';
import { ISalesPrismaClient } from '../database/sales.prisma.client.interface';
import { SalesOrderMapper } from '../database/mappers/sales-order.mapper';

@Injectable()
export class SalesOrderRepository implements ISalesOrderRepository {
    constructor(
        @Inject(ISalesPrismaClient)
        private readonly prisma: ISalesPrismaClient,
        private readonly mapper: SalesOrderMapper,
    ) {}

    async getById(id: SalesOrderId): Promise<SalesOrder | null> {
        const entity = await this.prisma.salesOrder.findUnique({
            where: { id: id.value },
            include: { lines: true },
        });
        if (!entity) return null;
        return this.mapper.toDomain(entity as any);
    }

    async save(order: SalesOrder): Promise<void> {
        const id = order.getId().value;
        const lines = order.getLines().map((l) => this.mapper.lineToPersistence(id, l));

        await this.prisma.$transaction([
            this.prisma.salesOrderLine.deleteMany({ where: { orderId: id } }),
            this.prisma.salesOrder.upsert({
                where: { id },
                update: {
                    status: order.getStatus().value,
                    notes: order.getNotes(),
                    shippedAt: order.getShippedAt(),
                    invoiceNumber: order.getInvoiceNumber(),
                    paymentStatus: order.getPaymentStatus(),
                    paidAt: order.getPaidAt(),
                    discountCode: order.getDiscountCode(),
                    discountAmount: order.getDiscountAmount(),
                    updatedAt: order.getUpdatedAt(),
                },
                create: {
                    id,
                    customerName: order.getCustomerName(),
                    customerPhone: order.getCustomerPhone(),
                    customerContact: order.getCustomerContact(),
                    status: order.getStatus().value,
                    notes: order.getNotes(),
                    shippedAt: order.getShippedAt(),
                    invoiceNumber: order.getInvoiceNumber(),
                    paymentStatus: order.getPaymentStatus(),
                    paidAt: order.getPaidAt(),
                    discountCode: order.getDiscountCode(),
                    discountAmount: order.getDiscountAmount(),
                    createdAt: order.getCreatedAt(),
                    updatedAt: order.getUpdatedAt(),
                },
            }),
            ...lines.map((line) =>
                this.prisma.salesOrderLine.create({ data: line as any }),
            ),
        ]);
    }
}
