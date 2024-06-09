import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import { loginPage } from "@pages/loginPage"
import { coursePage } from "@pages/coursePage"

Given ('A user is at the quales edu library Login page', () => {
    cy.visit('/login')
})

//Scenario: A user logs in with invalid credentials
When ('The user enters invalid email, password and clicks the login button', () => {
    loginPage.userInputsInvalidEmailAndPassword()
})

Then ('The user should see an error message', () => {
    loginPage.verifyUnsuccessfulLogin()
})

//Scenario: A user logs in with valid credentials
When ('The user enters valid email, password and clicks the login button', () => {
    loginPage.userInputsValidEmailAndPassword()
})

Then ('The user should be redirected to the course page', () => {
    coursePage.verifySuccessfulLogin()
})

