import { test } from '@playwright/test';
import LoginPage from '../../pages/LoginPage.js';
import loginData from '../../test-data/loginData.js';

test('Authenticate User', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        loginData.validUser.email,
        loginData.validUser.password
    );

    await page.context().storageState({
        path: 'auth/user.json'
    });

});