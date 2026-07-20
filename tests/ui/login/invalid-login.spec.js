import { test, expect } from '@playwright/test';
import LoginPage from '../../../pages/LoginPage';
import loginData from '../../../test-data/loginData';

test.describe('Login with invalid user',()=>{
    test.skip('TC-03: Login User with incorrect email and password',async({page})=>{
        const loginPage = new LoginPage(page);
        const { email, password } = loginData.invalidUser;
        await loginPage.navigateToLoginPage()
        await loginPage.login(email,password)
        await loginPage.verifyLoginErrorMsg()
    })
})