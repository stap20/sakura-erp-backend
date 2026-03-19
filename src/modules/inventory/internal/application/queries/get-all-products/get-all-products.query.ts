export class GetAllProductsQuery {
    constructor(
        public readonly search?: string,
        public readonly offset: number = 0,
        public readonly limit: number = 20,
    ) {}
}
