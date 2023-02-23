/*-------------------------------------------------------------------------------------------------	
Author: 	naoussar@salesforce.com (Salesforce) 2022094 	
Description:   	NewContractController controller of the new Contract action on the account page 
Test Class:     Test_NewContractController
History	
2022094   created (TFUS-000004611) 
20230119 Roberto Narbona -> isUserEligibleForCustomContractCreation class updated to be compatible with Opportunities too
--------------------------------------------------------------------------------------------------*/
public with sharing class NewContractController {
    /*------------------------------------------------------------	
	Description:   isUserEligibleForCustomContractCreation to decide if the user is eligible for creating a contract 
					using flow or the std creation
	Inputs:    @recordId : id of the account from which we are trying to create teh contract
	------------------------------------------------------------*/
    @AuraEnabled
    public Static Boolean isUserEligibleForCustomContractCreation(String recordId){
         Boolean result; 
         String country = [ SELECT User_Country__c FROM User WHERE Id =:UserInfo.getUserId() LIMIT 1][0].User_Country__c;
         String accType = '';
         
         if(recordId.substring(0, 2) == '001'){
            accType = [SELECT OneAccount_Type__c  from Account WHERE Id =: recordId][0].OneAccount_Type__c;
         }
         if(recordId.substring(0, 2) == '006'){
            Opportunity opp = [SELECT Account.OneAccount_Type__c  FROM Opportunity WHERE Id =: recordId LIMIT 1];
            accType = opp.Account.OneAccount_Type__c;
         }
         Boolean hasPermission = FeatureManagement.checkPermission('DS_Activate');
         if(accType != 'Distributor' && (country == 'Germany' || country == 'Austria' || hasPermission)){
            result = true;
         }else{
            result = false;
         }
         return result;
    }
    
}