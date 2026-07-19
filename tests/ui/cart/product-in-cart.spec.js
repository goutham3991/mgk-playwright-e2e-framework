import { test, expect } from '@playwright/test';
import LoginPage from '../../../pages/LoginPage';
import Products from '../../../pages/ProductsPage';
import CartPage from '../../../pages/CartPage';


test.describe('Cart Page',()=>{
    test.beforeEach('login and clear the cart before adding items to cart',async({page})=>{
        const loginPage = new LoginPage(page)
        const email = 'gouthamkumar.3991@gmail.com'
        const password = 'Dumbu@123'
        await loginPage.navigateToLoginPage()
        await loginPage.login(email,password)
        const cartpage = new CartPage(page)
        await cartpage.navigateToCartPage()
        await cartpage.clearTheCart()
    })
    test('TC12: Verify Product Quanity in Cart',async({page})=>{
        const products = new Products(page)
        const cartpage = new CartPage(page)
        await products.goToProducts()
        await products.searchByProduct('Blue Top')
        await products.viewFirstProduct()
        await products.editProductQuantity("4")
        await products.addProductToCartFromDetails()
        await cartpage.navigateToCartPage()
        await cartpage.productsInCart()
    })
})