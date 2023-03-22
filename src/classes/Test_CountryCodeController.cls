/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class for the CountryCodeController
 *
 * @History
 * 22-03-2023   Omar     Created Test_CountryCodeController Class
 */

@isTest(seeAllData=false)
public without sharing class Test_CountryCodeController {
    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, 'System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();

    }
    @isTest
    private static void testGetThreeDigitCode() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];
        System.runAs(testUser) {
            // Test getThreeDigitCode method
            Test.startTest();

            String actualResult = CountryCodeController.getThreeDigitCode('US');

            Test.stopTest();

            String expectedResult = 'USA';
            System.assertEquals(expectedResult, actualResult);

        }
    }

    @isTest
    private static void testGetTwoDigitCode() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];
        System.runAs(testUser) {
            // Test getTwoDigitCode method
            Test.startTest();

            String actualResult = CountryCodeController.getTwoDigitCode('USA');

            Test.stopTest();

            String expectedResult = 'US';
            System.assertEquals(expectedResult, actualResult);
        }

    }
}