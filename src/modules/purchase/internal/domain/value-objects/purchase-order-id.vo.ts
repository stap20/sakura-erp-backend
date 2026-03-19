import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { DomainError } from 'src/shared/domain/errors/domain.error';

class InvalidPurchaseOrderIdError extends DomainError {
    constructor() {
        super('Invalid purchase order ID');
    }
}

export class PurchaseOrderId extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static create(id: string): PurchaseOrderId {
        if (!id || id.trim().length === 0) {
            throw new InvalidPurchaseOrderIdError();
        }
        return new PurchaseOrderId(id.trim());
    }
}
