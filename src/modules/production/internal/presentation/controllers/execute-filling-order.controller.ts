import { Controller, Post, Param, Body, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ExecuteFillingOrderHandler } from '../../application/commands/execute-filling-order/execute-filling-order.handler';
import { ExecuteFillingOrderCommand } from '../../application/commands/execute-filling-order/execute-filling-order.command';
import { ExecuteOrderRequestDto } from '../dtos/requests/execute-order.request.dto';

@ApiTags('Filling Orders')
@Controller('filling-orders')
export class ExecuteFillingOrderController {
    constructor(
        @Inject(ExecuteFillingOrderHandler)
        private readonly handler: ExecuteFillingOrderHandler,
    ) {}

    @Version('1')
    @Post(':id/execute')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Execute filling order (CONFIRMED -> EXECUTED + deduct bulk + restock variants + deduct packaging)' })
    @ApiResponse({ status: 204 })
    async execute(@Param('id') id: string, @Body() dto: ExecuteOrderRequestDto): Promise<void> {
        await this.handler.handle(new ExecuteFillingOrderCommand(id, dto.performedBy ?? 'SYSTEM'));
    }
}
