import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IDiscountCodeRepository } from '../../../domain/repositories/discount-code.repo.interface';
import { DiscountCodeIdNotFoundApplicationError } from '../../errors/sales-order.errors';
import { UpdateDiscountCodeCommand } from './update-discount-code.command';

@Injectable()
export class UpdateDiscountCodeHandler extends CommandHandlerBase<UpdateDiscountCodeCommand, void> {
    constructor(
        @Inject(IDiscountCodeRepository)
        private readonly repo: IDiscountCodeRepository,
    ) {
        super();
    }

    async handle(command: UpdateDiscountCodeCommand): Promise<void> {
        const code = await this.repo.getById(command.id);
        if (!code) throw new DiscountCodeIdNotFoundApplicationError(command.id);

        code.update({
            code: command.code,
            type: command.type,
            value: command.value,
            maxUses: command.maxUses,
            expiresAt: command.expiresAt,
            isActive: command.isActive,
        });

        await this.repo.save(code);
        this.logger.info('Discount code updated', { id: command.id });
    }
}
