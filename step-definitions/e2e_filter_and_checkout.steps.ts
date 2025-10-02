import { When } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { ProductsPage } from '../pages/ProductsPage';

When('I filter products by price high to low', async function (this: CustomWorld) {
  this.productsPage = new ProductsPage(this.page);
  await this.productsPage.filterByPriceHighToLow();
});

When('I add the first product to the cart', async function (this: CustomWorld) {
  this.productsPage = new ProductsPage(this.page);
  await this.productsPage.addFirstProductToCart();
});
