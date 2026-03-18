import { Controller, Get, Param, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetRecipeVersionsByProductHandler } from '../../application/queries/get-recipe-versions-by-product/get-recipe-versions-by-product.handler.interface';
import { GetRecipeVersionsByProductQuery } from '../../application/queries/get-recipe-versions-by-product/get-recipe-versions-by-product.query';
import { RecipeVersionResponseDto } from '../dtos/responses/recipe-version.response.dto';
import { toRecipeVersionResponseDto } from './helpers/response.mapper';

@ApiTags('Recipes')
@Controller('recipes')
export class GetRecipeVersionsByProductController {
    constructor(
        @Inject(IGetRecipeVersionsByProductHandler)
        private readonly handler: IGetRecipeVersionsByProductHandler,
    ) {}

    @Version('1')
    @Get('product/:productId/versions')
    @ApiOperation({ summary: 'Get all recipe versions for a product ordered by version number' })
    @ApiResponse({ status: 200, type: [RecipeVersionResponseDto] })
    async getVersions(@Param('productId') productId: string): Promise<RecipeVersionResponseDto[]> {
        const query = new GetRecipeVersionsByProductQuery(productId);
        const result = await this.handler.handle(query);
        return result.items.map(toRecipeVersionResponseDto);
    }
}
