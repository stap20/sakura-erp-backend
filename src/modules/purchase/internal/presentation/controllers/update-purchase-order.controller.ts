import { Controller, Patch, Body, Param, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdatePurchaseOrderHandler } from '../../application/commands/update-purchase-order/update-purchase-order.handler';
import { UpdatePurchaseOrderCommand } from '../../application/commands/update-purchase-order/update-purchase-order.command';
import { IGetPurchaseOrderHandler } from '../../application/queries/get-purchase-order/get-purchase-order.handler.interface';
import { GetPurchaseOrderQuery } from '../../application/queries/get-purchase-order/get-purchase-order.query';
import { UpdatePurchaseOrderRequestDto } from '../dtos/requests/update-purchase-order.request.dto';
import { PurchaseOrderResponseDto } from '../dtos/responses/purchase-order.response.dto';
import { toPurchaseOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Purchases')
@Controller('purchases')
export class UpdatePurchaseOrderController {
    constructor(
        @Inject(UpdatePurchaseOrderHandler)
        private readonly handler: UpdatePurchaseOrderHandler,
        @Inject(IGetPurchaseOrderHandler)
        private readonly getHandler: IGetPurchaseOrderHandler,
    ) {}

    @Version('1')
    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Update purchase order notes (DRAFT only)' })
    @ApiResponse({ status: 200, type: PurchaseOrderResponseDto })
    async update(
        @Param('id') id: string,
        @Body() dto: UpdatePurchaseOrderRequestDto,
    ): Promise<PurchaseOrderResponseDto> {
        await this.handler.handle(new UpdatePurchaseOrderCommand(id, dto.notes));
        const result = await this.getHandler.handle(new GetPurchaseOrderQuery(id));
        return toPurchaseOrderResponseDto(result);
    }
}
