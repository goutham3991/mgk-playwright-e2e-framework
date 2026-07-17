import { test, expect } from '@playwright/test';
import LoginPage from '../../../pages/LoginPage';
import Products from '../../../pages/ProductsPage';

test.describe('Products Page',()=>{
    test('TC09: Search Product',async({page})=>{
        const loginPage = new LoginPage(page)
        const products = new Products(page)
        const email = 'gouthamkumar.3991@gmail.com'
        const password = 'Dumbu@123'
        await loginPage.navigateToLoginPage()
        await loginPage.login(email,password)
        await products.goToProducts()
        await products.searchByProduct('Blue Top')
        await products.viewFirstProduct()
        await products.productInformation()
    })
})