import { Module } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { PrismaClient } from 'sales-db';

// External module dependencies
import { InventoryModule } from 'src/modules/inventory/shared/inventory.module';
import { RecipeModule } from 'src/modules/recipe/shared/recipe.module';
import { SettingsModule } from 'src/modules/settings/shared/settings.module';

// Controllers — ⚠️ pricing/item/:itemId must come before /:id
import { CreateSalesOrderController } from '../internal/presentation/controllers/create-sales-order.controller';
import { GetAllSalesOrdersController } from '../internal/presentation/controllers/get-all-sales-orders.controller';
import { GetItemPricingController } from '../internal/presentation/controllers/get-item-pricing.controller';
import { GetSalesOrderByIdController } from '../internal/presentation/controllers/get-sales-order-by-id.controller';
import { UpdateSalesOrderController } from '../internal/presentation/controllers/update-sales-order.controller';
import { ConfirmSalesOrderController } from '../internal/presentation/controllers/confirm-sales-order.controller';
import { ShipSalesOrderController } from '../internal/presentation/controllers/ship-sales-order.controller';
import { CancelSalesOrderController } from '../internal/presentation/controllers/cancel-sales-order.controller';
import { MarkAsPaidController } from '../internal/presentation/controllers/mark-as-paid.controller';
import { AddLineController } from '../internal/presentation/controllers/add-line.controller';
import { UpdateLineController } from '../internal/presentation/controllers/update-line.controller';
import { RemoveLineController } from '../internal/presentation/controllers/remove-line.controller';
import { CreateDiscountCodeController } from '../internal/presentation/controllers/create-discount-code.controller';
import { GetAllDiscountCodesController } from '../internal/presentation/controllers/get-all-discount-codes.controller';
import { UpdateDiscountCodeController } from '../internal/presentation/controllers/update-discount-code.controller';
import { ApplyDiscountController } from '../internal/presentation/controllers/apply-discount.controller';
import { RemoveDiscountController } from '../internal/presentation/controllers/remove-discount.controller';

// Command Handlers
import { CreateSalesOrderHandler } from '../internal/application/commands/create-sales-order/create-sales-order.handler';
import { AddLineHandler } from '../internal/application/commands/add-line/add-line.handler';
import { UpdateLineHandler } from '../internal/application/commands/update-line/update-line.handler';
import { RemoveLineHandler } from '../internal/application/commands/remove-line/remove-line.handler';
import { UpdateSalesOrderHandler } from '../internal/application/commands/update-sales-order/update-sales-order.handler';
import { ConfirmSalesOrderHandler } from '../internal/application/commands/confirm-sales-order/confirm-sales-order.handler';
import { ShipSalesOrderHandler } from '../internal/application/commands/ship-sales-order/ship-sales-order.handler';
import { CancelSalesOrderHandler } from '../internal/application/commands/cancel-sales-order/cancel-sales-order.handler';
import { MarkAsPaidHandler } from '../internal/application/commands/mark-as-paid/mark-as-paid.handler';
import { CreateDiscountCodeHandler } from '../internal/application/commands/create-discount-code/create-discount-code.handler';
import { UpdateDiscountCodeHandler } from '../internal/application/commands/update-discount-code/update-discount-code.handler';
import { ApplyDiscountHandler } from '../internal/application/commands/apply-discount/apply-discount.handler';
import { RemoveDiscountHandler } from '../internal/application/commands/remove-discount/remove-discount.handler';

// Query Handler Interfaces
import { IGetSalesOrderHandler } from '../internal/application/queries/get-sales-order/get-sales-order.handler.interface';
import { IGetAllSalesOrdersHandler } from '../internal/application/queries/get-all-sales-orders/get-all-sales-orders.handler.interface';
import { IGetItemPricingHandler } from '../internal/application/queries/get-item-pricing/get-item-pricing.handler.interface';

