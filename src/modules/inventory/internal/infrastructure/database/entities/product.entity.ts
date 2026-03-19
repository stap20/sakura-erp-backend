export class ProductEntity {
    id: string;
    name: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<ProductEntity>) {
        Object.assign(this, data);
    }
}
