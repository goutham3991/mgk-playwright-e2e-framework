import { test, expect } from '@playwright/test';

class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginEmail = page.locator('[data-qa="login-email"]');
        this.loginPassword = page.locator('[data-qa="login-password"]');
        this.loginSubmitButton = page.locator('[data-qa="login-button"]');
        this.signUpName = page.locator('[data-qa="signup-name"]');
        this.signUpEmail = page.locator('[data-qa="signup-email"]');
        this.signUpButton = page.locator('[data-qa="signup-button"]');
        this.invalidLoginMessage = page.getByText('Your email or password is incorrect!');
        this.emailAlreadyExists = page.getByText('Email Address already exist!');
        this.contactUs = page.locator('a[href*="/contact_us"]');
        this.subscriptionEmail = page.locator('#susbscribe_email');
        this.subscription = page.locator('#subscribe');
        this.successfulSubscriptionMessage = page.getByText('You have been successfully subscribed!');
    }

    async navigateToLoginPage() {
        await this.page.goto('/login');
    }

    async login(email, password) {
        await this.loginEmail.fill(email);
        await this.loginPassword.fill(password);
        await this.loginSubmitButton.click();
    }

    async signUp(name, email) {
        await this.signUpName.fill(name);
        await this.signUpEmail.fill(email);
        await this.signUpButton.click();
    }

    async verifyLoginErrorMsg(){
        await expect(this.invalidLoginMessage).toBeVisible()
    }

    async verifyEmailAlreadyExistsErrorMsg(){
        await expect(this.emailAlreadyExists).toBeVisible()
    }

    async goToContactUsPage(){
        await this.contactUs.click()
        await expect(this.page).toHaveURL('https://automationexercise.com/contact_us')
    }

    async enterSubscriptionEmail(email){
        await this.subscriptionEmail.scrollIntoViewIfNeeded();
        await this.subscriptionEmail.fill(email)
    }

    async clickSubscribe(){
        await this.subscription.click()
    }

    async subscriptionMessage(){
        console.log(this.successfulSubscriptionMessage)
        await expect(this.successfulSubscriptionMessage).toBeVisible()
    }
}

export default LoginPage;