import {
    IsString,
    IsNotEmpty,
    IsOptional,
    IsNumber,
    IsPositive,
    Min,
    Max,
    IsObject,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateProductionOrderRequestDto {
    @ApiProperty({ description: 'FINAL_PRODUCT inventory item ID' })
    @IsString()
    @IsNotEmpty()
    productId: string;

    @ApiProperty({ description: 'Number of units to produce' })
    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    quantityUnits: number;

    @ApiProperty({ description: 'Waste percentage (0–100)', default: 0 })
    @IsNumber()
    @Min(0)
    @Max(100)
    @Type(() => Number)
    wastePercent: number;

    @ApiPropertyOptional({
        description: 'Map of ingredientId → itemId for add-on resolution',
        example: { 'ingredient-uuid': 'item-uuid' },
    })
    @IsOptional()
    @IsObject()
    addonItemIds?: Record<string, string>;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    notes?: string;
}
