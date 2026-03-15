import { ValueObject } from 'src/shared/domain/value-objects/value-object';

export enum VendorStatusType {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
}

export class VendorStatus extends ValueObject<VendorStatusType> {
    private constructor(value: VendorStatusType) {
        super(value);
    }

    public static create(status: VendorStatusType): VendorStatus {
        return new VendorStatus(status);
    }

    public static active(): VendorStatus {
        return new VendorStatus(VendorStatusType.ACTIVE);
    }

    public static inactive(): VendorStatus {
        return new VendorStatus(VendorStatusType.INACTIVE);
    }

    public isActive(): boolean {
        return this._value === VendorStatusType.ACTIVE;
    }

    public isInactive(): boolean {
        return this._value === VendorStatusType.INACTIVE;
    }

    public static fromString(status: string): VendorStatus {
        return new VendorStatus(status as VendorStatusType);
    }
}
