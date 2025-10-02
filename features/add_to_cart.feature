Feature: Add to cart process
  As a user
  I want to add products to my cart
  So that I can purchase them later

  Scenario: User adds a product to the cart
    Given I am logged in
    When I add "Sauce Labs Backpack" to the cart
    Then the cart should contain "Sauce Labs Backpack"
