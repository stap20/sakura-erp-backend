import { Controller, Delete, Param, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RemoveFillingOrderLineHandler } from '../../application/commands/remove-filling-order-line/remove-filling-order-line.handler';
import { RemoveFillingOrderLineCommand } from '../../application/commands/remove-filling-order-line/remove-filling-order-line.command';

@ApiTags('Filling Orders')
@Controller('filling-orders')
export class RemoveFillingOrderLineController {
    constructor(
        @Inject(RemoveFillingOrderLineHandler)
        private readonly handler: RemoveFillingOrderLineHandler,
    ) {}

    @Version('1')
    @Delete(':id/lines/:lineId')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Remove a line from a DRAFT filling order' })
    @ApiResponse({ status: 204 })
    async removeLine(
        @Param('id') id: string,
        @Param('lineId') lineId: string,
    ): Promise<void> {
        await this.handler.handle(new RemoveFillingOrderLineCommand(id, lineId));
    }
}
