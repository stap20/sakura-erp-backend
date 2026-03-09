export class UserEntity {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    empId: number;
    empCardId: number;
    phoneNumber: string;
    role: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
  
    constructor(data: Partial<UserEntity>) {
      Object.assign(this, data);
    }
  }