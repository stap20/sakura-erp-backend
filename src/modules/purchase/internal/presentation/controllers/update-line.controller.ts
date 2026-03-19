import { Controller, Patch, Body, Param, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateLineHandler } from '../../application/commands/update-line/update-line.handler';
import { UpdateLineCommand } from '../../application/commands/update-line/update-line.command';
import { IGetPurchaseOrderHandler } from '../../application/queries/get-purchase-order/get-purchase-order.handler.interface';
import { GetPurchaseOrderQuery } from '../../application/queries/get-purchase-order/get-purchase-order.query';
import { UpdateLineRequestDto } from '../dtos/requests/update-line.request.dto';
import { PurchaseOrderResponseDto } from '../dtos/responses/purchase-order.response.dto';
import { toPurchaseOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Purchases')
@Controller('purchases')
export class UpdateLineController {
    constructor(
        @Inject(UpdateLineHandler)
        private readonly handler: UpdateLineHandler,
        @Inject(IGetPurchaseOrderHandler)
        private readonly getHandler: IGetPurchaseOrderHandler,
    ) {}

    @Version('1')
    @Patch(':id/lines/:lineId')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Update line quantity/price (DRAFT only)' })
    @ApiResponse({ status: 200, type: PurchaseOrderResponseDto })
    async updateLine(
        @Param('id') id: string,
        @Param('lineId') lineId: string,
        @Body() dto: UpdateLineRequestDto,
    ): Promise<PurchaseOrderResponseDto> {
        await this.handler.handle(new UpdateLineCommand(id, lineId, dto.quantity, dto.unitPrice));
        const result = await this.getHandler.handle(new GetPurchaseOrderQuery(id));
        return toPurchaseOrderResponseDto(result);
    }
}
