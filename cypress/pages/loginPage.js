class LoginPage {
// ELEMENTS SECTION
    pageElements = {
        emailInputField: () => cy.get('[data-testid="EmailAddress"]'),
        passwordInputField: () => cy.get('input[type="Password"]'),
        loginButton: () => cy.get('.MuiButton-contained'),
        invalidLoginCred: () => cy.contains('Invalid Login Credential')
    }


// ACTION SECTION
    userInputsInvalidEmailAndPassword() {
        this.pageElements.emailInputField().type(Cypress.env('WRONGUSERNAME')),
        this.pageElements.passwordInputField().type(Cypress.env('WRONGPASSWORD')),
        this.pageElements.loginButton().click()
    }

    userInputsValidEmailAndPassword() {
    this.pageElements.emailInputField().type(Cypress.env('USERNAME')),
    this.pageElements.passwordInputField().type(Cypress.env('PASSWORD')),
    this.pageElements.loginButton().click()
    }


// ACCEPTANCE OR VERIFICATION SECTION

//LOGIN FUNCTIONALITY VERIFICATION
//Scenario: A user logs in with invalid credentials
//Acceptance criteria: confirmation that when user logs in with invalid credentials, user should see an error message
    verifyUnsuccessfulLogin() {
        cy.url().should('contain', '/login')
        this.pageElements.invalidLoginCred().should('be.visible')
        this.pageElements.loginButton().should('be.visible')
        this.pageElements.emailInputField().should('be.visible')
        this.pageElements.passwordInputField().should('be.visible')
    }

}



export const loginPage = new LoginPage()