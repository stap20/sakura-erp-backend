import { INestApplication } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';
import * as request from 'supertest';
import { IAuthPrismaClient } from 'src/modules/auth/internal/infrastructure/database/auth.prisma.client.interface';
import { createTestApp, removeAuthUser } from '../helpers/app.setup';

const TEST_EMAIL = 'e2e-auth-guard@sakura.test';
const TEST_PASSWORD = 'e2e-secret';

function extractAuthCookie(res: request.Response): string {
    const cookies = ([] as string[]).concat(res.headers['set-cookie'] ?? []);
    const authCookie = cookies.find((c) => c.startsWith('auth_token='));
    if (!authCookie) {
        throw new Error('auth_token cookie was not set');
    }
    return authCookie.split(';')[0];
}

describe('Security global JwtAuthGuard (e2e)', () => {
    let app: INestApplication;
    let authCookie: string;

    beforeAll(async () => {
        app = await createTestApp({ bypassAuth: false });
        await removeAuthUser(app, TEST_EMAIL);

        const prisma = app.get<IAuthPrismaClient>(IAuthPrismaClient);
        await prisma.user.create({
            data: {
                id: randomUUID(),
                email: TEST_EMAIL,
                password: await bcrypt.hash(TEST_PASSWORD, await bcrypt.genSalt()),
                firstName: 'Guard',
                lastName: 'Tester',
                empCardId: 9876,
                empId: 987654,
                phoneNumber: '01099998765',
                role: 'ADMIN',
            },
        });
    });

    afterAll(async () => {
        await removeAuthUser(app, TEST_EMAIL);
        await app.close();
    });

    describe('POST /api/v1/auth/login', () => {
        it('returns 201 and sets the auth_token cookie', async () => {
            const res = await request(app.getHttpServer())
                .post('/api/v1/auth/login')
                .send({ email: TEST_EMAIL, password: TEST_PASSWORD })
                .expect(201);

            authCookie = extractAuthCookie(res);
        });
    });

    describe('Guarded routes with a valid token', () => {
        it('GET /api/v1/auth/user/me returns 200 with the cookie', async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/auth/user/me')
                .set('Cookie', authCookie)
                .expect(200);

            expect(res.body.email).toBe(TEST_EMAIL);
        });

        it('GET /api/v1/auth/user/me returns 200 with a Bearer token', async () => {
            const token = authCookie.replace('auth_token=', '');
            await request(app.getHttpServer())
                .get('/api/v1/auth/user/me')
                .set('Authorization', `Bearer ${token}`)
                .expect(200);
        });
    });

    describe('Guarded routes with a missing or invalid token', () => {
        it('returns 401 when no token is provided', async () => {
            await request(app.getHttpServer())
                .get('/api/v1/vendors?offset=0&limit=5')
                .expect(401);
        });

        it('returns 498 when the token is tampered', async () => {
            await request(app.getHttpServer())
                .get('/api/v1/auth/user/me')
                .set('Cookie', `${authCookie}tampered`)
                .expect(498);
        });
    });
});
