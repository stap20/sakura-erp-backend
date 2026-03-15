import { Module } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';

import { PrismaClient } from 'vendor-db';

import { CreateVendorController } from '../internal/presentation/controllers/create-vendor.controller';
import { UpdateVendorController } from '../internal/presentation/controllers/update-vendor.controller';
import { ActivateVendorController } from '../internal/presentation/controllers/activate-vendor.controller';
import { DeactivateVendorController } from '../internal/presentation/controllers/deactivate-vendor.controller';
import { GetVendorByIdController } from '../internal/presentation/controllers/get-vendor-by-id.controller';
import { GetAllVendorsController } from '../internal/presentation/controllers/get-all-vendors.controller';

import { CreateVendorHandler } from '../internal/application/commands/create-vendor/create-vendor.handler';
import { UpdateVendorHandler } from '../internal/application/commands/update-vendor/update-vendor.handler';
import { ActivateVendorHandler } from '../internal/application/commands/activate-vendor/activate-vendor.handler';
import { DeactivateVendorHandler } from '../internal/application/commands/deactivate-vendor/deactivate-vendor.handler';

import { IGetVendorHandler } from '../internal/application/queries/get-vendor/get-vendor.handler.interface';
import { IGetAllVendorsHandler } from '../internal/application/queries/get-all-vendors/get-all-vendors.handler.interface';

import { GetVendorHandler } from '../internal/infrastructure/query-handlers/get-vendor.handler';
import { GetAllVendorsHandler } from '../internal/infrastructure/query-handlers/get-all-vendors.handler';

import { VendorMapper } from '../internal/infrastructure/database/mappers/vendor.mapper';
import { VendorRepository } from '../internal/infrastructure/repositories/vendor.repository';
import { ReadVendorRepository } from '../internal/infrastructure/repositories/read-vendor.repository';
import { IVendorPrismaClient } from '../internal/infrastructure/database/vendor.prisma.client.interface';

import { IVendorRepository } from '../internal/domain/repositories/vendor.repo.interface';

import { ILogger } from 'src/shared/domain/contracts/logger.interface';
import { NestLogger } from 'src/shared/infrastructure/logger/nest-logger';
import { SecurityModule } from 'src/modules/security/shared/security.module';

@Module({
    imports: [SecurityModule],
    providers: [
        {
            provide: IVendorPrismaClient,
            useFactory: (configService: ConfigService) => {
                const pool = new Pool({
                    connectionString: configService.get<string>(
                        'VENDOR_DATABASE_URL',
                    ),
                });
                return new PrismaClient({
                    adapter: new PrismaPg(pool),
                });
            },
            inject: [ConfigService],
        },
        CreateVendorHandler,
        UpdateVendorHandler,
        ActivateVendorHandler,
        DeactivateVendorHandler,
        VendorMapper,
        ReadVendorRepository,
        {
            provide: IGetVendorHandler,
            useClass: GetVendorHandler,
        },
        {
            provide: IGetAllVendorsHandler,
            useClass: GetAllVendorsHandler,
        },
        {
            provide: IVendorRepository,
            useClass: VendorRepository,
        },
        {
            provide: ILogger,
            useClass: NestLogger,
        },
    ],
    controllers: [
        CreateVendorController,
        UpdateVendorController,
        ActivateVendorController,
        DeactivateVendorController,
        GetVendorByIdController,
        GetAllVendorsController,
    ],
})
export class VendorModule {}
