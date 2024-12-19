/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class for ProductProfilingBundle.
 *
 * @History
 * 17-12-2024   Omar     Created test class
 */
@isTest
private class Test_ProductProfilingBundle {

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
    static void testConstructorWithThreeParams() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            Test.startTest();
            // Instantiate using 3-parameter constructor
            ProductProfilingBundle productBundle = new ProductProfilingBundle(
                    '001',
                    'Test Product',
                    'Test Manufacturer'
            );
            Test.stopTest();

            // Assertions
            System.assertEquals('001', productBundle.productId, 'ProductId should be correctly assigned');
        }
    }

    @isTest
    static void testConstructorWithFourParams() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            Test.startTest();
            // Instantiate using 4-parameter constructor
            ProductProfilingBundle productBundle = new ProductProfilingBundle(
                    '002',
                    'Advanced Product',
                    'Advanced Manufacturer',
                    'Electronics'
            );
            Test.stopTest();

            // Assertions
            System.assertEquals('002', productBundle.productId, 'ProductId should be correctly assigned');
        }
    }
}
