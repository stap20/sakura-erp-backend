import { Controller, Get, Query, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { IGetAllProductsHandler } from '../../application/queries/get-all-products/get-all-products.handler.interface';
import { GetAllProductsQuery } from '../../application/queries/get-all-products/get-all-products.query';
import { ProductResponseDto } from '../dtos/responses/product.response.dto';

@ApiTags('Inventory - Products')
@Controller('inventory/products')
export class GetAllProductsController {
    constructor(
        @Inject(IGetAllProductsHandler)
        private readonly getAllProductsHandler: IGetAllProductsHandler,
    ) {}

    @Version('1')
    @Get()
    @ApiOperation({ summary: 'List all products' })
    @ApiResponse({ status: 200, type: [ProductResponseDto] })
    @ApiQuery({ name: 'search', required: false })
    async getAll(@Query('search') search?: string): Promise<ProductResponseDto[]> {
        const result = await this.getAllProductsHandler.handle(new GetAllProductsQuery(search));
        return result.products.map(
            (p) => new ProductResponseDto(p.id, p.name, p.description, p.referenceBatchGm, p.referenceDurationMin, p.createdAt, p.updatedAt),
        );
    }
}
