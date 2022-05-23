

@regression
Feature: SFO Item deletion
  @smoke
  Scenario: Verify user can delete item on Cart page


    When I click on sign in button
    And  I enter 'Mitu@gmail.com' as my email
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

    And  I click review button
    And  I get john subtotal
    And  John Subquantity
    And  Total price
    And  Total Qty
    And  I click remove button
    And  I click yes button to delete
    Then I verify item is deleted and quantities and items are updated

