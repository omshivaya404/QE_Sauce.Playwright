import {Page, Locator} from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly txtUsername: Locator;
    readonly txtPassword: Locator;

    constructor(page: Page) {
        this.page = page;
        this.txtUsername = page.locator('#user-name');
        this.txtPassword = page.locator('#password');
    }
}