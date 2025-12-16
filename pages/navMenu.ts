import { Page, expect, type Locator } from "@playwright/test";    

export class NavMenu {
    public url = 'https://www.saucedemo.com/inventory.html';
    readonly page: Page;
    readonly $burgerMenu: Locator;
    readonly $allItemsMenu: Locator;
    readonly $aboutMenu: Locator;
    readonly $logoutMenu: Locator;
    readonly $resetAppState: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.$burgerMenu = this.page.getByRole('button', { name: 'Open Menu' })
        this.$allItemsMenu = this.page.locator('[data-test="inventory-sidebar-link"]');
        this.$aboutMenu = this.page.locator('[data-test="about-sidebar-link"]');
        this.$logoutMenu = this.page.locator('[data-test="logout-sidebar-link"]');
        this.$resetAppState = this.page.locator('[data-test="reset-sidebar-link"]');
    }
    
    public async goto() {
        await this.page.goto(this.url);
    }   
    public async openMenu() {
        await this.$burgerMenu.click();
    }   
    public async clickAllItems() {          
        await this.$allItemsMenu.click();
    }                   
    public async clickAbout() {          
        await this.$aboutMenu.click();
    }
    public async clickResetAppState() {          
        await this.$resetAppState.click();
    }
    public async clickLogout() {
        await this.$logoutMenu.click();
    }   
}

export default NavMenu;   