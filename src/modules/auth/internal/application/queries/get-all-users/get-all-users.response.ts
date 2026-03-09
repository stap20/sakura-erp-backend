class UserResponse {
    constructor(
        public readonly id: string,
        public readonly email: string,
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly role: string,
        public readonly employeeId: number,
        public readonly phoneNumber: string,
        public readonly status: string,
        public readonly createdAt: Date
    ) { }
}

export class GetAllUsersResponse {
    constructor(public readonly userList: UserResponse[]) { }
}