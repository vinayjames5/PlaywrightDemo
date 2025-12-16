import {test as base} from '@playwright/test';
import LoginPage from '../pages/loginPage';
import NavMenu from '../pages/navMenu';
import ProductsPage from '../pages/productsPage';

type pageFixtures = {
  loginPage: LoginPage;
    navigationMenu: NavMenu;
    productsPage: ProductsPage;
};

export const test = base.extend<pageFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
    navigationMenu: async ({ page }, use) => {  
    const navigationMenu = new NavMenu(page);
    await use(navigationMenu);
  },
    productsPage: async ({ page }, use) => {
    const productsPage = new ProductsPage(page);
    await use(productsPage);
  },
})

export { expect } from '@playwright/test';
