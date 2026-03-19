export class GetAllProductionOrdersQuery {
    constructor(
        public readonly productId?: string,
        public readonly status?: string,
        public readonly offset: number = 0,
        public readonly limit: number = 20,
    ) {}
}
