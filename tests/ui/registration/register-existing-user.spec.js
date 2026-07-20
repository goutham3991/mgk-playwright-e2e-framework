import { test, expect } from '../../../fixtures/pageFixtures';

test.describe('Verify Registration with existing process',()=>{
    test('TC05: Register user with existing email',async({loginPage})=>{
        const name = 'goutham'
        const email = 'gouthamkumar.3991@gmail.com'
        await loginPage.navigateToLoginPage()
        await loginPage.signUp(name,email)
        await loginPage.verifyEmailAlreadyExistsErrorMsg()
    })
})