/*-------------------------------------------------------------------------------------------------------
Author:         Nihad Aoussar (Salesforce) 20211020
Description:    OGSM objectives Controller Class
Test Class:     Test_ObjectivesController_OGSM
History:        
20211020        create fetchObjectives, updateObjectives, deleteObjective
20220926        create cloneObjective
----------------------------------------------------------------------------------------*/
public with sharing class ObjectivesController_OGSM {
   /*------------------------------------------------------------  
    Description:    Method to fetch objectives related to an accountPlan record
    Inputs:         Id of the account plan 
    ------------------------------------------------------------*/
    @AuraEnabled(cacheable=true)
    public static List<Objective__c> fetchObjectives(Id accountPlanId){
        try {
            return [ SELECT Id, Name , Objective__c, Goals__c , Initiatives__c, Measures__c, Status__c, IndicatedActions__c,StatusNotes__c ,CreatedDate 
                        from Objective__c 
                        where AccountPlan__c=:accountPlanId 
                         ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
   /*------------------------------------------------------------  
    Description:    Method to update objective record
    Inputs:         Object to update  
    ------------------------------------------------------------*/
    @AuraEnabled(cacheable=false)
    public static void updateObjectives(Object data){
        List < Objective__c > objectivesForUpdate = ( List < Objective__c > ) JSON.deserialize(
            JSON.serialize( data ),
            List < Objective__c >.class);
        try {
            update objectivesForUpdate;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
   /*------------------------------------------------------------  
    Description:    Method to delete objective record
    Inputs:         Id of the record to update  
    ------------------------------------------------------------*/
    @AuraEnabled
    public static void deleteObjective(Id objectiveId){
        try {
            Objective__c obj = new Objective__c(Id = objectiveId);
            delete obj;
          
        }
        catch(Exception ex) {
            throw new AuraHandledException(ex.getMessage());
        }
    }

    /*------------------------------------------------------------  
    Description:    Method to clone objective record when not completed in the current calendar year 
    Inputs:         Id of the record to update  
    ------------------------------------------------------------*/
    @AuraEnabled
    public static String cloneObjective(Id objectiveId, Id currentAccPlan ){
        try {
            Id userId = UserInfo.getUserId();
            Account_Plan__c newAccountPlan;
            String nextYear = ''+((system.today().year())+1);
            Objective__c objectiveToClone = [SELECT Id, Name , Objective__c, Goals__c , Initiatives__c, Measures__c, Status__c, IndicatedActions__c,StatusNotes__c 
                                             FROM Objective__c WHERE Id =:objectiveId LIMIT 1];
            Objective__c clonedObjective = objectiveToClone.clone(false, true, false, false);
            Account_Plan__c currentAccountPlan = [SELECT Account__c,Year__c From Account_Plan__c WHERE Id=:currentAccPlan LIMIT 1];
            Id accountId = currentAccountPlan.Account__c;
            List<Account_Plan__c> nextYearAccPlan = [SELECT Id,Year__c,Account__c From Account_Plan__c WHERE Account__c=: accountId AND Year__c =:nextYear ];
            if(!nextYearAccPlan.isEmpty()){
                clonedObjective.AccountPlan__c = nextYearAccPlan[0].Id;
            }else{
                newAccountPlan = new Account_Plan__c (AccountPlanOwner__c = userId,
                                                    Year__c  = nextYear,
                                                    Account__c = accountId);
                insert  newAccountPlan;
                clonedObjective.AccountPlan__c = newAccountPlan.Id;
    		}
            insert clonedObjective;
            return clonedObjective.id;
        }
        catch(Exception ex) {
            throw new AuraHandledException(ex.getMessage());
        }
    }
}