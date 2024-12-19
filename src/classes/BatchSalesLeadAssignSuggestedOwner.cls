/**
 * @description       : This batch class updates the Suggested Owner on Sales Leads based on LeadOpportunitySetting__mdt
 * @author            : kdoruibin@salesforce.com
 * @group             :
 * @testClass         : Test_BatchSalesLeadAssignSOwner
 * Modifications Log
 * Ver   Date         Author                     Modification
 * 1.0   06-15-2021   kdoruibin@salesforce.com   Initial Version
 * 1.1   20-07.2022   Roberto Narbona            TFUS-000004576
 * 1.2   11-09-2023   Refactor the code to be used for other objects
 *
**/
global without sharing class BatchSalesLeadAssignSuggestedOwner implements Database.Batchable<sObject>, Database.Stateful {
    private String country;
    private String category;

    global BatchSalesLeadAssignSuggestedOwner() {
        this.country = null;
        this.category = null;
    }

    global BatchSalesLeadAssignSuggestedOwner(String country) {
        this.country = country;
        this.category = null;
    }

    global BatchSalesLeadAssignSuggestedOwner(String country, String category) {
        this.country = country;
        this.category = category;
    }
    
    global Database.QueryLocator start(Database.BatchableContext bc) {
        String queryTemplate;
        List<Object> queryParameters = new List<Object>{
            String.isBlank(country) ? '' : ' AND Account__r.Country__c = \'' + country + '\''
            , String.isBlank(category) ? '' : 'AND Category__c = \'' + category + '\''
        };
        
        queryTemplate = 'SELECT Id, Account__c, Dealer__c, Account__r.Country__c, Dealer__r.Country__c, Category__c, Brand__c, SuggestedOwner__c ' +
                'FROM Field_Sales_Project_Members__c ' +
                'WHERE Status__c != \'Completed\' AND Status__c != \'Cancelled\' AND Status__c != \'Expired\' {0} {1}';

        return Database.getQueryLocator(String.format(queryTemplate, queryParameters));
    }

    global void execute(Database.BatchableContext bc, List<Field_Sales_Project_Members__c> scope) {
        
        try {
            Set<Id> accountIdSet                                                            = SuggestedOwnerManager.extractLeadAccountIds(scope);
            Map<String, List<LeadOpportunitySetting__mdt>> leadOpptySettingMap              = SuggestedOwnerManager.getLeadOpportunitySettings();
            Map<Id,List<Id>> accountTerritoryMap                                            = SuggestedOwnerManager.getAccountTerritoryMap(accountIdSet);
            Map<Id, Map<String, UserTerritory2Association>> territoryIdUserAssociationMap   = SuggestedOwnerManager.getTerritoryIdUserAssociationMap(accountTerritoryMap);

            List<Field_Sales_Project_Members__c> salesLeadToUpdateList = new List<Field_Sales_Project_Members__c>();

            // Loop through all Sales Leads
            for (Field_Sales_Project_Members__c salesLeadToUpdate : scope) {
                List<LeadOpportunitySetting__mdt> settingList = leadOpptySettingMap.get(salesLeadToUpdate.Account__r.Country__c + salesLeadToUpdate.Category__c);
                Id previousSuggestedUserId = salesLeadToUpdate.SuggestedOwner__c;
                Id suggestedUserId = null;

                if (settingList != null) {
                    // Sometimes there are multiple settings per CountryCategory (e.g. US: Prosthetics ATL and US: MIS Implants)
                    for (LeadOpportunitySetting__mdt setting : settingList) {
                        if (suggestedUserId != null) break;
                        // Sometimes multiple User Roles are defined
                        List<String> userRoleList = setting?.UserRoles__c.split(';');
                        // Only assign SuggestedOwner if the setting matches the Brand of the Sales Lead
                        if (salesLeadToUpdate.Brand__c != null && setting.BrandsList__c.contains(salesLeadToUpdate.Brand__c)) {
                            // Find the correct account depending on if the setting suggests that the owner should come from the Account or Dealer
                            Id accountId = setting.AssignOwnerFrom__c == 'Dealer' ? salesLeadToUpdate.Dealer__c : salesLeadToUpdate.Account__c;
                            if (accountId != null && accountTerritoryMap.containsKey(accountId)) {
                                // Loop through all territories associated with the Account of the Sales Lead
                                for (Id territoryId : accountTerritoryMap.get(accountId)) {
                                    if (suggestedUserId != null) break;
                                    for (String userRole : userRoleList) {
                                        if (suggestedUserId != null) break;
                                        suggestedUserId = territoryIdUserAssociationMap.get(territoryId)?.get(userRole.trim())?.UserId;
                                    }
                                }
                            }
                        }
                    }
                }

                // If suggested owner is different from the previous value, then assign the new suggested owner
                if (previousSuggestedUserId != suggestedUserId) {
                    salesLeadToUpdate.SuggestedOwner__c = suggestedUserId;
                    salesLeadToUpdateList.add(salesLeadToUpdate);
                }
                
            }
            update salesLeadToUpdateList;
        } catch (Exception e) {
            DebugLog.addException(e, 'Error occurred on: BatchAssignSuggestedOwner');
        }

    }

    global void finish(Database.BatchableContext bc) {
        DebugLog.addInfo('Batch successfully finished: BatchAssignSuggestedOwner', bc.getJobId());
    }
}