

@regression
Feature: Add a new credit card

  @smoke
 Scenario: Verify user can place an order by adding a new credit card

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
   And  I click on continue check out button
   And  I select credit card option
   And  I select add a new card
   And  I enter '4111111111111111' as credit card number
   And  I select '03' as month
   And  I select year '2023' as year
   And  I enter '111' as security code
   And  I enter 'mmm' as first name
   And  I enter 'www' as ;ast name
   And  I enter '2278 Holland Ave' as address1
   And  I enter 'Apt#179' as address2
   And  I enter '10467' as zip code
   And  I enter '3333333333' as cell no
   And  I click continue checkout button
   And   I click submit
   Then I verify a thank you text displayed for the order
