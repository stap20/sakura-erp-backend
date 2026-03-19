import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { DomainError } from 'src/shared/domain/errors/domain.error';

class InvalidRecipeVersionIdError extends DomainError {
    constructor() {
        super('Invalid recipe version ID');
    }
}

export class RecipeVersionId extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static create(id: string): RecipeVersionId {
        if (!id || id.trim().length === 0) {
            throw new InvalidRecipeVersionIdError();
        }
        return new RecipeVersionId(id.trim());
    }
}
