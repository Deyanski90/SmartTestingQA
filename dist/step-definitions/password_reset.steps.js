"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const test_1 = require("@playwright/test");
(0, cucumber_1.Given)('I am on the login page', async function () {
    await this.launchBrowser();
    await this.page.goto(this.baseUrl);
});
(0, cucumber_1.When)('I click the {string} link', async function (linkText) {
    await this.page.click(`text=${linkText}`);
});
(0, cucumber_1.When)('I enter my email address', async function () {
    await this.page.fill('input[type="email"]', 'test@example.com');
});
(0, cucumber_1.When)('I submit the password reset form', async function () {
    await this.page.click('button[type="submit"]');
});
(0, cucumber_1.Then)('I should see a confirmation message', async function () {
    await (0, test_1.expect)(this.page.locator('.confirmation-message')).toBeVisible();
});
