import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { DomainError } from 'src/shared/domain/errors/domain.error';

export const SALES_ORDER_STATUS = {
    DRAFT: 'DRAFT',
    CONFIRMED: 'CONFIRMED',
    SHIPPED: 'SHIPPED',
    CANCELLED: 'CANCELLED',
} as const;

class InvalidSalesOrderStatusError extends DomainError {
    constructor(status: string) {
        super(`Invalid sales order status: ${status}`);
    }
}

export class SalesOrderStatus extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static draft(): SalesOrderStatus {
        return new SalesOrderStatus(SALES_ORDER_STATUS.DRAFT);
    }

    public static confirmed(): SalesOrderStatus {
        return new SalesOrderStatus(SALES_ORDER_STATUS.CONFIRMED);
    }

    public static shipped(): SalesOrderStatus {
        return new SalesOrderStatus(SALES_ORDER_STATUS.SHIPPED);
    }

    public static cancelled(): SalesOrderStatus {
        return new SalesOrderStatus(SALES_ORDER_STATUS.CANCELLED);
    }

    public static fromString(value: string): SalesOrderStatus {
        if (!Object.values(SALES_ORDER_STATUS).includes(value as any)) {
            throw new InvalidSalesOrderStatusError(value);
        }
        return new SalesOrderStatus(value);
    }

    public isDraft(): boolean {
        return this.value === SALES_ORDER_STATUS.DRAFT;
    }

    public isConfirmed(): boolean {
        return this.value === SALES_ORDER_STATUS.CONFIRMED;
    }

    public isShipped(): boolean {
        return this.value === SALES_ORDER_STATUS.SHIPPED;
    }

    public isCancelled(): boolean {
        return this.value === SALES_ORDER_STATUS.CANCELLED;
    }
}
