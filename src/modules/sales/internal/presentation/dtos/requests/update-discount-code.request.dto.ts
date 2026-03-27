import { IsString, IsEnum, IsNumber, IsOptional, IsInt, IsDateString, IsBoolean, Min, MinLength } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { DiscountTypeEnum } from './create-discount-code.request.dto';

export class UpdateDiscountCodeRequestDto {
    @ApiPropertyOptional({ example: 'SUMMER25' })
    @IsOptional()
    @IsString()
    @MinLength(2)
    code?: string;

    @ApiPropertyOptional({ enum: DiscountTypeEnum })
    @IsOptional()
    @IsEnum(DiscountTypeEnum)
    type?: DiscountTypeEnum;

    @ApiPropertyOptional({ example: 25 })
    @IsOptional()
    @IsNumber()
    @Min(0)
    value?: number;

    @ApiPropertyOptional({ example: 50 })
    @IsOptional()
    @IsInt()
    @Min(1)
    maxUses?: number;

    @ApiPropertyOptional({ example: '2027-12-31T23:59:59.000Z' })
    @IsOptional()
    @IsDateString()
    expiresAt?: string;

    @ApiPropertyOptional({ example: false })
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}
