import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IDiscountCodeRepository } from '../../../domain/repositories/discount-code.repo.interface';
import { DiscountCode } from '../../../domain/entities/discount-code.entity';
import { DiscountCodeDuplicateApplicationError } from '../../errors/sales-order.errors';
import { CreateDiscountCodeCommand } from './create-discount-code.command';

@Injectable()
export class CreateDiscountCodeHandler extends CommandHandlerBase<CreateDiscountCodeCommand, string> {
    constructor(
        @Inject(IDiscountCodeRepository)
        private readonly repo: IDiscountCodeRepository,
    ) {
        super();
    }

    async handle(command: CreateDiscountCodeCommand): Promise<string> {
        const existing = await this.repo.getByCode(command.code);
        if (existing) throw new DiscountCodeDuplicateApplicationError(command.code);

        const id = crypto.randomUUID();
        const code = new DiscountCode({
            id,
            code: command.code,
            type: command.type,
            value: command.value,
            maxUses: command.maxUses ?? null,
            expiresAt: command.expiresAt ?? null,
        });

        await this.repo.save(code);
        this.logger.info('Discount code created', { code: command.code });
        return id;
    }
}
