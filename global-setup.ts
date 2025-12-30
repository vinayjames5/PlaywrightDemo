import { chromium, expect } from '@playwright/test';

export default async function globalSetup() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.getByText('Swag Labs')).toBeVisible({ timeout: 60000 });
    // Perform any additional setup steps here

    await page.context().storageState({ path: './auth.json' });
    await browser.close();


};