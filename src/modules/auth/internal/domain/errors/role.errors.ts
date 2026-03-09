import { DomainError } from "src/shared/domain/errors/domain.error";

export class InvalidRoleError extends DomainError {
    constructor(role: string) {
        super(`Invalid role: ${role}`);
    }
}