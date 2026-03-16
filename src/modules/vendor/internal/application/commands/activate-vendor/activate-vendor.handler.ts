import { Injectable, Inject } from '@nestjs/common';
import { IVendorRepository } from '../../../domain/repositories/vendor.repo.interface';
import { ActivateVendorCommand } from './activate-vendor.command';
import { VendorId } from '../../../domain/value-objects/vendor-id.vo';
import { VendorNotFoundError } from '../../../domain/errors/vendor.error';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';

@Injectable()
export class ActivateVendorHandler extends CommandHandlerBase<
    ActivateVendorCommand,
    void
> {
    constructor(
        @Inject(IVendorRepository)
        private readonly vendorRepository: IVendorRepository,
    ) {
        super();
    }

    async handle(command: ActivateVendorCommand): Promise<void> {
        const vendorIdVO = VendorId.create(command.vendorId);
        const vendor = await this.vendorRepository.getById(vendorIdVO);

        if (!vendor) {
            throw new VendorNotFoundError(command.vendorId);
        }

        vendor.activate();
        await this.vendorRepository.save(vendor);

        this.logger.info('Vendor activated', {
            vendorId: vendor.getId().value,
            name: vendor.getName().value,
        });
    }
}
