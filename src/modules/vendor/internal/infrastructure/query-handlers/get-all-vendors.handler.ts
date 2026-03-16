import { Injectable } from '@nestjs/common';
import { IGetAllVendorsHandler } from '../../application/queries/get-all-vendors/get-all-vendors.handler.interface';
import { GetAllVendorsQuery } from '../../application/queries/get-all-vendors/get-all-vendors.query';
import { GetAllVendorsResponse } from '../../application/queries/get-all-vendors/get-all-vendors.response';
import { ReadVendorRepository } from '../repositories/read-vendor.repository';

@Injectable()
export class GetAllVendorsHandler implements IGetAllVendorsHandler {
    constructor(
        private readonly readVendorRepo: ReadVendorRepository,
    ) {}

    async handle(query: GetAllVendorsQuery): Promise<GetAllVendorsResponse> {
        const filter = this.filterFrom(query);
        const vendorList = await this.readVendorRepo.search(
            query.offset,
            query.limit,
            filter,
        );

        return new GetAllVendorsResponse(
            vendorList.map((vendor) => ({
                id: vendor.id,
                name: vendor.name,
                address: vendor.address,
                phoneNumber: vendor.phoneNumber,
                contactLink: vendor.contactLink,
                status: vendor.status,
                createdAt: vendor.createdAt,
                updatedAt: vendor.updatedAt,
            })),
        );
    }

    filterFrom(query: GetAllVendorsQuery): Object {
        const conditions: any = {};

        if (query.name) {
            conditions.name = { contains: query.name, mode: 'insensitive' };
        }

        if (query.status) {
            conditions.status = query.status;
        }

        return conditions;
    }
}
