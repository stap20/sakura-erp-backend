import { Module } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { PrismaClient } from 'purchase-db';

// External module dependency
import { InventoryModule } from 'src/modules/inventory/shared/inventory.module';

// Controllers — ⚠️ vendor/:vendorId must come before /:id
import { CreatePurchaseOrderController } from '../internal/presentation/controllers/create-purchase-order.controller';
import { GetAllPurchaseOrdersController } from '../internal/presentation/controllers/get-all-purchase-orders.controller';
import { GetPurchaseOrdersByVendorController } from '../internal/presentation/controllers/get-purchase-orders-by-vendor.controller';
import { GetPurchaseOrderByIdController } from '../internal/presentation/controllers/get-purchase-order-by-id.controller';
import { UpdatePurchaseOrderController } from '../internal/presentation/controllers/update-purchase-order.controller';
import { ConfirmPurchaseOrderController } from '../internal/presentation/controllers/confirm-purchase-order.controller';
import { ReceivePurchaseOrderController } from '../internal/presentation/controllers/receive-purchase-order.controller';
import { CancelPurchaseOrderController } from '../internal/presentation/controllers/cancel-purchase-order.controller';
import { AddLineController } from '../internal/presentation/controllers/add-line.controller';
import { UpdateLineController } from '../internal/presentation/controllers/update-line.controller';
import { RemoveLineController } from '../internal/presentation/controllers/remove-line.controller';

// Command Handlers
import { CreatePurchaseOrderHandler } from '../internal/application/commands/create-purchase-order/create-purchase-order.handler';
import { AddLineHandler } from '../internal/application/commands/add-line/add-line.handler';
import { UpdateLineHandler } from '../internal/application/commands/update-line/update-line.handler';
import { RemoveLineHandler } from '../internal/application/commands/remove-line/remove-line.handler';
import { UpdatePurchaseOrderHandler } from '../internal/application/commands/update-purchase-order/update-purchase-order.handler';
import { ConfirmPurchaseOrderHandler } from '../internal/application/commands/confirm-purchase-order/confirm-purchase-order.handler';
import { ReceivePurchaseOrderHandler } from '../internal/application/commands/receive-purchase-order/receive-purchase-order.handler';
import { CancelPurchaseOrderHandler } from '../internal/application/commands/cancel-purchase-order/cancel-purchase-order.handler';

// Query Handler Interfaces
import { IGetPurchaseOrderHandler } from '../internal/application/queries/get-purchase-order/get-purchase-order.handler.interface';
import { IGetAllPurchaseOrdersHandler } from '../internal/application/queries/get-all-purchase-orders/get-all-purchase-orders.handler.interface';
import { IGetPurchaseOrdersByVendorHandler } from '../internal/application/queries/get-purchase-orders-by-vendor/get-purchase-orders-by-vendor.handler.interface';

// Query Handler Implementations
import { GetPurchaseOrderHandler } from '../internal/infrastructure/query-handlers/get-purchase-order.handler';
import { GetAllPurchaseOrdersHandler } from '../internal/infrastructure/query-handlers/get-all-purchase-orders.handler';
import { GetPurchaseOrdersByVendorHandler } from '../internal/infrastructure/query-handlers/get-purchase-orders-by-vendor.handler';

// Repositories
import { PurchaseOrderRepository } from '../internal/infrastructure/repositories/purchase-order.repository';
import { ReadPurchaseOrderRepository } from '../internal/infrastructure/repositories/read-purchase-order.repository';

// Mapper
import { PurchaseOrderMapper } from '../internal/infrastructure/database/mappers/purchase-order.mapper';

// Interfaces
import { IPurchasePrismaClient } from '../internal/infrastructure/database/purchase.prisma.client.interface';
import { IPurchaseOrderRepository } from '../internal/domain/repositories/purchase-order.repo.interface';

// Shared
import { ILogger } from 'src/shared/domain/contracts/logger.interface';
import { NestLogger } from 'src/shared/infrastructure/logger/nest-logger';

@Module({
    imports: [InventoryModule],
    providers: [
        {
            provide: IPurchasePrismaClient,
            useFactory: (configService: ConfigService) => {
                const pool = new Pool({
                    connectionString: configService.get<string>('PURCHASE_DATABASE_URL'),
                });
                return new PrismaClient({
                    adapter: new PrismaPg(pool),
                });
            },
            inject: [ConfigService],
        },

        // Command Handlers
        CreatePurchaseOrderHandler,
        AddLineHandler,
        UpdateLineHandler,
        RemoveLineHandler,
        UpdatePurchaseOrderHandler,
        ConfirmPurchaseOrderHandler,
        ReceivePurchaseOrderHandler,
        CancelPurchaseOrderHandler,

        // Query Handler Bindings
        { provide: IGetPurchaseOrderHandler, useClass: GetPurchaseOrderHandler },
        { provide: IGetAllPurchaseOrdersHandler, useClass: GetAllPurchaseOrdersHandler },
        { provide: IGetPurchaseOrdersByVendorHandler, useClass: GetPurchaseOrdersByVendorHandler },

        // Repository Bindings
        { provide: IPurchaseOrderRepository, useClass: PurchaseOrderRepository },
        ReadPurchaseOrderRepository,

        // Mapper
        PurchaseOrderMapper,

        // Logger
        { provide: ILogger, useClass: NestLogger },
    ],
    controllers: [
        CreatePurchaseOrderController,
        GetAllPurchaseOrdersController,
        // ⚠️ Must come before GetPurchaseOrderByIdController to avoid /vendor/:id matching /:id
        GetPurchaseOrdersByVendorController,
        GetPurchaseOrderByIdController,
        UpdatePurchaseOrderController,
        ConfirmPurchaseOrderController,
        ReceivePurchaseOrderController,
        CancelPurchaseOrderController,
        AddLineController,
        UpdateLineController,
        RemoveLineController,
    ],
})
export class PurchaseModule {}
