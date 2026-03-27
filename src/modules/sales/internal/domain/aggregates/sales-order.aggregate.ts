import { AggregateRoot } from 'src/shared/domain/aggregate-root';
import { SalesOrderId } from '../value-objects/sales-order-id.vo';
import { SalesOrderStatus } from '../value-objects/sales-order-status.vo';
import { SalesOrderLine } from '../entities/sales-order-line.entity';
import {
    SalesOrderNotEditableError,
    SalesOrderNotConfirmableError,
    SalesOrderNotShippableError,
    SalesOrderNotCancellableError,
    SalesOrderNotPayableError,
    SalesOrderLineNotFoundError,
    DuplicateLineItemError,
} from '../errors/sales-order.errors';
import { DiscountCodeInactiveError, DiscountCodeExpiredError, DiscountCodeExhaustedError } from '../errors/discount-code.errors';

export interface CreateSalesOrderParams {
    id: string;
    customerName: string;
    customerPhone?: string | null;
    customerContact?: string | null;
    notes?: string | null;
}

export interface PersistenceSalesOrderParams {
    id: string;
    customerName: string;
    customerPhone: string | null;
    customerContact: string | null;
    status: string;
    notes: string | null;
    shippedAt: Date | null;
    invoiceNumber: string | null;
    paymentStatus: string | null;
    paidAt: Date | null;
    discountCode: string | null;
    discountAmount: number;
    createdAt: Date;
    updatedAt: Date;
    lines: SalesOrderLine[];
}

export class SalesOrder extends AggregateRoot<SalesOrderId> {
    private customerName: string;
    private customerPhone: string | null;
    private customerContact: string | null;
    private status: SalesOrderStatus;
    private notes: string | null;
    private shippedAt: Date | null;
    private invoiceNumber: string | null;
    private paymentStatus: string | null;
    private paidAt: Date | null;
    private discountCode: string | null;
    private discountAmount: number;
    private lines: SalesOrderLine[];
    private createdAt: Date;
    private updatedAt: Date;

