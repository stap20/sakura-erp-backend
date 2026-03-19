export class FillingOrderLineEntity {
    id: string;
    fillingOrderId: string;
    variantItemId: string;
    variantName: string;
    quantityUnits: number;
    unitWeightGm: number;
    bulkUsedGm: number;

    constructor(data: Partial<FillingOrderLineEntity>) {
        Object.assign(this, data);
    }
}
