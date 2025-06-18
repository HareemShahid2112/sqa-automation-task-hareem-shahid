Feature: Shopping Cart Functionality

  Scenario: Add 2 items to cart
    Given I open the products list page
    When I add "iPhone 12" to the cart
    And I add "Huawei" to the cart
    Then the cart should contain 2 items

  Scenario: Verify total quantity in cart
    Given I open the cart
    Then the total quantity should be 2

  Scenario: Double the quantity of the first product
    Given I open the cart
    When I increase the quantity of "iPhone 12" to 2
    Then the total quantity should be 3

  Scenario: Reduce quantity back to 1
    Given I open the cart
    When I decrease the quantity of "iPhone 12" to 1
    Then the total quantity should be 2
