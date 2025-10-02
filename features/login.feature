Feature: User login
  As a user
  I want to log in to Swag Labs
  So that I can access my account

  Scenario: User login with valid credentials
    Given I am on the login page
    When I login with username "standard_user" and password "secret_sauce"
    Then I should see the products page

  Scenario: User login with invalid password
    Given I am on the login page
    When I login with username "standard_user" and password "wrong_password"
    Then I should see an error message for invalid credentials
