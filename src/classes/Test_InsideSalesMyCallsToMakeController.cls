/*-------------------------------------------------------------------------------------------------	
 * Author            : naoussar@salesforce.com
 * Description       : Test_InsideSalesMyCallsToMakeController test class of InsideSalesMyCallsToMakeController class
 * History	
 * 25-07-2022        : Created (#TFUS-000004530)
--------------------------------------------------------------------------------------------------*/
@isTest
public with sharing class Test_InsideSalesMyCallsToMakeController {
    @isTest
    public static void Test_getMyCallsToMakeReportMethod() {
		try{
            Test.startTest();
            //test record data 
            My_Calls_to_make__mdt testRecord = InsideSalesMyCallsToMakeController.getMyCallsToMakeReport('test_Country');
            //test with a valid country entry	
            My_Calls_to_make__mdt existingUserCountry = InsideSalesMyCallsToMakeController.getMyCallsToMakeReport('Germany');
            Test.stopTest();
         
            System.assertEquals('DO NOT DELETE USED FOR TEST', testRecord.MasterLabel);
            System.assertNotEquals(null, existingUserCountry);
            //generate exception
            InsideSalesMyCallsToMakeController.getMyCallsToMakeReport(null);
    	}catch(AuraHandledException e){
    		system.assertEquals(e.getMessage(), 'Script-thrown exception');
    	}
    }
}