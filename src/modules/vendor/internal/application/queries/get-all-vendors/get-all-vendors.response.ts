export interface VendorListItem {
    id: string;
    name: string;
    address: string;
    phoneNumber: string;
    contactLink: string | null;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

export class GetAllVendorsResponse {
    constructor(public readonly vendors: VendorListItem[]) {}
}
