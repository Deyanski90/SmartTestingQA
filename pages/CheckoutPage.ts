import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async startCheckout() {
    await this.page.click('button[data-test="checkout"]');
  }

  async fillInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('input[data-test="firstName"]', firstName);
    await this.page.fill('input[data-test="lastName"]', lastName);
    await this.page.fill('input[data-test="postalCode"]', postalCode);
    await this.page.click('input[data-test="continue"]');
  }

  async finishCheckout() {
    await this.page.click('button[data-test="finish"]');
  }

  async isOrderComplete() {
    return this.page.locator('.complete-header').isVisible();
  }
}
