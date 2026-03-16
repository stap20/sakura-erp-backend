import { Controller, Post, Body, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateVendorHandler } from '../../application/commands/create-vendor/create-vendor.handler';
import { CreateVendorCommand } from '../../application/commands/create-vendor/create-vendor.command';
import { CreateVendorRequestDto } from '../dtos/requests/create-vendor.request.dto';
import { VendorResponseDto } from '../dtos/responses/vendor.response.dto';

@ApiTags('Vendors')
@Controller('vendors')
export class CreateVendorController {
    constructor(
        @Inject(CreateVendorHandler)
        private readonly createVendorHandler: CreateVendorHandler,
    ) {}

    @Version('1')
    @Post()
    @ApiOperation({ summary: 'Create a new vendor' })
    @ApiResponse({
        status: 201,
        description: 'Vendor created successfully',
        type: VendorResponseDto,
    })
    @ApiResponse({
        status: 400,
        description: 'Invalid input data',
    })
    @ApiResponse({
        status: 409,
        description: 'Vendor with this name already exists',
    })
    async create(@Body() dto: CreateVendorRequestDto): Promise<VendorResponseDto> {
        const command = new CreateVendorCommand(
            dto.name,
            dto.address,
            dto.phoneNumber,
            dto.contactLink,
        );

        const result = await this.createVendorHandler.handle(command);

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
