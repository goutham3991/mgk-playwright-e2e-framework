import { test, expect } from '@playwright/test';
import LoginPage from '../../../pages/LoginPage';

test.describe('Login with invalid user',()=>{
    test('TC-03: Login User with incorrect email and password',async({page})=>{
        const loginPage = new LoginPage(page);
        const invalidEmail = 'invalidEmail@gmail.com'
        const invalidPassword = 'invalidPassword'
        await loginPage.navigateToLoginPage()
        await loginPage.login(invalidEmail,invalidPassword)
        await loginPage.verifyLoginErrorMsg()
    })
})