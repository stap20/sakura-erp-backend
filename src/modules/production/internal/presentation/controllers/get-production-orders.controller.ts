import { Controller, Get, Query, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { IGetProductionOrdersHandler } from '../../application/queries/get-production-orders/get-production-orders.handler.interface';
import { GetProductionOrdersQuery } from '../../application/queries/get-production-orders/get-production-orders.query';
import { ProductionOrderResponseDto } from '../dtos/responses/production-order.response.dto';
import { toProductionOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Production')
@Controller('production-orders')
export class GetProductionOrdersController {
    constructor(
        @Inject(IGetProductionOrdersHandler)
        private readonly handler: IGetProductionOrdersHandler,
    ) {}

    @Version('1')
    @Get()
    @ApiOperation({ summary: 'List production orders' })
    @ApiQuery({ name: 'productId', required: false })
    @ApiQuery({ name: 'status', required: false })
    @ApiQuery({ name: 'offset', required: false })
    @ApiQuery({ name: 'limit', required: false })
    @ApiResponse({ status: 200, type: [ProductionOrderResponseDto] })
    async getAll(
        @Query('productId') productId?: string,
        @Query('status') status?: string,
        @Query('offset') offset?: string,
        @Query('limit') limit?: string,
    ): Promise<ProductionOrderResponseDto[]> {
        const result = await this.handler.handle(
            new GetProductionOrdersQuery(
                productId,
                status,
                offset ? parseInt(offset) : 0,
                limit ? parseInt(limit) : 20,
            ),
        );
        return result.orders.map(toProductionOrderResponseDto);
    }
}
