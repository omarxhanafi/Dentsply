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

        // TODO retrieve the country filter custom metadata once available


        // TODO SKU filter

        // Getting a set of all account ids related to all the invoices
        for(Sales_Analytics__c eachSalesAnalytic : newSalesAnalyticsList){
            accountIdSet.add(eachSalesAnalytic.Account__c);
        }

        // Query for account countries
        List<Account> accountList = [SELECT Id, Country__c FROM Account WHERE Id in :accountIdSet];

        // Getting a set of all account countries related to all the invoices
        for(Account eachAccount : accountList){
            if(eachAccount.Country__c != null){
                countrySet.add(eachAccount.Country__c);
            }
        }

        System.debug('accountIdSet : ' + accountIdSet);
        System.debug('countrySet : ' + countrySet);

        // Getting a list of all territories related to the account ids
        List<ObjectTerritory2Association> objectTerritoryAssociations = [SELECT Id, ObjectId, SobjectType, Territory2Id
            FROM ObjectTerritory2Association
            WHERE ObjectId in :accountIdSet
        ];
        System.debug('objectTerritoryAssociations : ' + objectTerritoryAssociations);

        Set<Id> territoryIdSet = new Set<Id>();

        for(ObjectTerritory2Association eachAssociation : objectTerritoryAssociations){
            territoryIdSet.add(eachAssociation.Territory2Id);
        }
        System.debug('territoryIdSet : ' + territoryIdSet);

        // We get a list of lead & opportunity settings custom metadata related to the countries
        List<LeadOpportunitySetting__mdt> leadOpportunitySettingsList = getSureSmileLeadOpportunitySettingsByCountry(countrySet);
        System.debug('leadOpportunitySettingsList : ' + leadOpportunitySettingsList);

        // Creating a list of all roles from the custom metadata
        for(LeadOpportunitySetting__mdt eachLeadOpportunitySetting : leadOpportunitySettingsList){
            if(eachLeadOpportunitySetting.UserRoles__c != null){
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

            // Territory Id of the current invoice
            Id invoiceTerritoryId;

            // We search for the territory associated with the current invoice based on the account id
            for(ObjectTerritory2Association eachTerritoryAssociation : objectTerritoryAssociations){
                if(eachTerritoryAssociation.ObjectId == eachSalesAnalytic.Account__c){
                    invoiceTerritoryId = eachTerritoryAssociation.Territory2Id;
                    break;
                }
            }

            // Lead & Opportunity setting custom metadata of the current invoice
            LeadOpportunitySetting__mdt invoiceLeadOpportunitySetting;

            // User roles associated to the current invoice
            Set<String> invoiceRoleSet = new Set<String>();

            for(LeadOpportunitySetting__mdt eachLeadOpportunitySetting : leadOpportunitySettingsList){
                if(eachLeadOpportunitySetting.Country__c == eachSalesAnalytic.Account__r.Country__c){
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

                if(invoiceTerritoryId != null && !invoiceRoleSet.isEmpty() && !usersInTerritoryList.isEmpty()){
                    for(UserTerritory2Association eachUserInTerritory : usersInTerritoryList){
                        if(eachUserInTerritory.Territory2Id == invoiceTerritoryId && invoiceRoleSet.contains(eachUserInTerritory.RoleInTerritory2)){
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

//        try {
//            Database.insert(procedureTrackerList, false);
//        } catch (DmlException e){
//            DebugLog.addException(e, 'Error while creating the procedure tracker');
//        }
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