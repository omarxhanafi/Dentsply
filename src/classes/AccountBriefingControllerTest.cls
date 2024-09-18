@isTest
public class AccountBriefingControllerTest {

    @TestSetup
    private static void setup(){
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.createUsers(1, '#System: System Administrator');
    }

    @isTest
    private static void testGetAttentionPoints()
    {

        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        List<Account> accounts1 = TestDataFactory.createAccounts(1, 'Geographical_Account', testUser.Id);

        List<Opportunity> opp = TestDataFactory.returnOpportunities(1, 'Lightning_Pipeline_Opportunity', testUser.Id);
        opp[0].CloseDate = Date.today().addDays(-5);
        opp[0].StageName = 'Closed Won';
        opp[0].AccountId = accounts1[0].Id;
        insert opp;

        System.runAs(testUser)
        {
            Test.startTest();
            List<AccountBriefingController.AttentionPoint> attentionPoints = AccountBriefingController.getAttentionPoints(accounts1[0].Id);
            Test.stopTest();

            System.assert(attentionPoints.size()>0, 'No Attention Points returned');
            System.assertEquals(attentionPoints[0].id,opp[0].Id,'Wrong Opportunity');

        }
    }
}