import { IsOptional, IsString, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class GetAllRecipeVersionsRequestDto {
    @ApiPropertyOptional({ example: 'clxyz0987654321', description: 'Filter by product ID' })
    @IsOptional()
    @IsString()
    productId?: string;

    @ApiPropertyOptional({ example: 'DRAFT', enum: ['DRAFT', 'ACTIVE', 'ARCHIVED'] })
    @IsOptional()
    @IsString()
    status?: string;

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
}
