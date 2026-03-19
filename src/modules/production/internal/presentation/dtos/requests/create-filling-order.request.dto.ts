import { IsString, IsNotEmpty, IsNumber, IsOptional, IsArray, ValidateNested, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateFillingOrderLineDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    variantItemId: string;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    quantityUnits: number;

    @ApiProperty()
    @IsNumber()
    @Min(0)
    unitWeightGm: number;
}

export class CreateFillingOrderRequestDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    productId: string;

    @ApiProperty({ type: [CreateFillingOrderLineDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateFillingOrderLineDto)
    lines: CreateFillingOrderLineDto[];

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    notes?: string;
}
