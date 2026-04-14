import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { createTestApp, cleanInventoryDb, cleanProductionDb } from '../helpers/app.setup';

describe('Filling Orders (e2e)', () => {
    let app: INestApplication;

    let productId: string;
    let variantItemId: string;
    let fillingOrderId: string;

    beforeAll(async () => {
        app = await createTestApp();
        await cleanProductionDb(app);
        await cleanInventoryDb(app);

        // Create product
        const productRes = await request(app.getHttpServer())
            .post('/api/v1/inventory/products')
            .send({ name: 'Test Soap', referenceBatchGm: 3000, referenceDurationMin: 60, referenceWastePercent: 5 })
            .expect(201);
        productId = productRes.body.id;

        // Create FINAL_PRODUCT variant
        const itemRes = await request(app.getHttpServer())
            .post('/api/v1/inventory/items')
            .send({ name: 'Soap Bar 100g', type: 'FINAL_PRODUCT', measureUnit: 'PCS', unitWeightGm: 100, productId })
            .expect(201);
        variantItemId = itemRes.body.id;

        // Create a DRAFT filling order
        const foRes = await request(app.getHttpServer())
            .post('/api/v1/filling-orders')
            .send({
                productId,
                lines: [{ variantItemId, quantityUnits: 5, unitWeightGm: 100 }],
                notes: 'original notes',
            })
            .expect(201);
        fillingOrderId = foRes.body.id;
    });

    afterAll(async () => {
        await app.close();
    });

    // ─── PATCH (update notes) ─────────────────────────────────────────────────────

    describe('PATCH /api/v1/filling-orders/:id', () => {
        it('updates notes on a DRAFT order → 200 with updated notes', async () => {
            const res = await request(app.getHttpServer())
                .patch(`/api/v1/filling-orders/${fillingOrderId}`)
                .send({ notes: 'updated notes' })
                .expect(200);

            expect(res.body.id).toBe(fillingOrderId);
            expect(res.body.notes).toBe('updated notes');
            expect(res.body.status).toBe('DRAFT');
        });

        it('GET after PATCH reflects the updated notes', async () => {
            const res = await request(app.getHttpServer())
                .get(`/api/v1/filling-orders/${fillingOrderId}`)
                .expect(200);

            expect(res.body.notes).toBe('updated notes');
        });

        it('clears notes when null is sent', async () => {
            const res = await request(app.getHttpServer())
                .patch(`/api/v1/filling-orders/${fillingOrderId}`)
                .send({ notes: null })
                .expect(200);

            expect(res.body.notes).toBeNull();
        });

        it('returns 404 for non-existent order id', async () => {
            await request(app.getHttpServer())
                .patch('/api/v1/filling-orders/non-existent-id')
                .send({ notes: 'test' })
                .expect(404);
        });

        it('returns 409 when order is not in DRAFT status', async () => {
            // Create a second order and confirm it
            const foRes = await request(app.getHttpServer())
                .post('/api/v1/filling-orders')
                .send({
                    productId,
                    lines: [{ variantItemId, quantityUnits: 2, unitWeightGm: 100 }],
                    notes: 'to be confirmed',
                })
                .expect(201);
            const confirmedOrderId = foRes.body.id;

            await request(app.getHttpServer())
                .post(`/api/v1/filling-orders/${confirmedOrderId}/confirm`)
                .expect(204);

            await request(app.getHttpServer())
                .patch(`/api/v1/filling-orders/${confirmedOrderId}`)
                .send({ notes: 'should fail' })
                .expect(409);
        });
    });

    // ─── POST lines (add) ────────────────────────────────────────────────────────

    describe('POST /api/v1/filling-orders/:id/lines', () => {
        let addedLineId: string;

        it('adds a line to a DRAFT order → 201 with updated lines array', async () => {
            // Create a second FINAL_PRODUCT variant
            const item2Res = await request(app.getHttpServer())
                .post('/api/v1/inventory/items')
                .send({ name: 'Soap Bar 200g', type: 'FINAL_PRODUCT', measureUnit: 'PCS', unitWeightGm: 200, productId })
                .expect(201);
            const variant2Id = item2Res.body.id;

            const res = await request(app.getHttpServer())
                .post(`/api/v1/filling-orders/${fillingOrderId}/lines`)
                .send({ variantItemId: variant2Id, quantityUnits: 3 })
                .expect(201);

            expect(res.body.id).toBe(fillingOrderId);
            expect(res.body.lines.length).toBe(2);
            const added = res.body.lines.find((l: any) => l.variantItemId === variant2Id);
            expect(added).toBeDefined();
            expect(added.quantityUnits).toBe(3);
            expect(added.unitWeightGm).toBe(200);
            addedLineId = added.id;
        });

        it('returns 404 for non-existent order', async () => {
            await request(app.getHttpServer())
                .post('/api/v1/filling-orders/non-existent-id/lines')
                .send({ variantItemId, quantityUnits: 1 })
                .expect(404);
        });

        it('returns 409 when order is not DRAFT', async () => {
            const foRes = await request(app.getHttpServer())
                .post('/api/v1/filling-orders')
                .send({
                    productId,
                    lines: [{ variantItemId, quantityUnits: 1, unitWeightGm: 100 }],
                })
                .expect(201);
            const nonDraftId = foRes.body.id;

            await request(app.getHttpServer())
                .post(`/api/v1/filling-orders/${nonDraftId}/confirm`)
                .expect(204);

            await request(app.getHttpServer())
                .post(`/api/v1/filling-orders/${nonDraftId}/lines`)
                .send({ variantItemId, quantityUnits: 2 })
                .expect(409);
        });

        // ─── PATCH line (update) ──────────────────────────────────────────────

        describe('PATCH /api/v1/filling-orders/:id/lines/:lineId', () => {
            it('updates quantityUnits → recalculates bulkUsedGm', async () => {
                const res = await request(app.getHttpServer())
                    .patch(`/api/v1/filling-orders/${fillingOrderId}/lines/${addedLineId}`)
                    .send({ quantityUnits: 10 })
                    .expect(200);

                const updated = res.body.lines.find((l: any) => l.id === addedLineId);
                expect(updated.quantityUnits).toBe(10);
                expect(updated.bulkUsedGm).toBe(10 * 200);
            });

            it('returns 404 for non-existent lineId', async () => {
                await request(app.getHttpServer())
                    .patch(`/api/v1/filling-orders/${fillingOrderId}/lines/non-existent-line`)
                    .send({ quantityUnits: 5 })
                    .expect(404);
            });

            it('returns 409 when order is not DRAFT', async () => {
                const foRes = await request(app.getHttpServer())
                    .post('/api/v1/filling-orders')
                    .send({
                        productId,
                        lines: [{ variantItemId, quantityUnits: 1, unitWeightGm: 100 }],
                    })
                    .expect(201);
                const nonDraftId = foRes.body.id;
                const lineId = foRes.body.lines[0].id;

                await request(app.getHttpServer())
                    .post(`/api/v1/filling-orders/${nonDraftId}/confirm`)
                    .expect(204);

                await request(app.getHttpServer())
                    .patch(`/api/v1/filling-orders/${nonDraftId}/lines/${lineId}`)
                    .send({ quantityUnits: 5 })
                    .expect(409);
            });
        });

        // ─── DELETE line (remove) ─────────────────────────────────────────────

        describe('DELETE /api/v1/filling-orders/:id/lines/:lineId', () => {
            it('removes the line → 204, line absent in subsequent GET', async () => {
                await request(app.getHttpServer())
                    .delete(`/api/v1/filling-orders/${fillingOrderId}/lines/${addedLineId}`)
                    .expect(204);

                const res = await request(app.getHttpServer())
                    .get(`/api/v1/filling-orders/${fillingOrderId}`)
                    .expect(200);

                const found = res.body.lines.find((l: any) => l.id === addedLineId);
                expect(found).toBeUndefined();
            });

            it('returns 404 for non-existent lineId', async () => {
                await request(app.getHttpServer())
                    .delete(`/api/v1/filling-orders/${fillingOrderId}/lines/non-existent-line`)
                    .expect(404);
            });

            it('returns 409 when order is not DRAFT', async () => {
                const foRes = await request(app.getHttpServer())
                    .post('/api/v1/filling-orders')
                    .send({
                        productId,
                        lines: [{ variantItemId, quantityUnits: 1, unitWeightGm: 100 }],
                    })
                    .expect(201);
                const nonDraftId = foRes.body.id;
                const lineId = foRes.body.lines[0].id;

                await request(app.getHttpServer())
                    .post(`/api/v1/filling-orders/${nonDraftId}/confirm`)
                    .expect(204);

                await request(app.getHttpServer())
                    .delete(`/api/v1/filling-orders/${nonDraftId}/lines/${lineId}`)
                    .expect(409);
            });
        });
    });
});
