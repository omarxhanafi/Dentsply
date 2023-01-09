/**
 * @Author          Nihad (naoussar@salesforce.com)
 * @Description     The GuidanceRendererController class is a Apex class that is used to retrieve guidance details and best practices
 *                  information for a given Procedure Tracker record. The guidance details are retrieved based on the next activity of
 *                  the Procedure Tracker record and the country of the associated Practice Account. The best practices information is
 *                  retrieved based on the country of the associated Practice Account.
 * @Test-Class      Test_GuidanceRendererController
 *
 * @History
 * 14-09-2022   Nihad     Created the GuidanceRendererController class
 * 17-11-2022   Omar      Changed the getGuidanceDetails to support the list of countries and created getBestPractices Method (TFUS-000005045 - TFUS-000005106)
 */
public without sharing class GuidanceRendererController {

        /**
            * getGuidanceDetails is a method that retrieves the guidance details for a given Procedure Tracker record.
            *
            * @Author          Nihad (naoussar@salesforce.com)
            * @Description     Retrieves the guidance details for a given Procedure Tracker record.
            * @History
            * 14-09-2022   Nihad     Created the getGuidanceDetails method
            * 17-11-2022   Omar      Support for a list of countries (TFUS-000005045)
            *
            * @param parentId The Id of the Procedure Tracker record for which the guidance details are being retrieved.
            * @param nextActivity The next activity of the Procedure Tracker record for which the guidance details are being retrieved.
            *
            * @return The guidance details for the given Procedure Tracker record.
            */
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
                    List<GuidanceRenderer__mdt> guidanceList;

                    if(Test.IsRunningTest()){
                        guidanceList =  [
                                Select Id,CountryList__c, Guidance_Content__c, NextActivity__c
                                From GuidanceRenderer__mdt
                                Where  isTest__c = true
                        ];
                    } else {
                        guidanceList =  [
                                Select Id,CountryList__c, Guidance_Content__c, NextActivity__c
                                From GuidanceRenderer__mdt
                                Where  NextActivity__c=:nextActivity
                                AND RecordTypeDeveloperName__c =: currentRecordType.DeveloperName
                        ];
                    }

                    for(GuidanceRenderer__mdt eachGuidance : guidanceList){
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

        /**
             * getBestPractices is a method that retrieves the best practices information for a given Procedure Tracker record.
             *
             * @Author          Omar (ohanafi@salesforce.com)
             * @Description     Retrieves the best practices information for a given Procedure Tracker record.
             * @History
             * 29-11-2022   Omar     Created the getBestPractices method (TFUS-000005106)
             *
             * @param parentId The Id of the Procedure Tracker record for which the best practices information is being retrieved.
             *
             * @return A list of best practices information for the given Procedure Tracker record.
             */
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