

@regression
Feature: SFO YTO orders

  @smoke
  Scenario: Verify non-zero tax for SFO-YTO orders in the checkout for teacher with non-tax state school


    When I click on sign in button
    And  I enter 'MMM@gmail.com' as my email
    And  I enter '12345ff' as my password
    And  I click on sighin in button
    And  I minimize bar
    And  I move to enter order button
    And  I select student flyer order

    And  I enter 'Harry' as student name
    And  I enter '1V2' as item name
    And  I click add button
    And  I enter '4' as item quantity
    And  I enter '5V2' as item name
    And  I click add button
    And  I enter '5' as item quantity


    And  I enter 'John' as student name
    And  I enter '2V2' as item name
    And  I click add button
    And  I enter '6' as item quantity
    And  I enter '7V2' as item name
    And  I click add button
    And  I enter '6' as item quantity

    And  I enter 'Michael' as student name
    And  I enter '3V2' as item name
    And  I click add button
    And  I enter '10' as item quantity
    And  I enter '8V2' as item name
    And  I click add button
    And  I enter '9' as item quantity

    And  I click on your teacher order
    And  I click on By Flyer
    And  I select item 4S5 and quantity '2'
    And  I select item 5S5 and quantity '3'
    And  I click review button
    And  I click proceed to checkout
    And  I click proceed
    Then I verify estimated tax as greater than zero
