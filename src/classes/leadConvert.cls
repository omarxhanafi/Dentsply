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
        	
        	if (input[0].contactId != '' && input[0].contactId != null) {
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
                if(contactId != ''){
                    result.add(lcr.getContactId());
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