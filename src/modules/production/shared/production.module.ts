import { Module } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { PrismaClient } from 'production-db';

// External module dependencies
import { InventoryModule } from 'src/modules/inventory/shared/inventory.module';
import { RecipeModule } from 'src/modules/recipe/shared/recipe.module';

// Controllers — Production Orders
import { CreateProductionOrderController } from '../internal/presentation/controllers/create-production-order.controller';
import { GetAllProductionOrdersController } from '../internal/presentation/controllers/get-all-production-orders.controller';
import { GetProductionOrderByIdController } from '../internal/presentation/controllers/get-production-order-by-id.controller';
import { UpdateProductionOrderController } from '../internal/presentation/controllers/update-production-order.controller';
import { ConfirmProductionOrderController } from '../internal/presentation/controllers/confirm-production-order.controller';
import { ExecuteProductionOrderController } from '../internal/presentation/controllers/execute-production-order.controller';
import { CancelProductionOrderController } from '../internal/presentation/controllers/cancel-production-order.controller';

// Controllers — Bulk Stock
import { GetAllBulkStocksController } from '../internal/presentation/controllers/get-all-bulk-stocks.controller';

// Controllers — Filling Orders
import { CreateFillingOrderController } from '../internal/presentation/controllers/create-filling-order.controller';
import { GetAllFillingOrdersController } from '../internal/presentation/controllers/get-all-filling-orders.controller';
import { GetFillingOrderByIdController } from '../internal/presentation/controllers/get-filling-order-by-id.controller';
import { ConfirmFillingOrderController } from '../internal/presentation/controllers/confirm-filling-order.controller';
import { ExecuteFillingOrderController } from '../internal/presentation/controllers/execute-filling-order.controller';
import { CancelFillingOrderController } from '../internal/presentation/controllers/cancel-filling-order.controller';

// Command Handlers — Production Orders
import { CreateProductionOrderHandler } from '../internal/application/commands/create-production-order/create-production-order.handler';
import { UpdateProductionOrderHandler } from '../internal/application/commands/update-production-order/update-production-order.handler';
import { ConfirmProductionOrderHandler } from '../internal/application/commands/confirm-production-order/confirm-production-order.handler';
import { ExecuteProductionOrderHandler } from '../internal/application/commands/execute-production-order/execute-production-order.handler';
import { CancelProductionOrderHandler } from '../internal/application/commands/cancel-production-order/cancel-production-order.handler';

// Command Handlers — Filling Orders
import { CreateFillingOrderHandler } from '../internal/application/commands/create-filling-order/create-filling-order.handler';
import { ConfirmFillingOrderHandler } from '../internal/application/commands/confirm-filling-order/confirm-filling-order.handler';
import { ExecuteFillingOrderHandler } from '../internal/application/commands/execute-filling-order/execute-filling-order.handler';
import { CancelFillingOrderHandler } from '../internal/application/commands/cancel-filling-order/cancel-filling-order.handler';

// Query Handler Interfaces
import { IGetAllBulkStocksHandler } from '../internal/application/queries/get-all-bulk-stocks/get-all-bulk-stocks.handler.interface';
import { GetAllBulkStocksHandler } from '../internal/infrastructure/query-handlers/get-all-bulk-stocks.handler';
import { IGetProductionOrderHandler } from '../internal/application/queries/get-production-order/get-production-order.handler.interface';
import { IGetAllProductionOrdersHandler } from '../internal/application/queries/get-all-production-orders/get-all-production-orders.handler.interface';
import { IGetFillingOrderHandler } from '../internal/application/queries/get-filling-order/get-filling-order.handler.interface';
import { IGetAllFillingOrdersHandler } from '../internal/application/queries/get-all-filling-orders/get-all-filling-orders.handler.interface';

// Query Handler Implementations
import { GetProductionOrderHandler } from '../internal/infrastructure/query-handlers/get-production-order.handler';
import { GetAllProductionOrdersHandler } from '../internal/infrastructure/query-handlers/get-all-production-orders.handler';
import { GetFillingOrderHandler } from '../internal/infrastructure/query-handlers/get-filling-order.handler';
import { GetAllFillingOrdersHandler } from '../internal/infrastructure/query-handlers/get-all-filling-orders.handler';

