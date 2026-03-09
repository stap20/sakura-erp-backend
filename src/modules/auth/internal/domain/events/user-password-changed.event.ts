import { DomainEvent } from 'src/shared/domain/events/domain-event';
 
export class UserPasswordChangedEvent extends DomainEvent {
  constructor(public readonly userId: string, public readonly email: string) {
    super();
  }
} 