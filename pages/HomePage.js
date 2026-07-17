import { expect } from "@playwright/test"

class HomePage{
    constructor(page){
        this.page=page
        this.loggedInAs = page.locator('li b')
        this.deleteAccountButton = page.locator('a[href*="delete_account"]')

    }

    async verifyUserName(name){
        await expect(this.loggedInAs).toHaveText(name)

    }

    async deleteAccount(){
        this.deleteAccountButton.click()
        await expect(this.page).toHaveURL(/\/delete_account/)
    }
}

export default HomePage;