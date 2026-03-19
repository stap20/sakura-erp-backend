import { IsString, IsOptional, IsInt, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class GetAllPurchaseOrdersQueryDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    vendorId?: string;

    @ApiPropertyOptional({ enum: ['DRAFT', 'CONFIRMED', 'RECEIVED', 'CANCELLED'] })
    @IsOptional()
    @IsString()
    status?: string;

    @ApiPropertyOptional({ default: 0 })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(0)
    offset?: number;

    @ApiPropertyOptional({ default: 20 })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    limit?: number;
}
