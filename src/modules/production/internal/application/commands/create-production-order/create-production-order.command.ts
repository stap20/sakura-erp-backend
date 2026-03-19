export class CreateProductionOrderCommand {
    constructor(
        public readonly id: string,
        public readonly productId: string,
        public readonly quantityUnits: number,
        public readonly wastePercent: number,
        public readonly addonItemIds: Record<string, string>, // ingredientId -> itemId for add-on resolution
        public readonly performedBy: string,
        public readonly notes?: string | null,
    ) {}
}
