import { test as base, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import CartPage from '../pages/CartPage';
import ContactUs from '../pages/ContactUsPage';
import Products from '../pages/ProductsPage';
import SignUpPage from '../pages/SignUpPage';
import TestCases from '../pages/TestCasePage';

export const test = base.extend({

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));

    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    cartPage: async({page}, use)=>{
        await use(new CartPage(page))
    },

    contactUs: async({page}, use)=>{
        await use(new ContactUs(page))
    },

    products: async ({page}, use)=>{
        await use(new Products(page))
    },

    signUpPage: async ({page}, use)=>{
        await use(new SignUpPage(page))
    },

    testCases: async ({page}, use)=>{
        await use(new TestCases(page))
    },

});

export{expect}