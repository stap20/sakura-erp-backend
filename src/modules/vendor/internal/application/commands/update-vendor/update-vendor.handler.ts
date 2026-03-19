import { Injectable, Inject } from '@nestjs/common';
import { IVendorRepository } from '../../../domain/repositories/vendor.repo.interface';
import { UpdateVendorCommand } from './update-vendor.command';
import { UpdateVendorResponse } from './update-vendor.response';
import { VendorId } from '../../../domain/value-objects/vendor-id.vo';
import { VendorName } from '../../../domain/value-objects/vendor-name.vo';
import { VendorNotFoundApplicationError, VendorAlreadyExistsApplicationError } from '../../errors/vendor.errors';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';

@Injectable()
export class UpdateVendorHandler extends CommandHandlerBase<
    UpdateVendorCommand,
    UpdateVendorResponse
> {
    constructor(
        @Inject(IVendorRepository)
        private readonly vendorRepository: IVendorRepository,
    ) {
        super();
    }

    async handle(command: UpdateVendorCommand): Promise<UpdateVendorResponse> {
        const vendorIdVO = VendorId.create(command.vendorId);
        const vendor = await this.vendorRepository.getById(vendorIdVO);

        if (!vendor) {
            throw new VendorNotFoundApplicationError(command.vendorId);
        }

        if (command.name !== undefined) {
            const nameVO = VendorName.create(command.name);
            const existingVendor = await this.vendorRepository.getByName(nameVO);

            if (existingVendor && !existingVendor.getId().equals(vendor.getId())) {
                throw new VendorAlreadyExistsApplicationError(command.name);
            }
        }

        vendor.update({
            name: command.name,
            address: command.address,
            phoneNumber: command.phoneNumber,
            contactLink: command.contactLink,
        });

        await this.vendorRepository.save(vendor);

        this.logger.info('Vendor updated', {
            vendorId: vendor.getId().value,
            name: vendor.getName().value,
        });

        return new UpdateVendorResponse(
            vendor.getId().value,
            vendor.getName().value,
            vendor.getAddress().value,
            vendor.getPhoneNumber().value,
            vendor.getContactLink().value,
            vendor.getStatus().value,
        );
    }
}
