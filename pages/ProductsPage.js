import {test,expect} from '@playwright/test'

class Products{
    constructor(page){
        this.page=page
        this.productSearchBox= page.getByPlaceholder('Search Product')
        this.productSearch = page.locator('#submit_search')
        this.viewProduct = page.getByText('View Product').first()
        this.singleProduct = page.locator('.single-products p').first()
        this.addToCart = page.locator('.add-to-cart')
        this.addToCartFromDetails = page.getByRole('button',{name:"Add to cart"})
        this.continueShopping = page.getByText('Continue Shopping')
        this.productQuantity = page.locator('#quantity').last()
    }

    async goToProducts(){
        await this.page.goto('/products')
    }

    async addProductToCartFromDetails(){
        await this.addToCartFromDetails.click()
    }

    async searchByProduct(product) {
        await this.productSearchBox.fill(product);
        await this.productSearch.click();
        await this.page.waitForLoadState('networkidle');
        await this.singleProduct.waitFor({
            state: 'visible'
        });
        await expect(this.singleProduct).toHaveText(product);
    }

    async viewFirstProduct(){
        await this.viewProduct.click()
    }

    async productInformation(){
        const productName = await this.page.locator('.product-information h2').textContent()
        console.log(productName)
        const productCategory = await this.page.locator('.product-information p').first().textContent()
        console.log(productCategory)
        const productPrice = await this.page.locator('.product-information span span').textContent()
        console.log(productPrice)
        const productAvailability = await this.page.locator('.product-information p').nth(1).textContent()
        console.log(productAvailability)
        const productCondition = await this.page.locator('.product-information p').nth(2).textContent()
        console.log(productCondition)
        const productBrand = await this.page.locator('.product-information p').nth(3).textContent()
        console.log(productBrand)
    }

    async addSelectedProductToCart(number){
        await this.addToCart.nth(number).click()
        await this.continueShopping.click()
    }

    async addProductToCart(){
        await this.addToCart.first().click()
        await this.continueShopping.click()
    }

    async editProductQuantity(quantity){
        await this.productQuantity.click()
        await this.productQuantity.clear()
        await this.productQuantity.type(quantity)
    }

}

export default Products