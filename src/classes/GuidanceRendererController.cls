    public without sharing class GuidanceRendererController {
        @AuraEnabled
        public static string getGuidanceDetails(String parentId, String nextActivity){
            try {
                String guidance;
                ProcedureTracker__c currentProcedure = [Select Id, PracticeAccount__r.Country__c,NextActivity__c,RecordTypeId from ProcedureTracker__c Where Id =: parentId Limit 1];
                RecordType currentRecordType = [SELECT DeveloperName
                                            FROM RecordType
                                            WHERE SObjectType = 'ProcedureTracker__c' AND Id =: currentProcedure.RecordTypeId LIMIT 1];

                if(currentProcedure != null){
                    //get meta data with the next activity
                    List<GuidanceRenderer__mdt> guidances;

                    if(Test.IsRunningTest()){
                        guidances =  [
                                Select Id,Country__c, Guidance_Content__c, NextActivity__c
                                From GuidanceRenderer__mdt
                                Where  isTest__c = true
                        ];
                    } else {
                        guidances =  [
                                Select Id,Country__c, Guidance_Content__c, NextActivity__c
                                From GuidanceRenderer__mdt
                                Where  NextActivity__c=:nextActivity
                                AND RecordTypeDeveloperName__c =: currentRecordType.DeveloperName
                        ];
                    }

                    for(GuidanceRenderer__mdt eachGuidance : guidances){
                        if(String.isNotBlank(eachGuidance.Country__c)){
                            // We get the list of countries associated to the custom metadata, which is a semicolon seperated list
                            List<String> countryList = eachGuidance.Country__c.split(';');
                            if(!countryList.isEmpty()){
                                // We check if the practice account's country is included in the countries list
                                if(countryList.contains(currentProcedure.PracticeAccount__r.Country__c)){
                                    guidance = eachGuidance.Guidance_Content__c;
                                    break;
                                }
                            }
                        }
                    }

                }

                return guidance;

            } catch (Exception e) {
                throw new AuraHandledException(e.getMessage());
            }
        }
    }