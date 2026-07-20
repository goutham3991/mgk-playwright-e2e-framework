import { test, expect } from '../../../fixtures/pageFixtures';

test.use({
    storageState: 'auth/user.json'
});

test.describe('Products Page',()=>{
    test.beforeEach('login and clear the cart before adding items to cart',async({cartPage})=>{
        await cartPage.navigateToCartPage()
        await cartPage.clearTheCart()
    })
    test('TC12: Add Product to cart',async({cartPage, products})=>{
        await products.goToProducts()
        await products.addSelectedProductToCart(0)
        await products.addSelectedProductToCart(2)
        await cartPage.navigateToCartPage()
        await cartPage.productsInCart()
    })
})