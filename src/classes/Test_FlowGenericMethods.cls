/*------------------------------------------------------------	
	Author: 		Richard Trum (Glimt) 2019-12-04	
	Description:   	Test class related to the class Flow_GenericMethods
	------------------------------------------------------------*/ 
@IsTest
private class Test_FlowGenericMethods {

    @TestSetup
    static void makeData(){
        User user1 = DC_UT_DataUtils.createSfUser('TestUser', 'Lightning Sales Rep');    
    }
    
    @IsTest
    private static void objectAccessTest(){
    User user1 = [SELECT Id FROM User WHERE Username LIKE 'TestUser%' LIMIT 1];
    
    Test.startTest();
    		List<String> input = new List<String>();
    		input.add('Order');
    		List<Boolean> result = Flow_GenericMethods.checkObjectAccess(input);
    		
    		System.assertEquals(result[0], true);
    
    Test.stopTest(); 
        
    }
    
    @IsTest
    private static void recordAccessTest(){
    User user1 = [SELECT Id FROM User WHERE Username LIKE 'TestUser%' LIMIT 1];
    List<Account> acc = TestDataFactory.createAccounts(1, 'CIM_Account', user1.Id);
        
    Test.startTest();
    		List<Id> input = new List<Id>();
    		input.add(acc[0].Id);
    		List<String> result = Flow_CheckRecordAccess.checkRecordAccess(input);
    		
    		System.assertNotEquals(result[0], null);
    
    Test.stopTest(); 
        
    }
    
    @IsTest
    private static void getDependentPLTest(){
        List<String> inputList = new List<String>();
        inputList.add('Field_Sales_Project_Members__c');
        inputList.add('Brand__c');
        
        List<List<String>> input = new List<List<String>>();
        
        input.add(inputList);
       
        Test.startTest();
        	Flow_getDependentPicklistValues.checkParentValues(input);
        Test.stopTest();
    }

}