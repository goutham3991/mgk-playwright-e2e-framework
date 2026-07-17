import { test, expect } from '@playwright/test';
import LoginPage from '../../../pages/LoginPage';
import ContactUs from '../../../pages/ContactUsPage';

test.describe('Verify Contact Us Page functionality',()=>{
    test('TC06: Contact us Form',async({page})=>{
        const loginPage = new LoginPage(page)
        const contactus = new ContactUs(page)
        await loginPage.navigateToLoginPage()
        await loginPage.goToContactUsPage()
        await contactus.verifyContactUsPage()
        await contactus.fillContactUs({
            name: "Automation Tester",
            email: "AutomationTester@gmail.com",
            subject: "Automation Testing is InProgres",
            message: "Automating End To End Test Cases for E-Commerce Application"
        })
        await contactus.goTohome()
    })
})