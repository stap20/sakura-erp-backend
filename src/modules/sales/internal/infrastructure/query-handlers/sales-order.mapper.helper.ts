import { SalesOrderEntity } from '../database/entities/sales-order.entity';
import { GetSalesOrderResponse, SalesOrderLineResponse } from '../../application/queries/get-sales-order/get-sales-order.response';
import { GetAllSalesOrdersResponse } from '../../application/queries/get-all-sales-orders/get-all-sales-orders.response';

export function mapToGetSalesOrderResponse(entity: SalesOrderEntity): GetSalesOrderResponse {
    const lines: SalesOrderLineResponse[] = entity.lines.map((l) => ({
        id: l.id,
        itemId: l.itemId,
        itemName: l.itemName,
        measureUnit: l.measureUnit,
        quantity: Number(l.quantity),
        unitPrice: Number(l.unitPrice),
        isGift: (l as any).isGift ?? false,
    }));

    return new GetSalesOrderResponse(
        entity.id,
        entity.customerName,
        entity.customerPhone,
        entity.customerContact,
        entity.status,
        entity.notes,
        entity.shippedAt,
        (entity as any).invoiceNumber ?? null,
        (entity as any).paymentStatus ?? null,
        (entity as any).paidAt ?? null,
        (entity as any).discountCode ?? null,
        Number((entity as any).discountAmount ?? 0),
        lines,
        entity.createdAt,
        entity.updatedAt,
    );
}

export function mapToGetAllSalesOrdersResponse(entity: SalesOrderEntity): GetAllSalesOrdersResponse {
    return new GetAllSalesOrdersResponse(
        entity.id,
        entity.customerName,
        entity.customerPhone,
        entity.customerContact,
        entity.status,
        entity.notes,
        entity.shippedAt,
        (entity as any).invoiceNumber ?? null,
        (entity as any).paymentStatus ?? null,
        (entity as any).paidAt ?? null,
        (entity as any).discountCode ?? null,
        Number((entity as any).discountAmount ?? 0),
        entity.lines.length,
        entity.createdAt,
        entity.updatedAt,
    );
}
