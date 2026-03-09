import { DomainError } from "src/shared/domain/errors/domain.error";

export class UserNotFoundError extends DomainError {
    constructor(userId: string) {
        super(`User with id ${userId} not found`);
    }
}

export class UserAlreadyExistsError extends DomainError {
    constructor(email: string) {
        super(`User with email ${email} already exists`);
    }
}

export class UserNotActiveError extends DomainError {
    constructor(userId: string) {
        super(`User with id ${userId} is not active`);
    }
}

export class UserAlreadyActiveError extends DomainError {
    constructor(userId: string) {
        super(`User with id ${userId} is already active`);
    }
}

export class UserWrongPasswordError extends DomainError {
    constructor(userId: string) {
        super(`User with id ${userId} has wrong password`);
    }
}