/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Sales Analytics Trigger Helper Class.
 * @Test-Class      Test_SalesAnalyticsTrigger
 *
 * @History
 * 30-11-2022   Omar     Create new Trigger Helper Class
 */

public with sharing class SalesAnalyticsTriggerHelper {

    /**
         * createProcedureTrackers Creates procedure trackers for the provided sales analytics list
         * @author ohanafi@salesforce.com | 30-11-2022
         *
         * @param newSalesAnalyticsList   List of Sales Analytics
         */
    public static void createProcedureTrackers(List<Sales_Analytics__c> newSalesAnalyticsList) {

        // Init procedure tracker list
        List<ProcedureTracker__c> procedureTrackerList = new List<ProcedureTracker__c>();

        // Init country set
        Set<String> countrySet = new Set<String>();

        // Init account id set
        Set<Id> accountIdSet = new Set<Id>();

        // Init role set
        Set<String> roleSet = new Set<String>();

        // TODO SKU filter

        // Filter Sales Analytics by custom metadata countries
        newSalesAnalyticsList = getFilteredSalesAnalyticsByCountry(newSalesAnalyticsList);

        // Getting a set of all account ids related to the filtered invoices
        for(Sales_Analytics__c eachSalesAnalytic : newSalesAnalyticsList){
            accountIdSet.add(eachSalesAnalytic.Account__c);
        }

        // Query for account countries
        Map<Id, Account> accountCountriesMap = new Map<Id, Account>([SELECT Id, Country__c FROM Account WHERE Id in :accountIdSet]);

        // Getting a set of all countries related to the filtered invoices
        for(Id eachAccountId : accountCountriesMap.keySet()){
            countrySet.add(accountCountriesMap.get(eachAccountId).Country__c);
        }

        System.debug('accountIdSet : ' + accountIdSet);
        System.debug('countrySet : ' + countrySet);

        // Init territory id set
        Set<Id> territoryIdSet = new Set<Id>();

        // Getting a list of all territories related to the account ids
        for(ObjectTerritory2Association objectTerritory : [SELECT Territory2Id FROM ObjectTerritory2Association WHERE ObjectId in :accountIdSet]) {
            territoryIdSet.add(objectTerritory.Territory2Id);
        }
        System.debug('territoryIdSet : ' + territoryIdSet);

        // We get a list of lead & opportunity settings custom metadata related to the countries
        List<LeadOpportunitySetting__mdt> leadOpportunitySettingsList = getSureSmileLeadOpportunitySettingsByCountry(countrySet);
        System.debug('leadOpportunitySettingsList : ' + leadOpportunitySettingsList);

        // Creating a list of all roles from the custom metadata
        for(LeadOpportunitySetting__mdt eachLeadOpportunitySetting : leadOpportunitySettingsList){
            if(String.isNotBlank(eachLeadOpportunitySetting.UserRoles__c)){
                roleSet.addAll(eachLeadOpportunitySetting.UserRoles__c.split(';'));
            }
        }
        System.debug('roleSet : ' + roleSet);

        // We get a list of all users based on the list of territories and roles
        List<UserTerritory2Association> usersInTerritoryList = [SELECT UserId, User.Name, Territory2Id, RoleInTerritory2, IsActive
            FROM UserTerritory2Association
            WHERE Territory2Id in :territoryIdSet AND RoleInTerritory2 in :roleSet
        ];
        System.debug('usersInTerritoryList : ' + usersInTerritoryList);

        // Procedure tracker creation
        for(Sales_Analytics__c eachSalesAnalytic : newSalesAnalyticsList){
            ProcedureTracker__c eachProcedureTracker = new ProcedureTracker__c();
            eachProcedureTracker.ProcedureType__c = 'Clear Aligners';
            eachProcedureTracker.PracticeAccount__c = eachSalesAnalytic.Account__c;

            // Eventually have a field on the account with the registration date and transform the current field to a custom formula instead
            eachProcedureTracker.RegistrationDate__c = eachSalesAnalytic.Invoice_Date__c;
            eachProcedureTracker.ActivationNeededby__c = eachSalesAnalytic.Invoice_Date__c != null ? eachSalesAnalytic.Invoice_Date__c.addMonths(3) : null;

            // Territory Id Set of the current invoice
            Set<Id> invoiceTerritoryIdSet = new Set<Id>();

            // We search for the territories associated with the current invoice based on the account id
            for(ObjectTerritory2Association eachTerritoryAssociation : objectTerritoryAssociations){
                if(eachTerritoryAssociation.ObjectId == eachSalesAnalytic.Account__c){
                    invoiceTerritoryIdSet.add(eachTerritoryAssociation.Territory2Id);
                }
            }

            // Lead & Opportunity setting custom metadata of the current invoice
            LeadOpportunitySetting__mdt invoiceLeadOpportunitySetting;

            // User roles associated to the current invoice
            Set<String> invoiceRoleSet = new Set<String>();

            // We get the invoice country
            String invoiceCountry = accountCountriesMap.get(eachSalesAnalytic.Account__c)?.Country__c;

            for(LeadOpportunitySetting__mdt eachLeadOpportunitySetting : leadOpportunitySettingsList){
                if(eachLeadOpportunitySetting.Country__c == invoiceCountry){
                    // Assigning the custom metadata
                    invoiceLeadOpportunitySetting = eachLeadOpportunitySetting;
                    if(eachLeadOpportunitySetting.UserRoles__c != null){
                        // We assign the role set
                        invoiceRoleSet.addAll(eachLeadOpportunitySetting.UserRoles__c.split(';'));
                    }
                    break;
                }
            }

            // Owner assignment
            if(invoiceLeadOpportunitySetting != null){
                // We assign the DefaultProcedureTrackerOwnerId__c before searching for the users by territory
                eachProcedureTracker.SalesRep__c = invoiceLeadOpportunitySetting.DefaultProcedureTrackerOwnerId__c;

                if(!invoiceTerritoryIdSet.isEmpty() && !invoiceRoleSet.isEmpty() && !usersInTerritoryList.isEmpty()){
                    for(UserTerritory2Association eachUserInTerritory : usersInTerritoryList){
                        if(invoiceTerritoryIdSet.contains(eachUserInTerritory.Territory2Id) && invoiceRoleSet.contains(eachUserInTerritory.RoleInTerritory2)){
                            // We assign the territory user as the owner
                            eachProcedureTracker.SalesRep__c = eachUserInTerritory.UserId;
                        }
                    }
                }

            }

            // We link the sales analytics to the procedure tracker
            eachProcedureTracker.Sales_Analytics__c = eachSalesAnalytic.Id;

            procedureTrackerList.add(eachProcedureTracker);
        }

        System.debug('procedureTrackerList : ' + procedureTrackerList);

        try {
            List<Database.SaveResult> result = Database.insert(procedureTrackerList, false);
            System.debug('Save result : ' + result);
        } catch (DmlException e){
            System.debug(e.getMessage());
            DebugLog.addException(e, 'Error while creating the procedure tracker');
        }
    }

    /**
         * getFilteredSalesAnalyticsByCountry Return a list of filtered sales analytics by country
         * @author ohanafi@salesforce.com | 16-12-2022
         *
         * @param salesAnalyticsList   List of Sales Analytics
         *
         * @return List<Sales_Analytics__c> - Filtered list of Sales analytics by country
         */
    private static List<Sales_Analytics__c> getFilteredSalesAnalyticsByCountry(List<Sales_Analytics__c> salesAnalyticsList) {
        List<Sales_Analytics__c> filteredSalesAnalyticsList = new List<Sales_Analytics__c>();

        // Set of account Ids
        Set<Id> accountIdSet = new Set<Id>();

        // Getting a set of all account ids related to all the invoices
        for(Sales_Analytics__c eachSalesAnalytic : salesAnalyticsList){
            accountIdSet.add(eachSalesAnalytic.Account__c);
        }

        // Query for account countries
        Map<Id, Account> accountCountriesMap = new Map<Id, Account>([SELECT Id, Country__c FROM Account WHERE Id in :accountIdSet]);

        // Getting the list of Procedure_Tracker_Country__mdt custom metadata
        List<Procedure_Tracker_Country__mdt> procedureTrackerCountryList = [SELECT Id, Country__c FROM Procedure_Tracker_Country__mdt];

        List<String> procedureTrackerCountryCodes = new List<String>();

        // Getting a list of country codes
        for (Procedure_Tracker_Country__mdt eachProcedureTrackerCountry : procedureTrackerCountryList) {
            procedureTrackerCountryCodes.add(eachProcedureTrackerCountry.Country__c);
        }

        for(Sales_Analytics__c eachSalesAnalytic : salesAnalyticsList){
            if(accountCountriesMap.containsKey(eachSalesAnalytic.Account__c)){
                // We check if the country list contains the Sales analytics country
                if(procedureTrackerCountryCodes.contains(accountCountriesMap.get(eachSalesAnalytic.Account__c).Country__c)){
                    filteredSalesAnalyticsList.add(eachSalesAnalytic);
                }
            }
        }

        return filteredSalesAnalyticsList;
    }


    /**
         * getSureSmileLeadOpportunitySettingsByCountry Return a list of Lead & Opportunity Settings custom metadata based on a list of countries and the SureSmile brand
         * @author ohanafi@salesforce.com | 14-12-2022
         *
         * @param countryList   List of countries
         *
         * @return List<LeadOpportunitySetting__mdt> - Filtered list of lead & opportunity settings
         */
    private static List<LeadOpportunitySetting__mdt> getSureSmileLeadOpportunitySettingsByCountry(Set<String> countryList) {
        List<LeadOpportunitySetting__mdt> leadOpportunitySettingsList;

        if(!Test.isRunningTest()){
            leadOpportunitySettingsList = [
                    SELECT Country__c, Category__c, BrandsList__c, DefaultProcedureTrackerOwnerId__c, UserRoles__c
                    FROM LeadOpportunitySetting__mdt
                    WHERE Country__c IN :countryList
                    AND Category__c = 'Orthodontics'
            ];
        } else {
            // Mock data for testing
            leadOpportunitySettingsList = new List<LeadOpportunitySetting__mdt>{
                new LeadOpportunitySetting__mdt(
                    Label = 'AD_Orthodontics',
                    DeveloperName = 'AD_Orthodontics',
                    Category__c = 'Orthodontics',
                    Country__c = 'AD',
                    UserRoles__c = 'Sales Rep (Main Contact)',
                    BrandsList__c = 'SureSmile Aligner'
                )
            };
        }


        // Filtering by SureSmile brand
        List<LeadOpportunitySetting__mdt> filteredLeadOpportunitySettingsList = new List<LeadOpportunitySetting__mdt>();

        for (LeadOpportunitySetting__mdt eachLeadOpportunitySetting : leadOpportunitySettingsList) {
            List<String> brandsList = eachLeadOpportunitySetting.BrandsList__c.split(';');
            Boolean brandCheck = false;
            if (!brandsList.isEmpty()) {
                // We check if the custom metadata has a SureSmile brand
                for(String eachBrand : brandsList){
                    if(eachBrand.contains('SureSmile')){
                        brandCheck = true;
                        break;
                    }
                }
            }
            if(brandCheck){
                // If true we add it to the list of lead & opportunity settings
                filteredLeadOpportunitySettingsList.add(eachLeadOpportunitySetting);
            }
        }

        return filteredLeadOpportunitySettingsList;
    }

}