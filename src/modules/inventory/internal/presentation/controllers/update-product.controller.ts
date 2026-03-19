import { Controller, Patch, Body, Param, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateProductHandler } from '../../application/commands/update-product/update-product.handler';
import { UpdateProductCommand } from '../../application/commands/update-product/update-product.command';
import { UpdateProductRequestDto } from '../dtos/requests/update-product.request.dto';
import { ProductResponseDto } from '../dtos/responses/product.response.dto';

@ApiTags('Inventory - Products')
@Controller('inventory/products')
export class UpdateProductController {
    constructor(
        @Inject(UpdateProductHandler)
        private readonly updateProductHandler: UpdateProductHandler,
    ) {}

    @Version('1')
    @Patch(':id')
    @ApiOperation({ summary: 'Update a product' })
    @ApiResponse({ status: 200, type: ProductResponseDto })
    async update(
        @Param('id') id: string,
        @Body() dto: UpdateProductRequestDto,
    ): Promise<ProductResponseDto> {
        const result = await this.updateProductHandler.handle(
            new UpdateProductCommand(id, dto.name, dto.description),
        );
        return new ProductResponseDto(result.id, result.name, result.description);
    }
}
