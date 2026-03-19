import { Injectable } from '@nestjs/common';
import { PurchaseOrder } from '../../../domain/aggregates/purchase-order.aggregate';
import { PurchaseOrderLine } from '../../../domain/entities/purchase-order-line.entity';
import { PurchaseOrderEntity } from '../entities/purchase-order.entity';
import { PurchaseOrderLineEntity } from '../entities/purchase-order-line.entity';

@Injectable()
export class PurchaseOrderMapper {
    toDomain(entity: PurchaseOrderEntity): PurchaseOrder {
        const lines = entity.lines.map(
            (l) =>
                new PurchaseOrderLine({
                    id: l.id,
                    itemId: l.itemId,
                    itemName: l.itemName,
                    measureUnit: l.measureUnit,
                    quantity: Number(l.quantity),
                    unitPrice: Number(l.unitPrice),
                }),
        );

        return PurchaseOrder.createFromPersistence({
            id: entity.id,
            vendorId: entity.vendorId,
            vendorName: entity.vendorName,
            vendorPhone: entity.vendorPhone,
            vendorContact: entity.vendorContact,
            status: entity.status,
            notes: entity.notes,
            expectedDeliveryDate: entity.expectedDeliveryDate,
            receivedAt: entity.receivedAt,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
            lines,
        });
    }

    lineToPersistence(orderId: string, line: PurchaseOrderLine): PurchaseOrderLineEntity {
        return {
            id: line.id,
            orderId,
            itemId: line.itemId,
            itemName: line.itemName,
            measureUnit: line.measureUnit,
            quantity: line.quantity,
            unitPrice: line.unitPrice,
        } as PurchaseOrderLineEntity;
    }
}
