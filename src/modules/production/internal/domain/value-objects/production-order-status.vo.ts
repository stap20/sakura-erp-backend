import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { DomainError } from 'src/shared/domain/errors/domain.error';

export const PRODUCTION_ORDER_STATUS = {
    DRAFT: 'DRAFT',
    CONFIRMED: 'CONFIRMED',
    EXECUTED: 'EXECUTED',
    CANCELLED: 'CANCELLED',
} as const;

class InvalidProductionOrderStatusError extends DomainError {
    constructor(status: string) {
        super(`Invalid production order status: ${status}`);
    }
}

export class ProductionOrderStatus extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static draft(): ProductionOrderStatus {
        return new ProductionOrderStatus(PRODUCTION_ORDER_STATUS.DRAFT);
    }

    public static confirmed(): ProductionOrderStatus {
        return new ProductionOrderStatus(PRODUCTION_ORDER_STATUS.CONFIRMED);
    }

    public static executed(): ProductionOrderStatus {
        return new ProductionOrderStatus(PRODUCTION_ORDER_STATUS.EXECUTED);
    }

    public static cancelled(): ProductionOrderStatus {
        return new ProductionOrderStatus(PRODUCTION_ORDER_STATUS.CANCELLED);
    }

    public static fromString(value: string): ProductionOrderStatus {
        if (!Object.values(PRODUCTION_ORDER_STATUS).includes(value as any)) {
            throw new InvalidProductionOrderStatusError(value);
        }
        return new ProductionOrderStatus(value);
    }

    public isDraft(): boolean {
        return this.value === PRODUCTION_ORDER_STATUS.DRAFT;
    }

    public isConfirmed(): boolean {
        return this.value === PRODUCTION_ORDER_STATUS.CONFIRMED;
    }

    public isExecuted(): boolean {
        return this.value === PRODUCTION_ORDER_STATUS.EXECUTED;
    }

    public isCancelled(): boolean {
        return this.value === PRODUCTION_ORDER_STATUS.CANCELLED;
    }
}
