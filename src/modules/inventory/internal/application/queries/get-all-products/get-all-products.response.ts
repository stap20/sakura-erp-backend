export interface ProductSummary {
    id: string;
    name: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export class GetAllProductsResponse {
    constructor(public readonly products: ProductSummary[]) {}
}
