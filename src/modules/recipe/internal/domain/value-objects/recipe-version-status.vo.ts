import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { DomainError } from 'src/shared/domain/errors/domain.error';

export const RECIPE_VERSION_STATUS = {
    DRAFT: 'DRAFT',
    ACTIVE: 'ACTIVE',
    ARCHIVED: 'ARCHIVED',
} as const;

class InvalidRecipeVersionStatusError extends DomainError {
    constructor(status: string) {
        super(`Invalid recipe version status: ${status}`);
    }
}

export class RecipeVersionStatus extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static draft(): RecipeVersionStatus {
        return new RecipeVersionStatus(RECIPE_VERSION_STATUS.DRAFT);
    }

    public static active(): RecipeVersionStatus {
        return new RecipeVersionStatus(RECIPE_VERSION_STATUS.ACTIVE);
    }

    public static archived(): RecipeVersionStatus {
        return new RecipeVersionStatus(RECIPE_VERSION_STATUS.ARCHIVED);
    }

    public static fromString(value: string): RecipeVersionStatus {
        if (!Object.values(RECIPE_VERSION_STATUS).includes(value as any)) {
            throw new InvalidRecipeVersionStatusError(value);
        }
        return new RecipeVersionStatus(value);
    }

    public isDraft(): boolean {
        return this.value === RECIPE_VERSION_STATUS.DRAFT;
    }

    public isActive(): boolean {
        return this.value === RECIPE_VERSION_STATUS.ACTIVE;
    }

    public isArchived(): boolean {
        return this.value === RECIPE_VERSION_STATUS.ARCHIVED;
    }
}
