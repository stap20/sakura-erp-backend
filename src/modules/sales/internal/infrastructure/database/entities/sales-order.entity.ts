import { SalesOrderLineEntity } from './sales-order-line.entity';

export class SalesOrderEntity {
    id: string;
    customerName: string;
    customerPhone: string | null;
    customerContact: string | null;
    status: string;
    notes: string | null;
    shippedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    lines: SalesOrderLineEntity[];

    constructor(data: Partial<SalesOrderEntity>) {
        Object.assign(this, data);
    }
}
