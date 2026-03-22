import { Controller, Patch, Param, Body, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateSalesOrderHandler } from '../../application/commands/update-sales-order/update-sales-order.handler';
import { UpdateSalesOrderCommand } from '../../application/commands/update-sales-order/update-sales-order.command';
import { UpdateSalesOrderRequestDto } from '../dtos/requests/update-sales-order.request.dto';
import { IGetSalesOrderHandler } from '../../application/queries/get-sales-order/get-sales-order.handler.interface';
import { GetSalesOrderQuery } from '../../application/queries/get-sales-order/get-sales-order.query';
import { SalesOrderResponseDto } from '../dtos/responses/sales-order.response.dto';
import { toSalesOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Sales')
@Controller('sales')
export class UpdateSalesOrderController {
    constructor(
        @Inject(UpdateSalesOrderHandler)
        private readonly handler: UpdateSalesOrderHandler,
        @Inject(IGetSalesOrderHandler)
        private readonly getHandler: IGetSalesOrderHandler,
    ) {}

    @Version('1')
    @Patch(':id')
    @ApiOperation({ summary: 'Update sales order notes' })
    @ApiResponse({ status: 200, type: SalesOrderResponseDto })
    async update(
        @Param('id') id: string,
        @Body() dto: UpdateSalesOrderRequestDto,
    ): Promise<SalesOrderResponseDto> {
        await this.handler.handle(new UpdateSalesOrderCommand(id, dto.notes ?? null));
        const result = await this.getHandler.handle(new GetSalesOrderQuery(id));
        return toSalesOrderResponseDto(result);
    }
}
