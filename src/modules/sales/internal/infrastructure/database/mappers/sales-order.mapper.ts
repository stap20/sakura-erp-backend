import { Injectable } from '@nestjs/common';
import { SalesOrder } from '../../../domain/aggregates/sales-order.aggregate';
import { SalesOrderLine } from '../../../domain/entities/sales-order-line.entity';
import { SalesOrderEntity } from '../entities/sales-order.entity';
import { SalesOrderLineEntity } from '../entities/sales-order-line.entity';

@Injectable()
export class SalesOrderMapper {
    toDomain(entity: SalesOrderEntity): SalesOrder {
        const lines = entity.lines.map(
            (l) =>
                new SalesOrderLine({
                    id: l.id,
                    itemId: l.itemId,
                    itemName: l.itemName,
                    measureUnit: l.measureUnit,
                    quantity: Number(l.quantity),
                    unitPrice: Number(l.unitPrice),
                    isGift: l.isGift,
                }),
        );

        return SalesOrder.createFromPersistence({
            id: entity.id,
            customerName: entity.customerName,
            customerPhone: entity.customerPhone,
            customerContact: entity.customerContact,
            status: entity.status,
            notes: entity.notes,
            shippedAt: entity.shippedAt,
            invoiceNumber: entity.invoiceNumber ?? null,
            paymentStatus: entity.paymentStatus ?? null,
            paidAt: entity.paidAt ?? null,
            discountCode: (entity as any).discountCode ?? null,
            discountAmount: Number((entity as any).discountAmount ?? 0),
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
            lines,
        });
    }

    lineToPersistence(orderId: string, line: SalesOrderLine): SalesOrderLineEntity {
        return {
            id: line.id,
            orderId,
            itemId: line.itemId,
            itemName: line.itemName,
            measureUnit: line.measureUnit,
            quantity: line.quantity,
            unitPrice: line.unitPrice,
            isGift: line.isGift,
        } as SalesOrderLineEntity;
    }
}
