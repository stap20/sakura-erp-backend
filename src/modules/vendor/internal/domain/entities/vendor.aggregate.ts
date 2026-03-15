import { AggregateRoot } from 'src/shared/domain/aggregate-root';
import { VendorId } from '../value-objects/vendor-id.vo';
import { VendorName } from '../value-objects/vendor-name.vo';
import { VendorAddress } from '../value-objects/vendor-address.vo';
import { VendorPhoneNumber } from '../value-objects/vendor-phone-number.vo';
import { VendorContactLink } from '../value-objects/vendor-contact-link.vo';
import { VendorStatus } from '../value-objects/vendor-status.vo';
import {
    VendorAlreadyActiveError,
    VendorAlreadyInactiveError,
} from '../errors/vendor.error';

export interface CreateVendorParams {
    id: string;
    name: string;
    address: string;
    phoneNumber: string;
    contactLink?: string | null;
}

export interface PersistenceParams {
    id: string;
    name: string;
    address: string;
    phoneNumber: string;
    contactLink: string | null;
    status: string;
}

export interface UpdateVendorParams {
    name?: string;
    address?: string;
    phoneNumber?: string;
    contactLink?: string | null;
}

export class Vendor extends AggregateRoot<VendorId> {
    private name: VendorName;
    private address: VendorAddress;
    private phoneNumber: VendorPhoneNumber;
    private contactLink: VendorContactLink;
    private status: VendorStatus;

    private constructor(
        id: VendorId,
        name: VendorName,
        address: VendorAddress,
        phoneNumber: VendorPhoneNumber,
        contactLink: VendorContactLink,
        status: VendorStatus,
    ) {
        super(id);
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.contactLink = contactLink;
        this.status = status;
    }

    public static create(params: CreateVendorParams): Vendor {
        const id = VendorId.create(params.id);
        const name = VendorName.create(params.name);
        const address = VendorAddress.create(params.address);
        const phoneNumber = VendorPhoneNumber.create(params.phoneNumber);
        const contactLink = VendorContactLink.create(params.contactLink);
        const status = VendorStatus.active();

        return new Vendor(id, name, address, phoneNumber, contactLink, status);
    }

    public static createFromPersistence(params: PersistenceParams): Vendor {
        const id = VendorId.create(params.id);
        const name = VendorName.create(params.name);
        const address = VendorAddress.create(params.address);
        const phoneNumber = VendorPhoneNumber.create(params.phoneNumber);
        const contactLink = VendorContactLink.create(params.contactLink);
        const status = VendorStatus.fromString(params.status);

        return new Vendor(id, name, address, phoneNumber, contactLink, status);
    }

    public update(params: UpdateVendorParams): void {
        if (params.name !== undefined) {
            this.name = VendorName.create(params.name);
        }
        if (params.address !== undefined) {
            this.address = VendorAddress.create(params.address);
        }
        if (params.phoneNumber !== undefined) {
            this.phoneNumber = VendorPhoneNumber.create(params.phoneNumber);
        }
        if (params.contactLink !== undefined) {
            this.contactLink = VendorContactLink.create(params.contactLink);
        }
    }

    public activate(): void {
        if (this.isActive()) {
            throw new VendorAlreadyActiveError(this.id.value);
        }
        this.status = VendorStatus.active();
    }

    public deactivate(): void {
        if (!this.isActive()) {
            throw new VendorAlreadyInactiveError(this.id.value);
        }
        this.status = VendorStatus.inactive();
    }

    public isActive(): boolean {
        return this.status.isActive();
    }

    public getName(): VendorName {
        return this.name;
    }

    public getAddress(): VendorAddress {
        return this.address;
    }

    public getPhoneNumber(): VendorPhoneNumber {
        return this.phoneNumber;
    }

    public getContactLink(): VendorContactLink {
        return this.contactLink;
    }

    public getStatus(): VendorStatus {
        return this.status;
    }

    public equals(other: Vendor): boolean {
        if (!(other instanceof Vendor)) {
            return false;
        }
        return this.name.equals(other.name);
    }
}
