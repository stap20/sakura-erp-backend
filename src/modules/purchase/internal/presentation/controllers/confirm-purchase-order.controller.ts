import { Controller, Post, Param, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ConfirmPurchaseOrderHandler } from '../../application/commands/confirm-purchase-order/confirm-purchase-order.handler';
import { ConfirmPurchaseOrderCommand } from '../../application/commands/confirm-purchase-order/confirm-purchase-order.command';

@ApiTags('Purchases')
@Controller('purchases')
export class ConfirmPurchaseOrderController {
    constructor(
        @Inject(ConfirmPurchaseOrderHandler)
        private readonly handler: ConfirmPurchaseOrderHandler,
    ) {}

    @Version('1')
    @Post(':id/confirm')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Confirm purchase order (DRAFT → CONFIRMED)' })
    @ApiResponse({ status: 204 })
    async confirm(@Param('id') id: string): Promise<void> {
        await this.handler.handle(new ConfirmPurchaseOrderCommand(id));
    }
}
