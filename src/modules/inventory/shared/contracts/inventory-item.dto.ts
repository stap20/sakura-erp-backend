export class InventoryItemDto {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly type: string,
        public readonly measureUnit: string,
        public readonly unitWeightGm: number | null,
        public readonly weightedAverageUnitPrice: number | null,
    ) {}
}
