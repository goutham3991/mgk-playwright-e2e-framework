import { test, expect } from '../../../fixtures/pageFixtures';

test.describe('Verify Contact Us Page functionality',()=>{
    test('TC06: Contact us Form',async({loginPage,contactUs})=>{
        await loginPage.navigateToLoginPage()
        await loginPage.goToContactUsPage()
        await contactUs.verifyContactUsPage()
        await contactUs.fillContactUs({
            name: "Automation Tester",
            email: "AutomationTester@gmail.com",
            subject: "Automation Testing is InProgres",
            message: "Automating End To End Test Cases for E-Commerce Application"
        })
        await contactUs.goTohome()
    })
})