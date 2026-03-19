import { IsNumber, IsPositive, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateLineRequestDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    @IsPositive()
    quantity?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    @IsPositive()
    unitPrice?: number;
}
