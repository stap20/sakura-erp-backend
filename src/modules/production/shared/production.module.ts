import { Module } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { PrismaClient } from 'production-db';

// External module dependencies
import { InventoryModule } from 'src/modules/inventory/shared/inventory.module';
import { RecipeModule } from 'src/modules/recipe/shared/recipe.module';

// Controllers
import { CreateProductionOrderController } from '../internal/presentation/controllers/create-production-order.controller';
import { GetProductionOrderByIdController } from '../internal/presentation/controllers/get-production-order-by-id.controller';
import { GetProductionOrdersController } from '../internal/presentation/controllers/get-production-orders.controller';
import { ConfirmProductionOrderController } from '../internal/presentation/controllers/confirm-production-order.controller';
import { CancelProductionOrderController } from '../internal/presentation/controllers/cancel-production-order.controller';
import { ExecuteProductionOrderController } from '../internal/presentation/controllers/execute-production-order.controller';
import { UpdateProductionOrderNotesController } from '../internal/presentation/controllers/update-production-order-notes.controller';

// Command Handlers
import { CreateProductionOrderHandler } from '../internal/application/commands/create-production-order/create-production-order.handler';
import { ConfirmProductionOrderHandler } from '../internal/application/commands/confirm-production-order/confirm-production-order.handler';
import { CancelProductionOrderHandler } from '../internal/application/commands/cancel-production-order/cancel-production-order.handler';
import { ExecuteProductionOrderHandler } from '../internal/application/commands/execute-production-order/execute-production-order.handler';
import { UpdateProductionOrderNotesHandler } from '../internal/application/commands/update-production-order-notes/update-production-order-notes.handler';

// Query Handler Interfaces
import { IGetProductionOrderHandler } from '../internal/application/queries/get-production-order/get-production-order.handler.interface';
import { IGetProductionOrdersHandler } from '../internal/application/queries/get-production-orders/get-production-orders.handler.interface';

// Query Handler Implementations
import { GetProductionOrderHandler } from '../internal/infrastructure/query-handlers/get-production-order.handler';
import { GetProductionOrdersHandler } from '../internal/infrastructure/query-handlers/get-production-orders.handler';

// Repositories
import { ProductionOrderRepository } from '../internal/infrastructure/repositories/production-order.repository';
import { ReadProductionOrderRepository } from '../internal/infrastructure/repositories/read-production-order.repository';

// Mapper
import { ProductionOrderMapper } from '../internal/infrastructure/database/mappers/production-order.mapper';

// Interfaces
import { IProductionPrismaClient } from '../internal/infrastructure/database/production.prisma.client.interface';
import { IProductionOrderRepository } from '../internal/domain/repositories/production-order.repo.interface';

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

        // Command Handlers
        CreateProductionOrderHandler,
        ConfirmProductionOrderHandler,
        CancelProductionOrderHandler,
        ExecuteProductionOrderHandler,
        UpdateProductionOrderNotesHandler,

        // Query Handler Bindings
        { provide: IGetProductionOrderHandler, useClass: GetProductionOrderHandler },
        { provide: IGetProductionOrdersHandler, useClass: GetProductionOrdersHandler },

        // Repository Bindings
        { provide: IProductionOrderRepository, useClass: ProductionOrderRepository },
        ReadProductionOrderRepository,

        // Mapper
        ProductionOrderMapper,

        // Logger
        { provide: ILogger, useClass: NestLogger },
    ],
    controllers: [
        CreateProductionOrderController,
        GetProductionOrdersController,
        GetProductionOrderByIdController,
        ConfirmProductionOrderController,
        CancelProductionOrderController,
        ExecuteProductionOrderController,
        UpdateProductionOrderNotesController,
    ],
})
export class ProductionModule {}
