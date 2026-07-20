import {test,expect} from '@playwright/test'
import config from '../../../config';

test.describe('Products API',()=>{
    test('TC API 01: Get All Products',async({request})=>{
        const response = await request.get(`${config.apiBaseURL}/productsList`);
        expect (response.status()).toBe(200);
        const body = await response.json();
        expect(body.products.length).toBeGreaterThan(0);
    })
})