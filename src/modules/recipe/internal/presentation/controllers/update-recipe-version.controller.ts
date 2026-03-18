import { Controller, Patch, Param, Body, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateRecipeVersionHandler } from '../../application/commands/update-recipe-version/update-recipe-version.handler';
import { UpdateRecipeVersionCommand } from '../../application/commands/update-recipe-version/update-recipe-version.command';
import { UpdateRecipeVersionRequestDto } from '../dtos/requests/update-recipe-version.request.dto';

@ApiTags('Recipes')
@Controller('recipes')
export class UpdateRecipeVersionController {
    constructor(
        @Inject(UpdateRecipeVersionHandler)
        private readonly handler: UpdateRecipeVersionHandler,
    ) {}

    @Version('1')
    @Patch(':id')
    @ApiOperation({ summary: 'Update recipe version notes (DRAFT only)' })
    @ApiResponse({ status: 200, description: 'Updated successfully' })
    @ApiResponse({ status: 409, description: 'Recipe version is not editable' })
    async update(@Param('id') id: string, @Body() dto: UpdateRecipeVersionRequestDto): Promise<void> {
        const command = new UpdateRecipeVersionCommand(id, dto.notes ?? null);
        await this.handler.handle(command);
    }
}
