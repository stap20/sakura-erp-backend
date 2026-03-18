import { IsOptional, IsPositive, Max, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class UpdateIngredientRequestDto {
    @ApiPropertyOptional({ example: 35.0, description: 'Percentage (w/w%)' })
    @IsOptional()
    @IsPositive()
    @Max(100)
    @Type(() => Number)
    quantity?: number;

    @ApiPropertyOptional({ example: 'Add slowly while mixing', nullable: true })
    @IsOptional()
    @IsString()
    notes?: string;
}
