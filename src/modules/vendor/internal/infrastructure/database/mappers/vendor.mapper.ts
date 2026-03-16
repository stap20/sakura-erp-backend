import { Injectable } from '@nestjs/common';
import { Vendor } from '../../../domain/entities/vendor.aggregate';
import { VendorEntity } from '../entities/vendor.entity';

@Injectable()
export class VendorMapper {
    toDomain(vendorEntity: VendorEntity): Vendor {
        return Vendor.createFromPersistence({
            id: vendorEntity.id,
            name: vendorEntity.name,
            address: vendorEntity.address,
            phoneNumber: vendorEntity.phoneNumber,
            contactLink: vendorEntity.contactLink,
            status: vendorEntity.status,
        });
    }

    toPersistence(vendor: Vendor): Omit<VendorEntity, 'createdAt' | 'updatedAt'> {
        return {
            id: vendor.getId().value,
            name: vendor.getName().value,
            address: vendor.getAddress().value,
            phoneNumber: vendor.getPhoneNumber().value,
            contactLink: vendor.getContactLink().value,
            status: vendor.getStatus().value,
        };
    }
}
