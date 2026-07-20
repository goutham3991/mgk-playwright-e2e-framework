import { test, expect } from '@playwright/test';
import Products from '../../../pages/ProductsPage';
import CartPage from '../../../pages/CartPage';

test.use({
    storageState: 'auth/user.json'
});

test.describe('Products Page',()=>{
    test.beforeEach('login and clear the cart before adding items to cart',async({page})=>{
        const cartpage = new CartPage(page)
        await cartpage.navigateToCartPage()
        await cartpage.clearTheCart()
    })
    test('TC12: Add Product to cart',async({page})=>{
        const products = new Products(page)
        const cartpage = new CartPage(page)
        await products.goToProducts()
        await products.addSelectedProductToCart(0)
        await products.addSelectedProductToCart(2)
        await cartpage.navigateToCartPage()
        await cartpage.productsInCart()
    })
})