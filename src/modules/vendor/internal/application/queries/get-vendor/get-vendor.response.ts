export class GetVendorResponse {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly address: string,
        public readonly phoneNumber: string,
        public readonly contactLink: string | null,
        public readonly status: string,
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
    ) {}
}
