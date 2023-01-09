/*------------------------------------------------------------
Author: 		Richard Trum (Glimt) 2019-11-28  
Description:   	Test class for testing the apex class UsersInAccountTerritories
History
<Date>      <Authors Name>     <Brief Description of Change>
12092019	Miguel				Added setup() method
------------------------------------------------------------*/

@IsTest
private class Test_UsersInAccountTerritories {
	@testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();
    }
    
    @IsTest
    private static void opportunityTest(){
	
    Test.startTest();
        
    /*Territory2Model terMod = [SELECT Id FROM Territory2Model LIMIT 1][0];
        
    List<Territory2Type> terTypeList = [SELECT Id FROM Territory2Type];
    Territory2Type terType = terTypeList[0];*/    
         
	Territory2 ter = [SELECT Id FROM Territory2][0];
        
    User thisUser = [ select Id from User where Id = :UserInfo.getUserId() ];

    User user1 = DC_UT_DataUtils.createSfUser('TestUser', 'Lightning Sales Rep');
	System.debug(user1);

    UserTerritory2Association userConnection = new UserTerritory2Association();
    userConnection.Territory2Id = ter.Id; 
    userConnection.UserId = user1.Id; 
    insert userConnection;
    
    Account account1 = new Account();
    Account account2 = new Account();
    Account account3 = new Account();    
    List<Id> accIds = new List<Id>();
        
    System.runAs ( user1 ) {  
    account1 = createAccount();  
    accIds.add(account1.Id);
        
    account2 = createAccount();
    account2.Country__c = 'DE';
    update account2;   

   	account3 = createAccount();
    account3.Country__c = 'DE';
    update account3;     
        
    }
        
        List<UserTerritory2Association> userList = UsersInAccountTerritories.getUsers(account1.Id, '', '', '');
        List<UserTerritory2Association> userDEList = UsersInAccountTerritories.getUsers(account2.Id, 'Equipment & Imaging', 'Sinius', account3.Id);
        
        Map<Id, List<UserTerritory2Association>> userMap = UsersInAccountTerritories.getUsersFromMultipleAccounts(accIds);
		
        System.assertNotEquals(userList.size(), 1);
        
        Test.stopTest();  
       
    }
        
    private static Account createAccount(){
        
        Account account1 = new Account();
        account1.Name = 'Account1';
        account1.Country__c = 'IE';
        insert account1;
            
        ObjectTerritory2Association accountConnect = new ObjectTerritory2Association();
        accountConnect.Territory2Id = [SELECT Id FROM Territory2][0].Id;
        accountConnect.AssociationCause ='Territory2Manual';
        accountConnect.ObjectId = account1.Id;
        insert accountConnect;
    
        return account1;
        
    }

    /**
     *  Tests the UsersInAccountTerritories.getSuggestedUsers() method. it is used in the New Sales Lead (Lwc) Action
     */
    @isTest
    private static void testGetSuggestedUsers()
    {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runAs(testUser)
        {
            // Given
            List<Account> accounts = TestDataFactory.returnAccounts(2, 'CIM_Account', testUser.Id);
            accounts[0].Country__c = 'BE';
            accounts[1].Country__c = 'DE';
            insert accounts;

            // When
            Test.startTest();
            List<UserTerritory2Association> suggestedUsersFromAcc =
                    UsersInAccountTerritories.getSuggestedUsers(accounts[0].Id,'Implants','ANKYLOS',null);

            List<UserTerritory2Association> suggestedUsersNothingFound =
                    UsersInAccountTerritories.getSuggestedUsers(accounts[1].Id,'notfound','notfound',null);
            Test.stopTest();

            // Then
            System.assert(!suggestedUsersFromAcc.isEmpty(),'Empty List of suggested users');
            System.assert(!suggestedUsersNothingFound.isEmpty(),'Empty List of suggested users');
            System.assertEquals(testUser.Id,suggestedUsersNothingFound[0].UserId,'Current User not suggested');
        }
    }





    
}