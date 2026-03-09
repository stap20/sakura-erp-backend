# Auth Module Documentation

## Overview

The `AuthModule` handles user authentication, session management, and user data retrieval. It uses JWT (JSON Web Tokens) for securing requests and manages user sessions via HTTP-only cookies.

## Key Components

### Controllers

- **`AuthController`**: Manages login and logout operations.
    - `POST /api/v1/auth/login`: Authenticates a user and sets a secure HTTP-only cookie.
    - `POST /api/v1/auth/logout`: Clears the authentication cookie.
- **`GetCurrentUserController`**: Retrieves details of the currently authenticated user.
    - `GET /api/v1/auth/user/me`: Returns the profile of the logged-in user.
- **`GetAllUsersController`**: Retrieves a paginated list of users.
    - `GET /api/v1/auth/user`: Returns a list of users with pagination support (offset, limit).
- **`GetUserByIdController`**: Retrieves user details by ID (Restricted to Admins).
    - `GET /api/v1/auth/user/:id`: Returns a specific user's profile.

### Services & Handlers

- **`AuthenticateHandler`**: Validates credentials and generates tokens.
- **`GetUserHandler`**: Fetches user data using `ReadUserRepository`.
- **`GetAllUsersHandler`**: Fetches all users using `ReadUserRepository`.
- **`JwtTokenGenerator`**: Generates JWT access tokens.

### Repositories

- **`ReadUserRepository`**: Specialized repository for read-only user operations (getById, getByIds, search).

## Usage

### Importing the Module

To use the authentication features, importing `AuthModule` into your application (usually `AppModule`) is sufficient as it sets up its own controllers.

```typescript
import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/shared/auth.module';

@Module({
    imports: [AuthModule],
})
export class AppModule {}
```

### Authentication Flow

1. **Login**: Client sends `email` and `password` to `/auth/login`.
2. **Token Generation**: On success, the server generates a JWT.
3. **Cookie Set**: The token is sent back in a `Set-Cookie` header (`auth_token`), marked as `HttpOnly` and `Secure`.
4. **Subsequent Requests**: The browser automatically sends the cookie. The `SecurityModule` guards validate this token.

### API Examples

#### Login

```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

#### Get Current User

```http
GET /api/v1/auth/user/me
Authorization: Bearer <token> (OR via Cookie)
```

> [!WARNING]
>
> ## IMPORTANT – ARCHITECTURAL NOTE
>
> ---
>
> ## Notes & Architectural Considerations
>
> ### empId Type Change (UUID → Int)
>
> - The `empId` field in the Auth `User` schema was migrated from `UUID` to `Int`.
> - **Reasoning**:
>     - The Auth module is **upstream-dependent on the HR module**, which is the system of record for employee identities.
>     - Aligning `empId` with HR’s integer-based identifier simplifies **future database migrations**, avoids cross-module type mismatches, and reduces transformation overhead at boundaries.
>     - This ensures long-term consistency as additional modules (e.g., Devices, Attendance) rely on Auth for identity verification.
>
> ### Impact on Downstream Modules
>
> - Any module that:
>     - Reads the authenticated user from cookies
>     - Consumes `empId` from the Auth context
>     - Persists `empId` using a different type (e.g., `string`, `UUID`)
>
>     **must not rely directly on the Auth representation**.
>
> - Such modules are expected to introduce an **Anti-Corruption Layer (ACL)** to:
>     - Translate `empId: number` from the Auth domain
>     - Into the module’s internal schema (e.g., `UUID`, composite key, or legacy format)
>
> This preserves:
>
> - **Bounded context isolation**
> - **Schema independence**
> - **Safe evolution of internal databases**
>
> ### Authentication Context Contract
>
> - The authentication cookie is treated as an **internal backend contract**.
> - Frontend clients:
>     - Do not read, decode, or depend on token contents
>     - Receive employee data explicitly via API responses
>
> - Backend modules should assume:
>     - `empId` is numeric at the Auth boundary
>     - Any alternative representation must be handled internally via mapping or adapters
>
> ---
>
> ### Why This Matters
>
> This approach:
>
> - Prevents schema leakage across bounded contexts
> - Enables incremental migration without breaking consumers
> - Keeps Auth as a **stable identity provider**, not a schema enforcer

## Dependencies

- **`SecurityModule`**: For guards and token verification.
- **`PrismaClient`** (AuthDB): For database access.
- **`ConfigService`**: For environment variables (`JWT_SECRET`, `JWT_EXPIRES_IN`).
