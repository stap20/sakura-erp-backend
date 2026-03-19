export class PackagingComponentEntity {
    id: string;
    variantItemId: string;
    packagingItemId: string;
    qtyPerUnit: number;

    constructor(data: Partial<PackagingComponentEntity>) {
        Object.assign(this, data);
    }
}
