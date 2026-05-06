Feature: Login Feature
    As a user
    I want to be able to log in to the application
    So that I can access my account and use the features
    
Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid username 
    And I enter valid password
    
