import {test,expect} from '@playwright/test'
import LoginPage from '../../../pages/LoginPage';

test.describe('Subscription',()=>{
    test('TC10: Verify Subscription in home page',async({page})=>{
        const loginPage = new LoginPage(page)
        await loginPage.navigateToLoginPage()
        await loginPage.enterSubscriptionEmail('gouthamkumar.3991@gmail.com')
        await loginPage.clickSubscribe()
        await loginPage.subscriptionMessage()
    })
})