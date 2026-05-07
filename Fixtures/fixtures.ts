import {test as base, createBdd} from "playwright-bdd";
import { PageManager } from "../Pages/PageManager";


type PageObjects = {
    pageManager: PageManager;
}

export const test = base.extend<PageObjects>({
    pageManager: async ({browser}, use) => {

        const browserContext = await browser.newContext();
        const newPage = await browserContext.newPage();
        const pageManager = new PageManager(newPage);
        await use(pageManager);
        //await browserContext.close();
    }
});

export const { Given, When, Then } = createBdd(test);