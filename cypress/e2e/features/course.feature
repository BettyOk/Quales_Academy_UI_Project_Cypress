Feature: Course Page Functionalities

This test aims to confirm that the Course Page functionalities are working as expected.

Background: users need to be present in the course page to interact with the functionalities

Given A user is at the quales edu library Course page

Scenario: A user adds a course online
    When The user clicks the add course button to add an online course
    When Inputs valid course details, online location and URL, clicks the add button
    Then The user should see a success message and get redirected to the course page

Scenario: A user adds a course offline
    When The user clicks the add course button to add an offline course
    When Inputs valid course details, offline location and address, clicks the add button
    Then The user should see a success message and be redirected to the course page

Scenario: A user edits a course
    When The user clicks the specific course and goes to its page
    When Clicks the edit button, inputs valid course details and clicks the update button
    Then The user should see a Course Updated Successfully message

Scenario: A user deletes a course
    When The user clicks the specific course and gets directed to its page
    When Clicks the delete button, confirms the delete action
    Then The user should see a deleted success message and be redirected to the course page





