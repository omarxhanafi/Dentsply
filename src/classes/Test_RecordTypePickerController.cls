/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class for RecordTypePickerController.
 *
 * @History
 * 17-12-2024   Omar     Created test class.
 */
@isTest
private class Test_RecordTypePickerController {

    @testSetup
    static void setup() {
        // Bypass settings and insert test user
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();
    }


    @isTest
    static void testFetchRecordTypeValues() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Fetch the number of available RecordTypes for the Account object
            List<RecordType> availableRecordTypes = [
                    SELECT Id, Name
                    FROM RecordType
                    WHERE SObjectType = 'Account'
                    AND IsActive = true
                    AND Name != 'Master'
            ];
            Integer expectedCount = availableRecordTypes.size() - 1;

            Test.startTest();
            // Call the controller method
            String serializedResult = RecordTypePickerController.fetchRecordTypeValues('Account');
            Test.stopTest();

            // Deserialize the result
            List<RecordTypePickerController.RecordTypeOptions> rtOptions =
                    (List<RecordTypePickerController.RecordTypeOptions>) JSON.deserialize(serializedResult, List<RecordTypePickerController.RecordTypeOptions>.class);

            // Assertions
            System.assertEquals(expectedCount, rtOptions.size(), 'The number of record type options should match the available record types.');
        }
    }
}
