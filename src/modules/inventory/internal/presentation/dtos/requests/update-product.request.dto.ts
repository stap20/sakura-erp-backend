import { IsString, IsOptional, MinLength, IsNumber, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProductRequestDto {
    @ApiPropertyOptional({ example: 'Body Butter Pro', minLength: 2 })
    @IsOptional()
    @IsString()
    @MinLength(2)
    name?: string;

    @ApiPropertyOptional({ example: 'Updated description', nullable: true })
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
}
