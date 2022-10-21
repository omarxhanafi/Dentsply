/*-------------------------------------------------------------------------------------------------------
Author:         Roberto Narbona
Description:    GetOrderStatusCallOut Class
--------------------------------------------------------------------------------------------------------*/

@isTest(seeAllData=false)
public with sharing class GetOrderStatusCallOutTest {
    /*-------------------------------------------------------------------------------------------------------
    
    Description: Setup one user for the test class
    History :
    --------------------------------------------------------------------------------------------------------*/
    @testSetup
    private static void setup() {
        List<User> userList = TestDataFactory.createUsers(1, '#System: System Administrator');
        System.runas(userList.get(0)) {
            
        }
        TestDataFactory.createBypassCustomSetting();
        List<User> userIntegrationList = TestDataFactory.insertIntegrationUsers(1, 'System Administrator');
        TestDataFactory.createGlobalIntegrationSettings(userIntegrationList);
    }

    @isTest
    private static void testSetup() {
        Test.startTest();
        List<User> testUserList = [SELECT Id FROM User WHERE Alias = 'test1'];
        Test.stopTest();
        
        System.assertEquals(1, testUserList.size(), 'Expected one user');
    }

    @isTest
    private static void testGetCountryCode() {
        User testUser = [SELECT Id,User_Country__c FROM User WHERE Alias = 'test1'];
        System.runAs(testUser) {
            Test.startTest();
                String country = GetOrderStatusCallOut.getCountryCode();
                system.debug(country);
            Test.stopTest();
        }
    }
    @isTest 
    private static void testGetOrderNumber() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runAs(testUser) {
            List<Account> accounts = TestDataFactory.createAccounts(1, 'Non_ERP_Account', testUser.Id);
            List<OpenOrderLine__c> openOrderLines = TestDataFactory.createOpenOrderLines(1, accounts);
            Test.startTest();
                String country = GetOrderStatusCallOut.getOrderNumber(openOrderLines[0].Id, 'OpenOrderLine__c');
            Test.stopTest();
        }
    }

    @isTest 
    private static void testGetOrderNumber2() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runAs(testUser) {
        List<Account> accounts = TestDataFactory.createAccounts(1, 'Non_ERP_Account', testUser.Id);
        List<Order> orders = TestDataFactory.createOrders(1, 'Free_Good_Order', accounts);
        Test.startTest();
            String country = GetOrderStatusCallOut.getOrderNumber(orders[0].Id, 'Order');
        Test.stopTest();
        }
    }

    
    @isTest 
    private static void testGetTokenId() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runAs(testUser) {
            PricingMicroServiceCallOut__mdt calloutDetail = [SELECT Client_ID__c, GetOrderDetailsLogicAppsURL__c, Scope__c, Secret_Id__c, TokenURL__c FROM PricingMicroServiceCallOut__mdt Limit 1];
            Test.startTest();
                String token = GetOrderStatusCallOut.getTokenId(calloutDetail);
            Test.stopTest();
        }
    }
    @isTest 
    private static void testGetOrderStatusCallOut() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runAs(testUser) {
            Test.startTest();
                Map<String, Object> callBack = GetOrderStatusCallOut.getOrderStatusCallOut('US', '55');
            Test.stopTest();
        }
    }
}