import { NotFoundError } from 'src/shared/application/errors/notfound.error';

export class RecipeVersionNotFoundApplicationError extends NotFoundError {
    constructor(id: string) {
        super(`Recipe version with id ${id} not found`);
    }
}
