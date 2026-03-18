import { IsString, IsOptional, IsNumber, IsEnum } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ItemTypeEnum } from '../../../domain/value-objects/item-type.vo';

export class GetAllItemsRequestDto {
    @ApiPropertyOptional({ example: 0, default: 0, minimum: 0 })
    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    offset: number = 0;

    @ApiPropertyOptional({ example: 20, default: 20, minimum: 1, maximum: 100 })
    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    limit: number = 20;

    @ApiPropertyOptional({ example: 'glycerin', description: 'Search by name (partial match)' })
    @IsOptional()
    @IsString()
    search?: string;

    @ApiPropertyOptional({ enum: ItemTypeEnum, example: 'RAW_MATERIAL' })
    @IsOptional()
    @IsEnum(ItemTypeEnum)
    type?: string;

    @ApiPropertyOptional({ example: 'clxyz1234567890' })
    @IsOptional()
    @IsString()
    categoryId?: string;

    @ApiPropertyOptional({ example: 'clxyz0987654321', description: 'Filter items that have been restocked from this vendor' })
    @IsOptional()
    @IsString()
    vendorId?: string;

    @ApiPropertyOptional({ example: 'IN_STOCK', enum: ['IN_STOCK', 'OUT_OF_STOCK'] })
    @IsOptional()
    @IsString()
    stockStatus?: string;

    @ApiPropertyOptional({ example: 'ACTIVE', enum: ['ACTIVE', 'ARCHIVED'] })
    @IsOptional()
    @IsString()
    status?: string;
}
