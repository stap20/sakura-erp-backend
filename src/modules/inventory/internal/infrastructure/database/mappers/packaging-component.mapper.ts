import { Injectable } from '@nestjs/common';
import { PackagingComponent } from '../../../domain/entities/packaging-component.entity';

@Injectable()
export class PackagingComponentMapper {
    toDomain(row: {
        id: string;
        variantItemId: string;
        packagingItemId: string;
        qtyPerUnit: number;
    }): PackagingComponent {
        return PackagingComponent.create({
            id: row.id,
            variantItemId: row.variantItemId,
            packagingItemId: row.packagingItemId,
            qtyPerUnit: row.qtyPerUnit,
        });
    }

    toPersistence(component: PackagingComponent): {
        id: string;
        variantItemId: string;
        packagingItemId: string;
        qtyPerUnit: number;
    } {
        return {
            id: component.getId().value,
            variantItemId: component.getVariantItemId(),
            packagingItemId: component.getPackagingItemId(),
            qtyPerUnit: component.getQtyPerUnit(),
        };
    }
}
