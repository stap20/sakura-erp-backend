import { ApiProperty } from '@nestjs/swagger';

export class FillingOrderLineResponseDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    variantItemId: string;

    @ApiProperty()
    variantName: string;

    @ApiProperty()
    quantityUnits: number;

    @ApiProperty()
    unitWeightGm: number;

    @ApiProperty()
    bulkUsedGm: number;
}
