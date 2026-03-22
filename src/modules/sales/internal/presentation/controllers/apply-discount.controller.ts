import { Controller, Post, Param, Body, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApplyDiscountHandler } from '../../application/commands/apply-discount/apply-discount.handler';
import { ApplyDiscountCommand } from '../../application/commands/apply-discount/apply-discount.command';
import { ApplyDiscountRequestDto } from '../dtos/requests/apply-discount.request.dto';
import { IGetSalesOrderHandler } from '../../application/queries/get-sales-order/get-sales-order.handler.interface';
import { GetSalesOrderQuery } from '../../application/queries/get-sales-order/get-sales-order.query';
import { SalesOrderResponseDto } from '../dtos/responses/sales-order.response.dto';
import { toSalesOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Sales')
@Controller('sales')
export class ApplyDiscountController {
    constructor(
        @Inject(ApplyDiscountHandler)
        private readonly handler: ApplyDiscountHandler,
        @Inject(IGetSalesOrderHandler)
        private readonly getHandler: IGetSalesOrderHandler,
    ) {}

    @Version('1')
    @Post(':id/apply-discount')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Apply a discount code to a DRAFT sales order' })
    @ApiResponse({ status: 200, type: SalesOrderResponseDto })
    async apply(@Param('id') id: string, @Body() dto: ApplyDiscountRequestDto): Promise<SalesOrderResponseDto> {
        await this.handler.handle(new ApplyDiscountCommand(id, dto.code));
        const result = await this.getHandler.handle(new GetSalesOrderQuery(id));
        return toSalesOrderResponseDto(result);
    }
}
