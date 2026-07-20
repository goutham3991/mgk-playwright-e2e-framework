import { test, expect } from '../../../fixtures/pageFixtures';

test.describe('Registration Page', () => {
    test('TC01: Verify Registration, login and delete functionality', async ({ loginPage, signUpPage, homePage }) => {

        // Generate a unique email ID in the format hulk+date+timestamp@gmail.com
        const date = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format
        const timestamp = Date.now(); // Current timestamp in milliseconds
        const name = 'hulk'
        const email = `${name}${date}${timestamp}@gmail.com`;
        const password = 'test@123' //hardcoding for now, later will figureout something dynamic and store cred in a file inside repo

        await loginPage.navigateToLoginPage();
        await loginPage.signUp(name, email);
        await signUpPage.verifySignUpPageWithExpectedDetails(name,email);
        await signUpPage.fillRegistrationForm({
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
        await signUpPage.continueShopping();
        await homePage.verifyUserName(name);
        //delete created account and confirm URL
        await homePage.deleteAccount();
    });
});