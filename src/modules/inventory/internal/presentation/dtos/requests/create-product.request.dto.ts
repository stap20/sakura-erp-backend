import { IsString, IsNotEmpty, IsOptional, MinLength, IsNumber, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProductRequestDto {
    @ApiProperty({ example: 'Body Butter', minLength: 2 })
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name: string;

    @ApiPropertyOptional({ example: 'Shea butter based body moisturizer', nullable: true })
    @IsOptional()
    @IsString()
    description?: string | null;

    @ApiPropertyOptional({ example: 1000, description: 'Reference batch size in grams', nullable: true })
    @IsOptional()
    @IsNumber()
    @Min(1)
    referenceBatchGm?: number | null;

    @ApiPropertyOptional({ example: 360, description: 'Minutes to produce referenceBatchGm', nullable: true })
    @IsOptional()
    @IsNumber()
    @Min(1)
    referenceDurationMin?: number | null;

    @ApiPropertyOptional({ example: 5, description: 'Expected waste percentage for COGS calculation', nullable: true })
    @IsOptional()
    @IsNumber()
    @Min(0)
    referenceWastePercent?: number | null;
}
