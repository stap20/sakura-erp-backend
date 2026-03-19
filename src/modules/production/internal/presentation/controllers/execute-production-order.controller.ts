import { Controller, Post, Param, Body, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ExecuteProductionOrderHandler } from '../../application/commands/execute-production-order/execute-production-order.handler';
import { ExecuteProductionOrderCommand } from '../../application/commands/execute-production-order/execute-production-order.command';
import { ExecuteOrderRequestDto } from '../dtos/requests/execute-order.request.dto';

@ApiTags('Production Orders')
@Controller('production/orders')
export class ExecuteProductionOrderController {
    constructor(
        @Inject(ExecuteProductionOrderHandler)
        private readonly handler: ExecuteProductionOrderHandler,
    ) {}

    @Version('1')
    @Post(':id/execute')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Execute production order (CONFIRMED -> EXECUTED + deduct ingredients + add bulk)' })
    @ApiResponse({ status: 204 })
    async execute(@Param('id') id: string, @Body() dto: ExecuteOrderRequestDto): Promise<void> {
        await this.handler.handle(new ExecuteProductionOrderCommand(id, dto.performedBy ?? 'SYSTEM'));
    }
}
