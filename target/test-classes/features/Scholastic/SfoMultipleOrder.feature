

@regression
Feature: Student Flyer Order

  @smoke
  Scenario: Verify teacher can add multiple books for a student in SFO

    When I click on sign in button
    And  I enter 'fname@gmail.com' as my email
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
    And  I verify Student name, Item, and quantity are displayed as expected
    And  I click review button
    And  I verify Harry total and SFO total and total as expected of the calculation


















