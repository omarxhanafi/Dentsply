/*------------------------------------------------------------
Author: 		Richard Trum (Glimt) 2023-09-08
Description:   	Invocable class for creating an opportunity team member for the previous owner/creator of an opp
Test class:     Test_OpportunityPB
History
<Date>      <Authors Name>     <Brief Description of Change>
20231124 	Miguel coimbra		TFUS-000006272

------------------------------------------------------------*/

public without sharing class flowOpportunityTeamMember {
    
    @InvocableMethod
      public static void createMembers(List<List<String>> input){
                
          String oppId = input[0][0];
          String userId = UserInfo.getUserId();
          String newUserId = input[0][1];
          
          OppTeamMemberInsertAsynch a = new OppTeamMemberInsertAsynch(oppId, userId, newUserId);
          System.enqueueJob(a);
      }
  }