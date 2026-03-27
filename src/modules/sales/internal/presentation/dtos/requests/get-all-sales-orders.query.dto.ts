import { IsOptional, IsEnum } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

enum SalesOrderStatusEnum {
    DRAFT = 'DRAFT',
    CONFIRMED = 'CONFIRMED',
    SHIPPED = 'SHIPPED',
    CANCELLED = 'CANCELLED',
}

enum PaymentStatusEnum {
    PENDING = 'PENDING',
    PAID = 'PAID',
}

export class GetAllSalesOrdersQueryDto {
    @ApiPropertyOptional({ enum: SalesOrderStatusEnum })
    @IsOptional()
    @IsEnum(SalesOrderStatusEnum)
    status?: string;

    @ApiPropertyOptional({ enum: PaymentStatusEnum })
    @IsOptional()
    @IsEnum(PaymentStatusEnum)
    paymentStatus?: string;
}
