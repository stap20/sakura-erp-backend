import { Entity } from 'src/shared/domain/entity';
import { InsufficientBulkStockError } from '../errors/production.error';

export class BulkStockId {
    private constructor(public readonly value: string) {}
    static create(value: string): BulkStockId {
        return new BulkStockId(value);
    }
    equals(other: BulkStockId): boolean {
        return this.value === other.value;
    }
}

export class BulkStock extends Entity<BulkStockId> {
    private productId: string;
    private availableGm: number;

    private constructor(id: BulkStockId, productId: string, availableGm: number) {
        super(id);
        this.productId = productId;
        this.availableGm = availableGm;
    }

    public static create(id: string, productId: string, availableGm: number): BulkStock {
        return new BulkStock(BulkStockId.create(id), productId, availableGm);
    }

    public addBulk(grams: number): void {
        this.availableGm += grams;
    }

    public deductBulk(grams: number): void {
        if (grams > this.availableGm) {
            throw new InsufficientBulkStockError(this.availableGm, grams);
        }
        this.availableGm -= grams;
    }

    public getProductId(): string { return this.productId; }
    public getAvailableGm(): number { return this.availableGm; }

    public equals(other: Entity<BulkStockId>): boolean {
        if (!(other instanceof BulkStock)) return false;
        return this.id.equals(other.id);
    }
}
