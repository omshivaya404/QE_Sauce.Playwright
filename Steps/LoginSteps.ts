
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
});

When('I enter valid username', async ({ pageManager }) => {

    const username = config.username;

    await pageManager.loginPage.txtUsername.fill(username || '');
});

When('I enter valid password', async ({ pageManager }) => {

  await pageManager.loginPage.txtPassword.fill(config.password || '');
});

Given('I logged in to TMPOE with Windows authentication', async ({ pageManager }) => {

    //https://the-internet.herokuapp.com/basic_auth

    //const page = await pageManager.appPage.newPage();
    await pageManager.page.goto('https://the-internet.herokuapp.com/basic_auth');
    await pageManager.page.waitForLoadState('networkidle');
    const content = await pageManager.page.title();
    expect(content).toContain('The Internet');

    //I have changed this.
    //changed 

});
