import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";

export class PageManager {

    readonly loginPage: LoginPage;

    constructor(page: Page) {
        this.loginPage = new LoginPage(page);
    }
}

 