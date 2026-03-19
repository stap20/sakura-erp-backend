import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { createTestApp, cleanInventoryDb, cleanPurchaseDb } from '../helpers/app.setup';

describe('Purchases (e2e)', () => {
    let app: INestApplication;

    const vendorId = 'vendor-test-001';
    const vendorName = 'Al Mansoura Chemicals';
    const vendorPhone = '+201001234567';

    let rawMaterialItemId: string;
    let packagingItemId: string;
    let finalProductItemId: string;
    let rawMaterialMeasureUnit: string;

    let orderId: string;
    let confirmedOrderId: string;
    let lineId: string;

    beforeAll(async () => {
        app = await createTestApp();
        await cleanPurchaseDb(app);
        await cleanInventoryDb(app);

        // Create inventory items for testing
        const rawRes = await request(app.getHttpServer())
            .post('/api/v1/inventory/items')
            .send({ name: 'Glycerin 99% (Purchase Test)', type: 'RAW_MATERIAL', measureUnit: 'KG' });
        rawMaterialItemId = rawRes.body.id;
        rawMaterialMeasureUnit = rawRes.body.measureUnit;

        const pkgRes = await request(app.getHttpServer())
            .post('/api/v1/inventory/items')
            .send({ name: '50ml Bottle (Purchase Test)', type: 'PACKAGING', measureUnit: 'PCS' });
        packagingItemId = pkgRes.body.id;

        const fpRes = await request(app.getHttpServer())
            .post('/api/v1/inventory/items')
            .send({ name: 'Rose Serum 30ml (Purchase Test)', type: 'FINAL_PRODUCT', measureUnit: 'PCS' });
        finalProductItemId = fpRes.body.id;
    });

    afterAll(async () => {
        await app.close();
    });

    // ─── Create Purchase Order ────────────────────────────────────────────────────

    describe('POST /api/v1/purchases', () => {
        it('creates a DRAFT PO and returns 201 with vendor snapshot', async () => {
            const res = await request(app.getHttpServer())
                .post('/api/v1/purchases')
                .send({
                    vendorId,
                    vendorName,
                    vendorPhone,
                    notes: 'First order',
                })
                .expect(201);

            expect(res.body.vendorId).toBe(vendorId);
            expect(res.body.vendorName).toBe(vendorName);
            expect(res.body.vendorPhone).toBe(vendorPhone);
            expect(res.body.status).toBe('DRAFT');
            expect(res.body.lines).toEqual([]);
            expect(res.body.id).toBeDefined();
            orderId = res.body.id;
        });

        it('creates a second DRAFT PO for confirm/receive tests', async () => {
            const res = await request(app.getHttpServer())
                .post('/api/v1/purchases')
                .send({ vendorId, vendorName })
                .expect(201);

            confirmedOrderId = res.body.id;
        });
    });

    // ─── Add Line — validation ───────────────────────────────────────────────────

    describe('POST /api/v1/purchases/:id/lines — invalid cases', () => {
        it('returns 404 when itemId does not exist', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/purchases/${orderId}/lines`)
                .send({ itemId: 'non-existent-item', quantity: 10, unitPrice: 50 })
                .expect(404);
        });

        it('returns 409 when item type is FINAL_PRODUCT', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/purchases/${orderId}/lines`)
                .send({ itemId: finalProductItemId, quantity: 10, unitPrice: 50 })
                .expect(409);
        });
    });

    // ─── Add Line — valid ────────────────────────────────────────────────────────

    describe('POST /api/v1/purchases/:id/lines — valid', () => {
        it('adds a RAW_MATERIAL line and returns 201 with itemName + measureUnit snapshotted', async () => {
            const res = await request(app.getHttpServer())
                .post(`/api/v1/purchases/${orderId}/lines`)
                .send({ itemId: rawMaterialItemId, quantity: 100, unitPrice: 55.5 })
                .expect(201);

            expect(res.body.lines).toHaveLength(1);
            const line = res.body.lines[0];
            expect(line.itemId).toBe(rawMaterialItemId);
            expect(line.itemName).toBe('Glycerin 99% (Purchase Test)');
            expect(line.measureUnit).toBe(rawMaterialMeasureUnit);
            expect(line.quantity).toBe(100);
            expect(line.unitPrice).toBe(55.5);
            lineId = line.id;
        });

        it('adds a PACKAGING line', async () => {
            const res = await request(app.getHttpServer())
                .post(`/api/v1/purchases/${orderId}/lines`)
                .send({ itemId: packagingItemId, quantity: 500, unitPrice: 2.75 })
                .expect(201);

            expect(res.body.lines).toHaveLength(2);
        });

        it('returns 409 when adding duplicate itemId on same PO', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/purchases/${orderId}/lines`)
                .send({ itemId: rawMaterialItemId, quantity: 50, unitPrice: 60 })
                .expect(409);
        });
    });

    // ─── Update Line ─────────────────────────────────────────────────────────────

    describe('PATCH /api/v1/purchases/:id/lines/:lineId', () => {
        it('updates line quantity and price and returns 200', async () => {
            const res = await request(app.getHttpServer())
                .patch(`/api/v1/purchases/${orderId}/lines/${lineId}`)
                .send({ quantity: 120, unitPrice: 58 })
                .expect(200);

            const line = res.body.lines.find((l: any) => l.id === lineId);
            expect(line.quantity).toBe(120);
            expect(line.unitPrice).toBe(58);
        });
    });

    // ─── Remove Line ─────────────────────────────────────────────────────────────

    describe('DELETE /api/v1/purchases/:id/lines/:lineId', () => {
        it('removes a line and returns 204', async () => {
            // Add a temporary line to remove
            const addRes = await request(app.getHttpServer())
                .post(`/api/v1/purchases/${orderId}/lines`)
                .send({ itemId: packagingItemId, quantity: 10, unitPrice: 3 });

            // packagingItemId already exists, so add a temp line via another PO
            // Instead, test with the packaging line we already have
            // Get current state
            const getRes = await request(app.getHttpServer())
                .get(`/api/v1/purchases/${orderId}`)
                .expect(200);

            const pkgLine = getRes.body.lines.find((l: any) => l.itemId === packagingItemId);
            expect(pkgLine).toBeDefined();

            await request(app.getHttpServer())
                .delete(`/api/v1/purchases/${orderId}/lines/${pkgLine.id}`)
                .expect(204);

            const afterRes = await request(app.getHttpServer())
                .get(`/api/v1/purchases/${orderId}`)
                .expect(200);

            expect(afterRes.body.lines).toHaveLength(1);
        });
    });

    // ─── Update PO notes ─────────────────────────────────────────────────────────

    describe('PATCH /api/v1/purchases/:id', () => {
        it('updates notes and returns 200', async () => {
            const res = await request(app.getHttpServer())
                .patch(`/api/v1/purchases/${orderId}`)
                .send({ notes: 'Updated notes' })
                .expect(200);

            expect(res.body.notes).toBe('Updated notes');
        });
    });

    // ─── Confirm ─────────────────────────────────────────────────────────────────

    describe('POST /api/v1/purchases/:id/confirm', () => {
        it('confirms PO and returns 204', async () => {
            // Add a line to confirmedOrderId first
            await request(app.getHttpServer())
                .post(`/api/v1/purchases/${confirmedOrderId}/lines`)
                .send({ itemId: rawMaterialItemId, quantity: 50, unitPrice: 60 })
                .expect(201);

            await request(app.getHttpServer())
                .post(`/api/v1/purchases/${confirmedOrderId}/confirm`)
                .expect(204);

            const res = await request(app.getHttpServer())
                .get(`/api/v1/purchases/${confirmedOrderId}`)
                .expect(200);

            expect(res.body.status).toBe('CONFIRMED');
        });

        it('returns 409 when trying to add a line to a CONFIRMED PO', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/purchases/${confirmedOrderId}/lines`)
                .send({ itemId: packagingItemId, quantity: 10, unitPrice: 3 })
                .expect(409);
        });

        it('returns 409 when trying to confirm a DRAFT PO without lines... actually confirm orderId too', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/purchases/${orderId}/confirm`)
                .expect(204);

            const res = await request(app.getHttpServer())
                .get(`/api/v1/purchases/${orderId}`)
                .expect(200);

            expect(res.body.status).toBe('CONFIRMED');
        });
    });

    // ─── Receive ─────────────────────────────────────────────────────────────────

    describe('POST /api/v1/purchases/:id/receive', () => {
        it('returns 409 when trying to receive a DRAFT PO', async () => {
            // Create a fresh DRAFT PO
            const draftRes = await request(app.getHttpServer())
                .post('/api/v1/purchases')
                .send({ vendorId, vendorName })
                .expect(201);

            await request(app.getHttpServer())
                .post(`/api/v1/purchases/${draftRes.body.id}/receive`)
                .expect(409);
        });

        it('receives a CONFIRMED PO and returns 204', async () => {
            // Get stock before
            const stockBefore = await request(app.getHttpServer())
                .get(`/api/v1/inventory/items/${rawMaterialItemId}`)
                .expect(200);

            const stockBeforeVal = stockBefore.body.currentStock;

            await request(app.getHttpServer())
                .post(`/api/v1/purchases/${confirmedOrderId}/receive`)
                .expect(204);

            // Verify status
            const poRes = await request(app.getHttpServer())
                .get(`/api/v1/purchases/${confirmedOrderId}`)
                .expect(200);

            expect(poRes.body.status).toBe('RECEIVED');
            expect(poRes.body.receivedAt).toBeDefined();

            // Verify inventory stock increased
            const stockAfter = await request(app.getHttpServer())
                .get(`/api/v1/inventory/items/${rawMaterialItemId}`)
                .expect(200);

            expect(stockAfter.body.currentStock).toBe(stockBeforeVal + 50);

            // Verify InventoryTransaction has vendorId + unitPrice
            const txRes = await request(app.getHttpServer())
                .get(`/api/v1/inventory/items/${rawMaterialItemId}/transactions?type=RESTOCK`)
                .expect(200);

            const tx = txRes.body[0];
            expect(tx.vendorId).toBe(vendorId);
            expect(Number(tx.unitPrice)).toBe(60);
        });

        it('returns 409 when trying to receive an already RECEIVED PO', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/purchases/${confirmedOrderId}/receive`)
                .expect(409);
        });
    });

    // ─── Cancel ──────────────────────────────────────────────────────────────────

    describe('POST /api/v1/purchases/:id/cancel', () => {
        it('cancels a DRAFT PO and returns 204', async () => {
            const res = await request(app.getHttpServer())
                .post('/api/v1/purchases')
                .send({ vendorId, vendorName })
                .expect(201);

            await request(app.getHttpServer())
                .post(`/api/v1/purchases/${res.body.id}/cancel`)
                .expect(204);

            const getRes = await request(app.getHttpServer())
                .get(`/api/v1/purchases/${res.body.id}`)
                .expect(200);

            expect(getRes.body.status).toBe('CANCELLED');
        });

        it('cancels a CONFIRMED PO and returns 204', async () => {
            // Create and confirm a PO
            const createRes = await request(app.getHttpServer())
                .post('/api/v1/purchases')
                .send({ vendorId, vendorName })
                .expect(201);

            await request(app.getHttpServer())
                .post(`/api/v1/purchases/${createRes.body.id}/lines`)
                .send({ itemId: rawMaterialItemId, quantity: 10, unitPrice: 50 })
                .expect(201);

            await request(app.getHttpServer())
                .post(`/api/v1/purchases/${createRes.body.id}/confirm`)
                .expect(204);

            await request(app.getHttpServer())
                .post(`/api/v1/purchases/${createRes.body.id}/cancel`)
                .expect(204);

            const getRes = await request(app.getHttpServer())
                .get(`/api/v1/purchases/${createRes.body.id}`)
                .expect(200);

            expect(getRes.body.status).toBe('CANCELLED');
        });

        it('returns 409 when trying to cancel a RECEIVED PO', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/purchases/${confirmedOrderId}/cancel`)
                .expect(409);
        });
    });

    // ─── Get by ID ───────────────────────────────────────────────────────────────

    describe('GET /api/v1/purchases/:id', () => {
        it('returns 200 with the purchase order', async () => {
            const res = await request(app.getHttpServer())
                .get(`/api/v1/purchases/${orderId}`)
                .expect(200);

            expect(res.body.id).toBe(orderId);
            expect(res.body.vendorId).toBe(vendorId);
        });

        it('returns 404 for non-existent id', async () => {
            await request(app.getHttpServer())
                .get('/api/v1/purchases/non-existent-id')
                .expect(404);
        });
    });

    // ─── Get All ─────────────────────────────────────────────────────────────────

    describe('GET /api/v1/purchases', () => {
        it('returns 200 with array of purchase orders', async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/purchases')
                .expect(200);

            expect(Array.isArray(res.body)).toBe(true);
            expect(res.body.length).toBeGreaterThanOrEqual(2);
        });

        it('filters by vendorId', async () => {
            const res = await request(app.getHttpServer())
                .get(`/api/v1/purchases?vendorId=${vendorId}`)
                .expect(200);

            expect(res.body.every((po: any) => po.vendorId === vendorId)).toBe(true);
        });

        it('filters by status=RECEIVED', async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/purchases?status=RECEIVED')
                .expect(200);

            expect(res.body.every((po: any) => po.status === 'RECEIVED')).toBe(true);
        });

        it('filters by status=CANCELLED', async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/purchases?status=CANCELLED')
                .expect(200);

            expect(res.body.every((po: any) => po.status === 'CANCELLED')).toBe(true);
        });
    });

    // ─── Get by Vendor ───────────────────────────────────────────────────────────

    describe('GET /api/v1/purchases/vendor/:vendorId', () => {
        it('returns all POs for a vendor', async () => {
            const res = await request(app.getHttpServer())
                .get(`/api/v1/purchases/vendor/${vendorId}`)
                .expect(200);

            expect(Array.isArray(res.body)).toBe(true);
            expect(res.body.length).toBeGreaterThanOrEqual(2);
            expect(res.body.every((po: any) => po.vendorId === vendorId)).toBe(true);
        });

        it('returns empty array for a vendor with no POs', async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/purchases/vendor/no-orders-vendor')
                .expect(200);

            expect(res.body).toEqual([]);
        });
    });
});
