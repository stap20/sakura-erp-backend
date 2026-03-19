export interface PackagingComponentResponseItem {
    id: string;
    packagingItemId: string;
    qtyPerUnit: number;
}

export class SetPackagingBomResponse {
    constructor(
        public readonly variantItemId: string,
        public readonly components: PackagingComponentResponseItem[],
    ) {}
}
