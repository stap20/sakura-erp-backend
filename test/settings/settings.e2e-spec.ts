import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { createTestApp, cleanSettingsDb } from '../helpers/app.setup';

describe('Settings CostConfig (e2e)', () => {
    let app: INestApplication;

    beforeAll(async () => {
        app = await createTestApp();
        await cleanSettingsDb(app);
    });

    afterAll(async () => {
        await app.close();
    });

    // ─── GET before any upsert ───────────────────────────────────────────────────

    describe('GET /api/v1/settings/cost-config (before any upsert)', () => {
        it('returns 404 when singleton does not exist yet', async () => {
            await request(app.getHttpServer())
                .get('/api/v1/settings/cost-config')
                .expect(404);
        });
    });

    // ─── PUT (create) ────────────────────────────────────────────────────────────

    describe('PUT /api/v1/settings/cost-config', () => {
        it('creates the cost config and returns 200', async () => {
            await request(app.getHttpServer())
                .put('/api/v1/settings/cost-config')
                .send({ monthlySalary: 3000, monthlyWorkingHours: 160, depreciationPerMinute: 0.05 })
                .expect(200);
        });
    });

    // ─── GET after create ────────────────────────────────────────────────────────

    describe('GET /api/v1/settings/cost-config (after create)', () => {
        it('returns 200 with saved values and updatedAt defined', async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/settings/cost-config')
                .expect(200);

            expect(res.body).toMatchObject({
                monthlySalary: 3000,
                monthlyWorkingHours: 160,
                depreciationPerMinute: 0.05,
            });
            expect(res.body.updatedAt).toBeDefined();
        });
    });

    // ─── PUT (idempotent update) ─────────────────────────────────────────────────

    describe('PUT /api/v1/settings/cost-config (update)', () => {
        it('updates with new values and returns 200', async () => {
            await request(app.getHttpServer())
                .put('/api/v1/settings/cost-config')
                .send({ monthlySalary: 4000, monthlyWorkingHours: 176, depreciationPerMinute: 0.08 })
                .expect(200);
        });
    });

    // ─── GET after update ────────────────────────────────────────────────────────

    describe('GET /api/v1/settings/cost-config (after update)', () => {
        it('returns 200 with updated values', async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/settings/cost-config')
                .expect(200);

            expect(res.body.monthlySalary).toBe(4000);
            expect(res.body.monthlyWorkingHours).toBe(176);
            expect(res.body.depreciationPerMinute).toBe(0.08);
        });
    });

    // ─── PUT validation errors ───────────────────────────────────────────────────

    describe('PUT /api/v1/settings/cost-config — validation', () => {
        it('returns 400 when monthlySalary is missing', async () => {
            await request(app.getHttpServer())
                .put('/api/v1/settings/cost-config')
                .send({ monthlyWorkingHours: 160, depreciationPerMinute: 0.05 })
                .expect(400);
        });

        it('returns 400 when monthlyWorkingHours is 0 (violates @Min(1))', async () => {
            await request(app.getHttpServer())
                .put('/api/v1/settings/cost-config')
                .send({ monthlySalary: 3000, monthlyWorkingHours: 0, depreciationPerMinute: 0.05 })
                .expect(400);
        });
    });
});
