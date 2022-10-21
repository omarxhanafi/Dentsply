/*-------------------------------------------------------------------------------------------------  
 * Author            : naoussar@salesforce.com
 * Description       : ActivityHistoryController Apex controller of ViewAllActivitiesHistoryAction LWC to display history of activities related to an account
 * Test class        : 
 * History  
 * 03-03-2022        : Created (#TFUS-000004180)
 * 18-05-2022        : Miguel - Assigned without Sharing (TFUS-000004362)
--------------------------------------------------------------------------------------------------*/
public without sharing class ActivityHistoryController {
	/*------------------------------------------------------------  
  	Description: getActivityHistory method to get activities history related to an account
	Inputs: accountId :account Id to which we need to get related activities 
            myActivityFilter : a boolean to specify if the user choose to see his activities
            page : a number to increment the pagination 
    -------------------------------------------------------------*/  
   @AuraEnabled(cacheable=true)
    public static List<ActivityHistory> getActivityHistory(Id accountId, boolean myActivityFilter, Integer page) {
        Integer limitSize = 200;
        Integer offset = page * limitSize;
        List<ActivityHistory> activityHistory = new List<ActivityHistory>{};
        string uid = userinfo.getUserId();
        string country;
        user u = [select User_Country__c from user where Id =: uid limit 1];
        Map<String,Hide_Mass_email_from_view_all_activities__c> hide= Hide_Mass_email_from_view_all_activities__c.getall();
        if(!myActivityFilter){   
        	If(!hide.containsKey(u.User_Country__c)){
            	Account acc = [SELECT (SELECT Subject, Objective__c, What.Name, Owner.Name, ActivityDate, Event_Status__c, Status, Customer_Facing_Event__c, Description, Call_Report__r.Call_Notes__c 
                                       from ActivityHistories 
                                       ORDER BY ActivityDate DESC 
                                       LIMIT :limitSize
                                       OFFSET :offset) 
                               FROM Account 
                               WHERE Id = :accountId LIMIT 1]; 
                for(ActivityHistory activityHistoryItem: acc.ActivityHistories) {
                	activityHistory.add(activityHistoryItem);
                }
            }else{
            	Account acc = [SELECT (SELECT Subject, Objective__c, What.Name, Owner.Name, ActivityDate, Event_Status__c, Status, Customer_Facing_Event__c, Description, Call_Report__r.Call_Notes__c 
                                       from ActivityHistories 
                                       where Customer_Facing_Event__c = true 
                                       ORDER BY ActivityDate DESC 
                                       LIMIT :limitSize
                                       OFFSET :offset) 
                               	FROM Account WHERE Id = :accountId LIMIT 1];
                for(ActivityHistory activityHistoryItem: acc.ActivityHistories) {
                	activityHistory.add(activityHistoryItem);
                }
            }
    	}
        if(myActivityFilter){
        	if(accountId != null) {
                If(!hide.containsKey(u.User_Country__c)){
                for(Account acc: [SELECT (SELECT Subject, Objective__c, What.Name, Owner.Name, ActivityDate, Event_Status__c, Status, Customer_Facing_Event__c, Description, Call_Report__r.Call_Notes__c 
                                          from ActivityHistories 
                                          where Owner.Id= : uid 
                                          ORDER BY ActivityDate DESC 
                                          LIMIT :limitSize
                                          OFFSET :offset) 
                                  FROM Account WHERE Id = :accountId LIMIT 1]) {
                    for(ActivityHistory activityHistoryItem: acc.ActivityHistories) {
                    	activityHistory.add(activityHistoryItem);
                    }
                }
        		}else{
                for(Account acc: [SELECT (SELECT Subject, Objective__c, What.Name, Owner.Name, ActivityDate, Event_Status__c, Status, Customer_Facing_Event__c, Description, Call_Report__r.Call_Notes__c 
                                          from ActivityHistories 
                                          where Owner.Id= : uid and Customer_Facing_Event__c = true 
                                          ORDER BY ActivityDate DESC 
                                          LIMIT :limitSize
                                          OFFSET :offset) 
                                  FROM Account WHERE Id = :accountId LIMIT 1]) {
                    for(ActivityHistory activityHistoryItem: acc.ActivityHistories) {
                    	activityHistory.add(activityHistoryItem);
                    }
                }
            	}
            }
            }
            return activityHistory;
        
    }
}