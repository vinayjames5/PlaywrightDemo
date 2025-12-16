import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import ProductsPage from '../pages/productsPage';
import NavMenu from '../pages/navMenu';

test.describe(
  'Sauce Demo E2E Test Suite', () => {


  test('Test Sauce Demo Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    const productsPage = new ProductsPage(page);
    await productsPage.verifyPageTitle(); 

    const navMenu = new NavMenu(page);
    await navMenu.openMenu();
    await navMenu.clickLogout();

  });

}
)