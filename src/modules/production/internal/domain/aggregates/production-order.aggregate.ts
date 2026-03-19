import { AggregateRoot } from 'src/shared/domain/aggregate-root';
import { ProductionOrderId } from '../value-objects/production-order-id.vo';
import { ProductionOrderStatus } from '../value-objects/production-order-status.vo';
import { ProductionOrderNotEditableError } from '../errors/production.error';

export interface CreateProductionOrderParams {
    id: string;
    productId: string;
    batchWeightGm: number;
    wastePercent?: number;
    notes?: string | null;
}

export interface PersistenceProductionOrderParams {
    id: string;
    productId: string;
    batchWeightGm: number;
    wastePercent: number;
    notes: string | null;
    status: string;
    performedBy: string | null;
    executedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface UpdateProductionOrderParams {
    batchWeightGm?: number;
    wastePercent?: number;
    notes?: string | null;
}

export class ProductionOrder extends AggregateRoot<ProductionOrderId> {
    private productId: string;
    private batchWeightGm: number;
    private wastePercent: number;
    private notes: string | null;
    private status: ProductionOrderStatus;
    private performedBy: string | null;
    private executedAt: Date | null;
    private createdAt: Date;
    private updatedAt: Date;

    private constructor(
        id: ProductionOrderId,
        productId: string,
        batchWeightGm: number,
        wastePercent: number,
        notes: string | null,
        status: ProductionOrderStatus,
        performedBy: string | null,
        executedAt: Date | null,
        createdAt: Date,
        updatedAt: Date,
    ) {
        super(id);
        this.productId = productId;
        this.batchWeightGm = batchWeightGm;
        this.wastePercent = wastePercent;
        this.notes = notes;
        this.status = status;
        this.performedBy = performedBy;
        this.executedAt = executedAt;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public static create(params: CreateProductionOrderParams): ProductionOrder {
        const now = new Date();
        return new ProductionOrder(
            ProductionOrderId.create(params.id),
            params.productId,
            params.batchWeightGm,
            params.wastePercent ?? 0,
            params.notes ?? null,
            ProductionOrderStatus.draft(),
            null,
            null,
            now,
            now,
        );
    }

    public static createFromPersistence(params: PersistenceProductionOrderParams): ProductionOrder {
        return new ProductionOrder(
            ProductionOrderId.create(params.id),
            params.productId,
            params.batchWeightGm,
            params.wastePercent,
            params.notes,
            ProductionOrderStatus.fromString(params.status),
            params.performedBy,
            params.executedAt,
            params.createdAt,
            params.updatedAt,
        );
    }

    public update(params: UpdateProductionOrderParams): void {
        if (!this.status.isDraft()) {
            throw new ProductionOrderNotEditableError(this.status.value);
        }
        if (params.batchWeightGm !== undefined) this.batchWeightGm = params.batchWeightGm;
        if (params.wastePercent !== undefined) this.wastePercent = params.wastePercent;
        if (params.notes !== undefined) this.notes = params.notes;
        this.updatedAt = new Date();
    }

    public confirm(): void {
        if (!this.status.isDraft()) {
            throw new ProductionOrderNotEditableError(this.status.value);
        }
        this.status = ProductionOrderStatus.confirmed();
        this.updatedAt = new Date();
    }

    public execute(performedBy: string): void {
        if (!this.status.isConfirmed()) {
            throw new ProductionOrderNotEditableError(this.status.value);
        }
        this.status = ProductionOrderStatus.executed();
        this.performedBy = performedBy;
        this.executedAt = new Date();
        this.updatedAt = new Date();
    }

    public cancel(): void {
        if (this.status.isExecuted()) {
            throw new ProductionOrderNotEditableError(this.status.value);
        }
        this.status = ProductionOrderStatus.cancelled();
        this.updatedAt = new Date();
    }

    public getProductId(): string { return this.productId; }
    public getBatchWeightGm(): number { return this.batchWeightGm; }
    public getWastePercent(): number { return this.wastePercent; }
    public getNotes(): string | null { return this.notes; }
    public getStatus(): ProductionOrderStatus { return this.status; }
    public getPerformedBy(): string | null { return this.performedBy; }
    public getExecutedAt(): Date | null { return this.executedAt; }
    public getCreatedAt(): Date { return this.createdAt; }
    public getUpdatedAt(): Date { return this.updatedAt; }

    public equals(other: AggregateRoot<ProductionOrderId>): boolean {
        if (!(other instanceof ProductionOrder)) return false;
        return this.id.equals(other.id);
    }
}
