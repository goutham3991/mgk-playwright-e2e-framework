import { test, expect } from '../../../fixtures/pageFixtures';

test.use({
    storageState: 'auth/user.json'
});

test.describe('Products Page',()=>{
    test('TC08: Verify All Products and product detail page',async({products})=>{
        await products.goToProducts()
        await products.viewFirstProduct()
        await products.productInformation()
    })
})