import { Controller, Get, Param, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetPurchaseOrdersByVendorHandler } from '../../application/queries/get-purchase-orders-by-vendor/get-purchase-orders-by-vendor.handler.interface';
import { GetPurchaseOrdersByVendorQuery } from '../../application/queries/get-purchase-orders-by-vendor/get-purchase-orders-by-vendor.query';
import { PurchaseOrderResponseDto } from '../dtos/responses/purchase-order.response.dto';
import { toPurchaseOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Purchases')
@Controller('purchases')
export class GetPurchaseOrdersByVendorController {
    constructor(
        @Inject(IGetPurchaseOrdersByVendorHandler)
        private readonly handler: IGetPurchaseOrdersByVendorHandler,
    ) {}

    @Version('1')
    @Get('vendor/:vendorId')
    @ApiOperation({ summary: 'Get all purchase orders for a vendor' })
    @ApiResponse({ status: 200, type: [PurchaseOrderResponseDto] })
    async getByVendor(@Param('vendorId') vendorId: string): Promise<PurchaseOrderResponseDto[]> {
        const results = await this.handler.handle(new GetPurchaseOrdersByVendorQuery(vendorId));
        return results.map(toPurchaseOrderResponseDto);
    }
}
