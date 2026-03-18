import { Controller, Post, Body, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateRecipeVersionHandler } from '../../application/commands/create-recipe-version/create-recipe-version.handler';
import { CreateRecipeVersionCommand } from '../../application/commands/create-recipe-version/create-recipe-version.command';
import { CreateRecipeVersionRequestDto } from '../dtos/requests/create-recipe-version.request.dto';
import { RecipeVersionResponseDto } from '../dtos/responses/recipe-version.response.dto';
import { toRecipeVersionResponseDto } from './helpers/response.mapper';

@ApiTags('Recipes')
@Controller('recipes')
export class CreateRecipeVersionController {
    constructor(
        @Inject(CreateRecipeVersionHandler)
        private readonly handler: CreateRecipeVersionHandler,
    ) {}

    @Version('1')
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Create a new DRAFT recipe version' })
    @ApiResponse({ status: 201, type: RecipeVersionResponseDto })
    async create(@Body() dto: CreateRecipeVersionRequestDto): Promise<RecipeVersionResponseDto> {
        const command = new CreateRecipeVersionCommand(dto.productId, dto.notes);
        const result = await this.handler.handle(command);
        return toRecipeVersionResponseDto(result);
    }
}
