@Demographics
Feature: Demographic record of a patient

Background: 
  Given I navigate to patient grid
  
   @EmailSendWhenEmailNotSet
   @Sanity
    Scenario Outline: Email send when email is not set in demographics record of patient
    
  Given I search <Patient> using global search
   When I click on patient record Edit button
    *   I enter <Email> in patient record email field
    *   I click on patient record Update button
   When I click on patient account button to send email
    And I click on send invitation button to send email
   Then I should see message email is not set
   
   Examples:
    |    Patient  |Email|
    |Adam, Andrew |     |