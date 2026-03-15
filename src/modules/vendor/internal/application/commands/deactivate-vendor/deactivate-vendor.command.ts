import { ICommand } from 'src/shared/application/command.interface';

export class DeactivateVendorCommand implements ICommand {
    constructor(public readonly vendorId: string) {}
}
