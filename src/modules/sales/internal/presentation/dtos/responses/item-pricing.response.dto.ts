import { ApiProperty } from '@nestjs/swagger';

export class ItemPricingResponseDto {
    @ApiProperty() itemId: string;
    @ApiProperty() itemName: string;
    @ApiProperty() unitsPerBatch: number;
    @ApiProperty() materialCostPerUnit: number;
    @ApiProperty() laborCostPerUnit: number;
    @ApiProperty() depreciationCostPerUnit: number;
    @ApiProperty() packagingCostPerUnit: number;
    @ApiProperty() totalCogs: number;
    @ApiProperty() marginPercent: number;
    @ApiProperty() suggestedPrice: number;
}
