import { IsString, IsOptional, IsEnum, IsNumber, IsPositive } from 'class-validator';
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

    @ApiPropertyOptional({ example: 125, description: 'Net weight per unit in grams — only for FINAL_PRODUCT', nullable: true })
    @IsOptional()
    @IsNumber()
    @IsPositive()
    unitWeightGm?: number | null;
}
