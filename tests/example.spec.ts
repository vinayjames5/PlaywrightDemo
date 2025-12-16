import {test} from '../fixtures/base';
import loginPage from '../pages/loginPage';
import { LoginUsers, User } from '../test-data/userTestData';




test.describe(
  'Sauce Demo E2E Test Suite', () => {

  test('Test Sauce Demo Login', async ({ loginPage, productsPage, navigationMenu }) => {
  
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await productsPage.verifyPageTitle(); 

    await navigationMenu.openMenu();
    await navigationMenu.clickLogout();

  });

  const loginUsers = new LoginUsers();
  const users: User[] = loginUsers.getUsers();

  for (const user of users) {
    test(`Login test for ${user.username}`, async ({ loginPage, productsPage,navigationMenu }) => {
      await loginPage.goto();
      await loginPage.login(user.username, user.password);

      await productsPage.verifyPageTitle(); 

      await navigationMenu.openMenu();
      await navigationMenu.clickLogout();
    });
  }

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
});