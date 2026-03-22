import { Controller, Get, Query, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetAllSalesOrdersHandler } from '../../application/queries/get-all-sales-orders/get-all-sales-orders.handler.interface';
import { GetAllSalesOrdersQuery } from '../../application/queries/get-all-sales-orders/get-all-sales-orders.query';
import { GetAllSalesOrdersQueryDto } from '../dtos/requests/get-all-sales-orders.query.dto';
import { SalesOrderResponseDto } from '../dtos/responses/sales-order.response.dto';
import { toAllSalesOrdersResponseDto } from './helpers/response.mapper';

@ApiTags('Sales')
@Controller('sales')
export class GetAllSalesOrdersController {
    constructor(
        @Inject(IGetAllSalesOrdersHandler)
        private readonly handler: IGetAllSalesOrdersHandler,
    ) {}

    @Version('1')
    @Get()
    @ApiOperation({ summary: 'Get all sales orders' })
    @ApiResponse({ status: 200, type: [SalesOrderResponseDto] })
    async getAll(@Query() query: GetAllSalesOrdersQueryDto): Promise<SalesOrderResponseDto[]> {
        const results = await this.handler.handle(new GetAllSalesOrdersQuery(query.status, query.paymentStatus));
        return results.map(toAllSalesOrdersResponseDto);
    }
}
