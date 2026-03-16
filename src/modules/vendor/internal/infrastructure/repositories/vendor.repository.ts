import { Injectable, Inject } from '@nestjs/common';
import { IVendorRepository } from '../../domain/repositories/vendor.repo.interface';
import { Vendor } from '../../domain/entities/vendor.aggregate';
import { VendorId } from '../../domain/value-objects/vendor-id.vo';
import { VendorName } from '../../domain/value-objects/vendor-name.vo';
import { IVendorPrismaClient } from '../database/vendor.prisma.client.interface';
import { VendorMapper } from '../database/mappers/vendor.mapper';

@Injectable()
export class VendorRepository implements IVendorRepository {
    constructor(
        @Inject(IVendorPrismaClient) private readonly prisma: IVendorPrismaClient,
        private readonly vendorMapper: VendorMapper,
    ) {}

    async getById(id: VendorId): Promise<Vendor | null> {
        const vendorEntity = await this.prisma.vendor.findUnique({
            where: { id: id.value },
        });

        if (!vendorEntity) {
            return null;
        }

        return this.vendorMapper.toDomain(vendorEntity);
    }

    async getByName(name: VendorName): Promise<Vendor | null> {
        const vendorEntity = await this.prisma.vendor.findUnique({
            where: { name: name.value },
        });

        if (!vendorEntity) {
            return null;
        }

        return this.vendorMapper.toDomain(vendorEntity);
    }

    async save(vendor: Vendor): Promise<void> {
        const vendorData = this.vendorMapper.toPersistence(vendor);

        await this.prisma.vendor.upsert({
            where: { id: vendorData.id },
            update: {
                name: vendorData.name,
                address: vendorData.address,
                phoneNumber: vendorData.phoneNumber,
                contactLink: vendorData.contactLink,
                status: vendorData.status,
                updatedAt: new Date(),
            },
            create: vendorData,
        });
    }
}
