import { Controller, Post, Body, Param, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AddLineHandler } from '../../application/commands/add-line/add-line.handler';
import { AddLineCommand } from '../../application/commands/add-line/add-line.command';
import { IGetPurchaseOrderHandler } from '../../application/queries/get-purchase-order/get-purchase-order.handler.interface';
import { GetPurchaseOrderQuery } from '../../application/queries/get-purchase-order/get-purchase-order.query';
import { AddLineRequestDto } from '../dtos/requests/add-line.request.dto';
import { PurchaseOrderResponseDto } from '../dtos/responses/purchase-order.response.dto';
import { toPurchaseOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Purchases')
@Controller('purchases')
export class AddLineController {
    constructor(
        @Inject(AddLineHandler)
        private readonly handler: AddLineHandler,
        @Inject(IGetPurchaseOrderHandler)
        private readonly getHandler: IGetPurchaseOrderHandler,
    ) {}

    @Version('1')
    @Post(':id/lines')
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Add a line to purchase order (DRAFT only)' })
    @ApiResponse({ status: 201, type: PurchaseOrderResponseDto })
    async addLine(
        @Param('id') id: string,
        @Body() dto: AddLineRequestDto,
    ): Promise<PurchaseOrderResponseDto> {
        await this.handler.handle(new AddLineCommand(id, dto.itemId, dto.quantity, dto.unitPrice));
        const result = await this.getHandler.handle(new GetPurchaseOrderQuery(id));
        return toPurchaseOrderResponseDto(result);
    }
}
