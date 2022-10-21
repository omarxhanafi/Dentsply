/*-------------------------------------------------------------------------------------------------------
Author: 	    	Roberto Narbona 20220623
Description:   	This is a controller of LWC "showDuplicateCasesWarning".
History	

--------------------------------------------------------------------------------------------------------*/

public with sharing class GetCases {
    @AuraEnabled
    public static List<Case> getCases(string caseId) {
        List<Case> dupCases = new List<Case>();
        Case caseDetail = [ SELECT CaseNumber, Id, Subject, SuppliedEmail, CreatedDate FROM Case WHERE Id =: caseId LIMIT 1];
        datetime createdDatePlusFiveMinutes = caseDetail.CreatedDate.addminutes(5);
        datetime createdDateMinusFiveMinutes = caseDetail.CreatedDate.addminutes(-5);
        dupCases = [ SELECT CaseNumber, Id FROM Case WHERE CreatedDate >: createdDateMinusFiveMinutes AND CreatedDate <: createdDatePlusFiveMinutes AND  Subject = :caseDetail.Subject AND SuppliedEmail != null AND SuppliedEmail = :caseDetail.SuppliedEmail AND Subject = :caseDetail.Subject AND CaseNumber !=: caseDetail.CaseNumber AND Status != 'Merged & Cancelled' AND RecordTypeId = '01220000000AvOOAA0' LIMIT 5 ];
        return(dupCases);
    }
}