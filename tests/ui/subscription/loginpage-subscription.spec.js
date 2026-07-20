import {test,expect} from '@playwright/test'
import LoginPage from '../../../pages/LoginPage';
import loginData from '../../../test-data/loginData';

test.describe('Subscription',()=>{
    test('TC10: Verify Subscription in home page',async({page})=>{
        const loginPage = new LoginPage(page)
        const { email} = loginData.validUser;
        await loginPage.navigateToLoginPage()
        await loginPage.enterSubscriptionEmail(email)
        await loginPage.clickSubscribe()
        await loginPage.subscriptionMessage()
    })
})