import { Controller, Get, Param, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetVendorHandler } from '../../application/queries/get-vendor/get-vendor.handler.interface';
import { GetVendorQuery } from '../../application/queries/get-vendor/get-vendor.query';
import { VendorResponseDto } from '../dtos/responses/vendor.response.dto';

@ApiTags('Vendors')
@Controller('vendors')
export class GetVendorByIdController {
    constructor(
        @Inject(IGetVendorHandler)
        private readonly getVendorHandler: IGetVendorHandler,
    ) {}

    @Version('1')
    @Get(':id')
    @ApiOperation({ summary: 'Get vendor by ID' })
    @ApiResponse({
        status: 200,
        description: 'Vendor found',
        type: VendorResponseDto,
    })
    @ApiResponse({
        status: 404,
        description: 'Vendor not found',
    })
    async getById(@Param('id') id: string): Promise<VendorResponseDto> {
        const query = new GetVendorQuery(id);
        const result = await this.getVendorHandler.handle(query);

        return new VendorResponseDto(
            result.id,
            result.name,
            result.address,
            result.phoneNumber,
            result.contactLink,
            result.status,
            result.createdAt,
            result.updatedAt,
        );
    }
}
