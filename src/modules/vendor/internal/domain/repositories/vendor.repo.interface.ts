import { Vendor } from '../entities/vendor.aggregate';
import { VendorId } from '../value-objects/vendor-id.vo';
import { VendorName } from '../value-objects/vendor-name.vo';

export interface IVendorRepository {
    getById(id: VendorId): Promise<Vendor | null>;
    getByName(name: VendorName): Promise<Vendor | null>;
    save(vendor: Vendor): Promise<void>;
}

export const IVendorRepository = Symbol('IVendorRepository');
