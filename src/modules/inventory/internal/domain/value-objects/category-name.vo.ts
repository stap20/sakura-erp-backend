import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { DomainError } from 'src/shared/domain/errors/domain.error';

class EmptyCategoryNameError extends DomainError {
    constructor() {
        super('Category name cannot be empty');
    }
}

class CategoryNameTooShortError extends DomainError {
    constructor() {
        super('Category name is too short (minimum 2 characters)');
    }
}

class CategoryNameTooLongError extends DomainError {
    constructor() {
        super('Category name is too long (maximum 100 characters)');
    }
}

export class CategoryName extends ValueObject<string> {
    private static readonly MIN_LENGTH = 2;
    private static readonly MAX_LENGTH = 100;

    private constructor(value: string) {
        super(value);
    }

    public static create(name: string): CategoryName {
        if (!name || name.trim().length === 0) {
            throw new EmptyCategoryNameError();
        }
        const trimmed = name.trim();
        if (trimmed.length < this.MIN_LENGTH) {
            throw new CategoryNameTooShortError();
        }
        if (trimmed.length > this.MAX_LENGTH) {
            throw new CategoryNameTooLongError();
        }
        return new CategoryName(trimmed);
    }
}
