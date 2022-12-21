/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Batch that creates procedure trackers from a list of Sales Analytics records
 * @Test-Class      Test_BatchCreateProcedureTrackers
 *
 * @History
 * 20-12-2022   Omar     Created batch class
 */
global class BatchCreateProcedureTrackers implements Database.Batchable<sObject> {

    global Database.QueryLocator start(Database.BatchableContext bc) {
        // Getting the list of ProcedureTrackerCreationSetting__mdt custom metadata
        List<ProcedureTrackerCreationSetting__mdt> procedureTrackerCreationSettings;

        if(!Test.isRunningTest()){
            procedureTrackerCreationSettings = [SELECT Id, CountryList__c, NumberOfDays__c FROM ProcedureTrackerCreationSetting__mdt];
        } else {
            // Mock data for testing
            procedureTrackerCreationSettings = new List<ProcedureTrackerCreationSetting__mdt>{
                    new ProcedureTrackerCreationSetting__mdt(
                            CountryList__c = 'US;BE',
                            NumberOfDays__c = 7
                    )
            };
        }

        // Init Batch Parameters
        List<String> procedureTrackerCountryCodes = new List<String>();
        Integer nbrOfDays = 7;

        // Getting a list of country codes & number of days
        if (!procedureTrackerCreationSettings.isEmpty()) {
            procedureTrackerCountryCodes = procedureTrackerCreationSettings[0].CountryList__c.split(';');
            nbrOfDays = (Integer) procedureTrackerCreationSettings[0].NumberOfDays__c;
        }

        // Get all Sales Analytics records that were created within the specified number of days, have no active procedure tracker linked to them and have a country within the ProcedureTrackerCountry__mdt
        String query = 'SELECT Id, Account__c, Account__r.Country__c, Invoice_Date__c ' +
                'FROM Sales_Analytics__c ' +
                'WHERE Invoice_Date__c = LAST_N_DAYS:' + nbrOfDays + ' ' +
                'AND Account__c NOT IN (SELECT PracticeAccount__c FROM ProcedureTracker__c) ' +
                'AND Account__r.Country__c IN :procedureTrackerCountryCodes ' +
                'AND Product__r.Article__c IN (\'DIGI-500152\', \'DIGI-500153\', \'DIGI-500159\')';
        return Database.getQueryLocator(query);
    }

    global void execute(Database.BatchableContext bc, List<Sales_Analytics__c> scope) {
        System.debug('Scope : ' + scope);

        // Init procedure tracker list
        List<ProcedureTracker__c> procedureTrackerList = new List<ProcedureTracker__c>();

        // Init country set
        Set<String> countrySet = new Set<String>();

        // Init account id set
        Set<Id> accountIdSet = new Set<Id>();

        // Init role set
        Set<String> roleSet = new Set<String>();

        // Getting a set of all account ids related to the invoices
        for(Sales_Analytics__c eachSalesAnalytic : scope){
            accountIdSet.add(eachSalesAnalytic.Account__c);
        }

        // Getting a set of all countries related to the invoices
        for(Sales_Analytics__c eachSalesAnalytics : scope){
            countrySet.add(eachSalesAnalytics.Account__r.Country__c);
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
        for(Sales_Analytics__c eachSalesAnalytic : scope){
            ProcedureTracker__c eachProcedureTracker = new ProcedureTracker__c(
                    ProcedureType__c = 'Clear Aligners',
                    PracticeAccount__c = eachSalesAnalytic.Account__c,
                    RegistrationDate__c = eachSalesAnalytic.Invoice_Date__c,    // Eventually have a field on the account with the registration date and transform the current field to a custom formula instead
                    ActivationNeededby__c = eachSalesAnalytic.Invoice_Date__c != null ? eachSalesAnalytic.Invoice_Date__c.addMonths(3) : null,
                    SalesAnalytics__c = eachSalesAnalytic.Id,             // We link the sales analytics to the procedure tracker
                    AutomaticallyCreated__c = true,
                    x1ExperienceSureSmile__c = true,
                    x2Register__c = true
            );

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
            String invoiceCountry = eachSalesAnalytic.Account__r.Country__c;

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

            procedureTrackerList.add(eachProcedureTracker);
        }

        System.debug('procedureTrackerList : ' + procedureTrackerList);

        // Insert procedure trackers
        List<Database.SaveResult> results = Database.insert(procedureTrackerList, false);

        System.debug('Save result : ' + results);
    }

    global void finish(Database.BatchableContext bc) {
        DebugLog.addInfo('Batch finished successfully: BatchCreateProcedureTrackers JobId:', bc.getJobId());
    }


    /**
         * getSureSmileLeadOpportunitySettingsByCountry Return a list of Lead & Opportunity Settings custom metadata based on a list of countries and the SureSmile brand
         * @author ohanafi@salesforce.com | 20-12-2022
         *
         * @param countryList   List of countries
         *
         * @return List<LeadOpportunitySetting__mdt> - Filtered list of lead & opportunity settings
         */
    global List<LeadOpportunitySetting__mdt> getSureSmileLeadOpportunitySettingsByCountry(Set<String> countryList) {
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
                            Label = 'BE_Orthodontics',
                            DeveloperName = 'BE_Orthodontics',
                            Category__c = 'Orthodontics',
                            Country__c = 'BE',
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