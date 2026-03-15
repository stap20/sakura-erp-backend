import { Controller, Put, Body, Param, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateVendorHandler } from '../../application/commands/update-vendor/update-vendor.handler';
import { UpdateVendorCommand } from '../../application/commands/update-vendor/update-vendor.command';
import { UpdateVendorRequestDto } from '../dtos/requests/update-vendor.request.dto';
import { VendorResponseDto } from '../dtos/responses/vendor.response.dto';

@ApiTags('Vendors')
@Controller('vendors')
export class UpdateVendorController {
    constructor(
        @Inject(UpdateVendorHandler)
        private readonly updateVendorHandler: UpdateVendorHandler,
    ) {}

    @Version('1')
    @Put(':id')
    @ApiOperation({ summary: 'Update vendor information' })
    @ApiResponse({
        status: 200,
        description: 'Vendor updated successfully',
        type: VendorResponseDto,
    })
    @ApiResponse({
        status: 404,
        description: 'Vendor not found',
    })
    @ApiResponse({
        status: 409,
        description: 'Vendor with this name already exists',
    })
    async update(
        @Param('id') id: string,
        @Body() dto: UpdateVendorRequestDto,
    ): Promise<VendorResponseDto> {
        const command = new UpdateVendorCommand(
            id,
            dto.name,
            dto.address,
            dto.phoneNumber,
            dto.contactLink,
        );

        const result = await this.updateVendorHandler.handle(command);

        return new VendorResponseDto(
            result.id,
            result.name,
            result.address,
            result.phoneNumber,
            result.contactLink,
            result.status,
        );
    }
}
