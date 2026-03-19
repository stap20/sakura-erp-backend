import { Controller, Get, Param, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetPurchaseOrderHandler } from '../../application/queries/get-purchase-order/get-purchase-order.handler.interface';
import { GetPurchaseOrderQuery } from '../../application/queries/get-purchase-order/get-purchase-order.query';
import { PurchaseOrderResponseDto } from '../dtos/responses/purchase-order.response.dto';
import { toPurchaseOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Purchases')
@Controller('purchases')
export class GetPurchaseOrderByIdController {
    constructor(
        @Inject(IGetPurchaseOrderHandler)
        private readonly handler: IGetPurchaseOrderHandler,
    ) {}

    @Version('1')
    @Get(':id')
    @ApiOperation({ summary: 'Get purchase order by ID' })
    @ApiResponse({ status: 200, type: PurchaseOrderResponseDto })
    async getById(@Param('id') id: string): Promise<PurchaseOrderResponseDto> {
        const result = await this.handler.handle(new GetPurchaseOrderQuery(id));
        return toPurchaseOrderResponseDto(result);
    }
}
