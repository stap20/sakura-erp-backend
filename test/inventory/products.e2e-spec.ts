import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { createTestApp, cleanInventoryDb } from '../helpers/app.setup';

describe('Inventory Products (e2e)', () => {
    let app: INestApplication;

    beforeAll(async () => {
        app = await createTestApp();
        await cleanInventoryDb(app);
    });

    afterAll(async () => {
        await app.close();
    });

    // ─── Create Product ──────────────────────────────────────────────────────────

    describe('POST /api/v1/inventory/products', () => {
        it('creates a product with name only and returns 201 with null reference fields', async () => {
            const res = await request(app.getHttpServer())
                .post('/api/v1/inventory/products')
                .send({ name: 'Rose Body Butter' })
                .expect(201);

            expect(res.body).toMatchObject({
                name: 'Rose Body Butter',
                referenceWastePercent: null,
                referenceBatchGm: null,
                referenceDurationMin: null,
            });
            expect(res.body.id).toBeDefined();
        });

        it('creates a product with all reference fields and returns 201', async () => {
            const res = await request(app.getHttpServer())
                .post('/api/v1/inventory/products')
                .send({
                    name: 'Lavender Serum',
                    description: 'Hydrating lavender-based serum',
                    referenceBatchGm: 1000,
                    referenceDurationMin: 120,
                    referenceWastePercent: 5,
                })
                .expect(201);

            expect(res.body).toMatchObject({
                name: 'Lavender Serum',
                description: 'Hydrating lavender-based serum',
                referenceBatchGm: 1000,
                referenceDurationMin: 120,
                referenceWastePercent: 5,
            });
            expect(res.body.id).toBeDefined();
        });

        it('returns 409 when product name already exists', async () => {
            await request(app.getHttpServer())
                .post('/api/v1/inventory/products')
                .send({ name: 'Rose Body Butter' })
                .expect(409);
        });

        it('returns 400 when name is too short (< 2 chars)', async () => {
            await request(app.getHttpServer())
                .post('/api/v1/inventory/products')
                .send({ name: 'A' })
                .expect(400);
        });
    });

    // ─── Get All Products ────────────────────────────────────────────────────────

    describe('GET /api/v1/inventory/products', () => {
        it('returns 200 with list including both created products', async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/inventory/products')
                .expect(200);

            expect(Array.isArray(res.body)).toBe(true);
            expect(res.body.length).toBeGreaterThanOrEqual(2);
        });

        it('?search= filter narrows results to matching products', async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/inventory/products?search=Lavender')
                .expect(200);

            expect(res.body.length).toBe(1);
            expect(res.body[0].name).toBe('Lavender Serum');
        });
    });

    // ─── Get Product By ID ───────────────────────────────────────────────────────

    describe('GET /api/v1/inventory/products/:id', () => {
        let productId: string;

        beforeAll(async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/inventory/products?search=Lavender')
                .expect(200);
            productId = res.body[0].id;
        });

        it('returns 200 with all fields including referenceWastePercent', async () => {
            const res = await request(app.getHttpServer())
                .get(`/api/v1/inventory/products/${productId}`)
                .expect(200);

            expect(res.body.id).toBe(productId);
            expect(res.body.name).toBe('Lavender Serum');
            expect(res.body.referenceWastePercent).toBe(5);
            expect(res.body.referenceBatchGm).toBe(1000);
            expect(res.body.referenceDurationMin).toBe(120);
        });

        it('returns 404 for unknown id', async () => {
            await request(app.getHttpServer())
                .get('/api/v1/inventory/products/nonexistent-id-000')
                .expect(404);
        });
    });

    // ─── Update Product ──────────────────────────────────────────────────────────

    describe('PATCH /api/v1/inventory/products/:id', () => {
        let productId: string;

        beforeAll(async () => {
            const res = await request(app.getHttpServer())
                .post('/api/v1/inventory/products')
                .send({ name: 'Shea Cream', referenceWastePercent: 3 })
                .expect(201);
            productId = res.body.id;
        });

        it('updates name and returns 200 with changed name', async () => {
            const res = await request(app.getHttpServer())
                .patch(`/api/v1/inventory/products/${productId}`)
                .send({ name: 'Shea Cream Pro' })
                .expect(200);

            expect(res.body.name).toBe('Shea Cream Pro');
        });

        it('updates referenceWastePercent to a new value and returns 200', async () => {
            const res = await request(app.getHttpServer())
                .patch(`/api/v1/inventory/products/${productId}`)
                .send({ referenceWastePercent: 8 })
                .expect(200);

            expect(res.body.referenceWastePercent).toBe(8);
        });

        it('sets referenceWastePercent to null (clearing it) and returns 200', async () => {
            const res = await request(app.getHttpServer())
                .patch(`/api/v1/inventory/products/${productId}`)
                .send({ referenceWastePercent: null })
                .expect(200);

            expect(res.body.referenceWastePercent).toBeNull();
        });

        it('returns 404 for unknown id', async () => {
            await request(app.getHttpServer())
                .patch('/api/v1/inventory/products/nonexistent-id-000')
                .send({ name: 'Ghost Product' })
                .expect(404);
        });
    });
});
