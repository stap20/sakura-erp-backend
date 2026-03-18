import { IsString, IsOptional, IsEnum } from 'class-validator';
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
}
