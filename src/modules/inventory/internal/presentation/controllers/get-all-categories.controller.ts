import { Controller, Get, Query, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetAllCategoriesHandler } from '../../application/queries/get-all-categories/get-all-categories.handler.interface';
import { GetAllCategoriesQuery } from '../../application/queries/get-all-categories/get-all-categories.query';
import { GetAllCategoriesRequestDto } from '../dtos/requests/get-all-categories.request.dto';
import { CategoryResponseDto } from '../dtos/responses/category.response.dto';

@ApiTags('Inventory - Categories')
@Controller('inventory/categories')
export class GetAllCategoriesController {
    constructor(
        @Inject(IGetAllCategoriesHandler)
        private readonly getAllCategoriesHandler: IGetAllCategoriesHandler,
    ) {}

    @Version('1')
    @Get()
    @ApiOperation({ summary: 'Get all raw material categories' })
    @ApiResponse({ status: 200, type: [CategoryResponseDto] })
    async getAll(
        @Query() dto: GetAllCategoriesRequestDto,
    ): Promise<CategoryResponseDto[]> {
        const query = new GetAllCategoriesQuery(
            dto.offset ?? 0,
            dto.limit ?? 20,
            dto.search,
            dto.status,
        );

        const result = await this.getAllCategoriesHandler.handle(query);

        return result.categories.map(
            (c) =>
                new CategoryResponseDto(
                    c.id,
                    c.name,
                    c.description,
                    c.status,
                    c.createdAt,
                    c.updatedAt,
                ),
        );
    }
}
