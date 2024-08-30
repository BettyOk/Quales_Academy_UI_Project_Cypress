Feature: Login functionality

This test aims to confirm that the login functionality is working as expected.

Background: users need to be present in the parabank app to login

#The Given syntax is a pre-requisite for the test
#The When syntax is the action that the user takes
#The Then syntax is the expected outcome of the action

Given A user is at the paraBank Login page

Scenario: A user logs in with invalid username
        When The user enters invalid username and valid password and clicks the log in button
        Then The user should see an invalid username error message

Scenario: A user logs in with invalid password
        When The user enters invalid password and valid username and clicks the log in button
        Then The user should see an invalid password error message

Scenario: A user logs in with valid credentials
        When The user enters valid username, password and clicks the login button
        Then The user should be redirected to the landing page
