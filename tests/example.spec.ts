import {test} from '../fixtures/base';

test.describe(
  'Sauce Demo E2E Test Suite', () => {


  test('Test Sauce Demo Login', async ({ loginPage, productsPage, navigationMenu }) => {
  
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await productsPage.verifyPageTitle(); 

    await navigationMenu.openMenu();
    await navigationMenu.clickLogout();

  });

}
)