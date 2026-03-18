import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsPositive, Max, ValidateIf } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class AddIngredientRequestDto {
    @ApiPropertyOptional({ example: false, default: false, description: 'True for add-on placeholders (fragrance, colorants)' })
    @IsOptional()
    @IsBoolean()
    isAddOn?: boolean;

    @ApiPropertyOptional({ example: 'clxyz1234567890', description: 'Required when isAddOn is false' })
    @ValidateIf((o) => !o.isAddOn)
    @IsString()
    @IsNotEmpty()
    itemId?: string;

    @ApiPropertyOptional({ example: 'Glycerin 99%', description: 'Required when isAddOn is false' })
    @ValidateIf((o) => !o.isAddOn)
    @IsString()
    @IsNotEmpty()
    itemName?: string;

    @ApiPropertyOptional({ example: 'FRAGRANCE', description: 'Required when isAddOn is true' })
    @ValidateIf((o) => o.isAddOn === true)
    @IsString()
    @IsNotEmpty()
    ingredientCategory?: string;

    @ApiProperty({ example: 30.5, description: 'Percentage (w/w%), must be > 0 and <= 100' })
    @IsPositive()
    @Max(100)
    @Type(() => Number)
    quantity: number;

    @ApiPropertyOptional({ example: 'Add slowly while mixing' })
    @IsOptional()
    @IsString()
    notes?: string;
}
