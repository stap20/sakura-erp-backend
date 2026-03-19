import { AggregateRoot } from 'src/shared/domain/aggregate-root';
import { ProductionOrderId } from '../value-objects/production-order-id.vo';
import { ProductionOrderStatus } from '../value-objects/production-order-status.vo';
import {
    ProductionOrderNotEditableError,
    ProductionOrderNotConfirmedError,
    ProductionOrderNotCancellableError,
    ProductionOrderNoLinesError,
    ProductionOrderLineNotFoundError,
} from '../errors/production-order.error';

export interface ProductionOrderLine {
    id: string;
    itemId: string | null;
    itemName: string;
    isAddOn: boolean;
    ingredientCategory: string | null;
    recipePercent: number;
    adjustedQuantityGm: number;
    unitPrice: number | null;
    lineCost: number | null;
}

export interface CreateProductionOrderParams {
    id: string;
    productId: string;
    productName: string;
    unitWeightGm: number;
    recipeVersionId: string;
    recipeVersionNumber: number;
    quantityUnits: number;
    wastePercent: number;
    notes?: string | null;
    lines: Omit<ProductionOrderLine, 'unitPrice' | 'lineCost'>[];
}

export interface PersistenceProductionOrderParams {
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
    lines: ProductionOrderLine[];
}

export class ProductionOrder extends AggregateRoot<ProductionOrderId> {
    private productId: string;
    private productName: string;
    private unitWeightGm: number;
    private recipeVersionId: string;
    private recipeVersionNumber: number;
    private quantityUnits: number;
    private totalBatchWeightGm: number;
    private wastePercent: number;
    private status: ProductionOrderStatus;
    private notes: string | null;
    private totalMaterialCost: number | null;
    private executedAt: Date | null;
    private lines: ProductionOrderLine[];

    private constructor(
        id: ProductionOrderId,
        productId: string,
        productName: string,
        unitWeightGm: number,
        recipeVersionId: string,
        recipeVersionNumber: number,
        quantityUnits: number,
        totalBatchWeightGm: number,
        wastePercent: number,
        status: ProductionOrderStatus,
        notes: string | null,
        totalMaterialCost: number | null,
        executedAt: Date | null,
        lines: ProductionOrderLine[],
    ) {
        super(id);
        this.productId = productId;
        this.productName = productName;
        this.unitWeightGm = unitWeightGm;
        this.recipeVersionId = recipeVersionId;
        this.recipeVersionNumber = recipeVersionNumber;
        this.quantityUnits = quantityUnits;
        this.totalBatchWeightGm = totalBatchWeightGm;
        this.wastePercent = wastePercent;
        this.status = status;
        this.notes = notes;
        this.totalMaterialCost = totalMaterialCost;
        this.executedAt = executedAt;
        this.lines = lines;
    }

    public static create(params: CreateProductionOrderParams): ProductionOrder {
        const id = ProductionOrderId.create(params.id);
        const totalBatchWeightGm = params.quantityUnits * params.unitWeightGm;

        const lines: ProductionOrderLine[] = params.lines.map((l) => ({
            ...l,
            unitPrice: null,
            lineCost: null,
        }));

        return new ProductionOrder(
            id,
            params.productId,
            params.productName,
            params.unitWeightGm,
            params.recipeVersionId,
            params.recipeVersionNumber,
            params.quantityUnits,
            totalBatchWeightGm,
            params.wastePercent,
            ProductionOrderStatus.draft(),
            params.notes ?? null,
            null,
            null,
            lines,
        );
    }

    public static createFromPersistence(params: PersistenceProductionOrderParams): ProductionOrder {
        return new ProductionOrder(
            ProductionOrderId.create(params.id),
            params.productId,
            params.productName,
            params.unitWeightGm,
            params.recipeVersionId,
            params.recipeVersionNumber,
            params.quantityUnits,
            params.totalBatchWeightGm,
            params.wastePercent,
            ProductionOrderStatus.fromString(params.status),
            params.notes,
            params.totalMaterialCost,
            params.executedAt,
            params.lines,
        );
    }

    public updateNotes(notes: string | null): void {
        this.guardDraft('update notes');
        this.notes = notes;
    }

    public confirm(): void {
        this.guardDraft('confirm');
        if (this.lines.length === 0) {
            throw new ProductionOrderNoLinesError(this.id.value);
        }
        this.status = ProductionOrderStatus.fromString('CONFIRMED');
    }

    public cancel(): void {
        if (!this.status.isDraft() && !this.status.isConfirmed()) {
            throw new ProductionOrderNotCancellableError(this.id.value, this.status.value);
        }
        this.status = ProductionOrderStatus.fromString('CANCELLED');
    }

    public execute(linePrices: Map<string, number | null>): void {
        if (!this.status.isConfirmed()) {
            throw new ProductionOrderNotConfirmedError(this.id.value, this.status.value);
        }

        this.lines = this.lines.map((line) => {
            const unitPrice = linePrices.get(line.id) ?? null;
            const lineCost =
                unitPrice !== null
                    ? (line.adjustedQuantityGm / 1000) * unitPrice
                    : null;
            return { ...line, unitPrice, lineCost };
        });

        this.totalMaterialCost = this.lines.reduce(
            (sum, l) => (l.lineCost !== null ? sum + l.lineCost : sum),
            0,
        );
        this.executedAt = new Date();
        this.status = ProductionOrderStatus.fromString('EXECUTED');
    }

    public updateLine(lineId: string, adjustedQuantityGm: number): void {
        this.guardDraft('update line');
        const idx = this.lines.findIndex((l) => l.id === lineId);
        if (idx === -1) throw new ProductionOrderLineNotFoundError(lineId);
        this.lines[idx] = { ...this.lines[idx], adjustedQuantityGm };
    }

    private guardDraft(action: string): void {
        if (!this.status.isDraft()) {
            throw new ProductionOrderNotEditableError(this.id.value, this.status.value);
        }
    }

    // Getters
    public getProductId(): string { return this.productId; }
    public getProductName(): string { return this.productName; }
    public getUnitWeightGm(): number { return this.unitWeightGm; }
    public getRecipeVersionId(): string { return this.recipeVersionId; }
    public getRecipeVersionNumber(): number { return this.recipeVersionNumber; }
    public getQuantityUnits(): number { return this.quantityUnits; }
    public getTotalBatchWeightGm(): number { return this.totalBatchWeightGm; }
    public getWastePercent(): number { return this.wastePercent; }
    public getStatus(): ProductionOrderStatus { return this.status; }
    public getNotes(): string | null { return this.notes; }
    public getTotalMaterialCost(): number | null { return this.totalMaterialCost; }
    public getExecutedAt(): Date | null { return this.executedAt; }
    public getLines(): ProductionOrderLine[] { return [...this.lines]; }

    public equals(other: ProductionOrder): boolean {
        if (!(other instanceof ProductionOrder)) return false;
        return this.id.equals(other.id);
    }
}
