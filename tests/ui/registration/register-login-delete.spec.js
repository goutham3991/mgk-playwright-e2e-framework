import { test, expect } from '@playwright/test';
import LoginPage from '../../../pages/LoginPage';
import SignUpPage from '../../../pages/SignUpPage';
import HomePage from '../../../pages/HomePage';

test.describe('Registration Page', () => {
    test('TC01: Verify Registration, login and delete functionality', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const signupPage = new SignUpPage(page);
        const homePage = new HomePage(page);

        // Generate a unique email ID in the format hulk+date+timestamp@gmail.com
        const date = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format
        const timestamp = Date.now(); // Current timestamp in milliseconds
        const name = 'hulk'
        const email = `${name}${date}${timestamp}@gmail.com`;
        const password = 'test@123' //hardcoding for now, later will figureout something dynamic and store cred in a file inside repo

        await loginPage.navigateToLoginPage();
        await loginPage.signUp(name, email);
        await signupPage.verifySignUpPageWithExpectedDetails(name,email);
        await signupPage.fillRegistrationForm({
            gender: 'Mr.',
            password: password,
            day: '10',
            month: 'March',
            year: '1990',
            firstName: name,
            lastName: 'Smash',
            company: 'Avengers',
            address: '123 Main Street',
            address2: 'Apt 4B',
            country: 'India',
            state: 'Telangana',
            city: 'Hyderabad',
            zipcode: '500084',
            mobileNumber: '1234567890',
        });
        await signupPage.continueShopping();
        await homePage.verifyUserName(name);
        //delete created account and confirm URL
        await homePage.deleteAccount();
    });
});