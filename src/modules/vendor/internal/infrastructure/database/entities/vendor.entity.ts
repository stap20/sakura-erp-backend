export class VendorEntity {
    id: string;
    name: string;
    address: string;
    phoneNumber: string;
    contactLink: string | null;
    status: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<VendorEntity>) {
        Object.assign(this, data);
    }
}
