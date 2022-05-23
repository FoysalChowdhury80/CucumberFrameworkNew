

@regression
Feature: SFO multiple students with multiple books

  @smoke
  Scenario: Verify SFO with multiple students and multiple books and quantity

    When I click on sign in button
    And  I enter 'MAWA@gmail.com' as my email
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

    Then I verify multiple student names, multiple items and multiple quantities are entered as expected
    And  I click review button
    Then I verify Individual students total as expected to the calculation and all students total is same as SFO

