/*------------------------------------------------------------	
Author: 		Richard Trum (Glimt) 2019-11-28	
Description:   	KOL Information (Expert__c) class to handle Apex related to components inside the Clinical Affairs app 
History	
<Date>      <Authors Name>     <Brief Description of Change>
20200921 	Richard Trum	 	Updated the getMyCventEvents method to loop records in reverse order due to delete action
20240126    Richard Trum        TFUS-000006420 (updated the method getMyCventEvents)
------------------------------------------------------------*/

public with sharing class KOLInfoController {

    @AuraEnabled
    public static Expert__c getKOLdata(String recordId) {
    Expert__c KOLinfo = [SELECT Id, Contact__c FROM Expert__c WHERE Id =: recordId];
    return KOLinfo;
    }
    
    @AuraEnabled
    public static List<Expert__c> getKOLlist() {    
    List<Expert__c> KOLinfo = [SELECT Id, Name, Contact__c FROM Expert__c];        
    return KOLinfo;
    } 
    
    @AuraEnabled
    public static List<KOL_Contract_Deliverable__c> getDeliverables(String recordId){
        List<KOL_Contract_Deliverable__c> delList = new List<KOL_Contract_Deliverable__c>();
        delList = [SELECT Id, CventEventUpd__c, CventEventUpd__r.Name, KOL_Contract__c, KOL_Contract__r.Name, KOL_Contract__r.Expert__c, CventEventUpd__r.ContractedSpeaker__c, CventEventUpd__r.CventEvents__pkg_StartDate__c, CventEventUpd__r.CventEvents__pkg_Title__c 
                   FROM KOL_Contract_Deliverable__c WHERE KOL_Contract__r.Expert__c =: recordId];
        return delList;
    }
    
    @AuraEnabled
    public static List<CventEvents__Event__c> getSpeakerEvents(String recordId){
        List<CventEvents__Event__c> eventList = new List<CventEvents__Event__c>();
        List<CventEvents__Attendee__c> attendeeList = new List<CventEvents__Attendee__c>();
        
        //Check contracted speaker field
        Expert__c KOL = [SELECT Name, Contact__r.Full_Name__c, Contact__c FROM Expert__c WHERE Id =:recordId];
        eventList = [SELECT Id, Name, ContractedSpeaker__c, CventEvents__pkg_StartDate__c, CventEvents__pkg_StartTime__c, CventEvents__pkg_EndDate__c, CventEvents__pkg_Title__c FROM CventEvents__Event__c WHERE ContractedSpeaker__c LIKE: KOL.Contact__r.Full_Name__c];
        
        Set<Id> eventIds = (new Map<Id, CventEvents__Event__c>(eventList)).keySet().clone();
        Map<Id, KOL_Contract_Deliverable__c> eventsWithDeliverables = new Map<Id, KOL_Contract_Deliverable__c>();
        
        //Check attendees
        attendeeList = [SELECT Id, Name, CventEvents__Contact__c, CventEvents__Event__c FROM CventEvents__Attendee__c WHERE CventEvents__Contact__c =: KOL.Contact__c AND CventEvents__RegistrationType__c =: 'Speaker'];
                
        if(!attendeeList.IsEmpty()){
             Integer attendeeListLen = attendeeList.size();
             for(Integer i=0;i<attendeeListLen;i++){
                
                String eventToCheck = attendeeList[i].CventEvents__Event__c;
                 
                 if(eventIds.contains(eventToCheck)==false){
                     eventIds.add(attendeeList[i].CventEvents__Event__c);
                 }
                       
        	 }
        }
        
       	//Check deliverables
        List<KOL_Contract_Deliverable__c> delList = new List<KOL_Contract_Deliverable__c>();
        delList = [SELECT Id, CventEventUpd__c, CventEventUpd__r.Name, KOL_Contract__c, KOL_Contract__r.Name, KOL_Contract__r.Expert__c, CventEventUpd__r.ContractedSpeaker__c, CventEventUpd__r.CventEvents__pkg_StartDate__c, CventEventUpd__r.CventEvents__pkg_EndDate__c, CventEventUpd__r.CventEvents__pkg_Title__c 
                   FROM KOL_Contract_Deliverable__c WHERE KOL_Contract__r.Expert__c =: recordId];
        
        if(!delList.IsEmpty()){

            Integer delListLen = delList.size();
            for(Integer i=0;i<delListLen;i++){
             	 String delEventToCheck = delList[i].CventEventUpd__c;            
                 if(eventIds.contains(delEventToCheck)==false){
                		eventIds.add(delList[i].CventEventUpd__c);
                 }
                 eventsWithDeliverables.put(delList[i].CventEventUpd__c, delList[i]);
            }       
        }
        
        eventList = [SELECT Id, Name, ContractedSpeaker__c, CventEvents__pkg_StartDate__c, CventEvents__pkg_StartTime__c, CventEvents__pkg_EndDate__c, CventEvents__pkg_Title__c FROM CventEvents__Event__c WHERE Id IN: eventIds ORDER BY CventEvents__pkg_StartTime__c DESC];
        Integer eventListLen = eventList.size();
        
        for(Integer j = 0;j<eventListLen;j++){
            	String eventToCheck = eventList[j].Id;
            	if(eventsWithDeliverables.containsKey(eventToCheck)){
                    KOL_Contract_Deliverable__c deliverable = eventsWithDeliverables.get(eventToCheck);
                    eventList[j].ActualCategory__c = deliverable.KOL_Contract__r.Name;
            	}
        }
        
        return eventList;
    }
    
    @AuraEnabled
    public static String getReportLink(){
         return CAHomeReportLink__c.getInstance().ReportURL__c;       
    }
    
    @AuraEnabled
    public static List<CventEvents__Event__c> getMyCventEvents(){
        
        String userEmail = UserInfo.getUserEmail();
        
        List<CventEvents__Event__c> eventList = new List<CventEvents__Event__c>();
        eventList = [SELECT Id, Name, CventEvents__pkg_Status__c, CventEvents__pkg_PlanningStatus__c, ContractedSpeaker__c, KOLManageremail__c, CventEvents__pkg_StartDate__c, CventEvents__pkg_StartTime__c, CventEvents__pkg_Title__c FROM CventEvents__Event__c WHERE (KOLManageremail__c =: userEmail AND CventEvents__pkg_PlanningStatus__c!='Cancelled') ORDER BY CventEvents__pkg_StartDate__c ASC];
        Integer listLen = eventList.size();
        Map<Id, CventEvents__Event__c> eventMap = new Map<Id, CventEvents__Event__c>();
        
        if(!eventList.IsEmpty()){

            for(Integer j=0;j<listLen;j++){
                eventMap.put(eventList[j].Id, eventList[j]);
            }

            List<KOL_Contract_Deliverable__c> deliverables = new List<KOL_Contract_Deliverable__c>();
            try{
                deliverables = [SELECT Id, Name, CventEventUpd__c FROM KOL_Contract_Deliverable__c WHERE CventEventUpd__c IN: eventMap.keySet()];    
            }
            catch(exception e){
                System.debug(e);
            }

            for(KOL_Contract_Deliverable__c deliverable : deliverables){
                if(eventMap.containsKey(deliverable.CventEventUpd__c)){
                    eventMap.remove(deliverable.CventEventUpd__c);
                }
            }

        }    
         
        return eventMap.values();

    }
      
}