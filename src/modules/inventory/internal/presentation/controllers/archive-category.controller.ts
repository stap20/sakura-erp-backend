import { Controller, Post, Param, Version, Inject, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ArchiveCategoryHandler } from '../../application/commands/archive-category/archive-category.handler';
import { ArchiveCategoryCommand } from '../../application/commands/archive-category/archive-category.command';

@ApiTags('Inventory - Categories')
@Controller('inventory/categories')
export class ArchiveCategoryController {
    constructor(
        @Inject(ArchiveCategoryHandler)
        private readonly archiveCategoryHandler: ArchiveCategoryHandler,
    ) {}

    @Version('1')
    @Post(':id/archive')
    @HttpCode(204)
    @ApiOperation({ summary: 'Archive a raw material category (soft delete)' })
    @ApiResponse({ status: 204, description: 'Category archived successfully' })
    @ApiResponse({ status: 404, description: 'Category not found' })
    @ApiResponse({ status: 400, description: 'Category has active items linked to it' })
    async archive(@Param('id') id: string): Promise<void> {
        const command = new ArchiveCategoryCommand(id);
        await this.archiveCategoryHandler.handle(command);
    }
}
