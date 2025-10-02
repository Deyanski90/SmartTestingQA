Feature: Order confirmation
  As a user
  I want to receive confirmation after placing an order
  So that I know my purchase was successful

  Scenario: User sees order confirmation
    Given I have completed a purchase
    Then I should see a thank you message
