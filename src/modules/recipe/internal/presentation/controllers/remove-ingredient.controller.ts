import { Controller, Delete, Param, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RemoveIngredientHandler } from '../../application/commands/remove-ingredient/remove-ingredient.handler';
import { RemoveIngredientCommand } from '../../application/commands/remove-ingredient/remove-ingredient.command';

@ApiTags('Recipes')
@Controller('recipes')
export class RemoveIngredientController {
    constructor(
        @Inject(RemoveIngredientHandler)
        private readonly handler: RemoveIngredientHandler,
    ) {}

    @Version('1')
    @Delete(':id/ingredients/:ingredientId')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Remove an ingredient from a DRAFT recipe version' })
    @ApiResponse({ status: 204, description: 'Removed successfully' })
    @ApiResponse({ status: 409, description: 'Version not editable' })
    async remove(@Param('id') id: string, @Param('ingredientId') ingredientId: string): Promise<void> {
        const command = new RemoveIngredientCommand(id, ingredientId);
        await this.handler.handle(command);
    }
}
