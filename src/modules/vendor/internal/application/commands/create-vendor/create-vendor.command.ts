import { ICommand } from 'src/shared/application/command.interface';

export class CreateVendorCommand implements ICommand {
    constructor(
        public readonly name: string,
        public readonly address: string,
        public readonly phoneNumber: string,
        public readonly contactLink?: string | null,
    ) {}
}
