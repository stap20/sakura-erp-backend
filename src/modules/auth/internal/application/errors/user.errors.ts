import { NotFoundError } from 'src/shared/application/errors/notfound.error';

export class UserNotFoundApplicationError extends NotFoundError {
    constructor(userId: string) {
        super(`User with id ${userId} not found`);
    }
}
