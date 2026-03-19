import { IsArray, IsString, IsNumber, IsNotEmpty, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PackagingComponentInputDto {
    @ApiProperty({ example: 'clxyz0987654321', description: 'ID of the PACKAGING item' })
    @IsString()
    @IsNotEmpty()
    packagingItemId: string;

    @ApiProperty({ example: 1, description: 'Quantity of this packaging item per unit filled' })
    @IsNumber()
    @Min(0.001)
    qtyPerUnit: number;
}

export class SetPackagingBomRequestDto {
    @ApiProperty({ type: [PackagingComponentInputDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PackagingComponentInputDto)
    components: PackagingComponentInputDto[];
}
