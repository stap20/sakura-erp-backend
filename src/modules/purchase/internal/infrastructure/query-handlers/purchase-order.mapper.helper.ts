import { PurchaseOrderEntity } from '../database/entities/purchase-order.entity';
import { GetPurchaseOrderResponse, PurchaseOrderLineResponse } from '../../application/queries/get-purchase-order/get-purchase-order.response';

export function mapToPurchaseOrderResponse(entity: PurchaseOrderEntity): GetPurchaseOrderResponse {
    const lines: PurchaseOrderLineResponse[] = entity.lines.map((l) => ({
        id: l.id,
        itemId: l.itemId,
        itemName: l.itemName,
        measureUnit: l.measureUnit,
        quantity: Number(l.quantity),
        unitPrice: Number(l.unitPrice),
    }));

    return new GetPurchaseOrderResponse(
        entity.id,
        entity.vendorId,
        entity.vendorName,
        entity.vendorPhone,
        entity.vendorContact,
        entity.status,
        entity.notes,
        entity.expectedDeliveryDate,
        entity.receivedAt,
        lines,
        entity.createdAt,
        entity.updatedAt,
    );
}
