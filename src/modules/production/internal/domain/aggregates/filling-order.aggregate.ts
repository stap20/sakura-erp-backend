import { AggregateRoot } from 'src/shared/domain/aggregate-root';
import { FillingOrderId } from '../value-objects/filling-order-id.vo';
import { FillingOrderStatus } from '../value-objects/filling-order-status.vo';
import { FillingOrderLine } from '../entities/filling-order-line.entity';
import { FillingOrderNotEditableError, FillingOrderLineNotFoundDomainError } from '../errors/production.error';

export interface CreateFillingOrderParams {
    id: string;
    productId: string;
    lines: {
        id: string;
        variantItemId: string;
        variantName: string;
        quantityUnits: number;
        unitWeightGm: number;
    }[];
    notes?: string | null;
}

export interface PersistenceFillingOrderParams {
    id: string;
    productId: string;
    bulkUsedGm: number;
    notes: string | null;
    status: string;
    performedBy: string | null;
    executedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    lines: {
        id: string;
        variantItemId: string;
        variantName: string;
        quantityUnits: number;
        unitWeightGm: number;
        bulkUsedGm: number;
    }[];
}

export class FillingOrder extends AggregateRoot<FillingOrderId> {
    private productId: string;
    private lines: FillingOrderLine[];
    private bulkUsedGm: number;
    private notes: string | null;
    private status: FillingOrderStatus;
    private performedBy: string | null;
    private executedAt: Date | null;
    private createdAt: Date;
    private updatedAt: Date;

    private constructor(
        id: FillingOrderId,
        productId: string,
        lines: FillingOrderLine[],
        bulkUsedGm: number,
        notes: string | null,
        status: FillingOrderStatus,
        performedBy: string | null,
        executedAt: Date | null,
        createdAt: Date,
        updatedAt: Date,
    ) {
        super(id);
        this.productId = productId;
        this.lines = lines;
        this.bulkUsedGm = bulkUsedGm;
        this.notes = notes;
        this.status = status;
        this.performedBy = performedBy;
        this.executedAt = executedAt;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public static create(params: CreateFillingOrderParams): FillingOrder {
        const now = new Date();
        const lines = params.lines.map((l) => FillingOrderLine.create(l));
        const bulkUsedGm = lines.reduce((sum, l) => sum + l.getBulkUsedGm(), 0);
        return new FillingOrder(
            FillingOrderId.create(params.id),
            params.productId,
            lines,
            bulkUsedGm,
            params.notes ?? null,
            FillingOrderStatus.draft(),
            null,
            null,
            now,
            now,
        );
    }

    public static createFromPersistence(params: PersistenceFillingOrderParams): FillingOrder {
        const lines = params.lines.map((l) => FillingOrderLine.createFromPersistence(l));
        return new FillingOrder(
            FillingOrderId.create(params.id),
            params.productId,
            lines,
            params.bulkUsedGm,
            params.notes,
            FillingOrderStatus.fromString(params.status),
            params.performedBy,
            params.executedAt,
            params.createdAt,
            params.updatedAt,
        );
    }

    public confirm(): void {
        if (!this.status.isDraft()) {
            throw new FillingOrderNotEditableError(this.status.value);
        }
        this.status = FillingOrderStatus.confirmed();
        this.updatedAt = new Date();
    }

    public execute(performedBy: string): void {
        if (!this.status.isConfirmed()) {
            throw new FillingOrderNotEditableError(this.status.value);
        }
        this.status = FillingOrderStatus.executed();
        this.performedBy = performedBy;
        this.executedAt = new Date();
        this.updatedAt = new Date();
    }

    public update(params: { notes?: string | null }): void {
        if (!this.status.isDraft()) {
            throw new FillingOrderNotEditableError(this.status.value);
        }
        if (params.notes !== undefined) {
            this.notes = params.notes;
        }
        this.updatedAt = new Date();
    }

    public addLine(line: FillingOrderLine): void {
        if (!this.status.isDraft()) throw new FillingOrderNotEditableError(this.status.value);
        this.lines.push(line);
        this.recalculateBulkUsed();
        this.updatedAt = new Date();
    }

    public updateLine(lineId: string, quantityUnits: number): void {
        if (!this.status.isDraft()) throw new FillingOrderNotEditableError(this.status.value);
        const line = this.lines.find((l) => l.getId().value === lineId);
        if (!line) throw new FillingOrderLineNotFoundDomainError(lineId);
        line.updateQuantityUnits(quantityUnits);
        this.recalculateBulkUsed();
        this.updatedAt = new Date();
    }

    public removeLine(lineId: string): void {
        if (!this.status.isDraft()) throw new FillingOrderNotEditableError(this.status.value);
        const idx = this.lines.findIndex((l) => l.getId().value === lineId);
        if (idx === -1) throw new FillingOrderLineNotFoundDomainError(lineId);
        this.lines.splice(idx, 1);
        this.recalculateBulkUsed();
        this.updatedAt = new Date();
    }

    private recalculateBulkUsed(): void {
        this.bulkUsedGm = this.lines.reduce((sum, l) => sum + l.getBulkUsedGm(), 0);
    }

    public cancel(): void {
        if (this.status.isExecuted()) {
            throw new FillingOrderNotEditableError(this.status.value);
        }
        this.status = FillingOrderStatus.cancelled();
        this.updatedAt = new Date();
    }

    public getProductId(): string { return this.productId; }
    public getLines(): FillingOrderLine[] { return [...this.lines]; }
    public getBulkUsedGm(): number { return this.bulkUsedGm; }
    public getNotes(): string | null { return this.notes; }
    public getStatus(): FillingOrderStatus { return this.status; }
    public getPerformedBy(): string | null { return this.performedBy; }
    public getExecutedAt(): Date | null { return this.executedAt; }
    public getCreatedAt(): Date { return this.createdAt; }
    public getUpdatedAt(): Date { return this.updatedAt; }

    public equals(other: AggregateRoot<FillingOrderId>): boolean {
        if (!(other instanceof FillingOrder)) return false;
        return this.id.equals(other.id);
    }
}
