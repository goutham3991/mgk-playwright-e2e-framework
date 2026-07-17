import {test,expect} from '@playwright/test'
import LoginPage from '../../../pages/LoginPage';
import CartPage from '../../../pages/CartPage';

test.describe('Subscription',()=>{
    test('TC11: Verify Subscription in cart page',async({page})=>{
        const loginPage = new LoginPage(page)
        const cartPage = new CartPage(page)
        await loginPage.navigateToLoginPage()
        await loginPage.login('gouthamkumar.3991@gmail.com','Dumbu@123')
        await cartPage.navigateToCartPage()
        await cartPage.enterSubscriptionEmail('gouthamkumar.3991@gmail.com')
        await cartPage.clickSubscribe()
        await cartPage.subscriptionMessage()
    })
})