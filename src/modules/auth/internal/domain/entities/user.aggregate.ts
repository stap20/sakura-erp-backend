import { AggregateRoot } from 'src/shared/domain/aggregate-root';
import { Email } from '../value-objects/email.vo';
import { Password } from '../value-objects/password.vo';
import { Role } from '../value-objects/role.vo';
import { Name } from '../value-objects/name.vo';
import { UserDeactivatedEvent } from '../events/user-deactivated.event';
import { UserActivatedEvent } from '../events/user-activated.event';
import {
    UserAlreadyActiveError,
    UserNotActiveError,
    UserWrongPasswordError,
} from '../errors/user.error';
import { UserId } from '../value-objects/user-id.vo';
import { UserStatus } from '../value-objects/user-status.vo';
import { UserPasswordChangedEvent } from '../events/user-password-changed.event';
import { EmployeeId } from '../value-objects/employee-id.vo';
import { EmployeeCardId } from '../value-objects/employee-card-id.vo';
import { EmployeePhoneNumber } from '../value-objects/employee-phone-number.vo';

export interface CreateUserParams {
    id: string;
    email: string;
    password: string;
    role: string;
    firstName: string;
    lastName: string;
    empCardId: number;
    empId: number;
    phoneNumber: string;
}

export interface PersistenceParams {
    id: string;
    email: string;
    password: string;
    role: string;
    firstName: string;
    lastName: string;
    empCardId: number;
    empId: number;
    phoneNumber: string;
    status: string;
}

export class User extends AggregateRoot<UserId> {
    private email: Email;
    private password: Password;
    private role: Role;
    private name: Name;
    private status: UserStatus;
    private employeeId: EmployeeId;
    private employeeCardId: EmployeeCardId;
    private employeePhoneNumber: EmployeePhoneNumber;

    private constructor(
        id: UserId,
        email: Email,
        password: Password,
        role: Role,
        name: Name,
        status: UserStatus,
        employeeId: EmployeeId,
        employeeCardId: EmployeeCardId,
        employeePhoneNumber: EmployeePhoneNumber,
    ) {
        super(id);
        this.email = email;
        this.password = password;
        this.role = role;
        this.name = name;
        this.status = status;
        this.employeeId = employeeId;
        this.employeeCardId = employeeCardId;
        this.employeePhoneNumber = employeePhoneNumber;
    }

    public static async create(params: CreateUserParams): Promise<User> {
        const id = UserId.create(params.id);
        const email = Email.create(params.email);
        const password = await Password.create(params.password);
        const role = Role.create(params.role);
        const name = Name.create({
            firstName: params.firstName,
            lastName: params.lastName,
        });
        const status = UserStatus.active();
        const employeeId = EmployeeId.create(params.empId);
        const employeeCardId = EmployeeCardId.create(params.empCardId);
        const employeePhoneNumber = EmployeePhoneNumber.create(
            params.phoneNumber,
        );

        return new User(
            id,
            email,
            password,
            role,
            name,
            status,
            employeeId,
            employeeCardId,
            employeePhoneNumber,
        );
    }

    public async validatePassword(plainPassword: string): Promise<boolean> {
        return this.password.match(plainPassword);
    }

    public getPassword(): Password {
        return this.password;
    }

    public getEmail(): Email {
        return this.email;
    }

    public getRole(): Role {
        return this.role;
    }

    public getName(): Name {
        return this.name;
    }

    public getStatus(): UserStatus {
        return this.status;
    }

    public getEmployeeId(): EmployeeId {
        return this.employeeId;
    }

    public getEmployeeCardId(): EmployeeCardId {
        return this.employeeCardId;
    }

    public getEmployeePhoneNumber(): EmployeePhoneNumber {
        return this.employeePhoneNumber;
    }

    public isActive(): boolean {
        return this.status.isActive();
    }

    public deactivate(): void {
        if (!this.isActive()) {
            throw new UserNotActiveError(this.id.value);
        }

        this.status = UserStatus.inactive();
        this.addDomainEvent(new UserDeactivatedEvent(this.id.value));
    }

    public activate(): void {
        if (this.isActive()) {
            throw new UserAlreadyActiveError(this.id.value);
        }

        this.status = UserStatus.active();
        this.addDomainEvent(new UserActivatedEvent(this.id.value));
    }

    public async changePassword(
        currentPassword: string,
        newPassword: string,
    ): Promise<void> {
        if (!this.isActive()) {
            throw new UserNotActiveError(this.id.value);
        }

        if (!(await this.validatePassword(currentPassword))) {
            throw new UserWrongPasswordError(this.id.value);
        }

        const newPasswordVO = await Password.create(newPassword);
        this.password = newPasswordVO;

        this.addDomainEvent(
            new UserPasswordChangedEvent(this.id.value, this.email.value),
        );
    }

    public equals(other: User): boolean {
        if (!(other instanceof User)) {
            return false;
        }
        return this.email.equals(other.email);
    }

    public static async createFromPersistence(
        params: PersistenceParams,
    ): Promise<User> {
        const id = UserId.create(params.id);
        const email = Email.create(params.email);
        const password = await Password.fromHashed(params.password);
        const role = Role.create(params.role);
        const name = Name.create({
            firstName: params.firstName,
            lastName: params.lastName,
        });
        const status = UserStatus.fromString(params.status);
        const employeeId = EmployeeId.create(params.empId);
        const employeeCardId = EmployeeCardId.create(params.empCardId);
        const employeePhoneNumber = EmployeePhoneNumber.create(
            params.phoneNumber,
        );

        return new User(id, email, password, role, name, status, employeeId, employeeCardId, employeePhoneNumber);
    }
}
