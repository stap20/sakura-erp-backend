export interface TransactionSummary {
    id: string;
    itemId: string;
    type: string;
    quantity: number;
    vendorId: string | null;
    unitPrice: number | null;
    performedBy: string;
    notes: string | null;
    createdAt: Date;
}

export class GetItemTransactionsResponse {
    constructor(public readonly transactions: TransactionSummary[]) {}
}
