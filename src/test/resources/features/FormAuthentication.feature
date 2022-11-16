@login
Feature: Form Authentication



  Scenario: Login with valid credentials
    Given user opens the Form Authentication page
    When user logs in with valid credentials
    Then the success message should be visible "You logged into a secure area!"

  Scenario: Login with invalid credentials Username and Password
    Given user opens the Form Authentication page
    When user logs in with invalid credentials
    Then the error message should be visible "Your username is invalid!"

  Scenario: Login with invalid credential "only Username, Password should be correct"
    Given user opens the Form Authentication page
    When user logs in with invalid username
    Then the error message should be visible for invalid username "Your username is invalid!"

  Scenario: Login with invalid credential "only Password, Username should be correct"
    Given user opens the Form Authentication page
    When user logs in with invalid Password
    Then the error message should be visible for invalid password "Your password is invalid!"

  Scenario: Login with invalid credential "Username and Password field should be empty"
    Given user opens the Form Authentication page
    When user logs in with empty username and password
    Then the error message should be visible for empty credentials "Your username is invalid!"