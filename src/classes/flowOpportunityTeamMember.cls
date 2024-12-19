/*------------------------------------------------------------
Author: 		Richard Trum (Glimt) 2023-09-08
Description:   	Invocable class for creating an opportunity team member for the previous owner/creator of an opp
Test class:     Test_OpportunityPB
History
<Date>      <Authors Name>     <Brief Description of Change>
20231124 	Miguel coimbra		TFUS-000006272
20231124 	Houssam ADIB		TFUS-000006521 - Fix a bug caused by async job that needs to be execute synchronously

------------------------------------------------------------*/

public without sharing class flowOpportunityTeamMember {
    
    @InvocableMethod
      public static void createMembers(List<List<String>> input){
                
          String oppId = input[0][0];
          String userId = UserInfo.getUserId();
          String newUserId = input[0][1];

            OpportunityTeamMember m = new OpportunityTeamMember();
            m.OpportunityId = oppId;
            m.UserId = userId;
            m.OpportunityAccessLevel = 'Edit';

            try{
                insert m;
            }
            catch(DmlException e){
                DebugLog.addException(e, 'OppTeamMemberInsertAsynch.execute Opportunity team member not created.');
            }
      }
  }