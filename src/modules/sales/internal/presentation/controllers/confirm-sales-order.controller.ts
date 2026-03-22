import { Controller, Post, Param, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ConfirmSalesOrderHandler } from '../../application/commands/confirm-sales-order/confirm-sales-order.handler';
import { ConfirmSalesOrderCommand } from '../../application/commands/confirm-sales-order/confirm-sales-order.command';

@ApiTags('Sales')
@Controller('sales')
export class ConfirmSalesOrderController {
    constructor(
        @Inject(ConfirmSalesOrderHandler)
        private readonly handler: ConfirmSalesOrderHandler,
    ) {}

    @Version('1')
    @Post(':id/confirm')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Confirm a DRAFT sales order' })
    @ApiResponse({ status: 204 })
    async confirm(@Param('id') id: string): Promise<void> {
        await this.handler.handle(new ConfirmSalesOrderCommand(id));
    }
}
