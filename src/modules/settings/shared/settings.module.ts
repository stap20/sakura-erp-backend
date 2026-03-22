import { Module } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { PrismaClient } from 'settings-db';

// Controllers
import { UpsertCostConfigController } from '../internal/presentation/controllers/upsert-cost-config.controller';
import { GetCostConfigController } from '../internal/presentation/controllers/get-cost-config.controller';

// Command Handlers
import { UpsertCostConfigHandler } from '../internal/application/commands/upsert-cost-config/upsert-cost-config.handler';

// Query Handler Interfaces + Implementations
import { IGetCostConfigHandler } from '../internal/application/queries/get-cost-config/get-cost-config.handler.interface';
import { GetCostConfigHandler } from '../internal/infrastructure/query-handlers/get-cost-config.handler';

// Repository
import { ICostConfigRepository, CostConfigRepository } from '../internal/infrastructure/repositories/cost-config.repository';

// Facade
import { ISettingsFacade } from './contracts/settings-facade.interface';
import { SettingsFacade } from '../internal/infrastructure/facade/settings.facade';

// DB
import { ISettingsPrismaClient } from '../internal/infrastructure/database/settings.prisma.client.interface';

// Shared
import { ILogger } from 'src/shared/domain/contracts/logger.interface';
import { NestLogger } from 'src/shared/infrastructure/logger/nest-logger';

@Module({
    providers: [
        {
            provide: ISettingsPrismaClient,
            useFactory: (configService: ConfigService) => {
                const pool = new Pool({
                    connectionString: configService.get<string>('SETTINGS_DATABASE_URL'),
                });
                return new PrismaClient({
                    adapter: new PrismaPg(pool),
                });
            },
            inject: [ConfigService],
        },

        // Command Handlers
        UpsertCostConfigHandler,

        // Query Handler Binding
        { provide: IGetCostConfigHandler, useClass: GetCostConfigHandler },

        // Repository Binding
        { provide: ICostConfigRepository, useClass: CostConfigRepository },

        // Facade
        { provide: ISettingsFacade, useClass: SettingsFacade },

        // Logger
        { provide: ILogger, useClass: NestLogger },
    ],
    controllers: [
        UpsertCostConfigController,
        GetCostConfigController,
    ],
    exports: [{ provide: ISettingsFacade, useClass: SettingsFacade }],
})
export class SettingsModule {}
