import { Controller, Post, Param, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ConfirmFillingOrderHandler } from '../../application/commands/confirm-filling-order/confirm-filling-order.handler';
import { ConfirmFillingOrderCommand } from '../../application/commands/confirm-filling-order/confirm-filling-order.command';

@ApiTags('Filling Orders')
@Controller('filling-orders')
export class ConfirmFillingOrderController {
    constructor(
        @Inject(ConfirmFillingOrderHandler)
        private readonly handler: ConfirmFillingOrderHandler,
    ) {}

    @Version('1')
    @Post(':id/confirm')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Confirm filling order (DRAFT -> CONFIRMED)' })
    @ApiResponse({ status: 204 })
    async confirm(@Param('id') id: string): Promise<void> {
        await this.handler.handle(new ConfirmFillingOrderCommand(id));
    }
}
