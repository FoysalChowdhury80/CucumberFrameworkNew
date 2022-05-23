Feature: Log In
  Scenario: User is able to log in with valid credentials

    When User enters '6463773330' as user name
    And  User enters 'mahdiya2014' as password
    And  User click on log in button
    #And  User accepts to get notification alert
    #Then Verify that user is able to log in successfully
