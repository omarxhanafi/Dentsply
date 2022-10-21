/*-------------------------------------------------------------------------------------------------------
Author:         Roberto Narbona
Description:    Test classes for FieldServiceCalloutERP Class
--------------------------------------------------------------------------------------------------------*/

@isTest(seeAllData=false)
public with sharing class FieldServiceCalloutERPTest {
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
    private static void testUpdateRecord1() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runAs(testUser) {
            List<Id> workOrderId = new List<Id>();
            List<WorkOrder> workOrder = TestDataFactory.createWorkOrders(1);
            workOrderId.add(workOrder[0].Id);
            Test.startTest();
                Boolean updateCompletes = FieldServiceCalloutERP.updateRecord(workOrderId, 'this is a message');
            	Boolean updateJSONVersion = FieldServiceCalloutERP.updateJSONVersion(workOrderId);
            Test.stopTest();
            System.assertEquals(true, updateCompletes, 'Updates have been completed when workorder');
            System.assertEquals(true, updateJSONVersion, 'JSON order has been updated for workorder');

        }
    }
    @isTest 
    private static void testUpdateRecord2() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runAs(testUser) {
            List<Id> productRequestId = new List<Id>();
            List<ProductRequest> productRequest = TestDataFactory.createProductRequests(1);
            productRequestId.add(productRequest[0].Id);
            Test.startTest();
                Boolean updateCompletes2 = FieldServiceCalloutERP.updateRecord(productRequestId, 'this is a message');
            	Boolean updateJSONVersion = FieldServiceCalloutERP.updateJSONVersion(productRequestId);
            Test.stopTest();
            System.assertEquals(true, updateCompletes2, 'Updates have been completed when Product Request');
                        System.assertEquals(true, updateJSONVersion, 'JSON order has been updated for product request');

        }
    }

    @isTest 
    private static void testdoFieldServiceCalloutERP1() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runAs(testUser) {
            List<Id> workOrderId = new List<Id>();
            List<WorkOrder> workOrder = TestDataFactory.createWorkOrders(1);
            workOrderId.add(workOrder[0].Id);
            Test.startTest();
                String response = FieldServiceCalloutERP.doFieldServiceCalloutERP(workOrderId);
            Test.stopTest();
            System.assertEquals(response, 'FaekeResponse', 'Fake callout completed successfully when work order');
        }
    }

    @isTest 
    private static void testdoFieldServiceCalloutERP2() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runAs(testUser) {
            List<Id> productRequestId = new List<Id>();
            List<ProductRequest> productRequest = TestDataFactory.createProductRequests(1);
            productRequestId.add(productRequest[0].Id);
            
            Test.startTest();
                String response = FieldServiceCalloutERP.doFieldServiceCalloutERP(productRequestId);
            Test.stopTest();
            System.assertEquals(response, 'FaekeResponse', 'Fake callout completed successfully when product request');
        }
    }
}