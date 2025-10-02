import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

Given('I have {string} in my cart', async function (this: CustomWorld, product: string) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
  await this.loginPage.login('standard_user', 'secret_sauce');
  this.productsPage = new ProductsPage(this.page);
  expect(await this.productsPage.isLoaded()).toBeTruthy();
  await this.productsPage.addProductToCart(product);
  this.cartPage = new CartPage(this.page);
  await this.cartPage.open();
  expect(await this.cartPage.containsProduct(product)).toBeTruthy();
});

When('I proceed to checkout', async function (this: CustomWorld) {
  this.cartPage = new CartPage(this.page);
  await this.cartPage.open();
  this.checkoutPage = new CheckoutPage(this.page);
  await this.checkoutPage.startCheckout();
});

When('I enter my information', async function (this: CustomWorld) {
  this.checkoutPage = new CheckoutPage(this.page);
  await this.checkoutPage.fillInformation('Test', 'User', '12345');
});

When('I finish the checkout', async function (this: CustomWorld) {
  this.checkoutPage = new CheckoutPage(this.page);
  await this.checkoutPage.finishCheckout();
});

Then('I should see the order confirmation page', async function (this: CustomWorld) {
  this.checkoutPage = new CheckoutPage(this.page);
  expect(await this.checkoutPage.isOrderComplete()).toBeTruthy();
});
