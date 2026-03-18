import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { DomainError } from 'src/shared/domain/errors/domain.error';

class EmptyItemNameError extends DomainError {
    constructor() {
        super('Item name cannot be empty');
    }
}

class ItemNameTooShortError extends DomainError {
    constructor() {
        super('Item name is too short (minimum 2 characters)');
    }
}

class ItemNameTooLongError extends DomainError {
    constructor() {
        super('Item name is too long (maximum 100 characters)');
    }
}

export class ItemName extends ValueObject<string> {
    private static readonly MIN_LENGTH = 2;
    private static readonly MAX_LENGTH = 100;

    private constructor(value: string) {
        super(value);
    }

    public static create(name: string): ItemName {
        if (!name || name.trim().length === 0) {
            throw new EmptyItemNameError();
        }
        const trimmed = name.trim();
        if (trimmed.length < this.MIN_LENGTH) {
            throw new ItemNameTooShortError();
        }
        if (trimmed.length > this.MAX_LENGTH) {
            throw new ItemNameTooLongError();
        }
        return new ItemName(trimmed);
    }
}
