import { Controller, Delete, Param, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RemoveLineHandler } from '../../application/commands/remove-line/remove-line.handler';
import { RemoveLineCommand } from '../../application/commands/remove-line/remove-line.command';

@ApiTags('Sales')
@Controller('sales')
export class RemoveLineController {
    constructor(
        @Inject(RemoveLineHandler)
        private readonly handler: RemoveLineHandler,
    ) {}

    @Version('1')
    @Delete(':id/lines/:lineId')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Remove a line from a DRAFT sales order' })
    @ApiResponse({ status: 204 })
    async removeLine(
        @Param('id') id: string,
        @Param('lineId') lineId: string,
    ): Promise<void> {
        await this.handler.handle(new RemoveLineCommand(id, lineId));
    }
}
