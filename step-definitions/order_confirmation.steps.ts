import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

Given('I have completed a purchase', async function (this: CustomWorld) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
  await this.loginPage.login('standard_user', 'secret_sauce');
  this.productsPage = new ProductsPage(this.page);
  expect(await this.productsPage.isLoaded()).toBeTruthy();
  await this.productsPage.addProductToCart('Sauce Labs Backpack');
  this.cartPage = new CartPage(this.page);
  await this.cartPage.open();
  expect(await this.cartPage.containsProduct('Sauce Labs Backpack')).toBeTruthy();
  this.checkoutPage = new CheckoutPage(this.page);
  await this.checkoutPage.startCheckout();
  await this.checkoutPage.fillInformation('Test', 'User', '12345');
  await this.checkoutPage.finishCheckout();
});

Then('I should see a thank you message', async function (this: CustomWorld) {
  this.checkoutPage = new CheckoutPage(this.page);
  expect(await this.checkoutPage.isOrderComplete()).toBeTruthy();
});
