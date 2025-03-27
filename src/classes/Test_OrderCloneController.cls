/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class of OrderCloneController
 *
 * @History
 * 11-02-2025   Omar     Created test class
 */

@isTest(seeAllData=false)
public without sharing class Test_OrderCloneController {

    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();
    }

    @isTest
    private static void testGetOrderDetails() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Create test account
            List<Account> testAccount = TestDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);
            insert testAccount;

            // Create test pricebook
            List<Pricebook2> testPricebook = TestDataFactory.returnPricebooks(1, 'Test Price Book');
            testPricebook[0].IsActive = true;
            insert testPricebook[0];

            // Create test order
            Order testOrder = new Order(
                    AccountId = testAccount[0].Id,
                    EffectiveDate = Date.today(),
                    Status = 'Created',
                    Pricebook2Id = testPricebook[0].Id
            );
            insert testOrder;

            // Query the order
            testOrder = [SELECT Id, OrderNumber, Status FROM Order WHERE Id = :testOrder.Id LIMIT 1];

            Test.startTest();
            Order result = OrderCloneController.getOrderDetails(testOrder.Id);
            Test.stopTest();

            // Assertions
            Assert.areEqual(testOrder.Id, result.Id, 'Order ID should match');
            Assert.areEqual(testOrder.OrderNumber, result.OrderNumber, 'Order number should match');
            Assert.areEqual(testOrder.Status, result.Status, 'Order status should match');
        }
    }

    @isTest
    private static void testCloneOrder() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Create test data
            List<Account> testAccount = TestDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);
            insert testAccount;

            List<Pricebook2> testPricebook = TestDataFactory.returnPricebooks(1, 'Test Price Book');
            testPricebook[0].IsActive = true;
            insert testPricebook[0];

            List<Product2> testProducts = TestDataFactory.returnProducts(2);
            insert testProducts;

            List<PricebookEntry> testPricebookEntries = TestDataFactory.returnPricebookEntries(2, testPricebook, testProducts);
            insert testPricebookEntries;

            Order testOrder = new Order(
                    AccountId = testAccount[0].Id,
                    EffectiveDate = Date.today(),
                    Status = 'Created',
                    Pricebook2Id = testPricebook[0].Id
            );
            insert testOrder;

            List<OrderItem> testOrderItems = new List<OrderItem>{
                    new OrderItem(
                            OrderId = testOrder.Id,
                            Product2Id = testProducts[0].Id,
                            PricebookEntryId = testPricebookEntries[0].Id,
                            Quantity = 1,
                            UnitPrice = 100
                    ),
                    new OrderItem(
                            OrderId = testOrder.Id,
                            Product2Id = testProducts[1].Id,
                            PricebookEntryId = testPricebookEntries[1].Id,
                            Quantity = 1,
                            UnitPrice = 200
                    )
            };
            insert testOrderItems;

            // Mock the RLM API callout
            Test.setMock(HttpCalloutMock.class, new MockRLMResponseGenerator());

            Test.startTest();
            Order clonedOrder = OrderCloneController.cloneOrder(testOrder.Id);
            Test.stopTest();

            // Assertions
            Assert.isNotNull(clonedOrder, 'Should return mock order in test context');
            Assert.areEqual('Created', clonedOrder.Status, 'Should return test status');
        }
    }

    @isTest
    private static void testCheckPricingChanges() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Create test account
            List<Account> testAccount = TestDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);
            insert testAccount;

            // Create test pricebook
            List<Pricebook2> testPricebook = TestDataFactory.returnPricebooks(1, 'Test Price Book');
            testPricebook[0].IsActive = true;
            insert testPricebook[0];

            // Create test products
            List<Product2> testProducts = TestDataFactory.returnProducts(2);
            insert testProducts;

            // Create test pricebook entries
            List<PricebookEntry> testPricebookEntries = TestDataFactory.returnPricebookEntries(2, testPricebook, testProducts);
            testPricebookEntries[0].UnitPrice = 100;
            testPricebookEntries[1].UnitPrice = 200;
            insert testPricebookEntries;

            // Create test order
            Order testOrder = new Order(
                    AccountId = testAccount[0].Id,
                    EffectiveDate = Date.today(),
                    Status = 'Created',
                    Pricebook2Id = testPricebook[0].Id
            );
            insert testOrder;

            // Create test order items
            List<OrderItem> testOrderItems = new List<OrderItem>();
            testOrderItems.add(new OrderItem(
                    OrderId = testOrder.Id,
                    Product2Id = testProducts[0].Id,
                    PricebookEntryId = testPricebookEntries[0].Id,
                    Quantity = 1,
                    UnitPrice = 100
            ));
            testOrderItems.add(new OrderItem(
                    OrderId = testOrder.Id,
                    Product2Id = testProducts[1].Id,
                    PricebookEntryId = testPricebookEntries[1].Id,
                    Quantity = 1,
                    UnitPrice = 200
            ));
            insert testOrderItems;

            // Update pricebook entries with new prices
            testPricebookEntries[0].UnitPrice = 150;
            testPricebookEntries[1].UnitPrice = 250;
            update testPricebookEntries;

            Test.startTest();
            List<Map<String, Object>> pricingChanges = OrderCloneController.checkPricingChanges(testOrder.Id);
            Test.stopTest();

            Assert.isNotNull(pricingChanges);
            Assert.areEqual(2, pricingChanges.size());
        }
    }

    @isTest
    private static void testCheckProductStructureChanges() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Create test account
            List<Account> testAccount = TestDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);
            insert testAccount;

            // Create test pricebook
            List<Pricebook2> testPricebook = TestDataFactory.returnPricebooks(1, 'Test Price Book');
            testPricebook[0].IsActive = true;
            insert testPricebook[0];

            // Create test products (1 bundle product and 2 component products)
            List<Product2> testProducts = TestDataFactory.returnProducts(3);
            testProducts[0].Name = 'Test Bundle Product';
            testProducts[1].Name = 'Test Component 1';
            testProducts[2].Name = 'Test Component 2';
            insert testProducts;

            // Create test pricebook entries
            List<PricebookEntry> testPricebookEntries = TestDataFactory.returnPricebookEntries(3, testPricebook, testProducts);
            insert testPricebookEntries;

            // Create test order
            Order testOrder = new Order(
                    AccountId = testAccount[0].Id,
                    EffectiveDate = Date.today(),
                    Status = 'Created',
                    Pricebook2Id = testPricebook[0].Id
            );
            insert testOrder;

            // Create test order items
            List<OrderItem> testOrderItems = new List<OrderItem>();

            // Create parent item (bundle)
            OrderItem parentItem = new OrderItem(
                    OrderId = testOrder.Id,
                    Product2Id = testProducts[0].Id,
                    PricebookEntryId = testPricebookEntries[0].Id,
                    Quantity = 1,
                    UnitPrice = 100
            );
            insert parentItem;

            // Create child items (components)
            List<OrderItem> childItems = new List<OrderItem>();
            childItems.add(new OrderItem(
                    OrderId = testOrder.Id,
                    Product2Id = testProducts[1].Id,
                    PricebookEntryId = testPricebookEntries[1].Id,
                    Quantity = 1,
                    UnitPrice = 200
            ));
            childItems.add(new OrderItem(
                    OrderId = testOrder.Id,
                    Product2Id = testProducts[2].Id,
                    PricebookEntryId = testPricebookEntries[2].Id,
                    Quantity = 1,
                    UnitPrice = 300
            ));
            insert childItems;

            // Mock the RLM API callout for product structure
            Test.setMock(HttpCalloutMock.class, new MockRLMProductStructureResponseGenerator(
                    testProducts[0].Id, // bundle product ID
                    new List<Id>{testProducts[1].Id}, // only include one component to simulate a removed product
                    new List<Id>{'01t000000000001'} // include a new product that wasn't in the original order
            ));

            Test.startTest();
            List<Map<String, Object>> structureChanges = OrderCloneController.checkProductStructureChanges(testOrder.Id);
            Test.stopTest();

            Assert.isNotNull(structureChanges, 'Structure changes should not be null');
        }
    }


    // Mock class for RLM API
    private class MockRLMResponseGenerator implements HttpCalloutMock {
        public HTTPResponse respond(HTTPRequest req) {
            HttpResponse res = new HttpResponse();
            res.setHeader('Content-Type', 'application/json');
            res.setBody('{"success": true, "orderId": "8011x0000012345", "orderNumber": "00012345"}');
            res.setStatusCode(200);
            return res;
        }
    }

    // Mock class for PCM API
    private class MockRLMProductStructureResponseGenerator implements HttpCalloutMock {
        private Id bundleProductId;
        private List<Id> componentProductIds;
        private List<Id> newComponentIds;

        public MockRLMProductStructureResponseGenerator(Id bundleId, List<Id> componentIds, List<Id> newIds) {
            this.bundleProductId = bundleId;
            this.componentProductIds = componentIds;
            this.newComponentIds = newIds;
        }

        public HTTPResponse respond(HTTPRequest req) {
            HttpResponse res = new HttpResponse();
            res.setHeader('Content-Type', 'application/json');

            // Build dynamic response based on constructor parameters
            List<Map<String, Object>> components = new List<Map<String, Object>>();

            // Add existing components
            for(Id productId : componentProductIds) {
                components.add(new Map<String, Object>{
                        'id' => productId,
                        'name' => 'Test Component ' + productId,
                        'nodeType' => 'simpleProduct'
                });
            }

            // Add new components
            for(Id newId : newComponentIds) {
                components.add(new Map<String, Object>{
                        'id' => newId,
                        'name' => 'New Component',
                        'nodeType' => 'simpleProduct'
                });
            }

            Map<String, Object> responseBody = new Map<String, Object>{
                    'products' => new List<Object>{
                            new Map<String, Object>{
                                    'id' => bundleProductId,
                                    'productComponentGroups' => new List<Object>{
                                            new Map<String, Object>{
                                                    'components' => components
                                            }
                                    }
                            }
                    }
            };

            res.setBody(JSON.serialize(responseBody));
            res.setStatusCode(200);
            return res;
        }
    }


}
