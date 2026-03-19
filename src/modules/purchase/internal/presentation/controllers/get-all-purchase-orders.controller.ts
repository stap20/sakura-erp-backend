import { Controller, Get, Query, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetAllPurchaseOrdersHandler } from '../../application/queries/get-all-purchase-orders/get-all-purchase-orders.handler.interface';
import { GetAllPurchaseOrdersQuery } from '../../application/queries/get-all-purchase-orders/get-all-purchase-orders.query';
import { GetAllPurchaseOrdersQueryDto } from '../dtos/requests/get-all-purchase-orders.query.dto';
import { PurchaseOrderResponseDto } from '../dtos/responses/purchase-order.response.dto';
import { toPurchaseOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Purchases')
@Controller('purchases')
export class GetAllPurchaseOrdersController {
    constructor(
        @Inject(IGetAllPurchaseOrdersHandler)
        private readonly handler: IGetAllPurchaseOrdersHandler,
    ) {}

    @Version('1')
    @Get()
    @ApiOperation({ summary: 'Get all purchase orders with optional filters' })
    @ApiResponse({ status: 200, type: [PurchaseOrderResponseDto] })
    async getAll(@Query() dto: GetAllPurchaseOrdersQueryDto): Promise<PurchaseOrderResponseDto[]> {
        const query = new GetAllPurchaseOrdersQuery(dto.vendorId, dto.status, dto.offset ?? 0, dto.limit ?? 20);
        const results = await this.handler.handle(query);
        return results.map(toPurchaseOrderResponseDto);
    }
}
