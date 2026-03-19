import { NotFoundError } from 'src/shared/application/errors/notfound.error';

export class PurchaseOrderNotFoundApplicationError extends NotFoundError {
    constructor(orderId: string) {
        super(`Purchase order with id ${orderId} not found`);
    }
}
