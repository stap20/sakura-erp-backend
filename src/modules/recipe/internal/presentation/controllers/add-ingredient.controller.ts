import { Controller, Post, Param, Body, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AddIngredientHandler } from '../../application/commands/add-ingredient/add-ingredient.handler';
import { AddIngredientCommand } from '../../application/commands/add-ingredient/add-ingredient.command';
import { AddIngredientRequestDto } from '../dtos/requests/add-ingredient.request.dto';
import { RecipeVersionResponseDto } from '../dtos/responses/recipe-version.response.dto';
import { toRecipeVersionResponseDto } from './helpers/response.mapper';

@ApiTags('Recipes')
@Controller('recipes')
export class AddIngredientController {
    constructor(
        @Inject(AddIngredientHandler)
        private readonly handler: AddIngredientHandler,
    ) {}

    @Version('1')
    @Post(':id/ingredients')
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Add an ingredient to a DRAFT recipe version' })
    @ApiResponse({ status: 201, type: RecipeVersionResponseDto })
    @ApiResponse({ status: 409, description: 'Duplicate ingredient or version not editable' })
    async add(@Param('id') id: string, @Body() dto: AddIngredientRequestDto): Promise<RecipeVersionResponseDto> {
        const command = new AddIngredientCommand(
            id,
            dto.isAddOn ?? false,
            dto.quantity,
            dto.notes,
            dto.itemId,
            dto.itemName,
            dto.ingredientCategory,
            dto.resolutionPhase,
        );
        const result = await this.handler.handle(command);
        return toRecipeVersionResponseDto(result);
    }
}
