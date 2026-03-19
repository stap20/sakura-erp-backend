import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import {
    createTestApp,
    cleanInventoryDb,
    cleanRecipeDb,
    cleanProductionDb,
} from '../helpers/app.setup';

describe('Production (e2e)', () => {
    let app: INestApplication;

    // Inventory IDs created during setup
    let rawMaterialId: string;
    let finalProductId: string;

    // Recipe version created during setup
    let recipeVersionId: string;

    // Production order IDs
    let draftOrderId: string;
    let confirmOrderId: string;
    let cancelOrderId: string;

    beforeAll(async () => {
        app = await createTestApp();
        await cleanProductionDb(app);
        await cleanRecipeDb(app);
        await cleanInventoryDb(app);

        // ── 1. Create inventory items ──────────────────────────────────────────
        const rawRes = await request(app.getHttpServer())
            .post('/api/v1/inventory/items')
            .send({ name: 'Shea Butter (Prod Test)', type: 'RAW_MATERIAL', measureUnit: 'KG' })
            .expect(201);
        rawMaterialId = rawRes.body.id;

        // Restock the raw material so deduction can succeed
        await request(app.getHttpServer())
            .post(`/api/v1/inventory/items/${rawMaterialId}/restock`)
            .send({ quantity: 100, performedBy: 'setup' })
            .expect(201);

        const fpRes = await request(app.getHttpServer())
            .post('/api/v1/inventory/items')
            .send({
                name: 'Body Butter 125g (Prod Test)',
                type: 'FINAL_PRODUCT',
                measureUnit: 'PCS',
                unitWeightGm: 125,
            })
            .expect(201);
        finalProductId = fpRes.body.id;

        // ── 2. Create and activate a recipe ───────────────────────────────────
        const recipeRes = await request(app.getHttpServer())
            .post('/api/v1/recipes')
            .send({ productId: finalProductId, notes: 'Test recipe' })
            .expect(201);
        recipeVersionId = recipeRes.body.id;

        // Add ingredient (100% shea butter)
        await request(app.getHttpServer())
            .post(`/api/v1/recipes/${recipeVersionId}/ingredients`)
            .send({ itemId: rawMaterialId, itemName: 'Shea Butter (Prod Test)', quantity: 100, isAddOn: false })
            .expect(201);

        // Activate the recipe
        await request(app.getHttpServer())
            .post(`/api/v1/recipes/${recipeVersionId}/activate`)
            .expect(204);
    });

    afterAll(async () => {
        await app.close();
    });

    // ─── Create ───────────────────────────────────────────────────────────────

    describe('POST /api/v1/production-orders', () => {
        it('returns 201 with a DRAFT order when product + recipe are valid', async () => {
            const res = await request(app.getHttpServer())
                .post('/api/v1/production-orders')
                .send({ productId: finalProductId, quantityUnits: 5, wastePercent: 10 })
                .expect(201);

            expect(res.body.status).toBe('DRAFT');
            expect(res.body.productId).toBe(finalProductId);
            expect(res.body.quantityUnits).toBe(5);
            expect(res.body.totalBatchWeightGm).toBe(625); // 5 × 125g
            expect(res.body.wastePercent).toBe(10);
            expect(res.body.lines).toHaveLength(1);
            expect(res.body.lines[0].recipePercent).toBe(100);
            // adjustedQty = (100/100) * 625 * 1.10 = 687.5 grams
            expect(res.body.lines[0].adjustedQuantityGm).toBeCloseTo(687.5, 1);
            draftOrderId = res.body.id;
        });

        it('returns 404 when productId does not exist', async () => {
            await request(app.getHttpServer())
                .post('/api/v1/production-orders')
                .send({ productId: 'non-existent', quantityUnits: 1, wastePercent: 0 })
                .expect(404);
        });

        it('returns 400 when item is not a FINAL_PRODUCT', async () => {
            await request(app.getHttpServer())
                .post('/api/v1/production-orders')
                .send({ productId: rawMaterialId, quantityUnits: 1, wastePercent: 0 })
                .expect(400);
        });

        it('creates a second order for confirm/cancel tests', async () => {
            const res = await request(app.getHttpServer())
                .post('/api/v1/production-orders')
                .send({ productId: finalProductId, quantityUnits: 2, wastePercent: 0 })
                .expect(201);
            confirmOrderId = res.body.id;
        });

        it('creates a third order for cancel-from-draft test', async () => {
            const res = await request(app.getHttpServer())
                .post('/api/v1/production-orders')
                .send({ productId: finalProductId, quantityUnits: 1, wastePercent: 0 })
                .expect(201);
            cancelOrderId = res.body.id;
        });
    });

    // ─── Get by ID ────────────────────────────────────────────────────────────

    describe('GET /api/v1/production-orders/:id', () => {
        it('returns the order', async () => {
            const res = await request(app.getHttpServer())
                .get(`/api/v1/production-orders/${draftOrderId}`)
                .expect(200);

            expect(res.body.id).toBe(draftOrderId);
            expect(res.body.status).toBe('DRAFT');
        });

        it('returns 404 for unknown id', async () => {
            await request(app.getHttpServer())
                .get('/api/v1/production-orders/unknown-id')
                .expect(404);
        });
    });

    // ─── List ─────────────────────────────────────────────────────────────────

    describe('GET /api/v1/production-orders', () => {
        it('returns all orders', async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/production-orders')
                .expect(200);

            expect(Array.isArray(res.body)).toBe(true);
            expect(res.body.length).toBeGreaterThanOrEqual(3);
        });

        it('filters by productId', async () => {
            const res = await request(app.getHttpServer())
                .get(`/api/v1/production-orders?productId=${finalProductId}`)
                .expect(200);

            expect(res.body.every((o: any) => o.productId === finalProductId)).toBe(true);
        });

        it('filters by status=DRAFT', async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/production-orders?status=DRAFT')
                .expect(200);

            expect(res.body.every((o: any) => o.status === 'DRAFT')).toBe(true);
        });
    });

    // ─── Update notes ─────────────────────────────────────────────────────────

    describe('PATCH /api/v1/production-orders/:id/notes', () => {
        it('updates notes on a DRAFT order', async () => {
            const res = await request(app.getHttpServer())
                .patch(`/api/v1/production-orders/${draftOrderId}/notes`)
                .send({ notes: 'Updated notes' })
                .expect(200);

            expect(res.body.notes).toBe('Updated notes');
        });
    });

    // ─── Confirm ──────────────────────────────────────────────────────────────

    describe('POST /api/v1/production-orders/:id/confirm', () => {
        it('confirms a DRAFT order → CONFIRMED', async () => {
            const res = await request(app.getHttpServer())
                .post(`/api/v1/production-orders/${confirmOrderId}/confirm`)
                .expect(200);

            expect(res.body.status).toBe('CONFIRMED');
        });

        it('returns 409 when trying to confirm a non-DRAFT order', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/production-orders/${confirmOrderId}/confirm`)
                .expect(409);
        });
    });

    // ─── Cancel ───────────────────────────────────────────────────────────────

    describe('POST /api/v1/production-orders/:id/cancel', () => {
        it('cancels a DRAFT order → CANCELLED', async () => {
            const res = await request(app.getHttpServer())
                .post(`/api/v1/production-orders/${cancelOrderId}/cancel`)
                .expect(200);

            expect(res.body.status).toBe('CANCELLED');
        });

        it('returns 409 when trying to cancel a CANCELLED order', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/production-orders/${cancelOrderId}/cancel`)
                .expect(409);
        });

        it('can cancel a CONFIRMED order → CANCELLED', async () => {
            // Create and confirm a new order
            const createRes = await request(app.getHttpServer())
                .post('/api/v1/production-orders')
                .send({ productId: finalProductId, quantityUnits: 1, wastePercent: 0 })
                .expect(201);
            const tempId = createRes.body.id;

            await request(app.getHttpServer())
                .post(`/api/v1/production-orders/${tempId}/confirm`)
                .expect(200);

            const cancelRes = await request(app.getHttpServer())
                .post(`/api/v1/production-orders/${tempId}/cancel`)
                .expect(200);

            expect(cancelRes.body.status).toBe('CANCELLED');
        });
    });

    // ─── Execute ──────────────────────────────────────────────────────────────

    describe('POST /api/v1/production-orders/:id/execute', () => {
        it('returns 409 when order is not CONFIRMED', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/production-orders/${draftOrderId}/execute`)
                .send({ performedBy: 'operator-01' })
                .expect(409);
        });

        it('executes CONFIRMED order → EXECUTED, deducts ingredients, restocks product', async () => {
            // Get raw material stock before
            const rawBefore = await request(app.getHttpServer())
                .get(`/api/v1/inventory/items/${rawMaterialId}`)
                .expect(200);
            const stockBefore = rawBefore.body.currentStock;

            // Get final product stock before
            const fpBefore = await request(app.getHttpServer())
                .get(`/api/v1/inventory/items/${finalProductId}`)
                .expect(200);
            const fpStockBefore = fpBefore.body.currentStock;

            // Execute
            const res = await request(app.getHttpServer())
                .post(`/api/v1/production-orders/${confirmOrderId}/execute`)
                .send({ performedBy: 'operator-01' })
                .expect(200);

            expect(res.body.status).toBe('EXECUTED');
            expect(res.body.executedAt).toBeDefined();

            // Verify raw material was deducted
            const rawAfter = await request(app.getHttpServer())
                .get(`/api/v1/inventory/items/${rawMaterialId}`)
                .expect(200);
            expect(rawAfter.body.currentStock).toBeLessThan(stockBefore);

            // Verify final product was restocked (+2 units)
            const fpAfter = await request(app.getHttpServer())
                .get(`/api/v1/inventory/items/${finalProductId}`)
                .expect(200);
            expect(fpAfter.body.currentStock).toBe(fpStockBefore + 2);
        });

        it('returns 409 when trying to execute again (already EXECUTED)', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/production-orders/${confirmOrderId}/execute`)
                .send({ performedBy: 'operator-01' })
                .expect(409);
        });
    });
});
