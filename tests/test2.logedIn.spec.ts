import {test} from '../fixtures/base';

test('Test Sauce Demo 1', async ({ loginPage, productsPage, navigationMenu }) => {
    //await loginPage.goto();
    await productsPage.goto();
    await productsPage.verifyPageTitle(); 
    await navigationMenu.openMenu();
    await navigationMenu.clickLogout();
  });

  test('Test Sauce Demo 2', async ({ loginPage, productsPage, navigationMenu }) => {
    //await loginPage.goto();
    await productsPage.goto();
    await navigationMenu.openMenu();
    await navigationMenu.clickLogout();
  });