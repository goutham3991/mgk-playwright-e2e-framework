import { test, expect } from '@playwright/test';
import Products from '../../../pages/ProductsPage';

test.use({
    storageState: 'auth/user.json'
});

test.describe('Products Page',()=>{
    test('TC08: Verify All Products and product detail page',async({page})=>{
        const products = new Products(page)
        await products.goToProducts()
        await products.viewFirstProduct()
        await products.productInformation()
    })
})