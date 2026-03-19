import { GetPurchaseOrderResponse } from '../../../application/queries/get-purchase-order/get-purchase-order.response';
import { PurchaseOrderResponseDto } from '../../dtos/responses/purchase-order.response.dto';

export function toPurchaseOrderResponseDto(response: GetPurchaseOrderResponse): PurchaseOrderResponseDto {
    const dto = new PurchaseOrderResponseDto();
    dto.id = response.id;
    dto.vendorId = response.vendorId;
    dto.vendorName = response.vendorName;
    dto.vendorPhone = response.vendorPhone;
    dto.vendorContact = response.vendorContact;
    dto.status = response.status;
    dto.notes = response.notes;
    dto.expectedDeliveryDate = response.expectedDeliveryDate;
    dto.receivedAt = response.receivedAt;
    dto.lines = response.lines.map((l) => ({
        id: l.id,
        itemId: l.itemId,
        itemName: l.itemName,
        measureUnit: l.measureUnit,
        quantity: l.quantity,
        unitPrice: l.unitPrice,
    }));
    dto.createdAt = response.createdAt;
    dto.updatedAt = response.updatedAt;
    return dto;
}
