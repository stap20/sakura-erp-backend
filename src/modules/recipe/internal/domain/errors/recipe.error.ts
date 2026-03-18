import { DomainError } from 'src/shared/domain/errors/domain.error';
import { NotFoundDomainError } from 'src/shared/domain/errors/not-found.domain.error';

export class RecipeVersionNotFoundError extends NotFoundDomainError {
    constructor(id: string) {
        super(`Recipe version with id ${id} not found`);
    }
}

export class RecipeIngredientNotFoundError extends NotFoundDomainError {
    constructor(id: string) {
        super(`Recipe ingredient with id ${id} not found`);
    }
}

export class RecipeVersionNotEditableError extends DomainError {
    constructor() {
        super('Recipe version is not in DRAFT status and cannot be edited');
    }
}

export class RecipeVersionNotArchivableError extends DomainError {
    constructor() {
        super('Recipe version is not in ACTIVE status and cannot be archived');
    }
}

export class DuplicateIngredientError extends DomainError {
    constructor() {
        super('An ingredient with this item ID or category already exists in the recipe');
    }
}

export class RecipeVersionInvalidFormulaError extends DomainError {
    constructor(total: number) {
        super(`Base ingredients must sum to 100% but sum is ${total.toFixed(2)}%`);
    }
}
