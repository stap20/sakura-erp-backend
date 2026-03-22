import { Controller, Post, Body, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateSalesOrderHandler } from '../../application/commands/create-sales-order/create-sales-order.handler';
import { CreateSalesOrderCommand } from '../../application/commands/create-sales-order/create-sales-order.command';
import { CreateSalesOrderRequestDto } from '../dtos/requests/create-sales-order.request.dto';
import { IGetSalesOrderHandler } from '../../application/queries/get-sales-order/get-sales-order.handler.interface';
import { GetSalesOrderQuery } from '../../application/queries/get-sales-order/get-sales-order.query';
import { SalesOrderResponseDto } from '../dtos/responses/sales-order.response.dto';
import { toSalesOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Sales')
@Controller('sales')
export class CreateSalesOrderController {
    constructor(
        @Inject(CreateSalesOrderHandler)
        private readonly handler: CreateSalesOrderHandler,
        @Inject(IGetSalesOrderHandler)
        private readonly getHandler: IGetSalesOrderHandler,
    ) {}

    @Version('1')
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Create a new DRAFT sales order' })
    @ApiResponse({ status: 201, type: SalesOrderResponseDto })
    async create(@Body() dto: CreateSalesOrderRequestDto): Promise<SalesOrderResponseDto> {
        const id = await this.handler.handle(
            new CreateSalesOrderCommand(
                dto.customerName,
                dto.customerPhone ?? null,
                dto.customerContact ?? null,
                dto.notes ?? null,
            ),
        );
        const result = await this.getHandler.handle(new GetSalesOrderQuery(id));
        return toSalesOrderResponseDto(result);
    }
}
