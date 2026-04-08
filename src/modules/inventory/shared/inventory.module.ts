import { Module } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';

import { PrismaClient } from 'inventory-db';

// Controllers - Items
import { CreateItemController } from '../internal/presentation/controllers/create-item.controller';
import { UpdateItemController } from '../internal/presentation/controllers/update-item.controller';
import { ArchiveItemController } from '../internal/presentation/controllers/archive-item.controller';
import { RestockItemController } from '../internal/presentation/controllers/restock-item.controller';
import { DeductItemController } from '../internal/presentation/controllers/deduct-item.controller';
import { GetItemByIdController } from '../internal/presentation/controllers/get-item-by-id.controller';
import { GetAllItemsController } from '../internal/presentation/controllers/get-all-items.controller';
import { GetItemTransactionsController } from '../internal/presentation/controllers/get-item-transactions.controller';

// Controllers - Categories
import { CreateCategoryController } from '../internal/presentation/controllers/create-category.controller';
import { UpdateCategoryController } from '../internal/presentation/controllers/update-category.controller';
import { ArchiveCategoryController } from '../internal/presentation/controllers/archive-category.controller';
import { GetCategoryByIdController } from '../internal/presentation/controllers/get-category-by-id.controller';
import { GetAllCategoriesController } from '../internal/presentation/controllers/get-all-categories.controller';

// Controllers - Products
import { CreateProductController } from '../internal/presentation/controllers/create-product.controller';
import { UpdateProductController } from '../internal/presentation/controllers/update-product.controller';
import { GetProductByIdController } from '../internal/presentation/controllers/get-product-by-id.controller';
import { GetAllProductsController } from '../internal/presentation/controllers/get-all-products.controller';

// Controllers - PackagingBOM
import { SetPackagingBomController } from '../internal/presentation/controllers/set-packaging-bom.controller';

// Controllers - AddonBOM
import { SetAddonBomController } from '../internal/presentation/controllers/set-addon-bom.controller';

// Command Handlers - Items
import { CreateItemHandler } from '../internal/application/commands/create-item/create-item.handler';
import { UpdateItemHandler } from '../internal/application/commands/update-item/update-item.handler';
import { ArchiveItemHandler } from '../internal/application/commands/archive-item/archive-item.handler';
import { RestockItemHandler } from '../internal/application/commands/restock-item/restock-item.handler';
import { DeductItemHandler } from '../internal/application/commands/deduct-item/deduct-item.handler';

// Command Handlers - Categories
import { CreateCategoryHandler } from '../internal/application/commands/create-category/create-category.handler';
import { UpdateCategoryHandler } from '../internal/application/commands/update-category/update-category.handler';
import { ArchiveCategoryHandler } from '../internal/application/commands/archive-category/archive-category.handler';

// Command Handlers - Products
import { CreateProductHandler } from '../internal/application/commands/create-product/create-product.handler';
import { UpdateProductHandler } from '../internal/application/commands/update-product/update-product.handler';

// Command Handlers - PackagingBOM
import { SetPackagingBomHandler } from '../internal/application/commands/set-packaging-bom/set-packaging-bom.handler';

// Command Handlers - AddonBOM
import { SetAddonBomHandler } from '../internal/application/commands/set-addon-bom/set-addon-bom.handler';

// Query Handler Interfaces
import { IGetItemHandler } from '../internal/application/queries/get-item/get-item.handler.interface';
import { IGetAllItemsHandler } from '../internal/application/queries/get-all-items/get-all-items.handler.interface';
import { IGetItemTransactionsHandler } from '../internal/application/queries/get-item-transactions/get-item-transactions.handler.interface';
import { IGetCategoryHandler } from '../internal/application/queries/get-category/get-category.handler.interface';
import { IGetAllCategoriesHandler } from '../internal/application/queries/get-all-categories/get-all-categories.handler.interface';
import { IGetProductHandler } from '../internal/application/queries/get-product/get-product.handler.interface';
import { IGetAllProductsHandler } from '../internal/application/queries/get-all-products/get-all-products.handler.interface';

// Query Handler Implementations
import { GetItemHandler } from '../internal/infrastructure/query-handlers/get-item.handler';
import { GetAllItemsHandler } from '../internal/infrastructure/query-handlers/get-all-items.handler';
import { GetItemTransactionsHandler } from '../internal/infrastructure/query-handlers/get-item-transactions.handler';
import { GetCategoryHandler } from '../internal/infrastructure/query-handlers/get-category.handler';
import { GetAllCategoriesHandler } from '../internal/infrastructure/query-handlers/get-all-categories.handler';
import { GetProductHandler } from '../internal/infrastructure/query-handlers/get-product.handler';
import { GetAllProductsHandler } from '../internal/infrastructure/query-handlers/get-all-products.handler';

