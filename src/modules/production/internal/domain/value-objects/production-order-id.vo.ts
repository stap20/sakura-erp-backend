import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { DomainError } from 'src/shared/domain/errors/domain.error';

class InvalidProductionOrderIdError extends DomainError {
    constructor() {
        super('Invalid production order ID');
    }
}

export class ProductionOrderId extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static create(id: string): ProductionOrderId {
        if (!id || id.trim().length === 0) {
            throw new InvalidProductionOrderIdError();
        }
        return new ProductionOrderId(id.trim());
    }
}
