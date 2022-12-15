/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class covering SalesAnalyticsTrigger, SalesAnalyticsTriggerHandler, SalesAnalyticsTriggerHelper
 *
 * @History
 * 30-11-2022   Omar     Create new Test Class
 */

@IsTest
public with sharing class Test_SalesAnalyticsTrigger {

    /*------------------------------------------------------------
    Description:    Test setup
    ------------------------------------------------------------*/
    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.createUsers(1, '#System: System Administrator');
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();
    }

    /*------------------------------------------------------------
    Description:    Test the procedure trackers creation
    ------------------------------------------------------------*/
    @isTest
    private static void testCreateProcedureTrackers() {

    }

}