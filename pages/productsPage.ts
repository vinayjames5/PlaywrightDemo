import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly filterButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.getByText('Swag Labs');
        this.filterButton = page.locator('[data-test="product-sort-container"]');
    }

    async goto() {
        await this.page.goto('/inventory.html');
    }

    public async verifyPageTitle() {
        await expect(this.pageTitle).toBeVisible();
        }
}


export default ProductsPage;           