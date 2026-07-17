import { expect } from '@playwright/test';

class SignUpPage {
    constructor(page) {
        this.page = page;
        this.registrationPage = page.getByText('Enter Account Information');
        this.addressInformation = page.getByText('Address Information');
        this.accountCreationConfirmation = page.getByText('Account Created!')
        this.congratulationMessage = page.getByText('Congratulations! Your new account has been successfully created!')
        this.name = page.locator('[data-qa="name"]');
        this.email = page.locator('[data-qa="email"]');
        this.password = page.locator('[data-qa="password"]');
        this.selectDay = page.locator('[data-qa="days"]');
        this.selectMonth = page.locator('[data-qa="months"]');
        this.selectYear = page.locator('[data-qa="years"]');
        this.firstName = page.locator('[data-qa="first_name"]');
        this.lastName = page.locator('[data-qa="last_name"]');
        this.company = page.locator('[data-qa="company"]');
        this.address = page.locator('[data-qa="address"]');
        this.address2 = page.locator('[data-qa="address2"]');
        this.country = page.locator('[data-qa="country"]');
        this.state = page.locator('[data-qa="state"]');
        this.city = page.locator('[data-qa="city"]');
        this.zipcode = page.locator('[data-qa="zipcode"]');
        this.mobileNumber = page.locator('[data-qa="mobile_number"]');
        this.createAccount = page.locator('[data-qa="create-account"]');
        this.continueButton = page.locator('[data-qa="continue-button"]');
    }

    async verifySignUpPageWithExpectedDetails(expectedName, expectedEmail) {
        await expect(this.page).toHaveURL(/\/signup/);
        await expect(this.registrationPage).toBeVisible();
        await expect(this.name).toHaveValue(expectedName);
        await expect(this.email).toHaveValue(expectedEmail);
        await expect(this.addressInformation).toBeVisible();
    }

    async selectGender(gender) {
        const genderLocator = this.page.getByRole('radio', { name: gender });
        await genderLocator.click();
    }

    async enterPassword(password) {
        await this.password.fill(password);
    }

    async selectDate(day, month, year) {
        await this.selectDay.selectOption(day);
        await this.selectMonth.selectOption(month);
        await this.selectYear.selectOption(year);
    }

    async verifyConfirmationMessage(){
        await page.waitForLoadState('networkidle')
        await this.accountCreationConfirmation.toBeVisible()
        await this.congratulationMessage.toBeVisible()
    }

    async fillRegistrationForm({
        gender,
        name,
        email,
        password,
        day,
        month,
        year,
        firstName,
        lastName,
        company,
        address,
        address2,
        country,
        state,
        city,
        zipcode,
        mobileNumber,
    }) {
        await this.selectGender(gender);
        await this.enterPassword(password);
        await this.selectDate(day, month, year);
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.company.fill(company);
        await this.address.fill(address);
        await this.address2.fill(address2);
        await this.country.selectOption(country);
        await this.state.fill(state);
        await this.city.fill(city);
        await this.zipcode.fill(zipcode);
        await this.mobileNumber.fill(mobileNumber);
        await this.createAccount.click();
        await expect(this.page).toHaveURL(/\/account_created/)
    }

    async continueShopping(){
        await this.continueButton.click()
    }


}

export default SignUpPage;