import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ProductionOrderLineResponseDto {
    @ApiProperty() id: string;
    @ApiPropertyOptional() itemId: string | null;
    @ApiProperty() itemName: string;
    @ApiProperty() isAddOn: boolean;
    @ApiPropertyOptional() ingredientCategory: string | null;
    @ApiProperty() recipePercent: number;
    @ApiProperty() adjustedQuantityGm: number;
    @ApiPropertyOptional() unitPrice: number | null;
    @ApiPropertyOptional() lineCost: number | null;
}

export class ProductionOrderResponseDto {
    @ApiProperty() id: string;
    @ApiProperty() productId: string;
    @ApiProperty() productName: string;
    @ApiProperty() unitWeightGm: number;
    @ApiProperty() recipeVersionId: string;
    @ApiProperty() recipeVersionNumber: number;
    @ApiProperty() quantityUnits: number;
    @ApiProperty() totalBatchWeightGm: number;
    @ApiProperty() wastePercent: number;
    @ApiProperty() status: string;
    @ApiPropertyOptional() notes: string | null;
    @ApiPropertyOptional() totalMaterialCost: number | null;
    @ApiPropertyOptional() executedAt: Date | null;
    @ApiProperty({ type: [ProductionOrderLineResponseDto] }) lines: ProductionOrderLineResponseDto[];
    @ApiProperty() createdAt: Date;
    @ApiProperty() updatedAt: Date;
}
