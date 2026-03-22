import { Controller, Post, Param, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ShipSalesOrderHandler } from '../../application/commands/ship-sales-order/ship-sales-order.handler';
import { ShipSalesOrderCommand } from '../../application/commands/ship-sales-order/ship-sales-order.command';

@ApiTags('Sales')
@Controller('sales')
export class ShipSalesOrderController {
    constructor(
        @Inject(ShipSalesOrderHandler)
        private readonly handler: ShipSalesOrderHandler,
    ) {}

    @Version('1')
    @Post(':id/ship')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Ship a CONFIRMED sales order (deducts stock)' })
    @ApiResponse({ status: 204 })
    async ship(@Param('id') id: string): Promise<void> {
        await this.handler.handle(new ShipSalesOrderCommand(id));
    }
}
