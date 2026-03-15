import { Controller, Get, Query, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetAllVendorsHandler } from '../../application/queries/get-all-vendors/get-all-vendors.handler.interface';
import { GetAllVendorsQuery } from '../../application/queries/get-all-vendors/get-all-vendors.query';
import { GetAllVendorsRequestDto } from '../dtos/requests/get-all-vendors.request.dto';
import { VendorResponseDto } from '../dtos/responses/vendor.response.dto';

@ApiTags('Vendors')
@Controller('vendors')
export class GetAllVendorsController {
    constructor(
        @Inject(IGetAllVendorsHandler)
        private readonly getAllVendorsHandler: IGetAllVendorsHandler,
    ) {}

    @Version('1')
    @Get()
    @ApiOperation({ summary: 'List vendors with filtering and search' })
    @ApiResponse({
        status: 200,
        description: 'List of vendors',
        type: [VendorResponseDto],
    })
    async getAll(@Query() dto: GetAllVendorsRequestDto): Promise<VendorResponseDto[]> {
        const query = new GetAllVendorsQuery(
            dto.offset,
            dto.limit,
            dto.name,
            dto.status,
        );

        const result = await this.getAllVendorsHandler.handle(query);

        return result.vendors.map(
            (vendor) =>
                new VendorResponseDto(
                    vendor.id,
                    vendor.name,
                    vendor.address,
                    vendor.phoneNumber,
                    vendor.contactLink,
                    vendor.status,
                    vendor.createdAt,
                    vendor.updatedAt,
                ),
        );
    }
}
