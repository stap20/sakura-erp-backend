import { PurchaseOrderLineEntity } from './purchase-order-line.entity';

export class PurchaseOrderEntity {
    id: string;
    vendorId: string;
    vendorName: string;
    vendorPhone: string | null;
    vendorContact: string | null;
    status: string;
    notes: string | null;
    expectedDeliveryDate: Date | null;
    receivedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    lines: PurchaseOrderLineEntity[];

    constructor(data: Partial<PurchaseOrderEntity>) {
        Object.assign(this, data);
    }
}
