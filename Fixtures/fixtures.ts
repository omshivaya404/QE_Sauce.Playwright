import {test as base, createBdd} from "playwright-bdd";
import { PageManager } from "../Pages/PageManager";


type PageObjects = {
    pageManager: PageManager;
}

export const test = base.extend<PageObjects>({
    pageManager: async ({page}, use) => {
        const pageManager = new PageManager(page);
        await use(pageManager);
    }
});

export const { Given, When, Then } = createBdd(test);