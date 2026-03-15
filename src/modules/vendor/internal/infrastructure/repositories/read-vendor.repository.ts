import { Inject, Injectable } from '@nestjs/common';
import { IVendorPrismaClient } from '../database/vendor.prisma.client.interface';
import { VendorEntity } from '../database/entities/vendor.entity';

@Injectable()
export class ReadVendorRepository {
    constructor(
        @Inject(IVendorPrismaClient) private readonly prisma: IVendorPrismaClient,
    ) {}

    async getById(id: string): Promise<VendorEntity | null> {
        const vendor = await this.prisma.vendor.findUnique({
            where: { id },
        });

        if (!vendor) {
            return null;
        }

        return new VendorEntity(vendor);
    }

    async search(offset: number = 0, limit: number = 10, filter: Object = {}): Promise<VendorEntity[]> {
        const vendorList = await this.prisma.vendor.findMany({
            where: filter,
            skip: offset,
            take: limit,
            orderBy: [
                { name: 'asc' },
            ],
        });

        return vendorList.map((vendor) => new VendorEntity(vendor));
    }
}
