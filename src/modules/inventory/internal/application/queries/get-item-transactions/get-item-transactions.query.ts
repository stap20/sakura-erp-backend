export class GetItemTransactionsQuery {
    constructor(
        public readonly itemId: string,
        public readonly offset: number,
        public readonly limit: number,
        public readonly type?: string,
    ) {}
}
