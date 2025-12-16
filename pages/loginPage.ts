import { Page, expect, type Locator } from "@playwright/test";    

export class LoginPage {
    public url = 'https://www.saucedemo.com/';
    readonly page: Page;
    readonly $emailInput: Locator;
    readonly $passwordInput: Locator;
    readonly $signInButton: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.$emailInput = this.page.locator('[data-test="username"]');
        this.$passwordInput = this.page.locator('[data-test="password"]');
        this.$signInButton = this.page.locator('[data-test="login-button"]');
    }
    
    public async goto() {
        await this.page.goto(this.url);
    }   
    public async fillCredentials(email: string, password: string) {
        await this.$emailInput.fill(email);
        await this.$passwordInput.fill(password);
    }   
    public async submit() {
        await this.$signInButton.click();
    }   
    public async login(email: string, password: string) {
        await this.fillCredentials(email, password);
        await this.submit();
    }   

    public async verifyLoginNotSuccessful() {
        await expect(this.$emailInput).toBeVisible();
        await expect(this.$passwordInput).toBeVisible();
        await expect(this.$signInButton).toBeVisible();
    }
}

export default LoginPage;   