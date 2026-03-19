import { AggregateRoot } from 'src/shared/domain/aggregate-root';
import { ItemId } from '../value-objects/item-id.vo';
import { ItemName } from '../value-objects/item-name.vo';
import { ItemType } from '../value-objects/item-type.vo';
import { MeasureUnit } from '../value-objects/measure-unit.vo';
import { ItemStatus } from '../value-objects/item-status.vo';
import { Quantity } from '../value-objects/quantity.vo';
import {
    ItemAlreadyArchivedError,
    InsufficientStockError,
    ItemHasStockError,
    InvalidCategoryForItemTypeError,
} from '../errors/item.error';

export interface CreateItemParams {
    id: string;
    name: string;
    type: string;
    measureUnit: string;
    categoryId?: string | null;
    unitWeightGm?: number | null;
    productId?: string | null;
}

export interface PersistenceItemParams {
    id: string;
    name: string;
    type: string;
    measureUnit: string;
    currentStock: number;
    categoryId: string | null;
    productId: string | null;
    status: string;
    unitWeightGm: number | null;
    weightedAverageUnitPrice: number | null;
}

export interface UpdateItemParams {
    name?: string;
    measureUnit?: string;
    categoryId?: string | null;
    unitWeightGm?: number | null;
    productId?: string | null;
}

export class Item extends AggregateRoot<ItemId> {
    private name: ItemName;
    private type: ItemType;
    private measureUnit: MeasureUnit;
    private currentStock: number;
    private categoryId: string | null;
    private productId: string | null;
    private status: ItemStatus;
    private unitWeightGm: number | null;
    private weightedAverageUnitPrice: number | null;

    private constructor(
        id: ItemId,
        name: ItemName,
        type: ItemType,
        measureUnit: MeasureUnit,
        currentStock: number,
        categoryId: string | null,
        productId: string | null,
        status: ItemStatus,
        unitWeightGm: number | null,
        weightedAverageUnitPrice: number | null,
    ) {
        super(id);
        this.name = name;
        this.type = type;
        this.measureUnit = measureUnit;
        this.currentStock = currentStock;
        this.categoryId = categoryId;
        this.productId = productId;
        this.status = status;
        this.unitWeightGm = unitWeightGm;
        this.weightedAverageUnitPrice = weightedAverageUnitPrice;
    }

    public static create(params: CreateItemParams): Item {
        const id = ItemId.create(params.id);
        const name = ItemName.create(params.name);
        const type = ItemType.create(params.type);
        const measureUnit = MeasureUnit.create(params.measureUnit);
        const status = ItemStatus.active();

        if (params.categoryId && !type.isRawMaterial()) {
            throw new InvalidCategoryForItemTypeError();
        }

        return new Item(
            id,
            name,
            type,
            measureUnit,
            0,
            params.categoryId ?? null,
            params.productId ?? null,
            status,
            params.unitWeightGm ?? null,
            null,
        );
    }

    public static createFromPersistence(params: PersistenceItemParams): Item {
        const id = ItemId.create(params.id);
        const name = ItemName.create(params.name);
        const type = ItemType.create(params.type);
        const measureUnit = MeasureUnit.create(params.measureUnit);
        const status = ItemStatus.fromString(params.status);

        return new Item(
            id,
            name,
            type,
            measureUnit,
            params.currentStock,
            params.categoryId,
            params.productId,
            status,
            params.unitWeightGm,
            params.weightedAverageUnitPrice,
        );
    }

    public update(params: UpdateItemParams): void {
        if (params.name !== undefined) {
            this.name = ItemName.create(params.name);
        }
        if (params.measureUnit !== undefined) {
            this.measureUnit = MeasureUnit.create(params.measureUnit);
        }
        if (params.categoryId !== undefined) {
            if (params.categoryId && !this.type.isRawMaterial()) {
                throw new InvalidCategoryForItemTypeError();
            }
            this.categoryId = params.categoryId;
        }
        if (params.unitWeightGm !== undefined) {
            this.unitWeightGm = params.unitWeightGm;
        }
        if (params.productId !== undefined) {
            this.productId = params.productId;
        }
    }

    public updateWAUP(waup: number): void {
        this.weightedAverageUnitPrice = waup;
    }

    public restock(quantity: Quantity): void {
        if (this.status.isArchived()) {
            throw new ItemAlreadyArchivedError(this.id.value);
        }
        this.currentStock += quantity.value;
    }

    public deduct(quantity: Quantity): void {
        if (this.status.isArchived()) {
            throw new ItemAlreadyArchivedError(this.id.value);
        }
        if (quantity.value > this.currentStock) {
            throw new InsufficientStockError(
                this.id.value,
                quantity.value,
                this.currentStock,
            );
        }
        this.currentStock -= quantity.value;
    }

    public archive(): void {
        if (this.status.isArchived()) {
            throw new ItemAlreadyArchivedError(this.id.value);
        }
        if (this.currentStock > 0) {
            throw new ItemHasStockError(this.id.value, this.currentStock);
        }
        this.status = ItemStatus.archived();
    }

    public isRawMaterial(): boolean {
        return this.type.isRawMaterial();
    }

    public isFinalProduct(): boolean {
        return this.type.isFinalProduct();
    }

    public getUnitWeightGm(): number | null {
        return this.unitWeightGm;
    }

    public getWeightedAverageUnitPrice(): number | null {
        return this.weightedAverageUnitPrice;
    }

    public getName(): ItemName {
        return this.name;
    }

    public getType(): ItemType {
        return this.type;
    }

    public getMeasureUnit(): MeasureUnit {
        return this.measureUnit;
    }

    public getCurrentStock(): number {
        return this.currentStock;
    }

    public getCategoryId(): string | null {
        return this.categoryId;
    }

    public getProductId(): string | null {
        return this.productId;
    }

    public getStatus(): ItemStatus {
        return this.status;
    }

    public equals(other: Item): boolean {
        if (!(other instanceof Item)) return false;
        return this.name.equals(other.name);
    }
}
