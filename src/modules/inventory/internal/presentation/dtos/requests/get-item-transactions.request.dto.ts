import { IsOptional, IsString, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class GetItemTransactionsRequestDto {
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

    @ApiPropertyOptional({ example: 'RESTOCK', enum: ['RESTOCK', 'DEDUCT'] })
    @IsOptional()
    @IsString()
    type?: string;
}
