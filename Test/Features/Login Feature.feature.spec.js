// Generated from: Features\Login Feature.feature
import { test } from "../../Fixtures/fixtures.ts";

test.describe('Login Feature', () => {

  test('Successful login with valid credentials', async ({ Given, When, And, pageManager }) => { 
    await Given('I am on the login page', null, { pageManager }); 
    await When('I enter valid username', null, { pageManager }); 
    await And('I enter valid password', null, { pageManager }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('Features\\Login Feature.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I enter valid username","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And I enter valid password","stepMatchArguments":[]}]},
]; // bdd-data-end