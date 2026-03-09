// src/modules/auth/internal/infrastructure/events/auth-event-publisher.ts
import { Injectable, Inject } from '@nestjs/common';
import { IEventBus } from 'src/shared/domain/contracts/event-bus.interface';
import { DomainEvent } from 'src/shared/domain/events/domain-event';
import { UserPasswordChangedEvent } from '../../domain/events/user-password-changed.event';
import { PasswordChangeNotificationEvent } from '../../../shared/events/PasswordChangeNotificationEvent';

@Injectable()
export class AuthEventPublisher {
    constructor(
        @Inject(IEventBus) private readonly eventBus: IEventBus
    ) { }

    async publishPasswordChanged(event: UserPasswordChangedEvent): Promise<void> {
        const dto = new PasswordChangeNotificationEvent(
            event.userId,
            event.email
        );
        await this.eventBus.publish(dto);
        await this.eventBus.publish(event);
    }

    async publishAll(events: DomainEvent[]): Promise<void> {
        for (const event of events) {
            if (event instanceof UserPasswordChangedEvent) {
                await this.publishPasswordChanged(event);
            }
        }
    }
}