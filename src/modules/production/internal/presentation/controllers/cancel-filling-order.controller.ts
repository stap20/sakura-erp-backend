import { Controller, Post, Param, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CancelFillingOrderHandler } from '../../application/commands/cancel-filling-order/cancel-filling-order.handler';
import { CancelFillingOrderCommand } from '../../application/commands/cancel-filling-order/cancel-filling-order.command';

@ApiTags('Filling Orders')
@Controller('filling-orders')
export class CancelFillingOrderController {
    constructor(
        @Inject(CancelFillingOrderHandler)
        private readonly handler: CancelFillingOrderHandler,
    ) {}

    @Version('1')
    @Post(':id/cancel')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Cancel filling order' })
    @ApiResponse({ status: 204 })
    async cancel(@Param('id') id: string): Promise<void> {
        await this.handler.handle(new CancelFillingOrderCommand(id));
    }
}
