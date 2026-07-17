import { test, expect } from '@playwright/test';
import LoginPage from '../../../pages/LoginPage';

test.describe('Verify Registration with existing process',()=>{
    test('TC05: Register user with existing email',async({page})=>{
        const loginPage = new LoginPage(page)
        const name = 'goutham'
        const email = 'gouthamkumar.3991@gmail.com'
        await loginPage.navigateToLoginPage()
        await loginPage.signUp(name,email)
        await loginPage.verifyEmailAlreadyExistsErrorMsg()
    })
})