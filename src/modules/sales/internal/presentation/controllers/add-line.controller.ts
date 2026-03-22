import { Controller, Post, Param, Body, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AddLineHandler } from '../../application/commands/add-line/add-line.handler';
import { AddLineCommand } from '../../application/commands/add-line/add-line.command';
import { AddLineRequestDto } from '../dtos/requests/add-line.request.dto';
import { IGetSalesOrderHandler } from '../../application/queries/get-sales-order/get-sales-order.handler.interface';
import { GetSalesOrderQuery } from '../../application/queries/get-sales-order/get-sales-order.query';
import { SalesOrderResponseDto } from '../dtos/responses/sales-order.response.dto';
import { toSalesOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Sales')
@Controller('sales')
export class AddLineController {
    constructor(
        @Inject(AddLineHandler)
        private readonly handler: AddLineHandler,
        @Inject(IGetSalesOrderHandler)
        private readonly getHandler: IGetSalesOrderHandler,
    ) {}

    @Version('1')
    @Post(':id/lines')
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Add a line to a DRAFT sales order' })
    @ApiResponse({ status: 201, type: SalesOrderResponseDto })
    async addLine(
        @Param('id') id: string,
        @Body() dto: AddLineRequestDto,
    ): Promise<SalesOrderResponseDto> {
        await this.handler.handle(new AddLineCommand(id, dto.itemId, dto.quantity, dto.unitPrice));
        const result = await this.getHandler.handle(new GetSalesOrderQuery(id));
        return toSalesOrderResponseDto(result);
    }
}
