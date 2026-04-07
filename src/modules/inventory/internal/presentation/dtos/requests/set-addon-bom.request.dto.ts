import { IsString, IsNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class AddonComponentInputDto {
    @ApiProperty({ example: 'fragrance', description: 'Recipe add-on category this component resolves (must match ingredientCategory in recipe)' })
    @IsString()
    @IsNotEmpty()
    ingredientCategory: string;

    @ApiProperty({ example: 'clxyz0987654321', description: 'ID of the RAW_MATERIAL item to use for this add-on' })
    @IsString()
    @IsNotEmpty()
    addonItemId: string;
}

export class SetAddonBomRequestDto {
    @ApiProperty({ type: [AddonComponentInputDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AddonComponentInputDto)
    components: AddonComponentInputDto[];
}
