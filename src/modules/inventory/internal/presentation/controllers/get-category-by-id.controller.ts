import { Controller, Get, Param, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetCategoryHandler } from '../../application/queries/get-category/get-category.handler.interface';
import { GetCategoryQuery } from '../../application/queries/get-category/get-category.query';
import { CategoryResponseDto } from '../dtos/responses/category.response.dto';

@ApiTags('Inventory - Categories')
@Controller('inventory/categories')
export class GetCategoryByIdController {
    constructor(
        @Inject(IGetCategoryHandler)
        private readonly getCategoryHandler: IGetCategoryHandler,
    ) {}

    @Version('1')
    @Get(':id')
    @ApiOperation({ summary: 'Get a category by ID' })
    @ApiResponse({ status: 200, type: CategoryResponseDto })
    @ApiResponse({ status: 404, description: 'Category not found' })
    async getById(@Param('id') id: string): Promise<CategoryResponseDto> {
        const result = await this.getCategoryHandler.handle(
            new GetCategoryQuery(id),
        );

        return new CategoryResponseDto(
            result.id,
            result.name,
            result.description,
            result.status,
            result.createdAt,
            result.updatedAt,
        );
    }
}
