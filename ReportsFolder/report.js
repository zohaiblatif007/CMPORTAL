$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/PatientGrid/Assessment/Assessment.feature");
formatter.feature({
  "name": "Add All types of Assessments",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Assessment"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Test Cancel button feature in Recommended Assessment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CancelbuttonofAssessment"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I search \u003cPatient\u003e using global search",
  "keyword": "Given "
});
formatter.step({
  "name": "I verify patient is selected",
  "keyword": "* "
});
formatter.step({
  "name": "I click on Assessment tab",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Assessment Add button",
  "keyword": "When "
});
formatter.step({
  "name": "I click on Recommended Assessment tab to add assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I should see Cancel, Save \u0026 Close and Save buttons available and functional",
  "keyword": "* "
});
formatter.step({
  "name": "I should see the Questionaire is loaded against relevant assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I should see question removing cross sign available and functional",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cTitle\u003e in assessment title field",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cCPTCode\u003e in assessment CPTCode field",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cComment\u003e in assessment comment field",
  "keyword": "* "
});
formatter.step({
  "name": "I click on Cancel button to cancel the saved assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I should not see the canceled assessment present on the grid",
  "keyword": "* "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Patient",
        "Title",
        "BillableType",
        "CPTCode",
        "Comment"
      ]
    },
    {
      "cells": [
        "99BPCITest1",
        "HTN-1",
        "Yes",
        "893",
        "chronic desease"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to patient grid",
  "keyword": "Given "
});
formatter.match({
  "location": "SD_PatientGrid.I_navigate_to_patient_grid()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test Cancel button feature in Recommended Assessment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Assessment"
    },
    {
      "name": "@CancelbuttonofAssessment"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I search 99BPCITest1 using global search",
  "keyword": "Given "
});
formatter.match({
  "location": "SD_SearchPatient.search_Patient(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify patient is selected",
  "keyword": "* "
});
formatter.match({
  "location": "SD_SearchPatient.search_Patientverification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Assessment tab",
  "keyword": "And "
});
formatter.match({
  "location": "Assessment.buttoncaregaptab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Assessment Add button",
  "keyword": "When "
});
formatter.match({
  "location": "Assessment.Assementadd()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Recommended Assessment tab to add assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.recommendedassessment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Cancel, Save \u0026 Close and Save buttons available and functional",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.buttonsvalidations()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the Questionaire is loaded against relevant assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.questionaire()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see question removing cross sign available and functional",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Questionremovesign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter HTN-1 in assessment title field",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter 893 in assessment CPTCode field",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.CPTCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter chronic desease in assessment comment field",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.comment(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Cancel button to cancel the saved assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Obj_buttoncancel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not see the canceled assessment present on the grid",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.cancelassessmentverify()"
});
formatter.result({
  "status": "passed"
});
});