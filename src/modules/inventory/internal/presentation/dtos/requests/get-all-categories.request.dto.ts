import { IsString, IsOptional, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class GetAllCategoriesRequestDto {
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

    @ApiPropertyOptional({ example: 'emul', description: 'Search by name (partial match)' })
    @IsOptional()
    @IsString()
    search?: string;

    @ApiPropertyOptional({ example: 'ACTIVE', enum: ['ACTIVE', 'ARCHIVED'] })
    @IsOptional()
    @IsString()
    status?: string;
}
