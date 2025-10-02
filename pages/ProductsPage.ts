import { Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async addProductToCart(product: string) {
    const productLocator = this.page.locator('.inventory_item').filter({ hasText: product });
    const addToCartButton = productLocator.locator('button:has-text("Add to cart")');
    await addToCartButton.click();
    await this.page.waitForSelector('.shopping_cart_badge', { timeout: 5000 });
  }

  async filterByPriceHighToLow() {
    await this.page.click('.product_sort_container');
    await this.page.selectOption('.product_sort_container', { value: 'hilo' });
  }

  async addFirstProductToCart() {
    const firstAddToCart = this.page.locator('.inventory_item button:has-text("Add to cart")').first();
    await firstAddToCart.click();
    await this.page.waitForSelector('.shopping_cart_badge', { timeout: 5000 });
  }

  async isLoaded() {
    return this.page.isVisible('.inventory_list');
  }
}
