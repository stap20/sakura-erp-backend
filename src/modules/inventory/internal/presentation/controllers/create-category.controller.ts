import { Controller, Post, Body, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateCategoryHandler } from '../../application/commands/create-category/create-category.handler';
import { CreateCategoryCommand } from '../../application/commands/create-category/create-category.command';
import { CreateCategoryRequestDto } from '../dtos/requests/create-category.request.dto';
import { CategoryResponseDto } from '../dtos/responses/category.response.dto';

@ApiTags('Inventory - Categories')
@Controller('inventory/categories')
export class CreateCategoryController {
    constructor(
        @Inject(CreateCategoryHandler)
        private readonly createCategoryHandler: CreateCategoryHandler,
    ) {}

    @Version('1')
    @Post()
    @ApiOperation({ summary: 'Create a new raw material category' })
    @ApiResponse({ status: 201, type: CategoryResponseDto })
    @ApiResponse({ status: 409, description: 'Category with this name already exists' })
    async create(
        @Body() dto: CreateCategoryRequestDto,
    ): Promise<CategoryResponseDto> {
        const command = new CreateCategoryCommand(dto.name, dto.description);
        const result = await this.createCategoryHandler.handle(command);

        return new CategoryResponseDto(
            result.id,
            result.name,
            result.description,
            result.status,
        );
    }
}
