import { IsString, IsOptional, IsEnum, IsNumber, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { MeasureUnitEnum } from '../../../domain/value-objects/measure-unit.vo';

export class UpdateItemRequestDto {
    @ApiPropertyOptional({ example: 'Glycerin 99% Pure', minLength: 2, maxLength: 100 })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiPropertyOptional({ enum: MeasureUnitEnum, example: 'KG' })
    @IsOptional()
    @IsEnum(MeasureUnitEnum)
    measureUnit?: string;

    @ApiPropertyOptional({ example: 'clxyz1234567890', nullable: true })
    @IsOptional()
    @IsString()
    categoryId?: string | null;

    @ApiPropertyOptional({ example: 150, description: 'Weight in grams per unit (FINAL_PRODUCT only)' })
    @IsOptional()
    @IsNumber()
    @Min(0)
    unitWeightGm?: number | null;

    @ApiPropertyOptional({ example: 'clxyz0987654321', nullable: true, description: 'Product ID (FINAL_PRODUCT only)' })
    @IsOptional()
    @IsString()
    productId?: string | null;
}
