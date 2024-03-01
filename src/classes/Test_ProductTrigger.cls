/*-------------------------------------------------------------------------------------------------
 * Author            : ohanafi@salesforce.com
 * Description       : Product trigger test class
 * History
 * 24-01-2024         Created Test_ProductTrigger class (TFUS-000006278)
--------------------------------------------------------------------------------------------------*/

@isTest(seeAllData=false)
public class Test_ProductTrigger {
    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.createUsers(1, 'System Administrator');
        List<User> userIntegrationList = TestDataFactory.insertIntegrationUsers(1, 'System Administrator');
        TestDataFactory.createGlobalIntegrationSettings(userIntegrationList);

        // Insert Product Families
        List<ProductFamily__c> productFamilies = new List<ProductFamily__c>{
                new ProductFamily__c(Name = 'Family1'),
                new ProductFamily__c(Name = 'Family2')
        };
        insert productFamilies;

        // Insert Non ERP Products
        List<Non_ERP_Products__c> nonErpProducts = new List<Non_ERP_Products__c>{
                new Non_ERP_Products__c(
                        Name = 'NonERP1',
                        AssignmentRuleCodes__c = 'Code1;Code2',
                        ProductFamily__c = productFamilies[0].Id
                ),
                new Non_ERP_Products__c(
                        Name = 'NonERP2',
                        AssignmentRuleCodes__c = 'Code3;Code4',
                        ProductFamily__c = productFamilies[1].Id
                )
                // Add more Non ERP products as needed
        };
        insert nonErpProducts;
    }


    // Test method for insert scenario
    @isTest static void testAssignNonERPProductOnInsert() {
        // Retrieve test data
        List<Non_ERP_Products__c> nonErpProducts = [SELECT Id, AssignmentRuleCodes__c, ProductFamily__c FROM Non_ERP_Products__c];

        // Create a new Product2 record
        List<Product2> products = TestDataFactory.returnProducts(1);
        products[0].PG4_Code__c = 'Code1';

        Test.startTest();
        insert products[0];
        Test.stopTest();

        // Re-query the inserted product to verify the fields
        Product2 insertedProduct = [SELECT NonErpProduct__c, GlobalProductFamily__c FROM Product2 WHERE Id = :products[0].Id];
        System.assertEquals(nonErpProducts[0].Id, insertedProduct.NonErpProduct__c);
        System.assertEquals(nonErpProducts[0].ProductFamily__c, insertedProduct.GlobalProductFamily__c);
    }

    // Test method for update scenario
    @isTest static void testAssignNonERPProductOnUpdate() {
        // Retrieve test data
        List<Non_ERP_Products__c> nonErpProducts = [SELECT Id, AssignmentRuleCodes__c, ProductFamily__c FROM Non_ERP_Products__c];

        // Insert a product initially with no matching Non ERP Product
        List<Product2> products = TestDataFactory.returnProducts(1);
        products[0].PG4_Code__c = 'CodeX';
        insert products[0];

        // Update the product to have a matching Non ERP Product code
        products[0].PG4_Code__c = 'Code3'; // This should match the second Non ERP Product

        Test.startTest();
        update products[0];
        Test.stopTest();

        // Re-query the updated product
        Product2 updatedProduct = [SELECT NonErpProduct__c, GlobalProductFamily__c FROM Product2 WHERE Id = :products[0].Id];
        System.assertEquals(nonErpProducts[1].Id, updatedProduct.NonErpProduct__c);
        System.assertEquals(nonErpProducts[1].ProductFamily__c, updatedProduct.GlobalProductFamily__c);
    }



}