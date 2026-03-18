import { Controller, Get, Query, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetAllRecipeVersionsHandler } from '../../application/queries/get-all-recipe-versions/get-all-recipe-versions.handler.interface';
import { GetAllRecipeVersionsQuery } from '../../application/queries/get-all-recipe-versions/get-all-recipe-versions.query';
import { GetAllRecipeVersionsRequestDto } from '../dtos/requests/get-all-recipe-versions.request.dto';
import { RecipeVersionResponseDto } from '../dtos/responses/recipe-version.response.dto';
import { toRecipeVersionResponseDto } from './helpers/response.mapper';

@ApiTags('Recipes')
@Controller('recipes')
export class GetAllRecipeVersionsController {
    constructor(
        @Inject(IGetAllRecipeVersionsHandler)
        private readonly handler: IGetAllRecipeVersionsHandler,
    ) {}

    @Version('1')
    @Get()
    @ApiOperation({ summary: 'Get all recipe versions with optional filters' })
    @ApiResponse({ status: 200, type: [RecipeVersionResponseDto] })
    async getAll(@Query() dto: GetAllRecipeVersionsRequestDto): Promise<RecipeVersionResponseDto[]> {
        const query = new GetAllRecipeVersionsQuery(dto.productId, dto.status, dto.offset ?? 0, dto.limit ?? 20);
        const result = await this.handler.handle(query);
        return result.items.map(toRecipeVersionResponseDto);
    }
}
