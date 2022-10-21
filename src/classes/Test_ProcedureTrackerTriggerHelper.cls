/*-------------------------------------------------------------------------------------------------	
 Author:         Miguel Coimbra (Salesforce) 2022-05-20
 Description     test Procedure Tracker trigger helper
 History	
--------------------------------------------------------------------------------------------------*/
@isTest
public class Test_ProcedureTrackerTriggerHelper {

    
    @isTest
    public static void testcheckUniqueness(){
        User user = TestDataFactory.createUsers(1, '#System: System Administrator')[0]; 
        System.runas(user) {        
            Account currentAccount = TestDataFactory.createAccounts(1, 'CIM_Account', user.Id)[0];
            ProcedureTracker__c pt1 = new ProcedureTracker__c(PracticeAccount__c = currentAccount.Id, 
                                                                RecordTypeId = Schema.SObjectType.ProcedureTracker__c.getRecordTypeInfosByName().get('Clear Aligners').getRecordTypeId(), 
                                                                ProcedureType__c  = 'Clear Aligners');
            insert pt1;
            System.debug('miguser'+user.Alias);
            System.debug('mig1'+ pt1);
            Boolean expectedExceptionThrown = false; 
            Test.startTest(); 
            try{
                ProcedureTracker__c pt2 = new ProcedureTracker__c(PracticeAccount__c = currentAccount.Id,                                                                
                                                                RecordTypeId = Schema.SObjectType.ProcedureTracker__c.getRecordTypeInfosByName().get('Clear Aligners').getRecordTypeId(), 
                                                                ProcedureType__c  = 'Clear Aligners');
                insert pt2;
                System.debug('mig2'+ pt2);
            }catch(DMLException ex){
                System.debug('mig3'+ ex.getMessage());
                expectedExceptionThrown =  ex.getMessage().contains(Label.One_Procedure_Tracker_Per_Account_and_Type) ? true : false;
            }
            Test.stopTest();
        }   
    }
}