import { IsString, MinLength, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSalesOrderRequestDto {
    @ApiProperty({ example: 'Sarah Johnson', description: 'Customer name' })
    @IsString()
    @MinLength(2)
    customerName: string;

    @ApiPropertyOptional({ example: '+20100000000' })
    @IsOptional()
    @IsString()
    customerPhone?: string;

    @ApiPropertyOptional({ example: 'sarah@email.com' })
    @IsOptional()
    @IsString()
    customerContact?: string;

    @ApiPropertyOptional({ example: 'Urgent order' })
    @IsOptional()
    @IsString()
    notes?: string;
}
