Feature: Registeration functionality

This test aims to confirm that the registeration functionality is working as expected.

Background: users need to be present in the parabank app to register

#The Given syntax is a pre-requisite for the test
#The When syntax is the action that the user takes
#The Then syntax is the expected outcome of the action

Given A user is at the parabank login page

Scenario: A user registers with valid credentials
        When The user clicks the register button
        When The user inputs the required valid credentials
        When The user clicks the forms register button
        Then The user should see a registeration confirmation message
