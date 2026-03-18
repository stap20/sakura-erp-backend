import { RecipeIngredientEntity } from './recipe-ingredient.entity';

export class RecipeVersionEntity {
    id: string;
    productId: string;
    versionNumber: number;
    status: string;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
    ingredients: RecipeIngredientEntity[];

    constructor(data: Partial<RecipeVersionEntity>) {
        Object.assign(this, data);
    }
}
