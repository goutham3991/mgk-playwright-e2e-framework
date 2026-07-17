import {test,expect} from '@playwright/test'

class CartPage{
    constructor(page){
        this.page=page
        this.subscriptionEmail = page.locator('#susbscribe_email');
        this.subscription = page.locator('#subscribe');
        this.successfulSubscriptionMessage = page.getByText('You have been successfully subscribed!');
    }

    async navigateToCartPage(){
        await this.page.goto('/view_cart')
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

export default CartPage;