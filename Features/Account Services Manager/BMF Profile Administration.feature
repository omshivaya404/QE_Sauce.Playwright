Feature: Workflow Step 1
    As a user
    I want to be able to log in to the application
    So that I can access my account and use the features

Scenario: Successful login with valid credentials - test 1
    Given I am on the login page
    When I enter valid username 
    And I enter valid password

@sanity
Scenario: Successful login with valid credentials - test 7
    Given I am on the login page
    When I enter valid username 
    And I enter valid password
    
