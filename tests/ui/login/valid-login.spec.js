import { test, expect } from '@playwright/test';
import LoginPage from '../../../pages/LoginPage';

test.describe('Verify Logout Functionality',()=>{
    test('TC02 & TC04: Logout User',async({page})=>{
        const loginPage = new LoginPage(page);
        const email = 'gouthamkumar.3991@gmail.com'
        const password = 'Dumbu@123'
        await loginPage.navigateToLoginPage()
        await loginPage.login(email,password)
    })
})