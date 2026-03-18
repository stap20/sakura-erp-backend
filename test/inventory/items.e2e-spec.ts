import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { createTestApp, cleanInventoryDb } from '../helpers/app.setup';

describe('Inventory Items (e2e)', () => {
    let app: INestApplication;

    beforeAll(async () => {
        app = await createTestApp();
        await cleanInventoryDb(app);
    });

    afterAll(async () => {
        await app.close();
    });

    // ─── Create Item ────────────────────────────────────────────────────────────

    describe('POST /api/v1/inventory/items', () => {
        it('creates a RAW_MATERIAL item and returns 201', async () => {
            const res = await request(app.getHttpServer())
                .post('/api/v1/inventory/items')
                .send({ name: 'Glycerin 99%', type: 'RAW_MATERIAL', measureUnit: 'KG' })
                .expect(201);

            expect(res.body).toMatchObject({
                name: 'Glycerin 99%',
                type: 'RAW_MATERIAL',
                measureUnit: 'KG',
                currentStock: 0,
                status: 'ACTIVE',
            });
            expect(res.body.id).toBeDefined();
        });

        it('creates a PACKAGING item and returns 201', async () => {
            const res = await request(app.getHttpServer())
                .post('/api/v1/inventory/items')
                .send({ name: '50ml Bottle', type: 'PACKAGING', measureUnit: 'PCS' })
                .expect(201);

            expect(res.body.type).toBe('PACKAGING');
            expect(res.body.categoryId).toBeNull();
        });

        it('creates a FINAL_PRODUCT item and returns 201', async () => {
            await request(app.getHttpServer())
                .post('/api/v1/inventory/items')
                .send({ name: 'Rose Serum 30ml', type: 'FINAL_PRODUCT', measureUnit: 'PCS' })
                .expect(201);
        });

        it('returns 409 when item name already exists', async () => {
            await request(app.getHttpServer())
                .post('/api/v1/inventory/items')
                .send({ name: 'Glycerin 99%', type: 'RAW_MATERIAL', measureUnit: 'KG' })
                .expect(409);
        });
    });

    // ─── Get All Items ───────────────────────────────────────────────────────────

    describe('GET /api/v1/inventory/items', () => {
        it('returns 200 with an array of items (no params required)', async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/inventory/items')
                .expect(200);

            expect(Array.isArray(res.body)).toBe(true);
            expect(res.body.length).toBeGreaterThanOrEqual(3);
        });

        it('filters by type=RAW_MATERIAL', async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/inventory/items?type=RAW_MATERIAL')
                .expect(200);

            expect(res.body.every((i: any) => i.type === 'RAW_MATERIAL')).toBe(true);
        });
    });

    // ─── Get Item By ID ──────────────────────────────────────────────────────────

    describe('GET /api/v1/inventory/items/:id', () => {
        let itemId: string;

        beforeAll(async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/inventory/items?type=RAW_MATERIAL')
                .expect(200);
            itemId = res.body[0].id;
        });

        it('returns 200 with item details', async () => {
            const res = await request(app.getHttpServer())
                .get(`/api/v1/inventory/items/${itemId}`)
                .expect(200);

            expect(res.body.id).toBe(itemId);
            expect(res.body.name).toBeDefined();
        });

        it('returns 404 for unknown id', async () => {
            await request(app.getHttpServer())
                .get('/api/v1/inventory/items/nonexistent-id-000')
                .expect(404);
        });
    });

    // ─── Update Item ─────────────────────────────────────────────────────────────

    describe('PATCH /api/v1/inventory/items/:id', () => {
        let itemId: string;

        beforeAll(async () => {
            const res = await request(app.getHttpServer())
                .post('/api/v1/inventory/items')
                .send({ name: 'Citric Acid', type: 'RAW_MATERIAL', measureUnit: 'G' });
            itemId = res.body.id;
        });

        it('updates item name and returns 200', async () => {
            const res = await request(app.getHttpServer())
                .patch(`/api/v1/inventory/items/${itemId}`)
                .send({ name: 'Citric Acid Pure' })
                .expect(200);

            expect(res.body.name).toBe('Citric Acid Pure');
        });
    });

    // ─── Restock & Deduct ────────────────────────────────────────────────────────

    describe('Stock operations (restock / deduct)', () => {
        let itemId: string;

        beforeAll(async () => {
            const res = await request(app.getHttpServer())
                .post('/api/v1/inventory/items')
                .send({ name: 'Shea Butter', type: 'RAW_MATERIAL', measureUnit: 'KG' });
            itemId = res.body.id;
        });

        it('restocks item and returns 201 with newStock', async () => {
            const res = await request(app.getHttpServer())
                .post(`/api/v1/inventory/items/${itemId}/restock`)
                .send({ quantity: 100, performedBy: 'user_test', vendorId: 'vendor_abc', notes: 'Initial stock' })
                .expect(201);

            expect(res.body).toMatchObject({
                itemId,
                newStock: 100,
                quantity: 100,
            });
            expect(res.body.transactionId).toBeDefined();
        });

        it('stockStatus=IN_STOCK filter returns only items with stock', async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/inventory/items?stockStatus=IN_STOCK')
                .expect(200);

            expect(res.body.some((i: any) => i.id === itemId)).toBe(true);
            expect(res.body.every((i: any) => i.currentStock > 0)).toBe(true);
        });

        it('deducts item and returns 201 with updated newStock', async () => {
            const res = await request(app.getHttpServer())
                .post(`/api/v1/inventory/items/${itemId}/deduct`)
                .send({ quantity: 30, performedBy: 'user_test', notes: 'Production use' })
                .expect(201);

            expect(res.body).toMatchObject({
                itemId,
                newStock: 70,
                quantity: 30,
            });
        });

        it('returns 409 when deducting more than currentStock', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/inventory/items/${itemId}/deduct`)
                .send({ quantity: 500, performedBy: 'user_test' })
                .expect(409);
        });

        it('returns 409 when archiving item with stock > 0', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/inventory/items/${itemId}/archive`)
                .expect(409);
        });

        it('deducts to 0 and archives successfully (204)', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/inventory/items/${itemId}/deduct`)
                .send({ quantity: 70, performedBy: 'user_test' });

            await request(app.getHttpServer())
                .post(`/api/v1/inventory/items/${itemId}/archive`)
                .expect(204);
        });

        it('returns 409 when restocking an archived item', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/inventory/items/${itemId}/restock`)
                .send({ quantity: 10, performedBy: 'user_test' })
                .expect(409);
        });
    });

    // ─── Transactions ────────────────────────────────────────────────────────────

    describe('GET /api/v1/inventory/items/:id/transactions', () => {
        let itemId: string;

        beforeAll(async () => {
            const res = await request(app.getHttpServer())
                .post('/api/v1/inventory/items')
                .send({ name: 'Lavender Oil', type: 'RAW_MATERIAL', measureUnit: 'ML' });
            itemId = res.body.id;

            await request(app.getHttpServer())
                .post(`/api/v1/inventory/items/${itemId}/restock`)
                .send({ quantity: 200, performedBy: 'user_test', vendorId: 'vendor_xyz' });

            await request(app.getHttpServer())
                .post(`/api/v1/inventory/items/${itemId}/deduct`)
                .send({ quantity: 50, performedBy: 'user_test' });
        });

        it('returns 200 with all transactions (no params)', async () => {
            const res = await request(app.getHttpServer())
                .get(`/api/v1/inventory/items/${itemId}/transactions`)
                .expect(200);

            expect(Array.isArray(res.body)).toBe(true);
            expect(res.body.length).toBe(2);
            expect(res.body.some((t: any) => t.type === 'RESTOCK')).toBe(true);
            expect(res.body.some((t: any) => t.type === 'DEDUCT')).toBe(true);
        });

        it('filters transactions by type=RESTOCK', async () => {
            const res = await request(app.getHttpServer())
                .get(`/api/v1/inventory/items/${itemId}/transactions?type=RESTOCK`)
                .expect(200);

            expect(res.body.every((t: any) => t.type === 'RESTOCK')).toBe(true);
            expect(res.body.length).toBe(1);
        });

        it('returns transactions ordered by createdAt descending', async () => {
            const res = await request(app.getHttpServer())
                .get(`/api/v1/inventory/items/${itemId}/transactions`)
                .expect(200);

            const dates = res.body.map((t: any) => new Date(t.createdAt).getTime());
            expect(dates[0]).toBeGreaterThanOrEqual(dates[1]);
        });
    });
});
