import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable

WebUI.callTestCase(findTestCase('Utility_Functions/UF_OpenApplication'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Utility_Functions/UF_Login'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Utility_Functions/UF_NavigateToCarePlan'), [:], FailureHandling.STOP_ON_FAILURE)

if (WebUI.verifyElementPresent(findTestObject('OR_PatientGrid/OR_PatientData/OR_NonClinicalSection/OR_CarePlan/OR_CPButtons/OR_Blank/Obj_Blank'), 2)) {
    WebUI.click(findTestObject('OR_PatientGrid/OR_PatientData/OR_NonClinicalSection/OR_CarePlan/OR_CPButtons/OR_Blank/Obj_Blank'))
} else {
    WebUI.takeFullPageScreenshot()
}

WebUI.callTestCase(findTestCase('Utility_Functions/UF_CarePlanGrid/UF_Common_Data'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Utility_Functions/UF_CarePlanGrid/UF_StatusGrid/UF_New'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Utility_Functions/UF_RandomFuntion/UF_Draft/UF_InputFunction_SaveBtn'), [:], FailureHandling.STOP_ON_FAILURE)

Thread.sleep(1000)

//WebUI.callTestCase(findTestCase('Utility_Functions/UF_Validation Message/UF_SuccessMessage'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Utility_Functions/UF_CarePlanGrid/UF_Common_Data'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Utility_Functions/UF_CarePlanGrid/UF_Draft_Data'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Utility_Functions/UF_CarePlanGrid/UF_StatusGrid/UF_Draft'), [:], FailureHandling.STOP_ON_FAILURE)

Thread.sleep(1000)

'Click On Print Button'
if(WebUI.verifyElementPresent(findTestObject('OR_PatientGrid/OR_PatientData/OR_NonClinicalSection/OR_CarePlan/OR_CPGrid_Buttons/OR_Print/Obj_ButtonPrint'), 3)) {
	
	WebUI.click(findTestObject('OR_PatientGrid/OR_PatientData/OR_NonClinicalSection/OR_CarePlan/OR_CPGrid_Buttons/OR_Print/Obj_ButtonPrint'))
}else {
	println("Print Button Is Not Present..!!")
}

WebUI.click(findTestObject('Object Repository/OR_PatientGrid/OR_PatientData/OR_NonClinicalSection/OR_CarePlan/OR_CPGrid_Buttons/OR_Print/Obj_PatientCarePlan'))

Thread.sleep(2000)

WebUI.closeBrowser()