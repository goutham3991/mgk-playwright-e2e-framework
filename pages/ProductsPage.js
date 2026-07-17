import {test,expect} from '@playwright/test'

class Products{
    constructor(page){
        this.page=page
        this.productSearchBox= page.getByPlaceholder('Search Product')
        this.productSearch = page.locator('#submit_search')
        this.viewProduct = page.getByText('View Product').first()
        this.singleProduct = page.locator('.single-products p').first()
    }

    async goToProducts(){
        await this.page.goto('/products')
    }

    async searchByProduct(product) {
        await this.productSearchBox.fill(product);
        await this.productSearch.click();
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
}

export default Products