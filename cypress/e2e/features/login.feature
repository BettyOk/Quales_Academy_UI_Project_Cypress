Feature: Login functionality

This test aims to confirm that the login functionality is working as expected.

Background: users need to be present in the quales edu library app to login

#The Given syntax is a pre-requisite for the test

Given A user is at the quales edu library Login page

Scenario: A user logs in with invalid credentials
        When The user enters invalid email, password and clicks the login button
        Then The user should see an error message

Scenario: A user logs in with valid credentials
        When The user enters valid email, password and clicks the login button
        Then The user should be redirected to the course page
