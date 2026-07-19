import {test,expect} from '@playwright/test'

class CartPage{
    constructor(page){
        this.page=page
        this.subscriptionEmail = page.locator('#susbscribe_email');
        this.subscription = page.locator('#subscribe');
        this.successfulSubscriptionMessage = page.getByText('You have been successfully subscribed!');
        this.cartItems = page.locator('[id^="product"]')
        this.productDescription = page.locator('.cart_description')
        this.productPrice = page.locator('.cart_price')
        this.productQuantity = page.locator('cart_quantity')

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

    async clearTheCart() {
        const deleteButtons = this.page.locator('.cart_quantity_delete');  
        const count = await deleteButtons.count();
        for (let i = 0; i < count; i++) {
            await deleteButtons.first().click();
        }
    }

    async productsInCart(){
        const cartitems = await this.cartItems.count()
        console.log('total items in cart: ' + cartitems)
        for(let i=0;i<cartitems;i++){
            const productName = await this.cartItems.nth(i).textContent();
            console.log(productName?.trim());
        }
    }
}

export default CartPage;