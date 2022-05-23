Feature: Create a new Teacher Account in Taxable State

  Scenario: User can create a new teacher account in taxable state using zip code


    When I click on create an account
    And  I select Teacher/Administrator
    And  I click on next button
    And  I selecxt 'Mr.' as title
    And  I entere 'fa' as first name
    And  I enter 'ch' as last name
    And  I enter 'abc12345@gmail.com' as my email
    And  I enter 'ab1234' as my password
    And  I enter '776-515-6788' as mobile number
    And  I checked terms and conditions
    And  I click on next button
    And  I enter '10012' as zip code
    And  I click seach button
    And  I select 'Scholastic+Book+Clubs' as school
    And  I click on next button
    And  I select Teacher(by Grade) as role
    And  I select '1st' as Grade
    And  I select '10' as number of student
    And  I click on next button
    And  I select GRL as  preferred reading level
    And  I click on continue to site button
    And  I minimize bar

    Then I verify class same class code is present on home page as well as on My account page
    Then I verify Teacher Name is displayed as expected
    Then I verify School address is selected as expected