// Repositories
import { ProductionOrderRepository } from '../internal/infrastructure/repositories/production-order.repository';
import { ReadProductionOrderRepository } from '../internal/infrastructure/repositories/read-production-order.repository';
import { FillingOrderRepository } from '../internal/infrastructure/repositories/filling-order.repository';
import { ReadFillingOrderRepository } from '../internal/infrastructure/repositories/read-filling-order.repository';
import { BulkStockRepository } from '../internal/infrastructure/repositories/bulk-stock.repository';
import { ReadBulkStockRepository } from '../internal/infrastructure/repositories/read-bulk-stock.repository';

// Mappers
import { ProductionOrderMapper } from '../internal/infrastructure/database/mappers/production-order.mapper';
import { FillingOrderMapper } from '../internal/infrastructure/database/mappers/filling-order.mapper';

// Interfaces
import { IProductionPrismaClient } from '../internal/infrastructure/database/production.prisma.client.interface';
import { IProductionOrderRepository } from '../internal/domain/repositories/production-order.repo.interface';
import { IFillingOrderRepository } from '../internal/domain/repositories/filling-order.repo.interface';
import { IBulkStockRepository } from '../internal/domain/repositories/bulk-stock.repo.interface';

// Gateways
import { InventoryGateway } from '../internal/infrastructure/gateways/inventory.gateway';
import { RecipeGateway } from '../internal/infrastructure/gateways/recipe.gateway';

// Shared
import { ILogger } from 'src/shared/domain/contracts/logger.interface';
import { NestLogger } from 'src/shared/infrastructure/logger/nest-logger';

@Module({
    imports: [InventoryModule, RecipeModule],
    providers: [
        {
            provide: IProductionPrismaClient,
            useFactory: (configService: ConfigService) => {
                const pool = new Pool({
                    connectionString: configService.get<string>('PRODUCTION_DATABASE_URL'),
                });
                return new PrismaClient({
                    adapter: new PrismaPg(pool),
                });
            },
            inject: [ConfigService],
        },

        // Gateways
        InventoryGateway,
        RecipeGateway,

        // Command Handlers — Production Orders
        CreateProductionOrderHandler,
        UpdateProductionOrderHandler,
        ConfirmProductionOrderHandler,
        ExecuteProductionOrderHandler,
        CancelProductionOrderHandler,

        // Command Handlers — Filling Orders
        CreateFillingOrderHandler,
        ConfirmFillingOrderHandler,
        ExecuteFillingOrderHandler,
        CancelFillingOrderHandler,

        // Query Handler Bindings — Bulk Stock
        { provide: IGetAllBulkStocksHandler, useClass: GetAllBulkStocksHandler },
        ReadBulkStockRepository,

        // Query Handler Bindings
        { provide: IGetProductionOrderHandler, useClass: GetProductionOrderHandler },
        { provide: IGetAllProductionOrdersHandler, useClass: GetAllProductionOrdersHandler },
        { provide: IGetFillingOrderHandler, useClass: GetFillingOrderHandler },
        { provide: IGetAllFillingOrdersHandler, useClass: GetAllFillingOrdersHandler },

        // Repository Bindings
        { provide: IProductionOrderRepository, useClass: ProductionOrderRepository },
        { provide: IFillingOrderRepository, useClass: FillingOrderRepository },
        { provide: IBulkStockRepository, useClass: BulkStockRepository },
        ReadProductionOrderRepository,
        ReadFillingOrderRepository,

        // Mappers
        ProductionOrderMapper,
        FillingOrderMapper,

        // Logger
        { provide: ILogger, useClass: NestLogger },
    ],
    controllers: [
        CreateProductionOrderController,
        GetAllProductionOrdersController,
        GetProductionOrderByIdController,
        UpdateProductionOrderController,
        ConfirmProductionOrderController,
        ExecuteProductionOrderController,
        CancelProductionOrderController,
        GetAllBulkStocksController,
        CreateFillingOrderController,
        GetAllFillingOrdersController,
        GetFillingOrderByIdController,
        ConfirmFillingOrderController,
        ExecuteFillingOrderController,
        CancelFillingOrderController,
    ],
})
export class ProductionModule {}
