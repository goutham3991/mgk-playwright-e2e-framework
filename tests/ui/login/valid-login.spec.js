import { test, expect } from '../../../fixtures/pageFixtures';
import loginData from '../../../test-data/loginData';

test.describe('Verify Logout Functionality',()=>{
    test('TC02 & TC04: Logout User',async({loginPage})=>{
        const { email, password } = loginData.validUser;
        await loginPage.navigateToLoginPage()
        await loginPage.login(email,password)
    })
})