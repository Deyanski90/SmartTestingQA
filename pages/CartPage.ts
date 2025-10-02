import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.click('.shopping_cart_link');
  }

  async containsProduct(product: string) {
    return this.page.locator('.cart_item:has-text("' + product + '")').isVisible();
  }
}
