import { SalesOrderLineEntity } from './sales-order-line.entity';

export class SalesOrderEntity {
    id: string;
    customerName: string;
    customerPhone: string | null;
    customerContact: string | null;
    status: string;
    notes: string | null;
    shippedAt: Date | null;
    invoiceNumber: string | null;
    paymentStatus: string | null;
    paidAt: Date | null;
    discountCode: string | null;
    discountAmount: number;
    createdAt: Date;
    updatedAt: Date;
    lines: SalesOrderLineEntity[];

    constructor(data: Partial<SalesOrderEntity>) {
        Object.assign(this, data);
    }
}
