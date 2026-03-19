import { Controller, Post, Param, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ConfirmProductionOrderHandler } from '../../application/commands/confirm-production-order/confirm-production-order.handler';
import { ConfirmProductionOrderCommand } from '../../application/commands/confirm-production-order/confirm-production-order.command';

@ApiTags('Production Orders')
@Controller('production/orders')
export class ConfirmProductionOrderController {
    constructor(
        @Inject(ConfirmProductionOrderHandler)
        private readonly handler: ConfirmProductionOrderHandler,
    ) {}

    @Version('1')
    @Post(':id/confirm')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Confirm production order (DRAFT -> CONFIRMED)' })
    @ApiResponse({ status: 204 })
    async confirm(@Param('id') id: string): Promise<void> {
        await this.handler.handle(new ConfirmProductionOrderCommand(id));
    }
}