// Query Handler Implementations
import { GetSalesOrderHandler } from '../internal/infrastructure/query-handlers/get-sales-order.handler';
import { GetAllSalesOrdersHandler } from '../internal/infrastructure/query-handlers/get-all-sales-orders.handler';
import { GetItemPricingHandler } from '../internal/infrastructure/query-handlers/get-item-pricing.handler';
import {
    IGetAllDiscountCodesHandler,
    GetAllDiscountCodesHandler,
} from '../internal/infrastructure/query-handlers/get-all-discount-codes.handler';

// Repositories
import { SalesOrderRepository } from '../internal/infrastructure/repositories/sales-order.repository';
import { ReadSalesOrderRepository } from '../internal/infrastructure/repositories/read-sales-order.repository';
import { DiscountCodeRepository } from '../internal/infrastructure/repositories/discount-code.repository';
import { ReadDiscountCodeRepository } from '../internal/infrastructure/repositories/read-discount-code.repository';

// Mapper
import { SalesOrderMapper } from '../internal/infrastructure/database/mappers/sales-order.mapper';

// Interfaces
import { ISalesPrismaClient } from '../internal/infrastructure/database/sales.prisma.client.interface';
import { ISalesOrderRepository } from '../internal/domain/repositories/sales-order.repo.interface';
import { IDiscountCodeRepository } from '../internal/domain/repositories/discount-code.repo.interface';

// Gateways
import { InventoryGateway } from '../internal/infrastructure/gateways/inventory.gateway';
import { RecipeGateway } from '../internal/infrastructure/gateways/recipe.gateway';
import { SettingsGateway } from '../internal/infrastructure/gateways/settings.gateway';

// Shared
import { ILogger } from 'src/shared/domain/contracts/logger.interface';
import { NestLogger } from 'src/shared/infrastructure/logger/nest-logger';

@Module({
    imports: [InventoryModule, RecipeModule, SettingsModule],
    providers: [
        {
            provide: ISalesPrismaClient,
            useFactory: (configService: ConfigService) => {
                const pool = new Pool({
                    connectionString: configService.get<string>('SALES_DATABASE_URL'),
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
        SettingsGateway,

        // Command Handlers
        CreateSalesOrderHandler,
        AddLineHandler,
        UpdateLineHandler,
        RemoveLineHandler,
        UpdateSalesOrderHandler,
        ConfirmSalesOrderHandler,
        ShipSalesOrderHandler,
        CancelSalesOrderHandler,
        MarkAsPaidHandler,
        CreateDiscountCodeHandler,
        UpdateDiscountCodeHandler,
        ApplyDiscountHandler,
        RemoveDiscountHandler,

        // Query Handler Bindings
        { provide: IGetSalesOrderHandler, useClass: GetSalesOrderHandler },
        { provide: IGetAllSalesOrdersHandler, useClass: GetAllSalesOrdersHandler },
        { provide: IGetItemPricingHandler, useClass: GetItemPricingHandler },
        { provide: IGetAllDiscountCodesHandler, useClass: GetAllDiscountCodesHandler },

        // Repository Bindings
        { provide: ISalesOrderRepository, useClass: SalesOrderRepository },
        ReadSalesOrderRepository,
        { provide: IDiscountCodeRepository, useClass: DiscountCodeRepository },
        ReadDiscountCodeRepository,

        // Mapper
        SalesOrderMapper,

        // Logger
        { provide: ILogger, useClass: NestLogger },
    ],
    controllers: [
        CreateSalesOrderController,
        GetAllSalesOrdersController,
        // ⚠️ Must come before GetSalesOrderByIdController to avoid /pricing/item/:id matching /:id
        GetItemPricingController,
        GetSalesOrderByIdController,
        UpdateSalesOrderController,
        ConfirmSalesOrderController,
        ShipSalesOrderController,
        CancelSalesOrderController,
        MarkAsPaidController,
        AddLineController,
        UpdateLineController,
        RemoveLineController,
        CreateDiscountCodeController,
        GetAllDiscountCodesController,
        UpdateDiscountCodeController,
        ApplyDiscountController,
        RemoveDiscountController,
    ],
})
export class SalesModule {}
