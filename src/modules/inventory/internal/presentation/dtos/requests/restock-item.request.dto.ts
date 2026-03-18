import { IsNumber, IsPositive, IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RestockItemRequestDto {
    @ApiProperty({ example: 50, description: 'Quantity to add (must be > 0)' })
    @IsNumber()
    @IsPositive()
    quantity: number;

    @ApiProperty({ example: 'user_abc123', description: 'ID of the user performing the restock' })
    @IsString()
    @IsNotEmpty()
    performedBy: string;

    @ApiPropertyOptional({ example: 'clxyz1234567890', description: 'Vendor ID (optional for FINAL_PRODUCT)' })
    @IsOptional()
    @IsString()
    vendorId?: string | null;

    @ApiPropertyOptional({ example: 'Monthly supplier delivery' })
    @IsOptional()
    @IsString()
    notes?: string | null;
}
