import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateRecipeVersionRequestDto {
    @ApiProperty({ example: 'clxyz0987654321', description: 'FINAL_PRODUCT item ID' })
    @IsString()
    @IsNotEmpty()
    productId: string;

    @ApiPropertyOptional({ example: 'Initial formula' })
    @IsOptional()
    @IsString()
    notes?: string;
}
