export class GetItemPricingResponse {
    constructor(
        public readonly itemId: string,
        public readonly itemName: string,
        public readonly unitsPerBatch: number,
        public readonly materialCostPerUnit: number,
        public readonly laborCostPerUnit: number,
        public readonly depreciationCostPerUnit: number,
        public readonly packagingCostPerUnit: number,
        public readonly totalCogs: number,
        public readonly marginPercent: number,
        public readonly suggestedPrice: number,
    ) {}
}
