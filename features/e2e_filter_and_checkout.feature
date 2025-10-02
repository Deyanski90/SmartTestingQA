Feature: End-to-end filter and checkout
  As a user
  I want to filter products by price (high to low) and complete a purchase
  So that I can buy the most expensive item first

  Scenario: User filters by price high to low and completes checkout
    Given I am on the login page
    When I login with username "standard_user" and password "secret_sauce"
    And I filter products by price high to low
    And I add the first product to the cart
    And I proceed to checkout
    And I enter my information
    And I finish the checkout
    Then I should see the order confirmation page
