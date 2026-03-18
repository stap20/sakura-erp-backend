import { IsNumber, IsPositive, IsOptional, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class DeductItemRequestDto {
    @ApiProperty({ example: 5, description: 'Quantity to remove (must be > 0 and <= current stock)' })
    @IsNumber()
    @IsPositive()
    quantity: number;

    @ApiProperty({ example: 'user_abc123', description: 'ID of the user performing the deduction' })
    @IsString()
    @IsNotEmpty()
    performedBy: string;

    @ApiPropertyOptional({ example: 'Used in production batch #42' })
    @IsOptional()
    @IsString()
    notes?: string | null;
}
