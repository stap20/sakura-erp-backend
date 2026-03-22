import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IProductRepository } from '../../../domain/repositories/product.repo.interface';
import { Product } from '../../../domain/aggregates/product.aggregate';
import { ProductAlreadyExistsApplicationError } from '../../errors/product.errors';
import { CreateProductCommand } from './create-product.command';
import { CreateProductResponse } from './create-product.response';

@Injectable()
export class CreateProductHandler extends CommandHandlerBase<
    CreateProductCommand,
    CreateProductResponse
> {
    constructor(
        @Inject(IProductRepository)
        private readonly productRepository: IProductRepository,
    ) {
        super();
    }

    async handle(command: CreateProductCommand): Promise<CreateProductResponse> {
        const existing = await this.productRepository.getByName(command.name);
        if (existing) {
            throw new ProductAlreadyExistsApplicationError(command.name);
        }

        const product = Product.create({
            id: crypto.randomUUID(),
            name: command.name,
            description: command.description,
            referenceBatchGm: command.referenceBatchGm,
            referenceDurationMin: command.referenceDurationMin,
            referenceWastePercent: command.referenceWastePercent,
        });

        await this.productRepository.save(product);

        this.logger.info('Product created', { productId: product.getId().value });

        return new CreateProductResponse(
            product.getId().value,
            product.getName(),
            product.getDescription(),
            product.getReferenceBatchGm(),
            product.getReferenceDurationMin(),
            product.getReferenceWastePercent(),
        );
    }
}
