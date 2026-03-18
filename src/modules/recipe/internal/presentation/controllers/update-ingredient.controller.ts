import { Controller, Patch, Param, Body, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateIngredientHandler } from '../../application/commands/update-ingredient/update-ingredient.handler';
import { UpdateIngredientCommand } from '../../application/commands/update-ingredient/update-ingredient.command';
import { UpdateIngredientRequestDto } from '../dtos/requests/update-ingredient.request.dto';

@ApiTags('Recipes')
@Controller('recipes')
export class UpdateIngredientController {
    constructor(
        @Inject(UpdateIngredientHandler)
        private readonly handler: UpdateIngredientHandler,
    ) {}

    @Version('1')
    @Patch(':id/ingredients/:ingredientId')
    @ApiOperation({ summary: 'Update an ingredient in a DRAFT recipe version' })
    @ApiResponse({ status: 200, description: 'Updated successfully' })
    @ApiResponse({ status: 409, description: 'Version not editable' })
    async update(
        @Param('id') id: string,
        @Param('ingredientId') ingredientId: string,
        @Body() dto: UpdateIngredientRequestDto,
    ): Promise<void> {
        const command = new UpdateIngredientCommand(id, ingredientId, dto.quantity, dto.notes);
        await this.handler.handle(command);
    }
}
