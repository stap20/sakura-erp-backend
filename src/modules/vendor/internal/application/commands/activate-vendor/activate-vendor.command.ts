import { ICommand } from 'src/shared/application/command.interface';

export class ActivateVendorCommand implements ICommand {
    constructor(public readonly vendorId: string) {}
}
