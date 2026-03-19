import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { DomainError } from 'src/shared/domain/errors/domain.error';

export const PURCHASE_ORDER_STATUS = {
    DRAFT: 'DRAFT',
    CONFIRMED: 'CONFIRMED',
    RECEIVED: 'RECEIVED',
    CANCELLED: 'CANCELLED',
} as const;

class InvalidPurchaseOrderStatusError extends DomainError {
    constructor(status: string) {
        super(`Invalid purchase order status: ${status}`);
    }
}

export class PurchaseOrderStatus extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static draft(): PurchaseOrderStatus {
        return new PurchaseOrderStatus(PURCHASE_ORDER_STATUS.DRAFT);
    }

    public static confirmed(): PurchaseOrderStatus {
        return new PurchaseOrderStatus(PURCHASE_ORDER_STATUS.CONFIRMED);
    }

    public static received(): PurchaseOrderStatus {
        return new PurchaseOrderStatus(PURCHASE_ORDER_STATUS.RECEIVED);
    }

    public static cancelled(): PurchaseOrderStatus {
        return new PurchaseOrderStatus(PURCHASE_ORDER_STATUS.CANCELLED);
    }

    public static fromString(value: string): PurchaseOrderStatus {
        if (!Object.values(PURCHASE_ORDER_STATUS).includes(value as any)) {
            throw new InvalidPurchaseOrderStatusError(value);
        }
        return new PurchaseOrderStatus(value);
    }

    public isDraft(): boolean {
        return this.value === PURCHASE_ORDER_STATUS.DRAFT;
    }

    public isConfirmed(): boolean {
        return this.value === PURCHASE_ORDER_STATUS.CONFIRMED;
    }

    public isReceived(): boolean {
        return this.value === PURCHASE_ORDER_STATUS.RECEIVED;
    }

    public isCancelled(): boolean {
        return this.value === PURCHASE_ORDER_STATUS.CANCELLED;
    }
}
