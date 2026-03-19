import { Module } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { PrismaClient } from 'recipe-db';

// Controllers
import { CreateRecipeVersionController } from '../internal/presentation/controllers/create-recipe-version.controller';
import { GetAllRecipeVersionsController } from '../internal/presentation/controllers/get-all-recipe-versions.controller';
import { UpdateRecipeVersionController } from '../internal/presentation/controllers/update-recipe-version.controller';
import { ActivateRecipeVersionController } from '../internal/presentation/controllers/activate-recipe-version.controller';
import { ArchiveRecipeVersionController } from '../internal/presentation/controllers/archive-recipe-version.controller';
import { AddIngredientController } from '../internal/presentation/controllers/add-ingredient.controller';
import { UpdateIngredientController } from '../internal/presentation/controllers/update-ingredient.controller';
import { RemoveIngredientController } from '../internal/presentation/controllers/remove-ingredient.controller';
// ⚠️ These two must come before GetRecipeVersionByIdController to avoid /product/:id matching /:id
import { GetActiveRecipeByProductController } from '../internal/presentation/controllers/get-active-recipe-by-product.controller';
import { GetRecipeVersionsByProductController } from '../internal/presentation/controllers/get-recipe-versions-by-product.controller';
import { GetRecipeVersionByIdController } from '../internal/presentation/controllers/get-recipe-version-by-id.controller';

// Command Handlers
import { CreateRecipeVersionHandler } from '../internal/application/commands/create-recipe-version/create-recipe-version.handler';
import { AddIngredientHandler } from '../internal/application/commands/add-ingredient/add-ingredient.handler';
import { UpdateIngredientHandler } from '../internal/application/commands/update-ingredient/update-ingredient.handler';
import { RemoveIngredientHandler } from '../internal/application/commands/remove-ingredient/remove-ingredient.handler';
import { ActivateRecipeVersionHandler } from '../internal/application/commands/activate-recipe-version/activate-recipe-version.handler';
import { ArchiveRecipeVersionHandler } from '../internal/application/commands/archive-recipe-version/archive-recipe-version.handler';
import { UpdateRecipeVersionHandler } from '../internal/application/commands/update-recipe-version/update-recipe-version.handler';

// Query Handler Interfaces
import { IGetRecipeVersionHandler } from '../internal/application/queries/get-recipe-version/get-recipe-version.handler.interface';
import { IGetAllRecipeVersionsHandler } from '../internal/application/queries/get-all-recipe-versions/get-all-recipe-versions.handler.interface';
import { IGetRecipeVersionsByProductHandler } from '../internal/application/queries/get-recipe-versions-by-product/get-recipe-versions-by-product.handler.interface';
import { IGetActiveRecipeByProductHandler } from '../internal/application/queries/get-active-recipe-by-product/get-active-recipe-by-product.handler.interface';

// Query Handler Implementations
import { GetRecipeVersionHandler } from '../internal/infrastructure/query-handlers/get-recipe-version.handler';
import { GetAllRecipeVersionsHandler } from '../internal/infrastructure/query-handlers/get-all-recipe-versions.handler';
import { GetRecipeVersionsByProductHandler } from '../internal/infrastructure/query-handlers/get-recipe-versions-by-product.handler';
import { GetActiveRecipeByProductHandler } from '../internal/infrastructure/query-handlers/get-active-recipe-by-product.handler';

// Repositories
import { RecipeVersionRepository } from '../internal/infrastructure/repositories/recipe-version.repository';
import { ReadRecipeVersionRepository } from '../internal/infrastructure/repositories/read-recipe-version.repository';

// Mapper
import { RecipeVersionMapper } from '../internal/infrastructure/database/mappers/recipe-version.mapper';

// Interfaces
import { IRecipePrismaClient } from '../internal/infrastructure/database/recipe.prisma.client.interface';
import { IRecipeVersionRepository } from '../internal/domain/repositories/recipe-version.repo.interface';

// Shared
import { ILogger } from 'src/shared/domain/contracts/logger.interface';
import { NestLogger } from 'src/shared/infrastructure/logger/nest-logger';

// Gateway
import { InventoryGateway } from '../internal/infrastructure/gateways/inventory.gateway';
import { InventoryModule } from 'src/modules/inventory/shared/inventory.module';

@Module({
    imports: [InventoryModule],
    providers: [
        {
            provide: IRecipePrismaClient,
            useFactory: (configService: ConfigService) => {
                const pool = new Pool({
                    connectionString: configService.get<string>('RECIPE_DATABASE_URL'),
                });
                return new PrismaClient({
                    adapter: new PrismaPg(pool),
                });
            },
            inject: [ConfigService],
        },

        // Command Handlers
        CreateRecipeVersionHandler,
        AddIngredientHandler,
        UpdateIngredientHandler,
        RemoveIngredientHandler,
        ActivateRecipeVersionHandler,
        ArchiveRecipeVersionHandler,
        UpdateRecipeVersionHandler,

        // Query Handler Bindings
        { provide: IGetRecipeVersionHandler, useClass: GetRecipeVersionHandler },
        { provide: IGetAllRecipeVersionsHandler, useClass: GetAllRecipeVersionsHandler },
        { provide: IGetRecipeVersionsByProductHandler, useClass: GetRecipeVersionsByProductHandler },
        { provide: IGetActiveRecipeByProductHandler, useClass: GetActiveRecipeByProductHandler },

        // Repository Bindings
        { provide: IRecipeVersionRepository, useClass: RecipeVersionRepository },
        ReadRecipeVersionRepository,

        // Mapper
        RecipeVersionMapper,

        // Logger
        { provide: ILogger, useClass: NestLogger },

        // Gateway
        InventoryGateway,
    ],
    controllers: [
        CreateRecipeVersionController,
        GetAllRecipeVersionsController,
        UpdateRecipeVersionController,
        ActivateRecipeVersionController,
        ArchiveRecipeVersionController,
        AddIngredientController,
        UpdateIngredientController,
        RemoveIngredientController,
        // ⚠️ Must come before GetRecipeVersionByIdController
        GetActiveRecipeByProductController,
        GetRecipeVersionsByProductController,
        GetRecipeVersionByIdController,
    ],
})
export class RecipeModule {}
