import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { ConfigModule } from './config/config.module';
import { SecurityModule } from './modules/security/shared/security.module';

import { AuthModule } from './modules/auth/shared/auth.module';
import { VendorModule } from './modules/vendor/shared/vendor.module';
import { InventoryModule } from './modules/inventory/shared/inventory.module';
import { RecipeModule } from './modules/recipe/shared/recipe.module';
import { PurchaseModule } from './modules/purchase/shared/purchase.module';
import { ProductionModule } from './modules/production/shared/production.module';
import { SettingsModule } from './modules/settings/shared/settings.module';

import { AppController } from './app.controller';

@Module({
    imports: [
        EventEmitterModule.forRoot(),
        ScheduleModule.forRoot(),
        ConfigModule,
        SecurityModule,
        AuthModule,
        VendorModule,
        InventoryModule,
        RecipeModule,
        PurchaseModule,
        ProductionModule,
        SettingsModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
