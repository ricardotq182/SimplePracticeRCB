import { Page } from '@playwright/test';

export default class LoginPage {
    readonly page: Page;
    readonly usernameInput;
    readonly passwordInput;
    readonly submitButton;

    constructor(page: Page) {
        this.page = page;
        // use robust selectors — prefer data-* attributes if available
        this.usernameInput = page.getByRole('textbox', { name: 'Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.submitButton = page.getByRole('button', { name: 'Sign in' });
    }

    async goto() {
        await this.page.goto('https://secure.simplepractice.com/'); // use baseURL in config
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
}