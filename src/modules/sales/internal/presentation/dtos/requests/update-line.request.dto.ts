import { IsPositive, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateLineRequestDto {
    @ApiPropertyOptional({ example: 5 })
    @IsOptional()
    @IsPositive()
    quantity?: number;

    @ApiPropertyOptional({ example: 160.00 })
    @IsOptional()
    @IsPositive()
    unitPrice?: number;
}
