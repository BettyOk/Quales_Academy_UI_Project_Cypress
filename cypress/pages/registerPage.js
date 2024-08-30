function generateRandomUsername() {
    const lowerCaseLetters = 'abcdefghijk';
    const upperCaseLetters = 'ABCDEFGHIJK';
    const numbers = '1234567890';

    // Helper function to select a random character from a given string
    function getRandomChar(str) {
        return str[Math.floor(Math.random() * str.length)];
    }

    // Select 1 character from each list
    const char1 = getRandomChar(lowerCaseLetters);
    const char2 = getRandomChar(upperCaseLetters);
    const char3 = getRandomChar(numbers);

    // Select the 4th character from any of the 3 lists randomly
    const combinedLists = lowerCaseLetters + upperCaseLetters + numbers;
    const char4 = getRandomChar(combinedLists);

    // Concatenate the selected characters into a username
    return `${char1}${char2}${char3}${char4}`;
}

const userName = generateRandomUsername();
Cypress.env('USERNAME', userName);

class RegisterPage {
// ELEMENTS SECTION


    pageElements = {
        registerButton: () => cy.get('#loginPanel > :nth-child(3) > a'),
        firstNameField: () => cy.get('#customer\\.firstName'),
        lastNameField: () => cy.get('#customer\\.lastName'),
        addressField: () => cy.get('#customer\\.address\\.street'),
        cityField: () => cy.get('#customer\\.address\\.city'),
        stateField: () => cy.get('#customer\\.address\\.state'),
        zipCodeField: () => cy.get('#customer\\.address\\.zipCode'),
        phoneField: () => cy.get('#customer\\.phoneNumber'),
        ssnField: () => cy.get('#customer\\.ssn'),
        usernameField: () => cy.get('#customer\\.username'),
        passwordField: () => cy.get('#customer\\.password'),
        confirmPasswordField: () => cy.get('#repeatedPassword'),
        formRegisterButton: () => cy.get('[colspan="2"] > .button'),
        registerationSuccessful: () => cy.contains('Your account was created successfully. You are now logged in.'),
        welcomeUsername: () => cy.contains('Welcome ' + Cypress.env('USERNAME')),
        paraBankLogo: () => cy.get('.logo')

    }

// ACTION SECTION
    userClicksRegisterBtn() {
        this.pageElements.registerButton().click()
    }

    userInputsCred() {
        this.pageElements.firstNameField().type('Betty'),
        this.pageElements.lastNameField().type('Boop'),
        this.pageElements.addressField().type('No. 4 disney street'),
        this.pageElements.cityField().type('Hollywood'),
        this.pageElements.stateField().type('California'),
        this.pageElements.zipCodeField().type('90210'),
        this.pageElements.phoneField().type('0909220232'),
        this.pageElements.ssnField().type('012345678'),
        this.pageElements.usernameField().type(Cypress.env('USERNAME')),
        this.pageElements.passwordField().type(Cypress.env('PASSWORD')),
        this.pageElements.confirmPasswordField().type(Cypress.env('PASSWORD'))
    }

    userClicksFormRegisterBtn() {
        this.pageElements.formRegisterButton().click()
    }




// ACCEPTANCE OR VERIFICATION SECTION

//REGISTERATION FUNCTIONALITY VERIFICATION
//Scenario: A user registers with valid credentials
//Acceptance criteria: confirmation that when user registers with valid credentials, user should see a registeration successful message
    verifySuccessfulRegisteration() {
    this.pageElements.registerationSuccessful().should('be.visible'),
    this.pageElements.paraBankLogo().should('be.visible'),
    this.pageElements.welcomeUsername().should('contain', userName)
    }

}

export const registerPage = new RegisterPage()