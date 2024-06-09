class CoursePage {
//ELEMENTS SEcTION
    pageElements = {
        loginSuccessfulMsg: () => cy.contains('Login Successful'),
        coursePageTitle: () => cy.contains('List of Courses'),
        addCourseBtn: () => cy.get('button').contains('Add Course'),
        //('.MuiGrid-root > .MuiButtonBase-root'),
        accountName: () => cy.get('.css-1deacqj > .MuiTypography-root'),
        logOutBtn: () => cy.get('.MuiToolbar-root > .MuiButton-root'),

        courseTitle: () => cy.get('[data-testid="Title\\*"]'),
        courseDescription: () => cy.get('[data-testid="Description*"]'),
        courseCategory: () => cy.get('#demo-simple-select'),
        courseCategoryList: () => cy.get('#menu- > .MuiPaper-root > .MuiList-root'),
        courseLocationList: () => cy.get('.MuiFormGroup-root'),
        courseOnlineUrl: () => cy.get('[data-testid="CourseURL*(mustbeyoutube)"]'),
        courseOfflineAddress: () => cy.get('[data-testid="Address*"]'),
        courseAddBtn: () => cy.get('.css-tzsjye > .MuiButton-root'),
        courseCreatedSuccessfulMsg: () => cy.contains('Course created successfully'),
        courseUpdatedSuccessfulMsg: () => cy.contains('Course updated successfully'),
        courseDeletedSuccessfulMsg: () => cy.contains('Course deleted successfully'),

        specificCourseTitle: () => cy.contains('Alfie'),
        specificCourseDeleteTitle: () => cy.contains('Onyi First Course',{ matchCase: false }),
        specificCoursePageHeader: () => cy.contains('View Course'),
        courseEditBtn: () => cy.contains('Edit'),
        courseDeleteBtn: () => cy.get('button').contains('Delete', { matchCase: false }),
        updateCourseBtn: () => cy.get('button').contains('UPDATE COURSE', { matchCase: false }),
        deleteConfirmBtn: () => cy.get('.MuiBox-root > .MuiButton-contained').contains('Delete', { matchCase: false }),
    }


//ACTION SECTION
    userClicksAddCourseBtn() {
        this.pageElements.addCourseBtn().click()
        cy.wait(1000)
    }

    userInputsValidOnlineCourseDetails() {
        const courseTitle = 'Cypress with Betty Online'
        const courseOnlineUrl = 'https://www.youtube.com/watch?v=1'
        this.pageElements.courseTitle().type(courseTitle,{force: true}),
        this.pageElements.courseDescription().type('Learning cypress Testing with Betty'),
        this.pageElements.courseCategory().click(),
        this.pageElements.courseCategoryList().contains('Software Development').click(),
        this.pageElements.courseLocationList().contains('Online').click(),
        cy.wait(1000),
        this.pageElements.courseOnlineUrl().type(courseOnlineUrl,{force: true}),
        this.pageElements.courseAddBtn().click()
    }

    userInputsValidOfflineCourseDetails() {
        const courseTitle = 'Cypress with Betty Offline'
        this.pageElements.courseTitle().type(courseTitle,{force: true}),
        this.pageElements.courseDescription().type('Learning cypress Testing with Betty'),
        this.pageElements.courseCategory().click(),
        this.pageElements.courseCategoryList().contains('Quality Assurance').click(),
        this.pageElements.courseLocationList().contains('Offline').click(),
        this.pageElements.courseOfflineAddress().type('12 Baby Shark Street, Shark city, Sharkland'),
        this.pageElements.courseAddBtn().click()
    }

    userClicksSpecificCourse() {
        const specificCourseTitle = 'Alfie'
        this.pageElements.specificCourseTitle().click({force: true}),
        cy.wait(1000)
    }

    userEditsCourse() {
        const courseTitle = 'Cypress with Betty Online'
        this.pageElements.courseEditBtn().click()
        cy.wait(1000),
        this.pageElements.courseTitle().clear({force: true}),
        this.pageElements.courseTitle().type(courseTitle,{force: true}),
        this.pageElements.updateCourseBtn().click({force: true})
    }

    userClicksCourseToDelete() {
        const specificCourseDeleteTitle = 'Onyi First Course'
        this.pageElements.specificCourseDeleteTitle().click({force: true}),
        cy.wait(1000)
    }

    userDeletesCourse() {
        this.pageElements.courseDeleteBtn().click()
        this.pageElements.deleteConfirmBtn().click()
    }


//AccEPTANcE OR VERIFIcATION SEcTION

//cOURSE PAGE FUNcTIONALITY VERIFIcATION
//Scenario: A user adds a course online
//Scenario: A user adds a course offline
//Acceptance criteria: confirmation that when user Inputs valid details for online or offline course, user should see a success message and be redirected to the course page
    verifySuccessfulCourseAdd() {
        cy.url().should('contain', '/courses'),
        this.pageElements.courseCreatedSuccessfulMsg().should('be.visible'),
        this.pageElements.coursePageTitle().should('be.visible'),
        this.pageElements.addCourseBtn().should('be.visible')
    }

//Scenario: A user edits a course
//Acceptance criteria: confirmation that when user edits a course, user should see a course Updated Successfully message
    verifyCourseUpdated() {
        this.pageElements.courseUpdatedSuccessfulMsg().should('be.visible'),
        this.pageElements.courseEditBtn().should('be.visible'),
        this.pageElements.specificCoursePageHeader().should('be.visible')

    }

//Scenario: A user deletes a course
//Acceptance criteria: confirmation that when user deletes a course, and confirms delete, user should see a success message and be redirected to the course page
verifyCourseDeleted() {
    cy.url().should('contain', '/courses'),
    this.pageElements.courseDeletedSuccessfulMsg().should('be.visible'),
    this.pageElements.coursePageTitle().should('be.visible'),
    this.pageElements.addCourseBtn().should('be.visible')
}


//LOGIN FUNcTIONALITY VERIFIcATION
//Scenario: A user logs in with valid credentials
//Acceptance criteria: confirmation that when user logs in with valid credentials, user should be redirected to the course page
    verifySuccessfulLogin() {
        cy.url().should('contain', '/courses'),
        this.pageElements.loginSuccessfulMsg().should('be.visible'),
        this.pageElements.addCourseBtn().should('be.visible'),
        this.pageElements.coursePageTitle().should('be.visible'),
        cy.wait(10000),
        this.pageElements.accountName().should('be.visible'),
        this.pageElements.logOutBtn().should('be.visible')
    }

}

export const coursePage =  new CoursePage()