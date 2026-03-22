import { Controller, Patch, Param, Body, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateLineHandler } from '../../application/commands/update-line/update-line.handler';
import { UpdateLineCommand } from '../../application/commands/update-line/update-line.command';
import { UpdateLineRequestDto } from '../dtos/requests/update-line.request.dto';
import { IGetSalesOrderHandler } from '../../application/queries/get-sales-order/get-sales-order.handler.interface';
import { GetSalesOrderQuery } from '../../application/queries/get-sales-order/get-sales-order.query';
import { SalesOrderResponseDto } from '../dtos/responses/sales-order.response.dto';
import { toSalesOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Sales')
@Controller('sales')
export class UpdateLineController {
    constructor(
        @Inject(UpdateLineHandler)
        private readonly handler: UpdateLineHandler,
        @Inject(IGetSalesOrderHandler)
        private readonly getHandler: IGetSalesOrderHandler,
    ) {}

    @Version('1')
    @Patch(':id/lines/:lineId')
    @ApiOperation({ summary: 'Update a line on a DRAFT sales order' })
    @ApiResponse({ status: 200, type: SalesOrderResponseDto })
    async updateLine(
        @Param('id') id: string,
        @Param('lineId') lineId: string,
        @Body() dto: UpdateLineRequestDto,
    ): Promise<SalesOrderResponseDto> {
        await this.handler.handle(new UpdateLineCommand(id, lineId, dto.quantity, dto.unitPrice, dto.isGift));
        const result = await this.getHandler.handle(new GetSalesOrderQuery(id));
        return toSalesOrderResponseDto(result);
    }
}
