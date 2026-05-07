import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";

export class PageManager {

    readonly loginPage: LoginPage;

    constructor(public page: Page) {
        this.loginPage = new LoginPage(page);
    }
}

 