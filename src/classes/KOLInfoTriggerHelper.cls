/*-------------------------------------------------------------------------------------------------------
Author: 		Richard Trum (Glimt) 2019-11-29
Description:   	KOL Information Trigger Helper Class
Test Class:      
History	
20191129 		Richard Trum			Created triggers in the trigger framework for the KOL Information object
20230413		Richard Trum			Bulkified the method setExpertName
--------------------------------------------------------------------------------------------------------*/

public with sharing class KOLInfoTriggerHelper {
    
    /*------------------------------------------------------------	
	Description:   	Method to prevent duplicate KOL information records to created towards one contact
    Inputs:        	@param contactId
	------------------------------------------------------------*/
    
    public static void preventDuplicateKOLs(List<Expert__c> newKOLList){
        
        for(Expert__c exp : newKOLList){ 
        	List<Expert__c> existingKOLs = [SELECT Id FROM Expert__c WHERE Contact__c =: exp.Contact__c];
        
        	if(existingKOLs.size()>0){
            	exp.addError('A KOL record already exists related to this contact');
     		}
        }
    }
    
    /*------------------------------------------------------------	
	Description:   	Method to set/override the name of the KOL Information record based on the Contact
    Inputs:        	@param expertList
	------------------------------------------------------------*/

    public static void setExpertName(List<Expert__c> expertlist){
    
    Set<Id> expertContactIds = new Set<Id>();
    for(Expert__c kol : expertlist){
        if(kol.Contact__c != null){
            expertContactIds.add(kol.Contact__c);
        }    
    }     
     
    Map<Id, Contact> contactMap = new Map<Id, Contact>([SELECT Id, FirstName, LastName FROM Contact WHERE Id IN: expertContactIds]);
        
    for(Expert__c exp:expertlist){
        
        if(exp.NameEnglish__c != null){
            exp.Name = exp.NameEnglish__c + ' - KOL info';
        }
        else if(exp.Contact__c != null){
            Contact c = contactMap.get(exp.Contact__c);
            exp.Name = c.FirstName + ' ' + c.LastName + ' - KOL info';
        }

    }
  
    }

    /*------------------------------------------------------------	
	Description:   	Method to automatically check the "Not a Healthcare Professional" checkbox based on profession
    Inputs:        	@param expertList
	------------------------------------------------------------*/

    
    public static void setNonHCProfession(List<Expert__c> expertlist){
        for(Expert__c exp : expertlist){          
            if(exp.Profession__c == 'Non-Healthcare Provider'){
                exp.Not_a_Healthcare_Professional__c = true;
                exp.Profession__c = 'Non-Healthcare Provider';
            }
            
        }  
        
    }
    
}