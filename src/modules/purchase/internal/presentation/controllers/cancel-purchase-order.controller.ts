import { Controller, Post, Param, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CancelPurchaseOrderHandler } from '../../application/commands/cancel-purchase-order/cancel-purchase-order.handler';
import { CancelPurchaseOrderCommand } from '../../application/commands/cancel-purchase-order/cancel-purchase-order.command';

@ApiTags('Purchases')
@Controller('purchases')
export class CancelPurchaseOrderController {
    constructor(
        @Inject(CancelPurchaseOrderHandler)
        private readonly handler: CancelPurchaseOrderHandler,
    ) {}

    @Version('1')
    @Post(':id/cancel')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Cancel purchase order (DRAFT|CONFIRMED → CANCELLED)' })
    @ApiResponse({ status: 204 })
    async cancel(@Param('id') id: string): Promise<void> {
        await this.handler.handle(new CancelPurchaseOrderCommand(id));
    }
}