    private constructor(
        id: SalesOrderId,
        customerName: string,
        customerPhone: string | null,
        customerContact: string | null,
        status: SalesOrderStatus,
        notes: string | null,
        shippedAt: Date | null,
        invoiceNumber: string | null,
        paymentStatus: string | null,
        paidAt: Date | null,
        discountCode: string | null,
        discountAmount: number,
        lines: SalesOrderLine[],
        createdAt: Date,
        updatedAt: Date,
    ) {
        super(id);
        this.customerName = customerName;
        this.customerPhone = customerPhone;
        this.customerContact = customerContact;
        this.status = status;
        this.notes = notes;
        this.shippedAt = shippedAt;
        this.invoiceNumber = invoiceNumber;
        this.paymentStatus = paymentStatus;
        this.paidAt = paidAt;
        this.discountCode = discountCode;
        this.discountAmount = discountAmount;
        this.lines = lines;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public static create(params: CreateSalesOrderParams): SalesOrder {
        const id = SalesOrderId.create(params.id);
        const status = SalesOrderStatus.draft();
        const now = new Date();
        return new SalesOrder(
            id,
            params.customerName,
            params.customerPhone ?? null,
            params.customerContact ?? null,
            status,
            params.notes ?? null,
            null,
            null,
            null,
            null,
            null,
            0,
            [],
            now,
            now,
        );
    }

    public static createFromPersistence(params: PersistenceSalesOrderParams): SalesOrder {
        const id = SalesOrderId.create(params.id);
        const status = SalesOrderStatus.fromString(params.status);
        return new SalesOrder(
            id,
            params.customerName,
            params.customerPhone,
            params.customerContact,
            status,
            params.notes,
            params.shippedAt,
            params.invoiceNumber,
            params.paymentStatus,
            params.paidAt,
            params.discountCode,
            params.discountAmount,
            params.lines,
            params.createdAt,
            params.updatedAt,
        );
    }

    public equals(other: AggregateRoot<SalesOrderId>): boolean {
        return this.id.equals(other.getId());
    }

    public confirm(): void {
        if (!this.status.isDraft()) {
            throw new SalesOrderNotConfirmableError();
        }
        this.status = SalesOrderStatus.confirmed();
        this.paymentStatus = 'PENDING';
        this.updatedAt = new Date();
    }

    public setInvoiceNumber(invoiceNumber: string): void {
        this.invoiceNumber = invoiceNumber;
    }

    public markAsPaid(): void {
        if (this.paymentStatus !== 'PENDING') {
            throw new SalesOrderNotPayableError();
        }
        this.paymentStatus = 'PAID';
        this.paidAt = new Date();
        this.updatedAt = new Date();
    }

    public applyDiscount(
        code: string,
        amount: number,
        discountEntity: { isActive: boolean; expiresAt: Date | null; maxUses: number | null; usedCount: number },
    ): void {
        if (!this.status.isDraft()) {
            throw new SalesOrderNotEditableError();
        }
        if (!discountEntity.isActive) throw new DiscountCodeInactiveError();
        if (discountEntity.expiresAt && discountEntity.expiresAt < new Date()) throw new DiscountCodeExpiredError();
        if (discountEntity.maxUses !== null && discountEntity.usedCount >= discountEntity.maxUses) throw new DiscountCodeExhaustedError();
        this.discountCode = code;
        this.discountAmount = amount;
        this.updatedAt = new Date();
    }

    public removeDiscount(): void {
        if (!this.status.isDraft()) {
            throw new SalesOrderNotEditableError();
        }
        this.discountCode = null;
        this.discountAmount = 0;
        this.updatedAt = new Date();
    }

    public ship(): void {
        if (!this.status.isConfirmed()) {
            throw new SalesOrderNotShippableError();
        }
        this.status = SalesOrderStatus.shipped();
        this.shippedAt = new Date();
        this.updatedAt = new Date();
    }

    public cancel(): void {
        if (this.status.isShipped()) {
            throw new SalesOrderNotCancellableError();
        }
        this.status = SalesOrderStatus.cancelled();
        this.updatedAt = new Date();
    }

    public addLine(line: SalesOrderLine): void {
        if (!this.status.isDraft()) {
            throw new SalesOrderNotEditableError();
        }
        const duplicate = this.lines.find((l) => l.itemId === line.itemId);
        if (duplicate) throw new DuplicateLineItemError();
        this.lines.push(line);
        this.updatedAt = new Date();
    }

    public removeLine(lineId: string): void {
        if (!this.status.isDraft()) {
            throw new SalesOrderNotEditableError();
        }
        const index = this.lines.findIndex((l) => l.id === lineId);
        if (index === -1) throw new SalesOrderLineNotFoundError(lineId);
        this.lines.splice(index, 1);
        this.updatedAt = new Date();
    }

    public updateLine(lineId: string, quantity?: number, unitPrice?: number, isGift?: boolean): void {
        if (!this.status.isDraft()) {
            throw new SalesOrderNotEditableError();
        }
        const line = this.lines.find((l) => l.id === lineId);
        if (!line) throw new SalesOrderLineNotFoundError(lineId);
        line.update(quantity, unitPrice, isGift);
        this.updatedAt = new Date();
    }

    public updateNotes(notes: string | null): void {
        if (!this.status.isDraft()) {
            throw new SalesOrderNotEditableError();
        }
        this.notes = notes;
        this.updatedAt = new Date();
    }

    public getLineSubtotal(): number {
        return this.lines
            .filter((l) => !l.isGift)
            .reduce((sum, l) => sum + l.quantity * l.unitPrice, 0);
    }

    public getDiscountCode(): string | null { return this.discountCode; }
    public getDiscountAmount(): number { return this.discountAmount; }
    public getCustomerName(): string { return this.customerName; }
    public getCustomerPhone(): string | null { return this.customerPhone; }
    public getCustomerContact(): string | null { return this.customerContact; }
    public getStatus(): SalesOrderStatus { return this.status; }
    public getNotes(): string | null { return this.notes; }
    public getShippedAt(): Date | null { return this.shippedAt; }
    public getInvoiceNumber(): string | null { return this.invoiceNumber; }
    public getPaymentStatus(): string | null { return this.paymentStatus; }
    public getPaidAt(): Date | null { return this.paidAt; }
    public getLines(): SalesOrderLine[] { return [...this.lines]; }
    public getCreatedAt(): Date { return this.createdAt; }
    public getUpdatedAt(): Date { return this.updatedAt; }
}
