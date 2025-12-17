import { Page } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import NavMenu from '../pages/navMenu';
import ProductsPage from '../pages/productsPage';

export type PageFixtures = {
  loginPage: LoginPage;
  navigationMenu: NavMenu;
  productsPage: ProductsPage;
};

type UseFixture<T> = (fixture: T) => Promise<void>;

export const pageFixtures = {
  loginPage: async (
    { page }: { page: Page },
    use: UseFixture<LoginPage>
  ) => {
    await use(new LoginPage(page));
  },

  navigationMenu: async (
    { page }: { page: Page },
    use: UseFixture<NavMenu>
  ) => {
    await use(new NavMenu(page));
  },

  productsPage: async (
    { page }: { page: Page },
    use: UseFixture<ProductsPage>
  ) => {
    await use(new ProductsPage(page));
  }
};
