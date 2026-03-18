import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { InvalidQuantityError } from '../errors/item.error';

export class Quantity extends ValueObject<number> {
    private constructor(value: number) {
        super(value);
    }

    public static create(value: number): Quantity {
        if (!value || value <= 0) {
            throw new InvalidQuantityError();
        }
        return new Quantity(value);
    }
}
