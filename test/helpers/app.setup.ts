import { INestApplication, ValidationPipe, VersioningType } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as cookieParser from 'cookie-parser';
import { AppModule } from 'src/app.module';
import { NestLogger } from 'src/shared/infrastructure/logger/nest-logger';
import { GlobalErrorFilter } from 'src/shared/infrastructure/filters/global-error.filter';
import { PrismaKnownExceptionFilter } from 'src/shared/infrastructure/filters/prisma-known-exception.filter';
import { PrismaUnknownExceptionFilter } from 'src/shared/infrastructure/filters/prisma-unknown-exception.filter';
import { IInventoryPrismaClient } from 'src/modules/inventory/internal/infrastructure/database/inventory.prisma.client.interface';
import { IRecipePrismaClient } from 'src/modules/recipe/internal/infrastructure/database/recipe.prisma.client.interface';
import { IPurchasePrismaClient } from 'src/modules/purchase/internal/infrastructure/database/purchase.prisma.client.interface';
import { ISettingsPrismaClient } from 'src/modules/settings/internal/infrastructure/database/settings.prisma.client.interface';
import { ISalesPrismaClient } from 'src/modules/sales/internal/infrastructure/database/sales.prisma.client.interface';

export async function createTestApp(): Promise<INestApplication> {
    const moduleRef = await Test.createTestingModule({
        imports: [AppModule],
    }).compile();

    const app = moduleRef.createNestApplication();

    app.use(cookieParser());

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
            forbidNonWhitelisted: true,
        }),
    );

    app.enableVersioning({
        type: VersioningType.URI,
        defaultVersion: '1',
    });

    app.setGlobalPrefix('api');

    const logger = new NestLogger();
    app.useGlobalFilters(
        new GlobalErrorFilter(logger),
        new PrismaUnknownExceptionFilter(logger),
        new PrismaKnownExceptionFilter(logger),
    );

    await app.init();
    return app;
}

export async function cleanInventoryDb(app: INestApplication): Promise<void> {
    const prisma = app.get<IInventoryPrismaClient>(IInventoryPrismaClient);
    await prisma.inventoryTransaction.deleteMany();
    await prisma.packagingComponent.deleteMany();
    await prisma.item.deleteMany();
    await prisma.category.deleteMany();
    await prisma.product.deleteMany();
}

export async function cleanRecipeDb(app: INestApplication): Promise<void> {
    const prisma = app.get<IRecipePrismaClient>(IRecipePrismaClient);
    await prisma.recipeIngredient.deleteMany();
    await prisma.recipeVersion.deleteMany();
}

export async function cleanPurchaseDb(app: INestApplication): Promise<void> {
    const prisma = app.get<IPurchasePrismaClient>(IPurchasePrismaClient);
    await prisma.purchaseOrderLine.deleteMany();
    await prisma.purchaseOrder.deleteMany();
}

export async function cleanSettingsDb(app: INestApplication): Promise<void> {
    const prisma = app.get<ISettingsPrismaClient>(ISettingsPrismaClient);
    await prisma.costConfig.deleteMany();
}

export async function cleanSalesDb(app: INestApplication): Promise<void> {
    const prisma = app.get<ISalesPrismaClient>(ISalesPrismaClient);
    await prisma.salesOrderLine.deleteMany();
    await prisma.salesOrder.deleteMany();
}
