import { Controller, Post, Param, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MarkAsPaidHandler } from '../../application/commands/mark-as-paid/mark-as-paid.handler';
import { MarkAsPaidCommand } from '../../application/commands/mark-as-paid/mark-as-paid.command';

@ApiTags('Sales')
@Controller('sales')
export class MarkAsPaidController {
    constructor(
        @Inject(MarkAsPaidHandler)
        private readonly handler: MarkAsPaidHandler,
    ) {}

    @Version('1')
    @Post(':id/mark-paid')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Mark a CONFIRMED or SHIPPED sales order as paid' })
    @ApiResponse({ status: 204 })
    async markAsPaid(@Param('id') id: string): Promise<void> {
        await this.handler.handle(new MarkAsPaidCommand(id));
    }
}
