import { ValueObject } from 'src/shared/domain/value-objects/value-object';

export class SalesOrderId extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static create(value: string): SalesOrderId {
        return new SalesOrderId(value);
    }
}
