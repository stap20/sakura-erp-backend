import { Controller, Post, Body, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateProductHandler } from '../../application/commands/create-product/create-product.handler';
import { CreateProductCommand } from '../../application/commands/create-product/create-product.command';
import { CreateProductRequestDto } from '../dtos/requests/create-product.request.dto';
import { ProductResponseDto } from '../dtos/responses/product.response.dto';

@ApiTags('Inventory - Products')
@Controller('inventory/products')
export class CreateProductController {
    constructor(
        @Inject(CreateProductHandler)
        private readonly createProductHandler: CreateProductHandler,
    ) {}

    @Version('1')
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Create a new product (formula family)' })
    @ApiResponse({ status: 201, type: ProductResponseDto })
    async create(@Body() dto: CreateProductRequestDto): Promise<ProductResponseDto> {
        const result = await this.createProductHandler.handle(
            new CreateProductCommand(dto.name, dto.description, dto.referenceBatchGm, dto.referenceDurationMin, dto.referenceWastePercent),
        );
        return new ProductResponseDto(result.id, result.name, result.description, result.referenceBatchGm, result.referenceDurationMin, result.referenceWastePercent);
    }
}
