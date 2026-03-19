import { FillingOrderLineEntity } from './filling-order-line.entity';

export class FillingOrderEntity {
    id: string;
    productId: string;
    bulkUsedGm: number;
    notes: string | null;
    status: string;
    performedBy: string | null;
    executedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    lines: FillingOrderLineEntity[];

    constructor(data: Partial<FillingOrderEntity>) {
        Object.assign(this, data);
    }
}
