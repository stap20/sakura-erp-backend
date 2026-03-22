import { Controller, Get, Param, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetSalesOrderHandler } from '../../application/queries/get-sales-order/get-sales-order.handler.interface';
import { GetSalesOrderQuery } from '../../application/queries/get-sales-order/get-sales-order.query';
import { SalesOrderResponseDto } from '../dtos/responses/sales-order.response.dto';
import { toSalesOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Sales')
@Controller('sales')
export class GetSalesOrderByIdController {
    constructor(
        @Inject(IGetSalesOrderHandler)
        private readonly handler: IGetSalesOrderHandler,
    ) {}

    @Version('1')
    @Get(':id')
    @ApiOperation({ summary: 'Get sales order by ID' })
    @ApiResponse({ status: 200, type: SalesOrderResponseDto })
    async getById(@Param('id') id: string): Promise<SalesOrderResponseDto> {
        const result = await this.handler.handle(new GetSalesOrderQuery(id));
        return toSalesOrderResponseDto(result);
    }
}
