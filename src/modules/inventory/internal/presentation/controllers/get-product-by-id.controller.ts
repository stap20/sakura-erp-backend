import { Controller, Get, Param, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetProductHandler } from '../../application/queries/get-product/get-product.handler.interface';
import { GetProductQuery } from '../../application/queries/get-product/get-product.query';
import { ProductResponseDto } from '../dtos/responses/product.response.dto';

@ApiTags('Inventory - Products')
@Controller('inventory/products')
export class GetProductByIdController {
    constructor(
        @Inject(IGetProductHandler)
        private readonly getProductHandler: IGetProductHandler,
    ) {}

    @Version('1')
    @Get(':id')
    @ApiOperation({ summary: 'Get a product by ID' })
    @ApiResponse({ status: 200, type: ProductResponseDto })
    @ApiResponse({ status: 404, description: 'Product not found' })
    async getById(@Param('id') id: string): Promise<ProductResponseDto> {
        const result = await this.getProductHandler.handle(new GetProductQuery(id));
        return new ProductResponseDto(result.id, result.name, result.description, result.referenceBatchGm, result.referenceDurationMin, result.referenceWastePercent, result.createdAt, result.updatedAt);
    }
}
