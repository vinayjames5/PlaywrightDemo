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

   [
      { username: 'locked_out_user', password: 'secret_sauce' },
      { username: 'wronguser', password: 'wrongpassword' },
      { username: 'standard_user', password: 'wrongpassword' },
  ].forEach(({ username, password }) => {
  test(`Invalid Login test for ${username}`, async ({ loginPage, productsPage,navigationMenu }) => {
      await loginPage.goto();
      await loginPage.login(username, password);
      await loginPage.verifyLoginNotSuccessful();
    })
  })

  test('Run login for each user - Positive', async ({ loginPage, productsPage,navigationMenu, users }) => {
    for (const user of users) {
      await test.step(`Login as ${user.username}`, async () => {
        await loginPage.goto();
        await loginPage.login(user.username, user.password);
        await productsPage.verifyPageTitle(); 
        await navigationMenu.openMenu();
        await navigationMenu.clickLogout();
      });
    }
  });
});