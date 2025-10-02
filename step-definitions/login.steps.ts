import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

Given('I am on the login page', async function (this: CustomWorld) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
});

When('I login with username {string} and password {string}', async function (this: CustomWorld, username: string, password: string) {
  this.loginPage = new LoginPage(this.page);
  // If password is 'wrong_password', do not expect navigation
  const expectSuccess = password !== 'wrong_password';
  await this.loginPage.login(username, password, expectSuccess);
});

Then('I should see the products page', async function (this: CustomWorld) {
  this.inventoryPage = new InventoryPage(this.page);
  expect(await this.inventoryPage.isVisible()).toBeTruthy();
});

Then('I should see an error message for invalid credentials', async function (this: CustomWorld) {
  this.loginPage = new LoginPage(this.page);
  const errorMsg = await this.loginPage.getErrorMessage();
  expect(errorMsg?.trim()).toBe('Epic sadface: Username and password do not match any user in this service');
});
