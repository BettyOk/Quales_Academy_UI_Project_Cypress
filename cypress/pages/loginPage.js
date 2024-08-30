class LoginPage {
// ELEMENTS SECTION
    pageElements = {
        loginUsernameField: () => cy.get(':nth-child(2) > .input'),
        loginPasswordField: () => cy.get(':nth-child(4) > .input'),
        logInButton: () => cy.get(':nth-child(5) > .button'),
        invalidUserNameMsg: () => cy.contains('Invalid Username Inputed'),
        invalidPasswordMsg: () => cy.contains('Invalid Password Inputed'),
        paraBankLogo: () => cy.get('.logo'),
        accountsOverview: () => cy.contains('Accounts Overview'),
        logOutButton: () => cy.get('Log Out'),
        welcomeUsername: () => cy.contains('Welcome ' + Cypress.env('VALIDUSERNAME'))
    }


// ACTION SECTION
    userInputsInvalidUsername() {
        this.pageElements.loginUsernameField().clear().type(Cypress.env('INVALIDUSERNAME')),
        this.pageElements.loginPasswordField().clear().type(Cypress.env('PASSWORD')),
        this.pageElements.logInButton().click()
    }

    userInputsInvalidPassword() {
        this.pageElements.loginUsernameField().clear().type(Cypress.env('VALIDUSERNAME')),
        this.pageElements.loginPasswordField().clear().type(Cypress.env('INVALIDPASSWORD')),
        this.pageElements.logInButton().click()
    }

    userInputsValidCredentials() {
        this.pageElements.loginUsernameField().clear().type(Cypress.env('VALIDUSERNAME')),
        this.pageElements.loginPasswordField().clear().type(Cypress.env('PASSWORD')),
        this.pageElements.logInButton().click()
    }


// ACCEPTANCE OR VERIFICATION SECTION

//LOGIN FUNCTIONALITY VERIFICATION
//Scenario: A user logs in with invalid username
//Acceptance criteria: confirmation that when user logs in with invalid username, user should see an error message
    verifyInvalidUsernameUnsuccessful() {
        cy.url().should('contain', '/index.htm')
        this.pageElements.invalidUserNameMsg().should('be.visible')
    }

//Scenario: A user logs in with invalid password
//Acceptance criteria: confirmation that when user logs in with invalid password, user should see an error message
    verifyInvalidPasswordUnsuccessful() {
        cy.url().should('contain', '/index.htm')
        this.pageElements.invalidPasswordMsg().should('be.visible')
    }

//Scenario: A user logs in with valid credentials
//Acceptance criteria: confirmation that when user logs in with valid credentials, user should be redirected to the event page
    verifySuccessfulLogin() {
    cy.url().should('contain', '/overview.htm'),
    this.pageElements.paraBankLogo().should('be.visible'),
    this.pageElements.accountsOverview().should('be.visible'),
    this.pageElements.logOutButton().should('be.visible'),
    this.pageElements.welcomeUsername().should('be.visible')
    }

}



export const loginPage = new LoginPage()