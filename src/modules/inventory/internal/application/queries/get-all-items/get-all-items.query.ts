export class GetAllItemsQuery {
    constructor(
        public readonly offset: number,
        public readonly limit: number,
        public readonly search?: string,
        public readonly type?: string,
        public readonly categoryId?: string,
        public readonly vendorId?: string,
        public readonly stockStatus?: string,
        public readonly status?: string,
    ) {}
}
