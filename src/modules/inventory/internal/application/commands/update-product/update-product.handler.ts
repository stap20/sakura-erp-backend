import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IProductRepository } from '../../../domain/repositories/product.repo.interface';
import { ProductId } from '../../../domain/value-objects/product-id.vo';
import { ProductNotFoundApplicationError } from '../../errors/product.errors';
import { UpdateProductCommand } from './update-product.command';
import { UpdateProductResponse } from './update-product.response';

@Injectable()
export class UpdateProductHandler extends CommandHandlerBase<
    UpdateProductCommand,
    UpdateProductResponse
> {
    constructor(
        @Inject(IProductRepository)
        private readonly productRepository: IProductRepository,
    ) {
        super();
    }

    async handle(command: UpdateProductCommand): Promise<UpdateProductResponse> {
        const product = await this.productRepository.getById(ProductId.create(command.id));
        if (!product) {
            throw new ProductNotFoundApplicationError(command.id);
        }

        product.update({ name: command.name, description: command.description });
        await this.productRepository.save(product);

        this.logger.info('Product updated', { productId: product.getId().value });

        return new UpdateProductResponse(
            product.getId().value,
            product.getName(),
            product.getDescription(),
        );
    }
}
