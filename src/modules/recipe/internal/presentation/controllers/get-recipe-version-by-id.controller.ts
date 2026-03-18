import { Controller, Get, Param, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetRecipeVersionHandler } from '../../application/queries/get-recipe-version/get-recipe-version.handler.interface';
import { GetRecipeVersionQuery } from '../../application/queries/get-recipe-version/get-recipe-version.query';
import { RecipeVersionResponseDto } from '../dtos/responses/recipe-version.response.dto';
import { toRecipeVersionResponseDto } from './helpers/response.mapper';

@ApiTags('Recipes')
@Controller('recipes')
export class GetRecipeVersionByIdController {
    constructor(
        @Inject(IGetRecipeVersionHandler)
        private readonly handler: IGetRecipeVersionHandler,
    ) {}

    @Version('1')
    @Get(':id')
    @ApiOperation({ summary: 'Get a recipe version by ID' })
    @ApiResponse({ status: 200, type: RecipeVersionResponseDto })
    @ApiResponse({ status: 404, description: 'Recipe version not found' })
    async getById(@Param('id') id: string): Promise<RecipeVersionResponseDto> {
        const query = new GetRecipeVersionQuery(id);
        const result = await this.handler.handle(query);
        return toRecipeVersionResponseDto(result);
    }
}
