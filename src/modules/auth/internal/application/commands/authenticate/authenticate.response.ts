export class AuthenticateResponse {
    constructor(
        public readonly userId: string,
        public readonly employeeId: number,
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly phoneNumber: string,
        public readonly email: string,
        public readonly role: string,
        public readonly token: string
    ) { }
    
}