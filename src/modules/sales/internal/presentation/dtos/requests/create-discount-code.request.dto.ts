import { IsString, IsEnum, IsNumber, IsOptional, IsInt, IsDateString, Min, MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum DiscountTypeEnum {
    PERCENT = 'PERCENT',
    FIXED_AMOUNT = 'FIXED_AMOUNT',
}

export class CreateDiscountCodeRequestDto {
    @ApiProperty({ example: 'SUMMER20' })
    @IsString()
    @MinLength(2)
    code: string;

    @ApiProperty({ enum: DiscountTypeEnum })
    @IsEnum(DiscountTypeEnum)
    type: DiscountTypeEnum;

    @ApiProperty({ example: 20 })
    @IsNumber()
    @Min(0)
    value: number;

    @ApiPropertyOptional({ example: 100 })
    @IsOptional()
    @IsInt()
    @Min(1)
    maxUses?: number;

    @ApiPropertyOptional({ example: '2026-12-31T23:59:59.000Z' })
    @IsOptional()
    @IsDateString()
    expiresAt?: string;
}
