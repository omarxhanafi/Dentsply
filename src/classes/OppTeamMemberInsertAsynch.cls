/*------------------------------------------------------------
Author: 		Richard Trum (Glimt) 2023-09-08
Description:   	Asynch class for creating an opportunity team member for the previous owner/creator of an opp
Test class:     Test_OpportunityPB
History
<Date>      <Authors Name>     <Brief Description of Change>

------------------------------------------------------------*/

public without sharing class OppTeamMemberInsertAsynch implements Queueable{

    private String oppId;
    private String userId;
    private String newUserId;
    
    public OppTeamMemberInsertAsynch(String oId, String uId, String newUId){
        oppId = oId;
        userId = uId;
        newUserId = newUId;
    }
    
    public void execute(QueueableContext context){
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