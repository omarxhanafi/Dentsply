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
                                Select Id,CountryList__c, Guidance_Content__c, NextActivity__c
                                From GuidanceRenderer__mdt
                                Where  isTest__c = true
                        ];
                    } else {
                        guidances =  [
                                Select Id,CountryList__c, Guidance_Content__c, NextActivity__c
                                From GuidanceRenderer__mdt
                                Where  NextActivity__c=:nextActivity
                                AND RecordTypeDeveloperName__c =: currentRecordType.DeveloperName
                        ];
                    }

                    for(GuidanceRenderer__mdt eachGuidance : guidances){
                        if(String.isNotBlank(eachGuidance.CountryList__c)){
                            // We get the list of countries associated to the custom metadata, which is a semicolon seperated list
                            List<String> countryList = eachGuidance.CountryList__c.split(';');
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

        @AuraEnabled(cacheable = true)
        public static List<ProcedureTrackingBestPractices__mdt> getBestPractices(String parentId){
            try {
                ProcedureTracker__c currentProcedure = [
                        Select Id, PracticeAccount__r.Country__c
                        from ProcedureTracker__c
                        Where Id =: parentId
                        Limit 1
                ];

                if(currentProcedure != null){
                    List<ProcedureTrackingBestPractices__mdt> bestPracticesList;

                    // Getting the best practices list
                    if(Test.IsRunningTest()){
                        bestPracticesList = new List<ProcedureTrackingBestPractices__mdt>{
                            new ProcedureTrackingBestPractices__mdt(
                                Country__c = 'BE',
                                BestPracticeLabel__c = 'Test Label',
                                BestPracticeContent__c = 'Test Content',
                                Order__c = 0
                            )
                        };
                    } else {
                        bestPracticesList =  [
                                Select Id, Country__c, BestPracticeContent__c, BestPracticeLabel__c, DeveloperName, Order__c, PDFLinkURL__c, PDFLinkLabel__c
                                From ProcedureTrackingBestPractices__mdt
                                Order by Order__c
                        ];
                    }

                    List<ProcedureTrackingBestPractices__mdt> filteredBestPracticesList = new List<ProcedureTrackingBestPractices__mdt>();

                    if(!bestPracticesList.isEmpty()){
                        for(ProcedureTrackingBestPractices__mdt eachBestPractice : bestPracticesList){
                            if(String.isNotBlank(eachBestPractice.Country__c)){
                                // We get the list of countries associated to the custom metadata, which is a semicolon seperated list
                                List<String> countryList = eachBestPractice.Country__c.split(';');
                                if(!countryList.isEmpty()){
                                    // We check if the practice account's country is included in the countries list
                                    if(countryList.contains(currentProcedure.PracticeAccount__r.Country__c)){
                                        filteredBestPracticesList.add(eachBestPractice);
                                    }
                                }
                            }
                        }
                        return filteredBestPracticesList;
                    }

                }

                return null;
            } catch (Exception e) {
                throw new AuraHandledException(e.getMessage());
            }
        }
    }