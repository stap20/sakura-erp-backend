import { DomainError } from 'src/shared/domain/errors/domain.error';
import { NotFoundDomainError } from 'src/shared/domain/errors/not-found.domain.error';

export class CategoryNotFoundError extends NotFoundDomainError {
    constructor(categoryId: string) {
        super(`Category with id ${categoryId} not found`);
    }
}

export class CategoryAlreadyExistsError extends DomainError {
    constructor(name: string) {
        super(`Category with name "${name}" already exists`);
    }
}

export class CategoryAlreadyArchivedError extends DomainError {
    constructor(categoryId: string) {
        super(`Category with id ${categoryId} is already archived`);
    }
}

export class CategoryHasActiveItemsError extends DomainError {
    constructor(categoryId: string) {
        super(
            `Cannot archive category ${categoryId}: it has active items linked to it`,
        );
    }
}
