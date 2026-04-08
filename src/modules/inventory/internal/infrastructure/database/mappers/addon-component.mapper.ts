import { Injectable } from '@nestjs/common';
import { AddonComponent } from '../../../domain/entities/addon-component.entity';

@Injectable()
export class AddonComponentMapper {
    toDomain(row: {
        id: string;
        variantItemId: string;
        ingredientCategory: string;
        addonItemId: string;
    }): AddonComponent {
        return AddonComponent.create({
            id: row.id,
            variantItemId: row.variantItemId,
            ingredientCategory: row.ingredientCategory,
            addonItemId: row.addonItemId,
        });
    }

    toPersistence(component: AddonComponent): {
        id: string;
        variantItemId: string;
        ingredientCategory: string;
        addonItemId: string;
    } {
        return {
            id: component.getId().value,
            variantItemId: component.getVariantItemId(),
            ingredientCategory: component.getIngredientCategory(),
            addonItemId: component.getAddonItemId(),
        };
    }
}
