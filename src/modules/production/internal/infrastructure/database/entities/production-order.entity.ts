import { ProductionOrderLineEntity } from './production-order-line.entity';

export class ProductionOrderEntity {
    id: string;
    productId: string;
    productName: string;
    unitWeightGm: number;
    recipeVersionId: string;
    recipeVersionNumber: number;
    quantityUnits: number;
    totalBatchWeightGm: number;
    wastePercent: number;
    status: string;
    notes: string | null;
    totalMaterialCost: number | null;
    executedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    lines: ProductionOrderLineEntity[];
}
