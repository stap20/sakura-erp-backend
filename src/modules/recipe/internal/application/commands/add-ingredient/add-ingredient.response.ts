export class AddIngredientResponse {
    constructor(
        public readonly id: string,
        public readonly productId: string,
        public readonly versionNumber: number,
        public readonly status: string,
        public readonly notes: string | null,
        public readonly ingredients: any[],
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
    ) {}
}
