import { NotFoundError } from 'src/shared/application/errors/notfound.error';
import { ConflictError } from 'src/shared/application/errors/conflict.error';

export class ProductNotFoundApplicationError extends NotFoundError {
    constructor(productId: string) {
        super(`Product not found: ${productId}`);
    }
}

export class ProductAlreadyExistsApplicationError extends ConflictError {
    constructor(name: string) {
        super(`Product with name already exists: ${name}`);
    }
}
