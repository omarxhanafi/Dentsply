/*-------------------------------------------------------------------------------------------------------
Author:         NISREEN ALSALEH (support@avity.com) 25-March-2021
Description:    Test Work Order Trigger Helper 
--------------------------------------------------------------------------------------------------------*/
@isTest(seeAllData = False)
public class Test_WorkOrderTrigger {
 
    @testSetup
    private static void setup(){
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.createUsers(1, 'System Administrator');
        List<User> userIntegrationList = TestDataFactory.insertIntegrationUsers(1, 'System Administrator');
        TestDataFactory.createGlobalIntegrationSettings(userIntegrationList);
    }
	
    @isTest static void myUnitTest() {
        Account acc = new Account(Name='testacc', OneAccount_Type__c = 'Dental Clinic',Country__c = 'AU');
        acc.RecordTypeId=Schema.sObjectType.Account.getRecordTypeInfosByName().get('CIM Account').getRecordTypeId();
        Test.startTest();
        insert acc;
        
        Contact con = new Contact(FirstName='john', LastName='doe', Email='john@doe.com', Profession__c= 'Consultant',InsertEmailMarketingConsentCollected__c = 'No',AccountId=acc.Id);
        con.RecordTypeId = Schema.sObjectType.Contact.getRecordTypeInfosByName().get('Contact Global').getRecordTypeId();
        insert con;
        Test.stopTest();
        Asset ass = new Asset(AccountId=acc.Id,ContactId=con.Id, Name='testing');
        insert ass;
        
        Entitlement ent = new Entitlement(Name='Testing', AccountId=acc.Id, StartDate=Date.valueof(System.now().addDays(-2)), EndDate=Date.valueof(System.now().addYears(2)), AssetId=ass.Id);
        insert ent;
        
        Entitlement ent2 = new Entitlement(Name='test2', AccountId=acc.Id, StartDate=Date.valueof(System.now().addDays(-10)), EndDate=Date.valueof(System.now().addYears(3)));
        insert ent2;
        
        EntitlementContact ec = new EntitlementContact(EntitlementId=ent.Id, ContactId=con.Id);
        insert ec;
        
        List<WorkOrder> listW = new list<WorkOrder>();
        List<Id> newWOIds = new List<Id>();
        
         for(Integer i=0;i<20;i++){
            WorkOrder w = new WorkOrder(AccountId=acc.id, Subject='Test Subject'+i, Status='New');
            listW.add(w);
        }
        insert listW; 
        for (WorkOrder WObj:listW) {
            newWOIds.add(WObj.Id);
        }

        List<WorkOrder> entls = [Select EntitlementId, AssetId, AccountId From WorkOrder Where Id in :newWOIds];

        for (WorkOrder WObj:entls) {
            System.debug(WObj.Id + ' here are the values ' + WObj.EntitlementId + ' and here ent.Id ' + ent.Id);
            System.assertNotEquals(WObj.EntitlementId,NULL);

        }
        Contact con2 = new Contact(FirstName = 'Jane',
        LastName = 'Doe',
        Email='jane@doe.com',
        Profession__c= 'Consultant',
        InsertEmailMarketingConsentCollected__c = 'No');
        con2.RecordTypeId = Schema.sObjectType.Contact.getRecordTypeInfosByName().get('Contact Global').getRecordTypeId();
        insert con2;
    
        Entitlement ent3 = new Entitlement(Name='Testing', AccountId=acc.Id, StartDate=Date.valueof(System.now().addDays(2)), EndDate=Date.valueof(System.now().addYears(2)), AssetId=ass.Id);
        insert ent3;

        EntitlementContact ec2 = new EntitlementContact(EntitlementId=ent3.Id, ContactId=con2.Id);
        insert ec2;
        WorkOrder w1 = new WorkOrder(ContactId= con.Id,AccountId=acc.Id, Subject='Test Subject',Status='New');
    	
        //Test.startTest();
            insert w1;
            update w1;
        //Test.stopTest();
    }
    
        @isTest static void milestoneTestMethod(){
        Account acc = new Account();
        acc.Name = 'Test Acc';
        insert acc;
        
        Case c = new case(Status='Active',CaseType__c = 'General support/question',AccountId = acc.Id,RecordTypeId='01220000000AvOOAA0',
                 		  Complaint_Category__c = 'Service Feedback',SlaStartDate = system.now().addHours(-1),First_call_resolution__c = 'Yes',SBU__c = 'General',Complaint__c = 'No');
        Test.startTest();
            insert c;
            c.status = 'Closed';
            update c;
        Test.stopTest();

    }
    
    
}