import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ItemResponseDto {
    @ApiProperty({ example: 'clxyz1234567890' })
    id: string;

    @ApiProperty({ example: 'Glycerin 99%' })
    name: string;

    @ApiProperty({ example: 'RAW_MATERIAL', enum: ['RAW_MATERIAL', 'PACKAGING', 'FINAL_PRODUCT', 'SHIPPING_PACKAGING'] })
    type: string;

    @ApiProperty({ example: 'KG', enum: ['KG', 'G', 'L', 'ML', 'PCS'] })
    measureUnit: string;

    @ApiProperty({ example: 0 })
    currentStock: number;

    @ApiPropertyOptional({ example: 'clxyz0987654321', nullable: true })
    categoryId: string | null;

    @ApiProperty({ example: 'ACTIVE', enum: ['ACTIVE', 'ARCHIVED'] })
    status: string;

    @ApiPropertyOptional({ example: 150, nullable: true, description: 'Weight in grams per unit (FINAL_PRODUCT only)' })
    unitWeightGm: number | null;

    @ApiPropertyOptional({ example: 125.5, nullable: true, description: 'Weighted average unit price' })
    weightedAverageUnitPrice: number | null;

    @ApiPropertyOptional({ example: 'clxyz0987654321', nullable: true, description: 'Product ID (FINAL_PRODUCT only)' })
    productId: string | null;

    @ApiProperty({ type: 'string', format: 'date-time' })
    createdAt: Date;

    @ApiProperty({ type: 'string', format: 'date-time' })
    updatedAt: Date;

    constructor(
        id: string,
        name: string,
        type: string,
        measureUnit: string,
        currentStock: number,
        categoryId: string | null,
        status: string,
        createdAt?: Date,
        updatedAt?: Date,
        unitWeightGm?: number | null,
        weightedAverageUnitPrice?: number | null,
        productId?: string | null,
    ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.measureUnit = measureUnit;
        this.currentStock = currentStock;
        this.categoryId = categoryId;
        this.status = status;
        if (createdAt) this.createdAt = createdAt;
        if (updatedAt) this.updatedAt = updatedAt;
        this.unitWeightGm = unitWeightGm ?? null;
        this.weightedAverageUnitPrice = weightedAverageUnitPrice ?? null;
        this.productId = productId ?? null;
    }
}
