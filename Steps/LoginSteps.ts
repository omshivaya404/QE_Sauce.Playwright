
import { expect } from '@playwright/test';
import { Given, When, Then } from '../Fixtures/fixtures';
import { config } from '../testConfig';



Given('I am on the login page', async ({ pageManager }) => {

    const pageTitle = 'Swag Labs';
    await pageManager.loginPage.page.goto(config.url);
    await pageManager.loginPage.page.waitForLoadState('networkidle');
    //await pageManager.loginPage.page.screenshot({ path: 'Test/Screenshots/LoginPage.png' });

    expect(pageManager.loginPage.page, 'Not in the login page').toHaveTitle(pageTitle);

    const test = process.env.TEST_ENV;

    console.log(`Navigated to ${config.url} (${process.env.TEST_ENV || 'UAT'}) successfully`);
    expect(test?.length, `TEST_ENV is not set, defaulting to UAT`).toBeGreaterThan(0);
});

When('I enter valid username', async ({ pageManager }) => {

    await pageManager.loginPage.txtUsername.fill('standard_user');
});

When('I enter valid password', async ({ pageManager }) => {

  await pageManager.loginPage.txtPassword.fill('secret_sauce');
});
