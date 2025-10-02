import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  baseUrl: string;

  // Page objects for POM
  loginPage?: any;
  inventoryPage?: any;
  productsPage?: any;
  cartPage?: any;
  checkoutPage?: any;

  constructor(options: IWorldOptions) {
    super(options);
  this.baseUrl = process.env.BASE_URL || 'https://www.saucedemo.com/';
  }

  async launchBrowser() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    });
    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

setWorldConstructor(CustomWorld);
