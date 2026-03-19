import { Controller, Post, Param, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CancelProductionOrderHandler } from '../../application/commands/cancel-production-order/cancel-production-order.handler';
import { CancelProductionOrderCommand } from '../../application/commands/cancel-production-order/cancel-production-order.command';

@ApiTags('Production Orders')
@Controller('production/orders')
export class CancelProductionOrderController {
    constructor(
        @Inject(CancelProductionOrderHandler)
        private readonly handler: CancelProductionOrderHandler,
    ) {}

    @Version('1')
    @Post(':id/cancel')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Cancel production order' })
    @ApiResponse({ status: 204 })
    async cancel(@Param('id') id: string): Promise<void> {
        await this.handler.handle(new CancelProductionOrderCommand(id));
    }
}
