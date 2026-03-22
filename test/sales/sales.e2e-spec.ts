import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import {
    createTestApp,
    cleanInventoryDb,
    cleanSalesDb,
    cleanSettingsDb,
} from '../helpers/app.setup';

describe('Sales (e2e)', () => {
    let app: INestApplication;

    let finalProductItemId: string;
    let shippingPackagingItemId: string;
    let rawMaterialItemId: string;
    let productId: string;

    let orderId: string;
    let lineId: string;
    let shippedOrderId: string;

    beforeAll(async () => {
        app = await createTestApp();
        await cleanSalesDb(app);
        await cleanInventoryDb(app);
        await cleanSettingsDb(app);

        // Create a Product
        const productRes = await request(app.getHttpServer())
            .post('/api/v1/inventory/products')
            .send({
                name: 'Rose Serum 30ml (Sales Test)',
                referenceBatchGm: 1000,
                referenceDurationMin: 60,
                referenceWastePercent: 5,
            })
            .expect(201);
        productId = productRes.body.id;

        // Create a RAW_MATERIAL item
        const rawRes = await request(app.getHttpServer())
            .post('/api/v1/inventory/items')
            .send({ name: 'Rose Water (Sales Test)', type: 'RAW_MATERIAL', measureUnit: 'GM' });
        rawMaterialItemId = rawRes.body.id;

        // Create a FINAL_PRODUCT item linked to the product
        const fpRes = await request(app.getHttpServer())
            .post('/api/v1/inventory/items')
            .send({
                name: 'Rose Serum 30ml (Sales Test)',
                type: 'FINAL_PRODUCT',
                measureUnit: 'PCS',
                unitWeightGm: 30,
                productId,
            })
            .expect(201);
        finalProductItemId = fpRes.body.id;

        // Create a SHIPPING_PACKAGING item
        const spRes = await request(app.getHttpServer())
            .post('/api/v1/inventory/items')
            .send({ name: 'Shipping Box (Sales Test)', type: 'SHIPPING_PACKAGING', measureUnit: 'PCS' })
            .expect(201);
        shippingPackagingItemId = spRes.body.id;

        // Restock final product item so ship can deduct
        await request(app.getHttpServer())
            .post(`/api/v1/inventory/items/${finalProductItemId}/restock`)
            .send({ quantity: 100, performedBy: 'TEST_SETUP' })
            .expect(201);

        // Restock shipping packaging item so ship can deduct
        await request(app.getHttpServer())
            .post(`/api/v1/inventory/items/${shippingPackagingItemId}/restock`)
            .send({ quantity: 50, performedBy: 'TEST_SETUP' })
            .expect(201);
    });

    afterAll(async () => {
        await app.close();
    });

    // ─── Create Sales Order ───────────────────────────────────────────────────────

    describe('POST /api/v1/sales', () => {
        it('creates a DRAFT order and returns 201', async () => {
            const res = await request(app.getHttpServer())
                .post('/api/v1/sales')
                .send({
                    customerName: 'Sarah Johnson',
                    customerPhone: '+20100000001',
                    notes: 'First order',
                })
                .expect(201);

            expect(res.body.customerName).toBe('Sarah Johnson');
            expect(res.body.customerPhone).toBe('+20100000001');
            expect(res.body.status).toBe('DRAFT');
            expect(res.body.lines).toEqual([]);
            expect(res.body.id).toBeDefined();
            orderId = res.body.id;
        });

        it('returns 400 when customerName is missing', async () => {
            await request(app.getHttpServer())
                .post('/api/v1/sales')
                .send({ notes: 'No name' })
                .expect(400);
        });
    });

    // ─── Add Line ─────────────────────────────────────────────────────────────────

    describe('POST /api/v1/sales/:id/lines', () => {
        it('adds a FINAL_PRODUCT line → 201 with snapshot', async () => {
            const res = await request(app.getHttpServer())
                .post(`/api/v1/sales/${orderId}/lines`)
                .send({ itemId: finalProductItemId, quantity: 5, unitPrice: 150 })
                .expect(201);

            expect(res.body.lines).toHaveLength(1);
            const line = res.body.lines[0];
            expect(line.itemId).toBe(finalProductItemId);
            expect(line.itemName).toBe('Rose Serum 30ml (Sales Test)');
            expect(line.quantity).toBe(5);
            expect(line.unitPrice).toBe(150);
            lineId = line.id;
        });

        it('adds a SHIPPING_PACKAGING line → 201', async () => {
            const res = await request(app.getHttpServer())
                .post(`/api/v1/sales/${orderId}/lines`)
                .send({ itemId: shippingPackagingItemId, quantity: 1, unitPrice: 10 })
                .expect(201);

            expect(res.body.lines).toHaveLength(2);
        });

        it('rejects RAW_MATERIAL → 400', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/sales/${orderId}/lines`)
                .send({ itemId: rawMaterialItemId, quantity: 1, unitPrice: 5 })
                .expect(400);
        });

        it('returns 404 for unknown itemId', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/sales/${orderId}/lines`)
                .send({ itemId: 'non-existent-item', quantity: 1, unitPrice: 5 })
                .expect(404);
        });

        it('returns 409 for duplicate itemId on same order', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/sales/${orderId}/lines`)
                .send({ itemId: finalProductItemId, quantity: 2, unitPrice: 140 })
                .expect(409);
        });
    });

    // ─── Confirm ─────────────────────────────────────────────────────────────────

    describe('POST /api/v1/sales/:id/confirm', () => {
        it('DRAFT → CONFIRMED → 204', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/sales/${orderId}/confirm`)
                .expect(204);

            const res = await request(app.getHttpServer())
                .get(`/api/v1/sales/${orderId}`)
                .expect(200);

            expect(res.body.status).toBe('CONFIRMED');
        });
    });

    // ─── Get by ID ───────────────────────────────────────────────────────────────

    describe('GET /api/v1/sales/:id', () => {
        it('returns order with status CONFIRMED + 2 lines', async () => {
            const res = await request(app.getHttpServer())
                .get(`/api/v1/sales/${orderId}`)
                .expect(200);

            expect(res.body.id).toBe(orderId);
            expect(res.body.status).toBe('CONFIRMED');
            expect(res.body.lines).toHaveLength(2);
        });

        it('returns 404 for non-existent id', async () => {
            await request(app.getHttpServer())
                .get('/api/v1/sales/non-existent-id')
                .expect(404);
        });
    });

    // ─── Ship ────────────────────────────────────────────────────────────────────

    describe('POST /api/v1/sales/:id/ship', () => {
        it('CONFIRMED → SHIPPED → 204, stock deducted', async () => {
            const stockBefore = await request(app.getHttpServer())
                .get(`/api/v1/inventory/items/${finalProductItemId}`)
                .expect(200);

            const stockBeforeVal = stockBefore.body.currentStock;

            await request(app.getHttpServer())
                .post(`/api/v1/sales/${orderId}/ship`)
                .expect(204);

            const stockAfter = await request(app.getHttpServer())
                .get(`/api/v1/inventory/items/${finalProductItemId}`)
                .expect(200);

            expect(stockAfter.body.currentStock).toBe(stockBeforeVal - 5);
            shippedOrderId = orderId;
        });
    });

    // ─── Get by ID (after ship) ───────────────────────────────────────────────────

    describe('GET /api/v1/sales/:id (after ship)', () => {
        it('status is SHIPPED and shippedAt is defined', async () => {
            const res = await request(app.getHttpServer())
                .get(`/api/v1/sales/${shippedOrderId}`)
                .expect(200);

            expect(res.body.status).toBe('SHIPPED');
            expect(res.body.shippedAt).toBeDefined();
        });
    });

    // ─── Cancel ──────────────────────────────────────────────────────────────────

    describe('POST /api/v1/sales/:id/cancel', () => {
        it('DRAFT → CANCELLED → 204', async () => {
            const createRes = await request(app.getHttpServer())
                .post('/api/v1/sales')
                .send({ customerName: 'Cancel Test Customer' })
                .expect(201);

            await request(app.getHttpServer())
                .post(`/api/v1/sales/${createRes.body.id}/cancel`)
                .expect(204);

            const res = await request(app.getHttpServer())
                .get(`/api/v1/sales/${createRes.body.id}`)
                .expect(200);

            expect(res.body.status).toBe('CANCELLED');
        });

        it('cannot cancel a SHIPPED order → 409', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/sales/${shippedOrderId}/cancel`)
                .expect(409);
        });
    });

    // ─── Get All ─────────────────────────────────────────────────────────────────

    describe('GET /api/v1/sales', () => {
        it('returns all orders as array', async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/sales')
                .expect(200);

            expect(Array.isArray(res.body)).toBe(true);
            expect(res.body.length).toBeGreaterThanOrEqual(2);
        });

        it('filters by status=SHIPPED', async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/sales?status=SHIPPED')
                .expect(200);

            expect(res.body.every((o: any) => o.status === 'SHIPPED')).toBe(true);
            expect(res.body.length).toBeGreaterThanOrEqual(1);
        });
    });

    // ─── Update Line ─────────────────────────────────────────────────────────────

    describe('PATCH /api/v1/sales/:id/lines/:lineId', () => {
        it('updates unitPrice on DRAFT line → 200', async () => {
            const createRes = await request(app.getHttpServer())
                .post('/api/v1/sales')
                .send({ customerName: 'Update Line Test' })
                .expect(201);

            const addRes = await request(app.getHttpServer())
                .post(`/api/v1/sales/${createRes.body.id}/lines`)
                .send({ itemId: finalProductItemId, quantity: 2, unitPrice: 100 })
                .expect(201);

            const lineToUpdate = addRes.body.lines[0];

            const updateRes = await request(app.getHttpServer())
                .patch(`/api/v1/sales/${createRes.body.id}/lines/${lineToUpdate.id}`)
                .send({ unitPrice: 120 })
                .expect(200);

            const updatedLine = updateRes.body.lines.find((l: any) => l.id === lineToUpdate.id);
            expect(updatedLine.unitPrice).toBe(120);
        });
    });

    // ─── Gift Lines ───────────────────────────────────────────────────────────────

    describe('Gift line support', () => {
        it('adds a line with isGift=true → 201, isGift reflected in response', async () => {
            const createRes = await request(app.getHttpServer())
                .post('/api/v1/sales')
                .send({ customerName: 'Gift Test Customer' })
                .expect(201);

            const giftOrderId = createRes.body.id;

            const addRes = await request(app.getHttpServer())
                .post(`/api/v1/sales/${giftOrderId}/lines`)
                .send({ itemId: finalProductItemId, quantity: 1, unitPrice: 150, isGift: true })
                .expect(201);

            const line = addRes.body.lines[0];
            expect(line.isGift).toBe(true);
            expect(line.itemId).toBe(finalProductItemId);
        });

        it('adds a non-gift line → isGift defaults to false', async () => {
            const createRes = await request(app.getHttpServer())
                .post('/api/v1/sales')
                .send({ customerName: 'Non-Gift Test' })
                .expect(201);

            const addRes = await request(app.getHttpServer())
                .post(`/api/v1/sales/${createRes.body.id}/lines`)
                .send({ itemId: shippingPackagingItemId, quantity: 2, unitPrice: 10 })
                .expect(201);

            expect(addRes.body.lines[0].isGift).toBe(false);
        });

        it('updates isGift on a line → isGift toggled to true', async () => {
            const createRes = await request(app.getHttpServer())
                .post('/api/v1/sales')
                .send({ customerName: 'Toggle Gift Test' })
                .expect(201);

            const addRes = await request(app.getHttpServer())
                .post(`/api/v1/sales/${createRes.body.id}/lines`)
                .send({ itemId: finalProductItemId, quantity: 1, unitPrice: 100 })
                .expect(201);

            const lineId = addRes.body.lines[0].id;

            const updateRes = await request(app.getHttpServer())
                .patch(`/api/v1/sales/${createRes.body.id}/lines/${lineId}`)
                .send({ isGift: true })
                .expect(200);

            const updated = updateRes.body.lines.find((l: any) => l.id === lineId);
            expect(updated.isGift).toBe(true);
        });
    });
});
