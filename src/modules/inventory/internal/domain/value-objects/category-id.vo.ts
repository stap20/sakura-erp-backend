import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { DomainError } from 'src/shared/domain/errors/domain.error';

class InvalidCategoryIdError extends DomainError {
    constructor() {
        super('Invalid category ID');
    }
}

export class CategoryId extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static create(id: string): CategoryId {
        if (!id || id.trim().length === 0) {
            throw new InvalidCategoryIdError();
        }
        return new CategoryId(id.trim());
    }
}
