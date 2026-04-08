import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import {
    EmptyProductNameError,
    ProductNameTooShortError,
    ProductNameTooLongError,
} from '../errors/product.error';

export class ProductName extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static create(name: string): ProductName {
        if (!name || name.trim().length === 0) {
            throw new EmptyProductNameError();
        }
        if (name.trim().length < 2) {
            throw new ProductNameTooShortError();
        }
        if (name.trim().length > 100) {
            throw new ProductNameTooLongError();
        }
        return new ProductName(name.trim());
    }
}
