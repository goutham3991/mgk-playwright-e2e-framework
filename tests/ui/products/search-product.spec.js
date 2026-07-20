import { test, expect } from '@playwright/test';
import Products from '../../../pages/ProductsPage';

test.use({
    storageState: 'auth/user.json'
});

test.describe('Products Page',()=>{
    test('TC09: Search Product',async({page})=>{
        const products = new Products(page)
        await products.goToProducts()
        await products.searchByProduct('Blue Top')
        await products.viewFirstProduct()
        await products.productInformation()
    })
})