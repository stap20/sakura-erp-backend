import { IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreatePurchaseOrderRequestDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    vendorId: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    vendorName: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    vendorPhone?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    vendorContact?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    notes?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsDateString()
    expectedDeliveryDate?: string;
}
