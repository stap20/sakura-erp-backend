import { Controller, Post, Param, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ReceivePurchaseOrderHandler } from '../../application/commands/receive-purchase-order/receive-purchase-order.handler';
import { ReceivePurchaseOrderCommand } from '../../application/commands/receive-purchase-order/receive-purchase-order.command';

@ApiTags('Purchases')
@Controller('purchases')
export class ReceivePurchaseOrderController {
    constructor(
        @Inject(ReceivePurchaseOrderHandler)
        private readonly handler: ReceivePurchaseOrderHandler,
    ) {}

    @Version('1')
    @Post(':id/receive')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Receive purchase order (CONFIRMED → RECEIVED + restock inventory)' })
    @ApiResponse({ status: 204 })
    async receive(@Param('id') id: string): Promise<void> {
        await this.handler.handle(new ReceivePurchaseOrderCommand(id));
    }
}
