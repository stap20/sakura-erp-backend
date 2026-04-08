import { DomainError } from 'src/shared/domain/errors/domain.error';

export class InvalidAddonComponentIdError extends DomainError {
    constructor() {
        super('Addon component ID cannot be empty');
    }
}

export class InvalidAddonIngredientCategoryError extends DomainError {
    constructor() {
        super('Addon ingredient category cannot be empty');
    }
}
