import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string, expectSuccess: boolean = true) {
    await this.page.fill('input[data-test="username"]', username);
    await this.page.fill('input[data-test="password"]', password);
    if (expectSuccess) {
      await Promise.all([
        this.page.waitForNavigation({ waitUntil: 'networkidle', timeout: 10000 }),
        this.page.click('input[data-test="login-button"]'),
      ]);
    } else {
      await this.page.click('input[data-test="login-button"]');
      await this.page.waitForSelector('[data-test="error"]', { timeout: 5000 });
    }
  }

  async getErrorMessage() {
    return this.page.textContent('[data-test="error"]');
  }
}
