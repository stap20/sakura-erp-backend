import { IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProductionOrderRequestDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    @Min(0)
    batchWeightGm?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    @Min(0)
    wastePercent?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    notes?: string | null;
}
