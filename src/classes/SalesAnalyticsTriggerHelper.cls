/*------------------------------------------------------------
Author:         Omar HANAFI  20221130
Description:    Sales Analytics Trigger Helper Class.

------------------------------------------------------------*/

public with sharing class SalesAnalyticsTriggerHelper {

    /*----------------------------------------------------------------------------------
    Description:    Creates procedure trackers for the provided sales analytics list
    Inputs:         @param newSalesAnalyticsList List of Sales Analytics
    ----------------------------------------------------------------------------------*/

    public static void createProcedureTrackers(List<Sales_Analytics__c> newSalesAnalyticsList) {
        // TODO retrieve the country filter custom metadata once available

        List<ProcedureTracker__c> procedureTrackerList = new List<ProcedureTracker__c>();

        for(Sales_Analytics__c eachSalesAnalytic : newSalesAnalyticsList){
            ProcedureTracker__c eachProcedureTracker = new ProcedureTracker__c();
            eachProcedureTracker.ProcedureType__c = 'Clear Aligners';
            eachProcedureTracker.PracticeAccount__c = eachSalesAnalytic.Account__c;

            // Eventually have a field on the account with the registration date and transform the current field to a custom formula instead
            eachProcedureTracker.RegistrationDate__c = eachSalesAnalytic.Invoice_Date__c;
            eachProcedureTracker.ActivationNeededby__c = eachSalesAnalytic.Invoice_Date__c.addMonths(3);

            // TODO owner assignment

            // TODO automatically created checkbox is missing, create the field?

            procedureTrackerList.add(eachProcedureTracker);
        }

//        try {
//            Database.insert(procedureTrackerList, false);
//        } catch (DmlException e){
//            DebugLog.addException(e, 'Error while creating the procedure tracker');
//        }
    }

}