import { ICommand } from 'src/shared/application/command.interface';

export class UpdateVendorCommand implements ICommand {
    constructor(
        public readonly vendorId: string,
        public readonly name?: string,
        public readonly address?: string,
        public readonly phoneNumber?: string,
        public readonly contactLink?: string | null,
    ) {}
}
