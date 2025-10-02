Feature: Checkout process
  As a user
  I want to checkout my cart
  So that I can complete my purchase

  Scenario: User completes the checkout process
    Given I have "Sauce Labs Backpack" in my cart
    When I proceed to checkout
    And I enter my information
    And I finish the checkout
    Then I should see the order confirmation page
