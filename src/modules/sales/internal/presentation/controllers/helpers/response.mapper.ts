import { GetSalesOrderResponse } from '../../../application/queries/get-sales-order/get-sales-order.response';
import { GetAllSalesOrdersResponse } from '../../../application/queries/get-all-sales-orders/get-all-sales-orders.response';
import { GetItemPricingResponse } from '../../../application/queries/get-item-pricing/get-item-pricing.response';
import { SalesOrderResponseDto } from '../../dtos/responses/sales-order.response.dto';
import { ItemPricingResponseDto } from '../../dtos/responses/item-pricing.response.dto';

export function toSalesOrderResponseDto(response: GetSalesOrderResponse): SalesOrderResponseDto {
    const dto = new SalesOrderResponseDto();
    dto.id = response.id;
    dto.customerName = response.customerName;
    dto.customerPhone = response.customerPhone;
    dto.customerContact = response.customerContact;
    dto.status = response.status;
    dto.notes = response.notes;
    dto.shippedAt = response.shippedAt;
    dto.invoiceNumber = response.invoiceNumber;
    dto.paymentStatus = response.paymentStatus;
    dto.paidAt = response.paidAt;
    dto.lines = response.lines.map((l) => ({
        id: l.id,
        itemId: l.itemId,
        itemName: l.itemName,
        measureUnit: l.measureUnit,
        quantity: l.quantity,
        unitPrice: l.unitPrice,
        isGift: l.isGift,
    }));
    dto.createdAt = response.createdAt;
    dto.updatedAt = response.updatedAt;
    return dto;
}

export function toAllSalesOrdersResponseDto(response: GetAllSalesOrdersResponse): SalesOrderResponseDto {
    const dto = new SalesOrderResponseDto();
    dto.id = response.id;
    dto.customerName = response.customerName;
    dto.customerPhone = response.customerPhone;
    dto.customerContact = response.customerContact;
    dto.status = response.status;
    dto.notes = response.notes;
    dto.shippedAt = response.shippedAt;
    dto.invoiceNumber = response.invoiceNumber;
    dto.paymentStatus = response.paymentStatus;
    dto.paidAt = response.paidAt;
    dto.lines = [];
    dto.createdAt = response.createdAt;
    dto.updatedAt = response.updatedAt;
    return dto;
}

export function toItemPricingResponseDto(response: GetItemPricingResponse): ItemPricingResponseDto {
    const dto = new ItemPricingResponseDto();
    dto.itemId = response.itemId;
    dto.itemName = response.itemName;
    dto.unitsPerBatch = response.unitsPerBatch;
    dto.materialCostPerUnit = response.materialCostPerUnit;
    dto.laborCostPerUnit = response.laborCostPerUnit;
    dto.depreciationCostPerUnit = response.depreciationCostPerUnit;
    dto.packagingCostPerUnit = response.packagingCostPerUnit;
    dto.totalCogs = response.totalCogs;
    dto.marginPercent = response.marginPercent;
    dto.suggestedPrice = response.suggestedPrice;
    return dto;
}
