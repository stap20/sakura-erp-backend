import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class IngredientResponseDto {
    @ApiProperty({ example: 'clxyz1234567890' })
    id: string;

    @ApiPropertyOptional({ example: 'clxyz0987654321', nullable: true })
    itemId: string | null;

    @ApiPropertyOptional({ example: 'Glycerin 99%', nullable: true })
    itemName: string | null;

    @ApiProperty({ example: false })
    isAddOn: boolean;

    @ApiPropertyOptional({ example: 'FRAGRANCE', nullable: true })
    ingredientCategory: string | null;

    @ApiProperty({ example: 30.5, description: 'Percentage (w/w%)' })
    quantity: number;

    @ApiPropertyOptional({ example: 'Add slowly while mixing', nullable: true })
    notes: string | null;

    constructor(
        id: string,
        itemId: string | null,
        itemName: string | null,
        isAddOn: boolean,
        ingredientCategory: string | null,
        quantity: number,
        notes: string | null,
    ) {
        this.id = id;
        this.itemId = itemId;
        this.itemName = itemName;
        this.isAddOn = isAddOn;
        this.ingredientCategory = ingredientCategory;
        this.quantity = quantity;
        this.notes = notes;
    }
}
