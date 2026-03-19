import { Injectable, Inject } from '@nestjs/common';
import { IVendorRepository } from '../../../domain/repositories/vendor.repo.interface';
import { CreateVendorCommand } from './create-vendor.command';
import { CreateVendorResponse } from './create-vendor.response';
import { Vendor } from '../../../domain/entities/vendor.aggregate';
import { VendorName } from '../../../domain/value-objects/vendor-name.vo';
import { VendorAlreadyExistsApplicationError } from '../../errors/vendor.errors';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';

@Injectable()
export class CreateVendorHandler extends CommandHandlerBase<
    CreateVendorCommand,
    CreateVendorResponse
> {
    constructor(
        @Inject(IVendorRepository)
        private readonly vendorRepository: IVendorRepository,
    ) {
        super();
    }

    async handle(command: CreateVendorCommand): Promise<CreateVendorResponse> {
        const nameVO = VendorName.create(command.name);
        const existingVendor = await this.vendorRepository.getByName(nameVO);

        if (existingVendor) {
            throw new VendorAlreadyExistsApplicationError(command.name);
        }

        const id = this.generateId();

        const vendor = Vendor.create({
            id,
            name: command.name,
            address: command.address,
            phoneNumber: command.phoneNumber,
            contactLink: command.contactLink,
        });

        await this.vendorRepository.save(vendor);

        this.logger.info('Vendor created', {
            vendorId: vendor.getId().value,
            name: vendor.getName().value,
        });

        return new CreateVendorResponse(
            vendor.getId().value,
            vendor.getName().value,
            vendor.getAddress().value,
            vendor.getPhoneNumber().value,
            vendor.getContactLink().value,
            vendor.getStatus().value,
        );
    }

    private generateId(): string {
        return crypto.randomUUID();
    }
}
