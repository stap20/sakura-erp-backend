import { Controller, Post, Param, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CancelSalesOrderHandler } from '../../application/commands/cancel-sales-order/cancel-sales-order.handler';
import { CancelSalesOrderCommand } from '../../application/commands/cancel-sales-order/cancel-sales-order.command';

@ApiTags('Sales')
@Controller('sales')
export class CancelSalesOrderController {
    constructor(
        @Inject(CancelSalesOrderHandler)
        private readonly handler: CancelSalesOrderHandler,
    ) {}

    @Version('1')
    @Post(':id/cancel')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Cancel a DRAFT or CONFIRMED sales order' })
    @ApiResponse({ status: 204 })
    async cancel(@Param('id') id: string): Promise<void> {
        await this.handler.handle(new CancelSalesOrderCommand(id));
    }
}
