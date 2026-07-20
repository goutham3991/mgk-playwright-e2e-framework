import { test, expect } from '../../../fixtures/pageFixtures';
import loginData from '../../../test-data/loginData';

test.use({
    storageState: 'auth/user.json'
});

test.describe('Subscription',()=>{
    test('TC11: Verify Subscription in cart page',async({cartPage})=>{
        const { email} = loginData.validUser;
        await cartPage.navigateToCartPage()
        await cartPage.enterSubscriptionEmail(email)
        await cartPage.clickSubscribe()
        await cartPage.subscriptionMessage()
    })
})