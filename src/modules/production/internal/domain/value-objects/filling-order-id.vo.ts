import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { DomainError } from 'src/shared/domain/errors/domain.error';

class InvalidFillingOrderIdError extends DomainError {
    constructor() {
        super('Invalid filling order ID');
    }
}

export class FillingOrderId extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static create(id: string): FillingOrderId {
        if (!id || id.trim().length === 0) {
            throw new InvalidFillingOrderIdError();
        }
        return new FillingOrderId(id.trim());
    }
}
