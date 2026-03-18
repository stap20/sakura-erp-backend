export class GetCategoryResponse {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly description: string | null,
        public readonly status: string,
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
    ) {}
}
