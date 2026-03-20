export class ProductEntity {
    id: string;
    name: string;
    description: string | null;
    referenceBatchGm: number | null;
    referenceDurationMin: number | null;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<ProductEntity>) {
        Object.assign(this, data);
    }
}
