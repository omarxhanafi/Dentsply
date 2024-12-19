/*------------------------------------------------------------
Author: 		unknown ?
Description:   	
History
<Date>      <Authors Name>     <Brief Description of Change>
12092019	Miguel				Added Custom Bypass CS Data data creation
20230725	Roberto				Fixing DML error after new flow on users was introduced
------------------------------------------------------------*/
@IsTest(SeeAllData=true) 
private class Test_postChattertoOpportunity{
    
    static testMethod void testPostChatter(){
        // setup() methods cannot be created because this test class is annotated with @IsTest(SeeAllData=true)as it's covering a Chatter post 
        // thus added methods in the testMethod itself 
        
        //We query Support user because it will rarely change and cause
        //we cannot create users without having DML mixim error
        
        
        Account acc = new Account(Name='Test Acc');
        insert acc;
        RecordType recTyp= [SELECT Id, Name, DeveloperName, SobjectType FROM RecordType WHERE RecordType.DeveloperName = 'Lightning_Pipeline_Opportunity'];
        
        Opportunity opp= new Opportunity(
            Name='Test Opp',
            StageName='In Progress', 
            Amount=9999, 
            RecordTypeId= recTyp.Id,    
            CloseDate=System.today(),
            AccountID=acc.Id);
        insert opp;
        User usr = [SELECT Id FROM user WHERE name = 'Support' LIMIT 1];
        OpportunityTeamMember oppTeam = new OpportunityTeamMember(OpportunityId=opp.Id,UserId=usr.Id,TeamMemberRole='Account Manager');
        insert oppTeam;
        List<id> oppTeamId = new List<id>();
        oppTeamId.add(oppTeam.Id);
        
        postChattertoOpportunity.postChatter(oppTeamId);
    }
}