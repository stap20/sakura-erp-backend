import { Controller, Patch, Param, Version, Inject, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DeactivateVendorHandler } from '../../application/commands/deactivate-vendor/deactivate-vendor.handler';
import { DeactivateVendorCommand } from '../../application/commands/deactivate-vendor/deactivate-vendor.command';

@ApiTags('Vendors')
@Controller('vendors')
export class DeactivateVendorController {
    constructor(
        @Inject(DeactivateVendorHandler)
        private readonly deactivateVendorHandler: DeactivateVendorHandler,
    ) {}

    @Version('1')
    @Patch(':id/deactivate')
    @HttpCode(200)
    @ApiOperation({ summary: 'Deactivate a vendor' })
    @ApiResponse({
        status: 200,
        description: 'Vendor deactivated successfully',
    })
    @ApiResponse({
        status: 404,
        description: 'Vendor not found',
    })
    @ApiResponse({
        status: 400,
        description: 'Vendor is already inactive',
    })
    async deactivate(@Param('id') id: string): Promise<void> {
        const command = new DeactivateVendorCommand(id);
        await this.deactivateVendorHandler.handle(command);
    }
}
