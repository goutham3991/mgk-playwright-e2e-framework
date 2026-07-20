import { test, expect } from '@playwright/test';
import LoginPage from '../../../pages/LoginPage';
import loginData from '../../../test-data/loginData';

test.describe('Verify Logout Functionality',()=>{
    test('TC02 & TC04: Logout User',async({page})=>{
        const loginPage = new LoginPage(page);
        const { email, password } = loginData.validUser;
        await loginPage.navigateToLoginPage()
        await loginPage.login(email,password)
    })
})