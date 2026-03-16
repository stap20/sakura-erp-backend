import { Injectable, Inject } from '@nestjs/common';
import { IVendorRepository } from '../../../domain/repositories/vendor.repo.interface';
import { DeactivateVendorCommand } from './deactivate-vendor.command';
import { VendorId } from '../../../domain/value-objects/vendor-id.vo';
import { VendorNotFoundError } from '../../../domain/errors/vendor.error';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';

@Injectable()
export class DeactivateVendorHandler extends CommandHandlerBase<
    DeactivateVendorCommand,
    void
> {
    constructor(
        @Inject(IVendorRepository)
        private readonly vendorRepository: IVendorRepository,
    ) {
        super();
    }

    async handle(command: DeactivateVendorCommand): Promise<void> {
        const vendorIdVO = VendorId.create(command.vendorId);
        const vendor = await this.vendorRepository.getById(vendorIdVO);

        if (!vendor) {
            throw new VendorNotFoundError(command.vendorId);
        }

        vendor.deactivate();
        await this.vendorRepository.save(vendor);

        this.logger.info('Vendor deactivated', {
            vendorId: vendor.getId().value,
            name: vendor.getName().value,
        });
    }
}
