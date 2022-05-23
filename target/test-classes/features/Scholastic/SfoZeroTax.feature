

@regression
Feature: SFO Zero Tax

  @smoke
  Scenario: Verify zero tax for only SFO order in the checkout


    When I click on sign in button
    And  I enter 'Wmw@gmail.com' as my email
    And  I enter '12345ff' as my password
    And  I click on sighin in button
    And  I minimize bar
    And  I move to enter order button
    And  I select student flyer order
    And  I enter 'Harry' as student name
    And  I enter '1V2' as item name
    And  I click add button
    And  I enter '2' as item quantity

    And  I enter '2V2' as item name
    And  I click add button
    And  I enter '3' as item quantity

    And  I enter '3V2' as item name
    And  I click add button
    And  I enter '3' as item quantity
    And  I click review button

    And  I click proceed to checkout
    And  I click proceed

    Then I verify tax amount is zero