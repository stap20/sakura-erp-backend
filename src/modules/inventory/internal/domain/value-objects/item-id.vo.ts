import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { DomainError } from 'src/shared/domain/errors/domain.error';

class InvalidItemIdError extends DomainError {
    constructor() {
        super('Invalid item ID');
    }
}

export class ItemId extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static create(id: string): ItemId {
        if (!id || id.trim().length === 0) {
            throw new InvalidItemIdError();
        }
        return new ItemId(id.trim());
    }
}
