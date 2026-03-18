import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { createTestApp, cleanInventoryDb } from '../helpers/app.setup';

describe('Inventory Categories (e2e)', () => {
    let app: INestApplication;

    beforeAll(async () => {
        app = await createTestApp();
        await cleanInventoryDb(app);
    });

    afterAll(async () => {
        await app.close();
    });

    // ─── Create Category ─────────────────────────────────────────────────────────

    describe('POST /api/v1/inventory/categories', () => {
        it('creates a category and returns 201', async () => {
            const res = await request(app.getHttpServer())
                .post('/api/v1/inventory/categories')
                .send({ name: 'Emulsifiers', description: 'Waxes and emulsifying agents' })
                .expect(201);

            expect(res.body).toMatchObject({
                name: 'Emulsifiers',
                description: 'Waxes and emulsifying agents',
                status: 'ACTIVE',
            });
            expect(res.body.id).toBeDefined();
        });

        it('returns 409 when category name already exists', async () => {
            await request(app.getHttpServer())
                .post('/api/v1/inventory/categories')
                .send({ name: 'Emulsifiers' })
                .expect(409);
        });
    });

    // ─── Get All Categories ──────────────────────────────────────────────────────

    describe('GET /api/v1/inventory/categories', () => {
        it('returns 200 with array of categories (no params required)', async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/inventory/categories')
                .expect(200);

            expect(Array.isArray(res.body)).toBe(true);
            expect(res.body.length).toBeGreaterThanOrEqual(1);
        });

        it('filters by status=ACTIVE', async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/inventory/categories?status=ACTIVE')
                .expect(200);

            expect(res.body.every((c: any) => c.status === 'ACTIVE')).toBe(true);
        });
    });

    // ─── Get Category By ID ──────────────────────────────────────────────────────

    describe('GET /api/v1/inventory/categories/:id', () => {
        let categoryId: string;

        beforeAll(async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/inventory/categories')
                .expect(200);
            categoryId = res.body[0].id;
        });

        it('returns 200 with category details', async () => {
            const res = await request(app.getHttpServer())
                .get(`/api/v1/inventory/categories/${categoryId}`)
                .expect(200);

            expect(res.body.id).toBe(categoryId);
            expect(res.body.name).toBeDefined();
        });

        it('returns 404 for unknown id', async () => {
            await request(app.getHttpServer())
                .get('/api/v1/inventory/categories/nonexistent-id-000')
                .expect(404);
        });
    });

    // ─── Update Category ─────────────────────────────────────────────────────────

    describe('PATCH /api/v1/inventory/categories/:id', () => {
        let categoryId: string;

        beforeAll(async () => {
            const res = await request(app.getHttpServer())
                .post('/api/v1/inventory/categories')
                .send({ name: 'Pigments', description: 'Colorants' });
            categoryId = res.body.id;
        });

        it('updates category name and returns 200', async () => {
            const res = await request(app.getHttpServer())
                .patch(`/api/v1/inventory/categories/${categoryId}`)
                .send({ name: 'Pigments & Dyes', description: 'Colorants and dyes' })
                .expect(200);

            expect(res.body.name).toBe('Pigments & Dyes');
            expect(res.body.description).toBe('Colorants and dyes');
        });
    });

    // ─── Archive Category ────────────────────────────────────────────────────────

    describe('POST /api/v1/inventory/categories/:id/archive', () => {
        let categoryId: string;

        beforeAll(async () => {
            const catRes = await request(app.getHttpServer())
                .post('/api/v1/inventory/categories')
                .send({ name: 'Preservatives' });
            categoryId = catRes.body.id;

            // Link an active RAW_MATERIAL item to this category
            await request(app.getHttpServer())
                .post('/api/v1/inventory/items')
                .send({ name: 'Phenoxyethanol', type: 'RAW_MATERIAL', measureUnit: 'ML', categoryId });
        });

        it('returns 409 when category has active items', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/inventory/categories/${categoryId}/archive`)
                .expect(409);
        });

        it('archives successfully (204) when no active items', async () => {
            // Create a new category with no items
            const res = await request(app.getHttpServer())
                .post('/api/v1/inventory/categories')
                .send({ name: 'Empty Category' });

            await request(app.getHttpServer())
                .post(`/api/v1/inventory/categories/${res.body.id}/archive`)
                .expect(204);
        });
    });
});
