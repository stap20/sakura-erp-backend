import { IsString, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
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
}
