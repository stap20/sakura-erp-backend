import { Controller, Get, Query, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetAllProductionOrdersHandler } from '../../application/queries/get-all-production-orders/get-all-production-orders.handler.interface';
import { GetAllProductionOrdersQuery } from '../../application/queries/get-all-production-orders/get-all-production-orders.query';
import { GetAllProductionOrdersQueryDto } from '../dtos/requests/get-all-production-orders.query.dto';
import { ProductionOrderResponseDto } from '../dtos/responses/production-order.response.dto';
import { toProductionOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Production Orders')
@Controller('production/orders')
export class GetAllProductionOrdersController {
    constructor(
        @Inject(IGetAllProductionOrdersHandler)
        private readonly handler: IGetAllProductionOrdersHandler,
    ) {}

    @Version('1')
    @Get()
    @ApiOperation({ summary: 'Get all production orders with optional filters' })
    @ApiResponse({ status: 200, type: [ProductionOrderResponseDto] })
    async getAll(@Query() dto: GetAllProductionOrdersQueryDto): Promise<ProductionOrderResponseDto[]> {
        const query = new GetAllProductionOrdersQuery(dto.productId, dto.status, dto.offset ?? 0, dto.limit ?? 20);
        const results = await this.handler.handle(query);
        return results.map(toProductionOrderResponseDto);
    }
}
