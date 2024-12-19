/*------------------------------------------------------------	
Author: 		Richard Trum (Glimt) 2019-11-28 	
Description:   	Class for handling CRUD calls related to the Lead__c and Field_Sales_Project__c objects
History:
23-07-2023   Houssam Adib        Sync the dealer filter with the lookup filter [TFUS-000006089]
01-01-2024   Houssam Adib        Refactor the code and change filter logic to use DistributorCategorisation__c rather than DistributorCategories__c
31-10-2024   Houssam Adib        Change the order of selected initiatives to order them by title [TFUS-000007049]
------------------------------------------------------------*/

public with sharing class LeadController {

    private final static Integer MAX_RESULTS = 5;
    private final static String DISTRIBUTOR = 'Distributor';

    @AuraEnabled
    public static List<Field_Sales_Project__c> getInitiatives(){

        List<Field_Sales_Project__c> inits = [  SELECT Id, Title__c, Category__c, Brand__c, Status__c
                                                FROM Field_Sales_Project__c
                                                WHERE (AllowUsersToAddNewLeads__c =: true AND Status__c=:'Active')
                                                ORDER BY Title__c];
        return inits;
    }

    @AuraEnabled
    public static List<LeadOpportunitySetting__mdt> getSalesLeadSettings(String category, String country){

        List<LeadOpportunitySetting__mdt> settings = [SELECT DeveloperName, Category__c, Country__c, ShowDistributor__c, IsTest__c FROM LeadOpportunitySetting__mdt WHERE (Category__c =:category AND Country__c =: country)];

        return settings;
    }

    @AuraEnabled(Cacheable=true)
    public static List<LookupSearchResult> search(String searchTerm, List<String> selectedIds, String category)
    {
        // Prepare query parameters
        searchTerm += '*';

        List<List<SObject>> searchResults = [
                FIND :searchTerm
                IN ALL FIELDS
                RETURNING
                        Account(Id, Name, ShippingCity
                                WHERE
                                Id NOT IN :selectedIds
                                AND
                                (
                                        OneAccount_Type__c = :DISTRIBUTOR
                                        AND
                                        DistributorCategorisation__c EXCLUDES (:category)
                                )
                        )

                LIMIT :MAX_RESULTS
        ];

        // Prepare results
        List<LookupSearchResult> results = new List<LookupSearchResult>();

        // Extract Accounts & convert them into LookupSearchResult
        String accountIcon = 'standard:account';
        Account[] accounts = (List<Account>) searchResults[0];

        for (Account account : accounts) {
            results.add(
                    new LookupSearchResult(
                            account.Id,
                            'Account',
                            accountIcon,
                            account.Name,
                            'Account • ' + account.ShippingCity
                    )
            );
        }

        // Optionally sort all results on title
        results.sort();

        return results;
    }
}