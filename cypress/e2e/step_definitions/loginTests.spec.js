import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import { loginPage } from "@pages/loginPage"

Given ('A user is at the paraBank Login page', () => {
    cy.visit('/index.htm')
})

//Scenario: A user logs in with invalid username
When ('The user enters invalid username and valid password and clicks the log in button', () => {
    loginPage.userInputsInvalidUsername()
})

Then ('The user should see an invalid username error message', () => {
    loginPage.verifyInvalidUsernameUnsuccessful()
})

//Scenario: A user logs in with invalid password
When ('The user enters invalid password and valid username and clicks the log in button', () => {
    loginPage.userInputsInvalidPassword()
})

Then ('The user should see an invalid password error message', () => {
    loginPage.verifyInvalidPasswordUnsuccessful()
})

//Scenario: A user logs in with valid credentials
When ('The user enters valid username, password and clicks the login button', () => {
    loginPage.userInputsValidCredentials()
})

Then ('The user should be redirected to the landing page', () => {
    loginPage.verifySuccessfulLogin()
})

