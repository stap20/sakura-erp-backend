import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IngredientResponseDto } from './ingredient.response.dto';

export class RecipeVersionResponseDto {
    @ApiProperty({ example: 'clxyz1234567890' })
    id: string;

    @ApiProperty({ example: 'clxyz0987654321', description: 'FINAL_PRODUCT item ID' })
    productId: string;

    @ApiProperty({ example: 1 })
    versionNumber: number;

    @ApiProperty({ example: 'DRAFT', enum: ['DRAFT', 'ACTIVE', 'ARCHIVED'] })
    status: string;

    @ApiPropertyOptional({ example: 'Reformulated with higher glycerin content', nullable: true })
    notes: string | null;

    @ApiProperty({ type: [IngredientResponseDto] })
    ingredients: IngredientResponseDto[];

    @ApiProperty({ type: 'string', format: 'date-time' })
    createdAt: Date;

    @ApiProperty({ type: 'string', format: 'date-time' })
    updatedAt: Date;

    constructor(
        id: string,
        productId: string,
        versionNumber: number,
        status: string,
        notes: string | null,
        ingredients: IngredientResponseDto[],
        createdAt: Date,
        updatedAt: Date,
    ) {
        this.id = id;
        this.productId = productId;
        this.versionNumber = versionNumber;
        this.status = status;
        this.notes = notes;
        this.ingredients = ingredients;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
