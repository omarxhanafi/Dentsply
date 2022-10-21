/*-------------------------------------------------------------------------------------------------	
 * Author            : naoussar@salesforce.com
 * Description       : InsideSalesMyCallsToMakeController Apex controller of InsideSalesMyCallsToMake LWC
 * Test class        : Test_InsideSalesMyCallsToMakeController
 * History	
 * 25-07-2022        : Created (#TFUS-000004530)
--------------------------------------------------------------------------------------------------*/
public with sharing class InsideSalesMyCallsToMakeController {
    //get in param the country of the user and based on that check in MDT the other params 
    /*------------------------------------------------------------	
	Description: Look over the My_Calls_to_make__mdt and found the record related to the user country 
	Inputs: userCountry coming from the UI by retrieving current user country from the lwc 
    -------------------------------------------------------------*/	
    @AuraEnabled(cacheable=true)
    public static My_Calls_to_make__mdt getMyCallsToMakeReport(String userCountry){
    try {
        My_Calls_to_make__mdt mycallstoMakeResult;
        
        for (My_Calls_to_make__mdt mycallstoMake : [SELECT id, MasterLabel, Country__c, Link_text__c, Report_Id__c FROM My_Calls_to_make__mdt]){
            if (mycallstoMake.Country__c.contains(userCountry)) {
                mycallstoMakeResult = mycallstoMake;
                break;
            }
        }
        return mycallstoMakeResult;
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
    }
}