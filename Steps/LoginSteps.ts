
import { expect } from '@playwright/test';
import { Given, When, Then } from '../Fixtures/fixtures';



Given('I am on the login page', async ({ pageManager }) => {

    const pageTitle = 'Swag Labs';
    await pageManager.loginPage.page.goto('https://www.saucedemo.com/');
    await pageManager.loginPage.page.waitForLoadState('networkidle');
    //await pageManager.loginPage.page.screenshot({ path: 'Test/Screenshots/LoginPage.png' });

    expect(pageManager.loginPage.page, 'Not in the login page').toHaveTitle(pageTitle);
});

When('I enter valid username', async ({ pageManager }) => {

    await pageManager.loginPage.txtUsername.fill('standard_user');
});

When('I enter valid password', async ({ pageManager }) => {

  await pageManager.loginPage.txtPassword.fill('secret_sauce');
});
