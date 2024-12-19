/**
* Test Suite for testing Chatter Disable Delete app
* 
* Author: Marcus Ericsson - mericsson@dentsplysirona.com
*/
@isTest(seeAllData=false)
private class DisableChatterDeletesTestSuite {
    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.createUsers(1, 'System Administrator');
        List<User> userIntegrationList = TestDataFactory.insertIntegrationUsers(1, 'System Administrator');
        TestDataFactory.createGlobalIntegrationSettings(userIntegrationList);
        Chatter_Delete_Settings__c[] settings = [select id from Chatter_Delete_Settings__c];
        delete(settings);
    }
    
    @isTest
    private static void testSetup() {
        Test.startTest();
        List<User> testUserList = [SELECT Id FROM User WHERE Alias = 'test1'];
        Test.stopTest();
        System.assertEquals(1, testUserList.size(), 'Expected one user');
    }
    
    @isTest
    private static void testFeedItemDeleteSysAdmin() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        
        FeedItem p = new FeedItem();
        p.parentId = testUser.Id;
        p.Body = 'force.com labs is great!';
        insert p;
        
        System.runAs(testUser) {
            Test.startTest();
            try {
                delete(p);
            } catch (System.DmlException e) {
                System.assert(e.getMessage().contains('disabled'));
            }
            Test.stopTest(); 
        } 
    }
    
    static testMethod void testFeedCommentDelete() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        FeedItem p = new FeedItem();
        p.parentId = testUser.Id;
        p.Body = 'force.com labs is great!';
        insert p;
        
        FeedComment c = new FeedComment();
        c.feedItemId = p.Id;
        c.CommentBody = 'this is a comment';
        insert(c);
        
        System.runAs(testUser) {
            Test.startTest();
            try {
                delete(c);
                System.assert(true);
            } catch (System.DmlException e) {
            }
            Test.stopTest(); 
            
        }
    }
    
    
}