import { Controller, Patch, Param, Version, Inject, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ActivateVendorHandler } from '../../application/commands/activate-vendor/activate-vendor.handler';
import { ActivateVendorCommand } from '../../application/commands/activate-vendor/activate-vendor.command';

@ApiTags('Vendors')
@Controller('vendors')
export class ActivateVendorController {
    constructor(
        @Inject(ActivateVendorHandler)
        private readonly activateVendorHandler: ActivateVendorHandler,
    ) {}

    @Version('1')
    @Patch(':id/activate')
    @HttpCode(200)
    @ApiOperation({ summary: 'Activate a vendor' })
    @ApiResponse({
        status: 200,
        description: 'Vendor activated successfully',
    })
    @ApiResponse({
        status: 404,
        description: 'Vendor not found',
    })
    @ApiResponse({
        status: 400,
        description: 'Vendor is already active',
    })
    async activate(@Param('id') id: string): Promise<void> {
        const command = new ActivateVendorCommand(id);
        await this.activateVendorHandler.handle(command);
    }
}
