import { test, expect } from '../../../fixtures/pageFixtures';
import loginData from '../../../test-data/loginData';

test.describe('Subscription',()=>{
    test('TC10: Verify Subscription in home page',async({loginPage})=>{
        const { email} = loginData.validUser;
        await loginPage.navigateToLoginPage()
        await loginPage.enterSubscriptionEmail(email)
        await loginPage.clickSubscribe()
        await loginPage.subscriptionMessage()
    })
})