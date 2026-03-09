import { DomainEvent } from 'src/shared/domain/events/domain-event';
 
export class UserActivatedEvent extends DomainEvent {
  constructor(public readonly userId: string) {
    super();
  }
} 