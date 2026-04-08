import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { createTestApp, cleanRecipeDb, cleanInventoryDb } from '../helpers/app.setup';

describe('Recipes (e2e)', () => {
    let app: INestApplication;

    let productId: string;
    let versionId: string;
    let versionId2: string;
    let ingredientId: string;
    let addOnIngredientId: string;

    beforeAll(async () => {
        app = await createTestApp();
        await cleanRecipeDb(app);
        await cleanInventoryDb(app);

        // Recipe now validates that the Product exists in inventory — create one first
        const productRes = await request(app.getHttpServer())
            .post('/api/v1/inventory/products')
            .send({ name: 'Test Formula Product' })
            .expect(201);
        productId = productRes.body.id;
    });

    afterAll(async () => {
        await app.close();
    });

    // ─── Create Recipe Version ───────────────────────────────────────────────────

    describe('POST /api/v1/recipes', () => {
        it('creates first DRAFT version and returns 201 with versionNumber=1', async () => {
            const res = await request(app.getHttpServer())
                .post('/api/v1/recipes')
                .send({ productId, notes: 'Initial formula' })
                .expect(201);

            expect(res.body.productId).toBe(productId);
            expect(res.body.status).toBe('DRAFT');
            expect(res.body.versionNumber).toBe(1);
            expect(res.body.notes).toBe('Initial formula');
            expect(res.body.ingredients).toEqual([]);
            expect(res.body.id).toBeDefined();
            versionId = res.body.id;
        });

        it('creates second DRAFT version and returns 201 with versionNumber=2', async () => {
            const res = await request(app.getHttpServer())
                .post('/api/v1/recipes')
                .send({ productId })
                .expect(201);

            expect(res.body.versionNumber).toBe(2);
            expect(res.body.status).toBe('DRAFT');
            versionId2 = res.body.id;
        });
    });

    // ─── Add Ingredient ──────────────────────────────────────────────────────────

    describe('POST /api/v1/recipes/:id/ingredients', () => {
        it('adds a base ingredient and returns 201 with updated version', async () => {
            const res = await request(app.getHttpServer())
                .post(`/api/v1/recipes/${versionId}/ingredients`)
                .send({ itemId: 'item-glycerin', itemName: 'Glycerin 99%', quantity: 60 })
                .expect(201);

            expect(res.body.ingredients).toHaveLength(1);
            expect(res.body.ingredients[0].itemId).toBe('item-glycerin');
            expect(res.body.ingredients[0].itemName).toBe('Glycerin 99%');
            expect(res.body.ingredients[0].isAddOn).toBe(false);
            expect(res.body.ingredients[0].quantity).toBe(60);
            ingredientId = res.body.ingredients[0].id;
        });

        it('adds a second base ingredient', async () => {
            const res = await request(app.getHttpServer())
                .post(`/api/v1/recipes/${versionId}/ingredients`)
                .send({ itemId: 'item-water', itemName: 'Distilled Water', quantity: 40 })
                .expect(201);

            expect(res.body.ingredients).toHaveLength(2);
        });

        it('returns 409 when adding duplicate base ingredient (same itemId)', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/recipes/${versionId}/ingredients`)
                .send({ itemId: 'item-glycerin', itemName: 'Glycerin 99%', quantity: 10 })
                .expect(409);
        });

        it('adds an add-on placeholder (FRAGRANCE) and returns 201', async () => {
            const res = await request(app.getHttpServer())
                .post(`/api/v1/recipes/${versionId}/ingredients`)
                .send({ isAddOn: true, ingredientCategory: 'FRAGRANCE', quantity: 2 })
                .expect(201);

            expect(res.body.ingredients).toHaveLength(3);
            const addOn = res.body.ingredients.find((i: any) => i.isAddOn);
            expect(addOn.ingredientCategory).toBe('FRAGRANCE');
            expect(addOn.itemId).toBeNull();
            expect(addOn.itemName).toBeNull();
            addOnIngredientId = addOn.id;
        });

        it('returns 409 when adding duplicate add-on category (same ingredientCategory)', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/recipes/${versionId}/ingredients`)
                .send({ isAddOn: true, ingredientCategory: 'FRAGRANCE', quantity: 3 })
                .expect(409);
        });

        it('adds add-on with resolutionPhase=BULK → reflected in response', async () => {
            const res = await request(app.getHttpServer())
                .post(`/api/v1/recipes/${versionId}/ingredients`)
                .send({ isAddOn: true, ingredientCategory: 'COLORANT', quantity: 1, resolutionPhase: 'BULK' })
                .expect(201);

            const addOn = res.body.ingredients.find((i: any) => i.ingredientCategory === 'COLORANT');
            expect(addOn).toBeDefined();
            expect(addOn.resolutionPhase).toBe('BULK');
        });

        it('add-on ingredient defaults resolutionPhase to FILLING when omitted', async () => {
            const addOn = (await request(app.getHttpServer())
                .get(`/api/v1/recipes/${versionId}`)
                .expect(200)).body.ingredients.find((i: any) => i.ingredientCategory === 'FRAGRANCE');
            expect(addOn.resolutionPhase).toBe('FILLING');
        });
    });

    // ─── Update Ingredient ───────────────────────────────────────────────────────

    describe('PATCH /api/v1/recipes/:id/ingredients/:ingredientId', () => {
        it('updates ingredient quantity and returns 200', async () => {
            await request(app.getHttpServer())
                .patch(`/api/v1/recipes/${versionId}/ingredients/${ingredientId}`)
                .send({ quantity: 55, notes: 'Adjusted for viscosity' })
                .expect(200);
        });
    });

    // ─── Remove Ingredient ───────────────────────────────────────────────────────

    describe('DELETE /api/v1/recipes/:id/ingredients/:ingredientId', () => {
        it('removes add-on ingredient and returns 204', async () => {
            await request(app.getHttpServer())
                .delete(`/api/v1/recipes/${versionId}/ingredients/${addOnIngredientId}`)
                .expect(204);
        });
    });

    // ─── Activate with invalid formula ──────────────────────────────────────────

    describe('POST /api/v1/recipes/:id/activate (invalid formula)', () => {
        it('returns 409 when base ingredients do not sum to 100%', async () => {
            // Currently: glycerin=55 + water=40 = 95, not 100
            await request(app.getHttpServer())
                .post(`/api/v1/recipes/${versionId}/activate`)
                .expect(409);
        });
    });

    // ─── Fix formula then activate ───────────────────────────────────────────────

    describe('POST /api/v1/recipes/:id/activate (valid formula)', () => {
        it('updates glycerin to 60 to make base sum = 100%', async () => {
            await request(app.getHttpServer())
                .patch(`/api/v1/recipes/${versionId}/ingredients/${ingredientId}`)
                .send({ quantity: 60 })
                .expect(200);
        });

        it('activates recipe version and returns 204', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/recipes/${versionId}/activate`)
                .expect(204);
        });

        it('GET by id shows status=ACTIVE', async () => {
            const res = await request(app.getHttpServer())
                .get(`/api/v1/recipes/${versionId}`)
                .expect(200);

            expect(res.body.status).toBe('ACTIVE');
        });
    });

    // ─── Activate second version (auto-archives first) ───────────────────────────

    describe('Activating second version auto-archives first', () => {
        it('adds base ingredients to version 2 summing to 100%', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/recipes/${versionId2}/ingredients`)
                .send({ itemId: 'item-glycerin', itemName: 'Glycerin 99%', quantity: 100 })
                .expect(201);
        });

        it('activates version 2 and returns 204', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/recipes/${versionId2}/activate`)
                .expect(204);
        });

        it('version 1 is now ARCHIVED', async () => {
            const res = await request(app.getHttpServer())
                .get(`/api/v1/recipes/${versionId}`)
                .expect(200);

            expect(res.body.status).toBe('ARCHIVED');
        });

        it('version 2 is ACTIVE', async () => {
            const res = await request(app.getHttpServer())
                .get(`/api/v1/recipes/${versionId2}`)
                .expect(200);

            expect(res.body.status).toBe('ACTIVE');
        });
    });

    // ─── Add ingredient to ACTIVE version → 409 ─────────────────────────────────

    describe('Adding ingredient to ACTIVE version', () => {
        it('returns 409 when trying to add ingredient to an ACTIVE version', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/recipes/${versionId2}/ingredients`)
                .send({ itemId: 'item-water', itemName: 'Water', quantity: 10 })
                .expect(409);
        });
    });

    // ─── Archive ─────────────────────────────────────────────────────────────────

    describe('POST /api/v1/recipes/:id/archive', () => {
        it('archives the ACTIVE version and returns 204', async () => {
            await request(app.getHttpServer())
                .post(`/api/v1/recipes/${versionId2}/archive`)
                .expect(204);
        });

        it('creates a new DRAFT version to test archive DRAFT → 409', async () => {
            const res = await request(app.getHttpServer())
                .post('/api/v1/recipes')
                .send({ productId })
                .expect(201);

            const draftId = res.body.id;

            await request(app.getHttpServer())
                .post(`/api/v1/recipes/${draftId}/archive`)
                .expect(409);
        });
    });

    // ─── Get by ID ───────────────────────────────────────────────────────────────

    describe('GET /api/v1/recipes/:id', () => {
        it('returns 200 with the recipe version', async () => {
            const res = await request(app.getHttpServer())
                .get(`/api/v1/recipes/${versionId}`)
                .expect(200);

            expect(res.body.id).toBe(versionId);
            expect(res.body.productId).toBe(productId);
        });

        it('returns 404 for non-existent id', async () => {
            await request(app.getHttpServer())
                .get('/api/v1/recipes/non-existent-id')
                .expect(404);
        });
    });

    // ─── Get All ─────────────────────────────────────────────────────────────────

    describe('GET /api/v1/recipes', () => {
        it('returns 200 with array of recipe versions', async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/recipes')
                .expect(200);

            expect(Array.isArray(res.body)).toBe(true);
            expect(res.body.length).toBeGreaterThanOrEqual(2);
        });

        it('filters by productId', async () => {
            const res = await request(app.getHttpServer())
                .get(`/api/v1/recipes?productId=${productId}`)
                .expect(200);

            expect(res.body.every((v: any) => v.productId === productId)).toBe(true);
        });

        it('filters by status=ARCHIVED', async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/recipes?status=ARCHIVED')
                .expect(200);

            expect(res.body.every((v: any) => v.status === 'ARCHIVED')).toBe(true);
        });
    });

    // ─── Get Active by Product ───────────────────────────────────────────────────

    describe('GET /api/v1/recipes/product/:productId/active', () => {
        it('returns 404 when no active version exists for product', async () => {
            // All versions are archived now
            await request(app.getHttpServer())
                .get(`/api/v1/recipes/product/${productId}/active`)
                .expect(404);
        });

        it('returns 200 with active version after activation', async () => {
            // Create and activate a new version
            const createRes = await request(app.getHttpServer())
                .post('/api/v1/recipes')
                .send({ productId })
                .expect(201);

            const newVersionId = createRes.body.id;

            await request(app.getHttpServer())
                .post(`/api/v1/recipes/${newVersionId}/ingredients`)
                .send({ itemId: 'item-glycerin', itemName: 'Glycerin 99%', quantity: 100 })
                .expect(201);

            await request(app.getHttpServer())
                .post(`/api/v1/recipes/${newVersionId}/activate`)
                .expect(204);

            const res = await request(app.getHttpServer())
                .get(`/api/v1/recipes/product/${productId}/active`)
                .expect(200);

            expect(res.body.status).toBe('ACTIVE');
            expect(res.body.productId).toBe(productId);
        });

        it('returns 404 for product with no recipes', async () => {
            await request(app.getHttpServer())
                .get('/api/v1/recipes/product/non-existent-product/active')
                .expect(404);
        });
    });

    // ─── Get Versions by Product ─────────────────────────────────────────────────

    describe('GET /api/v1/recipes/product/:productId/versions', () => {
        it('returns all versions for a product ordered by versionNumber asc', async () => {
            const res = await request(app.getHttpServer())
                .get(`/api/v1/recipes/product/${productId}/versions`)
                .expect(200);

            expect(Array.isArray(res.body)).toBe(true);
            expect(res.body.length).toBeGreaterThanOrEqual(2);

            // Check ascending order
            for (let i = 1; i < res.body.length; i++) {
                expect(res.body[i].versionNumber).toBeGreaterThan(res.body[i - 1].versionNumber);
            }

            expect(res.body.every((v: any) => v.productId === productId)).toBe(true);
        });

        it('returns empty array for product with no recipes', async () => {
            const res = await request(app.getHttpServer())
                .get('/api/v1/recipes/product/no-recipes-product/versions')
                .expect(200);

            expect(res.body).toEqual([]);
        });
    });
});
