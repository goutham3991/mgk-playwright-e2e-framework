import {test,expect} from '@playwright/test'
import CartPage from '../../../pages/CartPage';
import loginData from '../../../test-data/loginData';

test.use({
    storageState: 'auth/user.json'
});

test.describe('Subscription',()=>{
    test('TC11: Verify Subscription in cart page',async({page})=>{
        const { email} = loginData.validUser;
        const cartPage = new CartPage(page)
        await cartPage.navigateToCartPage()
        await cartPage.enterSubscriptionEmail(email)
        await cartPage.clickSubscribe()
        await cartPage.subscriptionMessage()
    })
})