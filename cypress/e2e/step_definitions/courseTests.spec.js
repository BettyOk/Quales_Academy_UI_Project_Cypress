import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import { loginPage } from "@pages/loginPage"
import { coursePage } from "@pages/coursePage"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Given ('A user is at the quales edu library Course page', () => {
    cy.visit('/login')
    loginPage.userInputsValidEmailAndPassword()
})

//Scenario: A user adds a course online
When ('The user clicks the add course button to add an online course', () => {
    coursePage.userClicksAddCourseBtn()
})

When ('Inputs valid course details, online location and URL, clicks the add button', () => {
    coursePage.userInputsValidOnlineCourseDetails()
})
Then ('The user should see a success message and get redirected to the course page', () => {
    coursePage.verifySuccessfulCourseAdd()
})

//Scenario: A user adds a course offline
When ('The user clicks the add course button to add an offline course', () => {
    coursePage.userClicksAddCourseBtn()
})
When ('Inputs valid course details, offline location and address, clicks the add button', () => {
    coursePage.userInputsValidOfflineCourseDetails()
})
Then ('The user should see a success message and be redirected to the course page', () => {
    coursePage.verifySuccessfulCourseAdd()
})

//Scenario: A user edits a course
When ('The user clicks the specific course and goes to its page', () => {
    coursePage.userClicksSpecificCourse()
})
When ('Clicks the edit button, inputs valid course details and clicks the update button', () => {
    coursePage.userEditsCourse()
})
Then ('The user should see a Course Updated Successfully message', () => {
    coursePage.verifyCourseUpdated()
})

//Scenario: A user deletes a course
When ('The user clicks the specific course and gets directed to its page', () => {
    coursePage.userClicksCourseToDelete()
})
When ('Clicks the delete button, confirms the delete action', () => {
    coursePage.userDeletesCourse()
})
Then ('The user should see a deleted success message and be redirected to the course page', () => {
    coursePage.verifyCourseDeleted()
})



