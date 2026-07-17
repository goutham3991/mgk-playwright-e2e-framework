import {expect} from "@playwright/test"

class ContactUs {
    constructor(page){
        this.page=page
        this.contactUsSection = page.getByText('Contact us').first()
        this.getInTouch = page.getByText('Get In Touch')
        this.name = page.locator('[data-qa="name"]')
        this.email = page.locator('[data-qa="email"]')
        this.subject = page.locator('[data-qa="subject"]')
        this.message = page.locator('[data-qa="message"]')
        this.submit = page.locator('[data-qa="submit-button"]')
        this.successMessage = page.getByText('Success! Your details have been submitted successfully.').first()
        this.homeButton = page.locator('.fa-angle-double-left')


    }

    async verifyContactUsPage(){
        await expect(this.contactUsSection).toBeVisible();
        await expect(this.getInTouch).toBeVisible();
    }

    async fillContactUs({
        name,
        email,
        subject,
        message
    }){
        await this.name.fill(name)
        await this.email.fill(email)
        await this.subject.fill(subject)
        await this.message.fill(message)
        this.page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        });
        await this.submit.click()
        await expect(this.successMessage).toBeVisible()
    }

    async goTohome(){
        await this.homeButton.click()
        await expect(this.page).toHaveURL('https://automationexercise.com/')
    }
}

export default ContactUs