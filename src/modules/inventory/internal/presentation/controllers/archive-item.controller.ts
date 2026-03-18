import { Controller, Post, Param, Version, Inject, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ArchiveItemHandler } from '../../application/commands/archive-item/archive-item.handler';
import { ArchiveItemCommand } from '../../application/commands/archive-item/archive-item.command';

@ApiTags('Inventory - Items')
@Controller('inventory/items')
export class ArchiveItemController {
    constructor(
        @Inject(ArchiveItemHandler)
        private readonly archiveItemHandler: ArchiveItemHandler,
    ) {}

    @Version('1')
    @Post(':id/archive')
    @HttpCode(204)
    @ApiOperation({ summary: 'Archive an inventory item (soft delete)' })
    @ApiResponse({ status: 204, description: 'Item archived successfully' })
    @ApiResponse({ status: 404, description: 'Item not found' })
    @ApiResponse({ status: 400, description: 'Item still has stock' })
    async archive(@Param('id') id: string): Promise<void> {
        const command = new ArchiveItemCommand(id);
        await this.archiveItemHandler.handle(command);
    }
}
