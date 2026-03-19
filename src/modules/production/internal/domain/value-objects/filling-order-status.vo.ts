import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { DomainError } from 'src/shared/domain/errors/domain.error';

export const FILLING_ORDER_STATUS = {
    DRAFT: 'DRAFT',
    CONFIRMED: 'CONFIRMED',
    EXECUTED: 'EXECUTED',
    CANCELLED: 'CANCELLED',
} as const;

class InvalidFillingOrderStatusError extends DomainError {
    constructor(status: string) {
        super(`Invalid filling order status: ${status}`);
    }
}

export class FillingOrderStatus extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static draft(): FillingOrderStatus {
        return new FillingOrderStatus(FILLING_ORDER_STATUS.DRAFT);
    }

    public static confirmed(): FillingOrderStatus {
        return new FillingOrderStatus(FILLING_ORDER_STATUS.CONFIRMED);
    }

    public static executed(): FillingOrderStatus {
        return new FillingOrderStatus(FILLING_ORDER_STATUS.EXECUTED);
    }

    public static cancelled(): FillingOrderStatus {
        return new FillingOrderStatus(FILLING_ORDER_STATUS.CANCELLED);
    }

    public static fromString(value: string): FillingOrderStatus {
        if (!Object.values(FILLING_ORDER_STATUS).includes(value as any)) {
            throw new InvalidFillingOrderStatusError(value);
        }
        return new FillingOrderStatus(value);
    }

    public isDraft(): boolean {
        return this.value === FILLING_ORDER_STATUS.DRAFT;
    }

    public isConfirmed(): boolean {
        return this.value === FILLING_ORDER_STATUS.CONFIRMED;
    }

    public isExecuted(): boolean {
        return this.value === FILLING_ORDER_STATUS.EXECUTED;
    }

    public isCancelled(): boolean {
        return this.value === FILLING_ORDER_STATUS.CANCELLED;
    }
}
