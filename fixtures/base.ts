import { test as base, expect } from '@playwright/test';
import { pageFixtures, PageFixtures } from './page.fixture';
import { testDataFixtures, TestDataFixtures } from './testData.fixture';

export const test = base.extend<PageFixtures & TestDataFixtures>({
  ...pageFixtures,
  ...testDataFixtures
});

export { expect };
