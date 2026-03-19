import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { DomainError } from 'src/shared/domain/errors/domain.error';

class InvalidProductIdError extends DomainError {
    constructor() {
        super('Product ID cannot be empty');
    }
}

export class ProductId extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static create(value: string): ProductId {
        if (!value || value.trim().length === 0) {
            throw new InvalidProductIdError();
        }
        return new ProductId(value);
    }
}
