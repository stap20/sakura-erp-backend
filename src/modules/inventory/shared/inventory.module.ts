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

// Query Handler Interfaces
import { IGetItemHandler } from '../internal/application/queries/get-item/get-item.handler.interface';
import { IGetAllItemsHandler } from '../internal/application/queries/get-all-items/get-all-items.handler.interface';
import { IGetItemTransactionsHandler } from '../internal/application/queries/get-item-transactions/get-item-transactions.handler.interface';
import { IGetCategoryHandler } from '../internal/application/queries/get-category/get-category.handler.interface';
import { IGetAllCategoriesHandler } from '../internal/application/queries/get-all-categories/get-all-categories.handler.interface';

// Query Handler Implementations
import { GetItemHandler } from '../internal/infrastructure/query-handlers/get-item.handler';
import { GetAllItemsHandler } from '../internal/infrastructure/query-handlers/get-all-items.handler';
import { GetItemTransactionsHandler } from '../internal/infrastructure/query-handlers/get-item-transactions.handler';
import { GetCategoryHandler } from '../internal/infrastructure/query-handlers/get-category.handler';
import { GetAllCategoriesHandler } from '../internal/infrastructure/query-handlers/get-all-categories.handler';

// Repositories
import { ItemRepository } from '../internal/infrastructure/repositories/item.repository';
import { ReadItemRepository } from '../internal/infrastructure/repositories/read-item.repository';
import { CategoryRepository } from '../internal/infrastructure/repositories/category.repository';
import { ReadCategoryRepository } from '../internal/infrastructure/repositories/read-category.repository';

// Mappers
import { ItemMapper } from '../internal/infrastructure/database/mappers/item.mapper';
import { CategoryMapper } from '../internal/infrastructure/database/mappers/category.mapper';

// Interfaces
import { IInventoryPrismaClient } from '../internal/infrastructure/database/inventory.prisma.client.interface';
import { IItemRepository } from '../internal/domain/repositories/item.repo.interface';
import { ICategoryRepository } from '../internal/domain/repositories/category.repo.interface';

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

        // Command Handlers
        CreateItemHandler,
        UpdateItemHandler,
        ArchiveItemHandler,
        RestockItemHandler,
        DeductItemHandler,
        CreateCategoryHandler,
        UpdateCategoryHandler,
        ArchiveCategoryHandler,

        // Query Handler Bindings
        { provide: IGetItemHandler, useClass: GetItemHandler },
        { provide: IGetAllItemsHandler, useClass: GetAllItemsHandler },
        { provide: IGetItemTransactionsHandler, useClass: GetItemTransactionsHandler },
        { provide: IGetCategoryHandler, useClass: GetCategoryHandler },
        { provide: IGetAllCategoriesHandler, useClass: GetAllCategoriesHandler },

        // Repository Bindings
        { provide: IItemRepository, useClass: ItemRepository },
        { provide: ICategoryRepository, useClass: CategoryRepository },
        ReadItemRepository,
        ReadCategoryRepository,

        // Mappers
        ItemMapper,
        CategoryMapper,

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
    ],
})
export class InventoryModule {}
