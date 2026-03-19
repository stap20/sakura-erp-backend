import { AggregateRoot } from 'src/shared/domain/aggregate-root';
import { PurchaseOrderId } from '../value-objects/purchase-order-id.vo';
import { PurchaseOrderStatus } from '../value-objects/purchase-order-status.vo';
import { PurchaseOrderLine } from '../entities/purchase-order-line.entity';
import {
    PurchaseOrderNotEditableError,
    PurchaseOrderNotConfirmableError,
    PurchaseOrderNotReceivableError,
    PurchaseOrderNotCancellableError,
    PurchaseOrderLineNotFoundError,
    DuplicateLineItemError,
} from '../errors/purchase.error';

export interface CreatePurchaseOrderParams {
    id: string;
    vendorId: string;
    vendorName: string;
    vendorPhone?: string | null;
    vendorContact?: string | null;
    notes?: string | null;
    expectedDeliveryDate?: Date | null;
}

export interface PersistencePurchaseOrderParams {
    id: string;
    vendorId: string;
    vendorName: string;
    vendorPhone: string | null;
    vendorContact: string | null;
    status: string;
    notes: string | null;
    expectedDeliveryDate: Date | null;
    receivedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    lines: PurchaseOrderLine[];
}

export class PurchaseOrder extends AggregateRoot<PurchaseOrderId> {
    private vendorId: string;
    private vendorName: string;
    private vendorPhone: string | null;
    private vendorContact: string | null;
    private status: PurchaseOrderStatus;
    private notes: string | null;
    private expectedDeliveryDate: Date | null;
    private receivedAt: Date | null;
    private lines: PurchaseOrderLine[];
    private createdAt: Date;
    private updatedAt: Date;

    private constructor(
        id: PurchaseOrderId,
        vendorId: string,
        vendorName: string,
        vendorPhone: string | null,
        vendorContact: string | null,
        status: PurchaseOrderStatus,
        notes: string | null,
        expectedDeliveryDate: Date | null,
        receivedAt: Date | null,
        lines: PurchaseOrderLine[],
        createdAt: Date,
        updatedAt: Date,
    ) {
        super(id);
        this.vendorId = vendorId;
        this.vendorName = vendorName;
        this.vendorPhone = vendorPhone;
        this.vendorContact = vendorContact;
        this.status = status;
        this.notes = notes;
        this.expectedDeliveryDate = expectedDeliveryDate;
        this.receivedAt = receivedAt;
        this.lines = lines;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public static create(params: CreatePurchaseOrderParams): PurchaseOrder {
        const id = PurchaseOrderId.create(params.id);
        const status = PurchaseOrderStatus.draft();
        const now = new Date();
        return new PurchaseOrder(
            id,
            params.vendorId,
            params.vendorName,
            params.vendorPhone ?? null,
            params.vendorContact ?? null,
            status,
            params.notes ?? null,
            params.expectedDeliveryDate ?? null,
            null,
            [],
            now,
            now,
        );
    }

    public static createFromPersistence(params: PersistencePurchaseOrderParams): PurchaseOrder {
        const id = PurchaseOrderId.create(params.id);
        const status = PurchaseOrderStatus.fromString(params.status);
        return new PurchaseOrder(
            id,
            params.vendorId,
            params.vendorName,
            params.vendorPhone,
            params.vendorContact,
            status,
            params.notes,
            params.expectedDeliveryDate,
            params.receivedAt,
            params.lines,
            params.createdAt,
            params.updatedAt,
        );
    }

    public equals(other: AggregateRoot<PurchaseOrderId>): boolean {
        return this.id.equals(other.getId());
    }

    public confirm(): void {
        if (!this.status.isDraft()) {
            throw new PurchaseOrderNotConfirmableError();
        }
        this.status = PurchaseOrderStatus.confirmed();
        this.updatedAt = new Date();
    }

    public receive(): void {
        if (!this.status.isConfirmed()) {
            throw new PurchaseOrderNotReceivableError();
        }
        this.status = PurchaseOrderStatus.received();
        this.receivedAt = new Date();
        this.updatedAt = new Date();
    }

    public cancel(): void {
        if (!this.status.isDraft() && !this.status.isConfirmed()) {
            throw new PurchaseOrderNotCancellableError();
        }
        this.status = PurchaseOrderStatus.cancelled();
        this.updatedAt = new Date();
    }

    public addLine(line: PurchaseOrderLine): void {
        if (!this.status.isDraft()) {
            throw new PurchaseOrderNotEditableError();
        }
        const duplicate = this.lines.find((l) => l.itemId === line.itemId);
        if (duplicate) throw new DuplicateLineItemError();
        this.lines.push(line);
        this.updatedAt = new Date();
    }

    public removeLine(lineId: string): void {
        if (!this.status.isDraft()) {
            throw new PurchaseOrderNotEditableError();
        }
        const index = this.lines.findIndex((l) => l.id === lineId);
        if (index === -1) throw new PurchaseOrderLineNotFoundError(lineId);
        this.lines.splice(index, 1);
        this.updatedAt = new Date();
    }

    public updateLine(lineId: string, quantity?: number, unitPrice?: number): void {
        if (!this.status.isDraft()) {
            throw new PurchaseOrderNotEditableError();
        }
        const line = this.lines.find((l) => l.id === lineId);
        if (!line) throw new PurchaseOrderLineNotFoundError(lineId);
        line.update(quantity, unitPrice);
        this.updatedAt = new Date();
    }

    public updateNotes(notes: string | null): void {
        if (!this.status.isDraft()) {
            throw new PurchaseOrderNotEditableError();
        }
        this.notes = notes;
        this.updatedAt = new Date();
    }

    public getVendorId(): string { return this.vendorId; }
    public getVendorName(): string { return this.vendorName; }
    public getVendorPhone(): string | null { return this.vendorPhone; }
    public getVendorContact(): string | null { return this.vendorContact; }
    public getStatus(): PurchaseOrderStatus { return this.status; }
    public getNotes(): string | null { return this.notes; }
    public getExpectedDeliveryDate(): Date | null { return this.expectedDeliveryDate; }
    public getReceivedAt(): Date | null { return this.receivedAt; }
    public getLines(): PurchaseOrderLine[] { return [...this.lines]; }
    public getCreatedAt(): Date { return this.createdAt; }
    public getUpdatedAt(): Date { return this.updatedAt; }
}
