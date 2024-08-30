import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import { registerPage } from "@pages/registerPage"

Given ('A user is at the parabank login page', () => {
    cy.visit('/index.htm')
})

//Scenario: A user registers with valid credentials
When ('The user clicks the register button', () => {
    registerPage.userClicksRegisterBtn()
})

When ('The user inputs the required valid credentials', () => {
    registerPage.userInputsCred()
})


When ('The user clicks the forms register button', () => {
    registerPage.userClicksFormRegisterBtn()
})

Then ('The user should see a registeration confirmation message', () => {
    registerPage.verifySuccessfulRegisteration()
})
