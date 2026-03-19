import { Controller, Get, Param, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetProductionOrderHandler } from '../../application/queries/get-production-order/get-production-order.handler.interface';
import { GetProductionOrderQuery } from '../../application/queries/get-production-order/get-production-order.query';
import { ProductionOrderResponseDto } from '../dtos/responses/production-order.response.dto';
import { toProductionOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Production Orders')
@Controller('production/orders')
export class GetProductionOrderByIdController {
    constructor(
        @Inject(IGetProductionOrderHandler)
        private readonly handler: IGetProductionOrderHandler,
    ) {}

    @Version('1')
    @Get(':id')
    @ApiOperation({ summary: 'Get production order by ID' })
    @ApiResponse({ status: 200, type: ProductionOrderResponseDto })
    async getById(@Param('id') id: string): Promise<ProductionOrderResponseDto> {
        const result = await this.handler.handle(new GetProductionOrderQuery(id));
        return toProductionOrderResponseDto(result);
    }
}
