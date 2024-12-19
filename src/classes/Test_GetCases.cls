/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class for GetCases.
 *
 * @History
 * 17-12-2024   Omar     Created test class
 */
@isTest
private class Test_GetCases {

    @testSetup
    static void setup() {
        // Bypass custom settings and setup test users
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();

        // Create a base Case to fetch similar duplicates
        List<Case> caseList = TestDataFactory.returnCases(4, 'Service_Complaint', userList[0].Id);

        // Create duplicate Cases
        for (Integer i = 0; i < 4; i++) {
            caseList[i].Subject = 'Duplicate Case Warning';
            caseList[i].SuppliedEmail = 'test@example.com';
            caseList[i].Status = 'New';
            caseList[i].CreatedDate = Datetime.now().addMinutes(i - 3); // Within the 5-minute range
        }

        insert caseList;
    }

    @isTest
    static void testGetCases() {
        // Retrieve the test user
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Fetch the Case created in the test setup
            Case testCase = [SELECT Id FROM Case LIMIT 1];

            Test.startTest();
            // Invoke the method
            List<Case> duplicateCases = GetCases.getCases(testCase.Id);
            Test.stopTest();

            // Assertions
            System.assertNotEquals(null, duplicateCases, 'Duplicate cases list should not be null');
            System.assertEquals(3, duplicateCases.size(), 'There should be 3 duplicate cases returned');
            for (Case dup : duplicateCases) {
                System.assert(dup.Id != testCase.Id, 'The returned case should not be the original case');
            }
        }
    }
}
