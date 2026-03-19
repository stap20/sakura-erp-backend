import { NotFoundError } from 'src/shared/application/errors/notfound.error';
import { ConflictError } from 'src/shared/application/errors/conflict.error';

export class CategoryNotFoundApplicationError extends NotFoundError {
    constructor(categoryId: string) {
        super(`Category with id ${categoryId} not found`);
    }
}

export class CategoryAlreadyExistsApplicationError extends ConflictError {
    constructor(name: string) {
        super(`Category with name ${name} already exists`);
    }
}

export class CategoryHasActiveItemsApplicationError extends ConflictError {
    constructor(categoryId: string) {
        super(`Cannot archive category ${categoryId}: it has active items linked to it`);
    }
}
