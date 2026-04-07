import { IsString, IsNotEmpty, IsNumber, IsOptional, Min, IsArray, ValidateNested } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class AddonResolutionInputDto {
    @ApiProperty({ example: 'fragrance', description: 'Must match ingredientCategory in the active recipe add-on' })
    @IsString()
    @IsNotEmpty()
    ingredientCategory: string;

    @ApiProperty({ example: 'clxyz1234567890', description: 'ID of the inventory item to use for this add-on' })
    @IsString()
    @IsNotEmpty()
    addonItemId: string;
}

export class CreateProductionOrderRequestDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    productId: string;

    @ApiProperty()
    @IsNumber()
    @Min(0)
    batchWeightGm: number;

    @ApiPropertyOptional({ default: 0 })
    @IsOptional()
    @IsNumber()
    @Min(0)
    wastePercent?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    notes?: string;

    @ApiPropertyOptional({ type: [AddonResolutionInputDto], description: 'Required for BULK-phase add-ons (e.g. fragrance in body splash)' })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AddonResolutionInputDto)
    addonResolutions?: AddonResolutionInputDto[];
}
