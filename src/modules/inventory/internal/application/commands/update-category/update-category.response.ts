export class UpdateCategoryResponse {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly description: string | null,
        public readonly status: string,
    ) {}
}
