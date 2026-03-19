import { Controller, Post, Param, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ActivateRecipeVersionHandler } from '../../application/commands/activate-recipe-version/activate-recipe-version.handler';
import { ActivateRecipeVersionCommand } from '../../application/commands/activate-recipe-version/activate-recipe-version.command';

@ApiTags('Recipes')
@Controller('recipes')
export class ActivateRecipeVersionController {
    constructor(
        @Inject(ActivateRecipeVersionHandler)
        private readonly handler: ActivateRecipeVersionHandler,
    ) {}

    @Version('1')
    @Post(':id/activate')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Activate a recipe version (auto-archives previous active)' })
    @ApiResponse({ status: 204, description: 'Activated successfully' })
    @ApiResponse({ status: 409, description: 'Recipe version is not editable or formula is invalid' })
    async activate(@Param('id') id: string): Promise<void> {
        const command = new ActivateRecipeVersionCommand(id);
        await this.handler.handle(command);
    }
}
