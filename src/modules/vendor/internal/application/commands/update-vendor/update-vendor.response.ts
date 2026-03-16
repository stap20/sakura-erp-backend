export class UpdateVendorResponse {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly address: string,
        public readonly phoneNumber: string,
        public readonly contactLink: string | null,
        public readonly status: string,
    ) {}
}
