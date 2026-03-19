import { IsString, IsNotEmpty, IsOptional, IsEnum, IsNumber, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ItemTypeEnum } from '../../../domain/value-objects/item-type.vo';
import { MeasureUnitEnum } from '../../../domain/value-objects/measure-unit.vo';

export class CreateItemRequestDto {
    @ApiProperty({ example: 'Glycerin 99%', minLength: 2, maxLength: 100 })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ enum: ItemTypeEnum, example: 'RAW_MATERIAL' })
    @IsEnum(ItemTypeEnum)
    type: string;

    @ApiProperty({ enum: MeasureUnitEnum, example: 'KG' })
    @IsEnum(MeasureUnitEnum)
    measureUnit: string;

    @ApiPropertyOptional({ example: 'clxyz1234567890', description: 'Required only for RAW_MATERIAL type' })
    @IsOptional()
    @IsString()
    categoryId?: string | null;

    @ApiPropertyOptional({ example: 150, description: 'Weight in grams per unit (FINAL_PRODUCT only)' })
    @IsOptional()
    @IsNumber()
    @Min(0)
    unitWeightGm?: number | null;
}
