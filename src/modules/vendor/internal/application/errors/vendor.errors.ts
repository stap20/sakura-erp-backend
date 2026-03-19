import { NotFoundError } from 'src/shared/application/errors/notfound.error';
import { ConflictError } from 'src/shared/application/errors/conflict.error';

export class VendorNotFoundApplicationError extends NotFoundError {
    constructor(vendorId: string) {
        super(`Vendor with id ${vendorId} not found`);
    }
}

export class VendorAlreadyExistsApplicationError extends ConflictError {
    constructor(name: string) {
        super(`Vendor with name ${name} already exists`);
    }
}
