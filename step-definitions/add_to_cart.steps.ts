
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

Given('I am logged in', async function (this: CustomWorld) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
  await this.loginPage.login('standard_user', 'secret_sauce');
  this.productsPage = new ProductsPage(this.page);
  expect(await this.productsPage.isLoaded()).toBeTruthy();
});

When('I add {string} to the cart', async function (this: CustomWorld, product: string) {
  this.productsPage = new ProductsPage(this.page);
  await this.productsPage.addProductToCart(product);
});

Then('the cart should contain {string}', async function (this: CustomWorld, product: string) {
  this.cartPage = new CartPage(this.page);
  await this.cartPage.open();
  expect(await this.cartPage.containsProduct(product)).toBeTruthy();
});