// Repositories
import { ItemRepository } from '../internal/infrastructure/repositories/item.repository';
import { ReadItemRepository } from '../internal/infrastructure/repositories/read-item.repository';
import { CategoryRepository } from '../internal/infrastructure/repositories/category.repository';
import { ReadCategoryRepository } from '../internal/infrastructure/repositories/read-category.repository';
import { ProductRepository } from '../internal/infrastructure/repositories/product.repository';
import { ReadProductRepository } from '../internal/infrastructure/repositories/read-product.repository';
import { PackagingBomRepository } from '../internal/infrastructure/repositories/packaging-bom.repository';
import { ReadPackagingBomRepository } from '../internal/infrastructure/repositories/read-packaging-bom.repository';
import { AddonBomRepository } from '../internal/infrastructure/repositories/addon-bom.repository';
import { ReadAddonBomRepository } from '../internal/infrastructure/repositories/read-addon-bom.repository';

// Mappers
import { ItemMapper } from '../internal/infrastructure/database/mappers/item.mapper';
import { CategoryMapper } from '../internal/infrastructure/database/mappers/category.mapper';
import { ProductMapper } from '../internal/infrastructure/database/mappers/product.mapper';
import { AddonComponentMapper } from '../internal/infrastructure/database/mappers/addon-component.mapper';
import { PackagingComponentMapper } from '../internal/infrastructure/database/mappers/packaging-component.mapper';

// Interfaces
import { IInventoryPrismaClient } from '../internal/infrastructure/database/inventory.prisma.client.interface';
import { IItemRepository } from '../internal/domain/repositories/item.repo.interface';
import { ICategoryRepository } from '../internal/domain/repositories/category.repo.interface';
import { IProductRepository } from '../internal/domain/repositories/product.repo.interface';
import { IPackagingBomRepository } from '../internal/domain/repositories/packaging-bom.repo.interface';
import { IAddonBomRepository } from '../internal/domain/repositories/addon-bom.repo.interface';

// Shared
import { ILogger } from 'src/shared/domain/contracts/logger.interface';
import { NestLogger } from 'src/shared/infrastructure/logger/nest-logger';
import { SecurityModule } from 'src/modules/security/shared/security.module';

// Facade
import { InventoryFacade } from '../internal/infrastructure/facade/inventory.facade';
import { IInventoryFacade } from 'src/modules/inventory/shared/contracts/inventory-facade.interface';

@Module({
    imports: [SecurityModule],
    providers: [
        {
            provide: IInventoryPrismaClient,
            useFactory: (configService: ConfigService) => {
                const pool = new Pool({
                    connectionString: configService.get<string>(
                        'INVENTORY_DATABASE_URL',
                    ),
                });
                return new PrismaClient({
                    adapter: new PrismaPg(pool),
                });
            },
            inject: [ConfigService],
        },

        // Command Handlers - Items
        CreateItemHandler,
        UpdateItemHandler,
        ArchiveItemHandler,
        RestockItemHandler,
        DeductItemHandler,

        // Command Handlers - Categories
        CreateCategoryHandler,
        UpdateCategoryHandler,
        ArchiveCategoryHandler,

        // Command Handlers - Products
        CreateProductHandler,
        UpdateProductHandler,

        // Command Handlers - PackagingBOM
        SetPackagingBomHandler,

        // Command Handlers - AddonBOM
        SetAddonBomHandler,

        // Query Handler Bindings
        { provide: IGetItemHandler, useClass: GetItemHandler },
        { provide: IGetAllItemsHandler, useClass: GetAllItemsHandler },
        { provide: IGetItemTransactionsHandler, useClass: GetItemTransactionsHandler },
        { provide: IGetCategoryHandler, useClass: GetCategoryHandler },
        { provide: IGetAllCategoriesHandler, useClass: GetAllCategoriesHandler },
        { provide: IGetProductHandler, useClass: GetProductHandler },
        { provide: IGetAllProductsHandler, useClass: GetAllProductsHandler },

        // Repository Bindings
        { provide: IItemRepository, useClass: ItemRepository },
        { provide: ICategoryRepository, useClass: CategoryRepository },
        { provide: IProductRepository, useClass: ProductRepository },
        { provide: IPackagingBomRepository, useClass: PackagingBomRepository },
        { provide: IAddonBomRepository, useClass: AddonBomRepository },
        ReadItemRepository,
        ReadCategoryRepository,
        ReadProductRepository,
        ReadPackagingBomRepository,
        ReadAddonBomRepository,

        // Mappers
        ItemMapper,
        CategoryMapper,
        ProductMapper,
        AddonComponentMapper,
        PackagingComponentMapper,

        // Logger
        { provide: ILogger, useClass: NestLogger },

        // Facade
        InventoryFacade,
        { provide: IInventoryFacade, useClass: InventoryFacade },
    ],
    exports: [{ provide: IInventoryFacade, useClass: InventoryFacade }],
    controllers: [
        CreateItemController,
        UpdateItemController,
        ArchiveItemController,
        RestockItemController,
        DeductItemController,
        GetItemByIdController,
        GetAllItemsController,
        GetItemTransactionsController,
        CreateCategoryController,
        UpdateCategoryController,
        ArchiveCategoryController,
        GetCategoryByIdController,
        GetAllCategoriesController,
        CreateProductController,
        UpdateProductController,
        GetProductByIdController,
        GetAllProductsController,
        SetPackagingBomController,
        SetAddonBomController,
    ],
})
export class InventoryModule {}
