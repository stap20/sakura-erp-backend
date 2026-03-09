export interface AuthenticatedUser {
    userId: string;
    token: string;
    employeeId: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    role: string;
}
