import { Controller, Patch, Body, Param, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateCategoryHandler } from '../../application/commands/update-category/update-category.handler';
import { UpdateCategoryCommand } from '../../application/commands/update-category/update-category.command';
import { UpdateCategoryRequestDto } from '../dtos/requests/update-category.request.dto';
import { CategoryResponseDto } from '../dtos/responses/category.response.dto';

@ApiTags('Inventory - Categories')
@Controller('inventory/categories')
export class UpdateCategoryController {
    constructor(
        @Inject(UpdateCategoryHandler)
        private readonly updateCategoryHandler: UpdateCategoryHandler,
    ) {}

    @Version('1')
    @Patch(':id')
    @ApiOperation({ summary: 'Update a raw material category' })
    @ApiResponse({ status: 200, type: CategoryResponseDto })
    @ApiResponse({ status: 404, description: 'Category not found' })
    async update(
        @Param('id') id: string,
        @Body() dto: UpdateCategoryRequestDto,
    ): Promise<CategoryResponseDto> {
        const command = new UpdateCategoryCommand(id, dto.name, dto.description);
        const result = await this.updateCategoryHandler.handle(command);

        return new CategoryResponseDto(
            result.id,
            result.name,
            result.description,
            result.status,
        );
    }
}
