import { test, expect } from '../../../fixtures/pageFixtures';

test.use({
    storageState: 'auth/user.json'
});

test.describe('Cart Page',()=>{
    test.beforeEach('login and clear the cart before adding items to cart',async({cartPage})=>{
        await cartPage.navigateToCartPage()
        await cartPage.clearTheCart()
    })
    test('TC12: Verify Product Quanity in Cart',async({cartPage,products})=>{
        await products.goToProducts()
        await products.searchByProduct('Blue Top')
        await products.viewFirstProduct()
        await products.editProductQuantity("4")
        await products.addProductToCartFromDetails()
        await cartPage.navigateToCartPage()
        await cartPage.productsInCart()
    })
})