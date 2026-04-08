export interface PackagingComponentDto {
    packagingItemId: string;
    qtyPerUnit: number;
}

export interface AddonComponentDto {
    ingredientCategory: string;
    addonItemId: string;
}

export class InventoryItemDto {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly type: string,
        public readonly measureUnit: string,
        public readonly unitWeightGm: number | null,
        public readonly weightedAverageUnitPrice: number | null,
        public readonly packagingComponents: PackagingComponentDto[] = [],
        public readonly productId: string | null = null,
        public readonly addonComponents: AddonComponentDto[] = [],
    ) {}
}
