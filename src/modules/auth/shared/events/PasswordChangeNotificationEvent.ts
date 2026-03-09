import { IntegrationEvent } from "src/shared/domain/events/integration-event";

export class PasswordChangeNotificationEvent extends IntegrationEvent {
    constructor(
        public readonly userId: string,
        public readonly email: string
    ) {
        super();
    }
}
