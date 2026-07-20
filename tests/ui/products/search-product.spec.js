import { test, expect } from '../../../fixtures/pageFixtures';

test.use({
    storageState: 'auth/user.json'
});

test.describe('Products Page',()=>{
    test('TC09: Search Product',async({products})=>{
        await products.goToProducts()
        await products.searchByProduct('Blue Top')
        await products.viewFirstProduct()
        await products.productInformation()
    })
})