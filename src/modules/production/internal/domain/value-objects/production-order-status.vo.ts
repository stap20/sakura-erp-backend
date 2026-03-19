import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { DomainError } from 'src/shared/domain/errors/domain.error';

const VALID_STATUSES = ['DRAFT', 'CONFIRMED', 'EXECUTED', 'CANCELLED'] as const;
export type ProductionOrderStatusValue = (typeof VALID_STATUSES)[number];

class InvalidProductionOrderStatusError extends DomainError {
    constructor(value: string) {
        super(`Invalid production order status: ${value}`);
    }
}

export class ProductionOrderStatus extends ValueObject<ProductionOrderStatusValue> {
    private constructor(value: ProductionOrderStatusValue) {
        super(value);
    }

    public static draft(): ProductionOrderStatus {
        return new ProductionOrderStatus('DRAFT');
    }

    public static fromString(value: string): ProductionOrderStatus {
        if (!VALID_STATUSES.includes(value as ProductionOrderStatusValue)) {
            throw new InvalidProductionOrderStatusError(value);
        }
        return new ProductionOrderStatus(value as ProductionOrderStatusValue);
    }

    public isDraft(): boolean {
        return this.value === 'DRAFT';
    }

    public isConfirmed(): boolean {
        return this.value === 'CONFIRMED';
    }

    public isExecuted(): boolean {
        return this.value === 'EXECUTED';
    }

    public isCancelled(): boolean {
        return this.value === 'CANCELLED';
    }
}
