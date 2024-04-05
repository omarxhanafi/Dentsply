/*------------------------------------------------------------	
Author: 		Richard Trum (Glimt) 2023-08-22 	
Description:   	Class for handling comparisons between leads and contacts
Test class:     
History:        
------------------------------------------------------------*/

public with sharing class leadContactController {
    
    @AuraEnabled(cacheable=true)
    public static Lead getLeadDetails(String leadId){
        Lead l = new Lead();
        System.debug(leadId);
        try {
            l = [SELECT Id, FirstName, LastName, Email, Phone, Salutation, RoleProfession__c, Specialty__c, PreferredLanguage__c FROM Lead WHERE Id =: leadId];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

        return l;
    }

    @AuraEnabled(cacheable=true)
    public static Contact getContactDetails(String contactId){
        Contact c = new Contact();
        try {
            c = [SELECT Id, FirstName, LastName, Email, Phone, Salutation, Profession__c, Specialty__c, Preferred_Language__c FROM Contact WHERE Id =: contactId];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

        return c;
    }

}