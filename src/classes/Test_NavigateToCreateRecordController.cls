/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class for NavigateToCreateRecordController.
 *
 * @History
 * 17-12-2024   Omar     Created test class
 */
@isTest
private class Test_NavigateToCreateRecordController {

    @testSetup
    static void setup() {
        // Bypass settings and insert test user
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();

        // Create test Account
        Account testAccount = testDataFactory.returnAccounts(1, 'CIM_Account', userList[0].Id)[0];
        insert testAccount;
    }

    @isTest
    static void testGetRecord() {
        // Retrieve the test user
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Get the test Account ID
            Account testAccount = [SELECT Id FROM Account LIMIT 1];
            String fields = 'Id, Name';

            Test.startTest();
            // Call the method
            String result = NavigateToCreateRecordController.getRecord(testAccount.Id, fields);
            Test.stopTest();

            // Deserialize the result
            Map<String, Object> resultMap = (Map<String, Object>) JSON.deserializeUntyped(result);

            // Assertions
            System.assertEquals(testAccount.Id, resultMap.get('Id'), 'The ID should match the queried Account');
            System.assertEquals('TestAccount0', resultMap.get('Name'), 'The Name should match the queried Account name');
        }
    }
}
