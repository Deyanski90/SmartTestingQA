import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async isVisible() {
    return this.page.isVisible('.inventory_list');
  }
}
