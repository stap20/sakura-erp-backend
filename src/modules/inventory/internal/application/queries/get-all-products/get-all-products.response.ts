export interface ProductSummary {
    id: string;
    name: string;
    description: string | null;
    referenceBatchGm: number | null;
    referenceDurationMin: number | null;
    referenceWastePercent: number | null;
    createdAt: Date;
    updatedAt: Date;
}

export class GetAllProductsResponse {
    constructor(public readonly products: ProductSummary[]) {}
}
