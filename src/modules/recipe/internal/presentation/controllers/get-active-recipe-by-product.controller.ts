import { Controller, Get, Param, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetActiveRecipeByProductHandler } from '../../application/queries/get-active-recipe-by-product/get-active-recipe-by-product.handler.interface';
import { GetActiveRecipeByProductQuery } from '../../application/queries/get-active-recipe-by-product/get-active-recipe-by-product.query';
import { RecipeVersionResponseDto } from '../dtos/responses/recipe-version.response.dto';
import { toRecipeVersionResponseDto } from './helpers/response.mapper';

@ApiTags('Recipes')
@Controller('recipes')
export class GetActiveRecipeByProductController {
    constructor(
        @Inject(IGetActiveRecipeByProductHandler)
        private readonly handler: IGetActiveRecipeByProductHandler,
    ) {}

    @Version('1')
    @Get('product/:productId/active')
    @ApiOperation({ summary: 'Get the active recipe version for a product' })
    @ApiResponse({ status: 200, type: RecipeVersionResponseDto })
    @ApiResponse({ status: 404, description: 'No active recipe version found for product' })
    async getActive(@Param('productId') productId: string): Promise<RecipeVersionResponseDto> {
        const query = new GetActiveRecipeByProductQuery(productId);
        const result = await this.handler.handle(query);
        return toRecipeVersionResponseDto(result);
    }
}
