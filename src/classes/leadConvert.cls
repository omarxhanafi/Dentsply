/*Version History
 * Author:
 * Description: Lead Convert Class
 * Test Class:  Test_leadConvert
 * History
 *  <Date>      <Authors Name>     <Brief Description of Change>
 * 23-07-2023   Houssam Adib        Updates the campaign members linked to the new converted lead
 * 08-09-2023   Stefano Massoni     TFUS-000006014-Changed the contactId parameter with the LeadId parameter to get only the Campaign Member
                                    related to the Lead
 */
global with sharing class leadConvert {

    @InvocableMethod(label='Convert Lead' description='Converts a lead to an account/contact' category='Lead')
    public static List<String> convertLead(List<ConvertLeadRequest> input) {
        try {
            Database.LeadConvert lc = new Database.LeadConvert();
            lc.setLeadId(input[0].leadId);
            lc.setConvertedStatus(input[0].convertedStatus);

            //Create opportunity
            if(input[0].createOpportunity != null && input[0].createOpportunity == false){
                lc.setDoNotCreateOpportunity(true);
            }

            //Owner Id
            if(input[0].ownerId != null){
                lc.setOwnerId(input[0].OwnerId);
            }

            //Contact

            if(String.isNotBlank(input[0].contactId))
            {
                lc.setContactId(input[0].contactId);

                Contact c = [SELECT Id, AccountId FROM Contact WHERE Id =: input[0].contactId];

                lc.setAccountId(c.AccountId);

            }
            else if (input[0].accountId != '') {
                lc.setAccountId(input[0].accountId);

                /*if(input[0].convertToPersonAccount != null && input[0].convertToPersonAccount){
                    lc.setRelatedPersonAccountId(input[0].accountId);
                }*/

            }

            if (input[0].overWriteLeadSource != null && input[0].overWriteLeadSource) {
                lc.setOverwriteLeadSource(input[0].overWriteLeadSource);
            }

            if (input[0].sendEmailToOwner != null && input[0].sendEmailToOwner) {
                lc.setSendNotificationEmail(input[0].sendEmailToOwner);
            }

            Database.LeadConvertResult lcr = null;

            Database.DMLOptions dmlOpts = new Database.DMLOptions();
            dmlOpts.duplicateRuleHeader.allowSave = true;
            dmlOpts.optAllOrNone = true;

            lcr = Database.convertLead(lc, dmlOpts);

            if (lcr.isSuccess()) {
                List<String> result = new List<String>();
                String contactId = lcr.getContactId();
                String accountId = lcr.getAccountId();
                if(String.isNotBlank(contactId)){
                    result.add(contactId);

                    updateAttendeeIfCVENTCampaign(input[0].leadId,contactId);
                    // Update the campaign member if the contact is linked to one
                    if(String.isNotBlank(accountId))
                    {
                        updateCampaignMemberWithAccountId(input[0].leadId,accountId);
                    }
                }
                else{
                    result.add(lcr.getAccountId());
                }
                //
                /*ConvertLeadActionResult result = new ConvertLeadActionResult();
                result.accountId = lcr.getAccountId();
                result.contactId = lcr.getContactId();
                result.opportunityId = lcr.getOpportunityId();*/
                return result;
            } else {
                throw new ConvertLeadActionException(lcr.getErrors()[0].getMessage());
            }

        } catch (Exception e) {
            String errorMessage = e.getMessage();
            Integer startIndex = errorMessage.indexOf(':', errorMessage.indexOf(':') + 1) + 2;
            if (startIndex == -1) {
                throw new ConvertLeadActionException(errorMessage);
            } else {
                String filteredMessage = errorMessage.substring(startIndex);
                Integer endIndex = filteredMessage.indexOf(':');

                if(endIndex != -1){
                    filteredMessage = filteredMessage.substring(0, endIndex);
                }

                throw new ConvertLeadActionException(filteredMessage);
            }
        }

    }

    /*@AuraEnabled
    public static List<RecordType> findRecordTypes (String objectName, Boolean isPersonAccount){

        List<RecordType> result = new List<RecordType>();
        if(isPersonAccount == null){
            isPersonAccount = false;
        }

        result = [SELECT Id, Name, DeveloperName FROM RecordType WHERE SObjectType =: objectName AND IsActive = true AND IsPersonType =: isPersonAccount];

        return result;
    }*/

    /**
     * Updates the campaign members linked to the new converted lead
     * so they can show as campaign members in the account related list
     * @author hadib@salesforce.com | 23-07-2023
     *
     * @param leadId The converted Lead Id
     * @param accountId The account id of the new contact id.
     */
    public static void updateCampaignMemberWithAccountId(String leadId, String accountId)
    {
        // Put the account id of the lead converted in the campaign member account__c field.
        List<CampaignMember> members = [ SELECT Id FROM CampaignMember WHERE LeadId=:leadId];
        for(CampaignMember member : members)
        {
            member.Account__c = accountId;
        }

        update members;
    }

    /**
     * When we update the contact ID for a campaign member (after converting a lead),
     * we need to make sure the attendee record also gets updated with the same information.
     * This is important for keeping the Cvent changes synchronization working
     * @author hadib@salesforce.com | 02-10-2023
     *
     * @param leadId        Lead Id
     * @param contactId     Contact Id
     */
    public static void updateAttendeeIfCVENTCampaign(String leadId, String contactId)
    {
        // 1.Retrieve CVENT Campaign Members
        Id memberRecordTypeId   = GlobalUtils.getRecordTypeId('CampaignMember', 'CVENT_Campaign_Member');
        List<CampaignMember> allCventMembers = [    SELECT  Id,LeadId,Campaign.Event_Code__c
                                                    FROM    CampaignMember
                                                    WHERE   LeadId = :leadId
                                                            AND
                                                            RecordTypeId = :memberRecordTypeId];

        // 2.Extract Event Codes from indirect lookup CampaignMembers.ParentCampaign.Event_Code__c
        Set<String> eventCodes = new Set<String>();
        for(CampaignMember member : allCventMembers)
        {
            eventCodes.add(member.Campaign.Event_Code__c);
        }

        // 3.Retrieve Related Attendees using the Cvent Event Code
        List<CventEvents__Attendee__c> attendees = [    SELECT  Id
                                                        FROM    CventEvents__Attendee__c
                                                        WHERE   CventEvents__Lead__c =:leadId
                                                                AND
                                                                CventEvents__Event__r.CventEvents__pkg_Code__c IN :eventCodes];

        // 4.Update the attendees with the new contact resulted from lead conversion
        if(!attendees.isEmpty())
        {
            for(CventEvents__Attendee__c attendee : attendees)
            {
                attendee.CventEvents__Contact__c = contactId;
            }

            update attendees;
        }
    }

    global class ConvertLeadRequest{

        @InvocableVariable(required=true)
        global ID leadId;

        @InvocableVariable(required=true)
        global String convertedStatus;

        @InvocableVariable(required=false)
        global String accountId;

        @InvocableVariable(required=false)
        global String contactId;

        @InvocableVariable
        global Boolean overWriteLeadSource;

        @InvocableVariable
        global Boolean createOpportunity;

        @InvocableVariable
        global String opportunityName;

        @InvocableVariable
        global ID ownerId;

        @InvocableVariable
        global Boolean sendEmailToOwner;

        @InvocableVariable
        global Boolean convertToPersonAccount;
    }

    class ConvertLeadActionException extends Exception {}
}