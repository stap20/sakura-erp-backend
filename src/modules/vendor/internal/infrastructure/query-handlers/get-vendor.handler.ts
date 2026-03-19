import { Injectable } from '@nestjs/common';
import { IGetVendorHandler } from '../../application/queries/get-vendor/get-vendor.handler.interface';
import { GetVendorQuery } from '../../application/queries/get-vendor/get-vendor.query';
import { GetVendorResponse } from '../../application/queries/get-vendor/get-vendor.response';
import { VendorNotFoundApplicationError } from '../../application/errors/vendor.errors';
import { ReadVendorRepository } from '../repositories/read-vendor.repository';

@Injectable()
export class GetVendorHandler implements IGetVendorHandler {
    constructor(
        private readonly readVendorRepo: ReadVendorRepository,
    ) {}

    async handle(query: GetVendorQuery): Promise<GetVendorResponse> {
        const vendor = await this.readVendorRepo.getById(query.vendorId);

        if (!vendor) {
            throw new VendorNotFoundApplicationError(query.vendorId);
        }

        return new GetVendorResponse(
            vendor.id,
            vendor.name,
            vendor.address,
            vendor.phoneNumber,
            vendor.contactLink,
            vendor.status,
            vendor.createdAt,
            vendor.updatedAt,
        );
    }
}
