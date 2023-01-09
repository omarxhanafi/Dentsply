/*-------------------------------------------------------------------------------------------------------
Author:         Ahmed LOUDRASSI (Salesforce) 20191022
Description:    Opportunity Insert Asynch Class
History

20210318   Roberto Narbona		 Updated to send opp ID back into Opportunity__c field for Campaign Members and have physical relationship. Story TFUS-000002828
20210318   Roberto Narbona		 Added DebugLog line if insert fails. TFUS-000003578
----------------------------------------------------------------------------------------*/


public class OpportunityInsertAsynch implements Queueable {

    private List<CampaignMemberTriggerHelper.oppWrapper> opportunities;

    public OpportunityInsertAsynch(List<CampaignMemberTriggerHelper.oppWrapper> records) {
        this.opportunities = records;

    }

    public void execute(QueueableContext context) {

        Map<Id,Opportunity> memberIdWithOpp =new Map<Id,Opportunity>();

        List<CampaignMember>  campaignMemberToUpdateList =new List<CampaignMember>();

        //Loop all opportunities to create
        for (CampaignMemberTriggerHelper.oppWrapper opportunity : opportunities) {

            Opportunity opp = opportunity.opp;
            List<OpportunityTeamMember> oppMembers = opportunity.oppMembers;

            //Create opportunity if no open opportunity is found

            memberIdWithOpp.put(opportunity.CampaignMemberIdUpdate,opportunity.opp); //populating member ID with opportunity map

            try{
                insert opp;
            }
            catch(Exception e){
                DebugLog.addException(e, 'OpportunityInsertAsynch class. Opportunity not created after responded campaign member');
                System.debug(e);
            }

            for(OpportunityTeamMember oppMember : oppMembers){
                oppMember.OpportunityId = opp.Id;
            }

            try{
                insert oppMembers;
            }
            catch(Exception e){
                DebugLog.addException(e, 'OpportunityInsertAsynch class. oppMembers not created after responded campaign member');
                System.debug(e);
            }

        }


        //identifying campaign members to update, assigning the right opportunity ID and updating the record.

        for(CampaignMember campaignMemberToUpdate :[SELECT ID, Opportunity__c FROM CampaignMember WHERE Id IN: memberIdWithOpp.keySet()]){
            campaignMemberToUpdate.Opportunity__c = memberIdWithOpp.get(campaignMemberToUpdate.Id).Id;
            campaignMemberToUpdateList.add(campaignMemberToUpdate);
        }

        if(campaignMemberToUpdateList.size()>0){
            try{
                update campaignMemberToUpdateList;
            }
            catch(Exception e){
                DebugLog.addError(e.getMessage());
            }
        }
    }
}