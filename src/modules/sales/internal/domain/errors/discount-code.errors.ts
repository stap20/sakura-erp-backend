import { DomainError } from 'src/shared/domain/errors/domain.error';

export class DiscountCodeInactiveError extends DomainError {
    constructor() {
        super('Discount code is not active');
    }
}

export class DiscountCodeExpiredError extends DomainError {
    constructor() {
        super('Discount code has expired');
    }
}

export class DiscountCodeExhaustedError extends DomainError {
    constructor() {
        super('Discount code has reached its maximum number of uses');
    }
}
