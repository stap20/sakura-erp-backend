import { Controller, Post, Param, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ArchiveRecipeVersionHandler } from '../../application/commands/archive-recipe-version/archive-recipe-version.handler';
import { ArchiveRecipeVersionCommand } from '../../application/commands/archive-recipe-version/archive-recipe-version.command';

@ApiTags('Recipes')
@Controller('recipes')
export class ArchiveRecipeVersionController {
    constructor(
        @Inject(ArchiveRecipeVersionHandler)
        private readonly handler: ArchiveRecipeVersionHandler,
    ) {}

    @Version('1')
    @Post(':id/archive')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Archive an active recipe version' })
    @ApiResponse({ status: 204, description: 'Archived successfully' })
    @ApiResponse({ status: 409, description: 'Recipe version is not archivable' })
    async archive(@Param('id') id: string): Promise<void> {
        const command = new ArchiveRecipeVersionCommand(id);
        await this.handler.handle(command);
    }
}
