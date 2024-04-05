/**
 * Author:         Houssam ADIB (Salesforce)
 * Description:
 *
 * Encapsulates the logic for assigning suggested owners to Sales Leads and other objects. Key Steps :
 * 1- Category: The code first considers the sales lead's category to match with lead opportunity settings.
 * 2- Brand: Within the category, it checks if the sales lead's brand matches the brand settings in the lead opportunity settings.
 * 3- Role: It then examines the user roles defined in the lead opportunity settings.
 *
 * Test class:      Test_BatchSalesLeadAssignSOwner
 * Modifications Log
 * Ver   Date         Author                    Modification
 * 1.0   06-15-2021   hadib@salesforce.com      Initial Version
 */
public class SuggestedOwnerManager {

    private static final String DEALER = 'Dealer';

    /**
     * ROOT METHOD
     * Method to assign suggested owners to a list of sales leads
     * @author hadib@salesforce.com | 06-09-2023
     *
     * @param salesLeadsIds Sales Leads Ids
     */
    @InvocableMethod(Label='Assign Suggested Owner to Sales Leads')
    public static void assignSuggestedOwners(List<String> salesLeadsIds)
    {
        try
        {
            // 0- Query Sales Leads Records
            List<Field_Sales_Project_Members__c> salesLeads = getSalesLeadsRecords(salesLeadsIds);

            // 1- Custom Metadata
            Map<String, List<LeadOpportunitySetting__mdt>> leadOpportunitySettingMap = getLeadOpportunitySettings();

            // 2- Account Territory
            Map<Id, List<Id>> accountTerritoryMap = getAccountTerritoryMap(salesLeads);

            // 3- User Territory
            Map<Id, Map<String, UserTerritory2Association>> territoryIdUserAssociationMap = getTerritoryIdUserAssociationMap(accountTerritoryMap);

            // 4- Find Sales Lead to suggest their owner
            List<Field_Sales_Project_Members__c> leadsToUpdate = detectSalesLeadsThatNeedsToBeUpdated(salesLeads,
                    leadOpportunitySettingMap,
                    accountTerritoryMap,
                    territoryIdUserAssociationMap);

            // 5- Execute Update
            updateSalesLeads(leadsToUpdate);
        }
        catch (Exception e)
        {
            DebugLog.addException(e, 'SuggestedOwnerManager.assignSuggestedOwners');
        }
    }

    /**
     * Retrieves Sales Leads Records that don't have an owner (Sales_Rep__c) populated
     * @author hadib@salesforce.com | 06-09-2023
     *
     * @param salesLeadsIds Sales Leads Ids
     *
     * @return List<Field_Sales_Project_Members__c> - Sales Leads Records
     */
    public static List<Field_Sales_Project_Members__c> getSalesLeadsRecords(List<String> salesLeadsIds)
    {
        List<Field_Sales_Project_Members__c> salesLeads = [
                SELECT Id, Account__c, Dealer__c, Sales_Rep__c, Category__c, Account__r.Country__c, Brand__c
                FROM Field_Sales_Project_Members__c
                WHERE Id IN :salesLeadsIds AND Sales_Rep__c = NULL
        ];
        return salesLeads;
    }

    /**
     * Determines the suggested owner for a single sales lead based on various criteria.
     * @author hadib@salesforce.com | 06-09-2023
     *
     * @param salesLeadToUpdate             The Sales Lead record for which the suggested owner is determined.
     * @param leadOpportunitySettingMap     A map of lead opportunity settings organized by Country and Category.
     * @param accountTerritoryMap           A map of accounts and their associated territories.
     * @param territoryIdUserAssociationMap A map of territory Ids and user associations by role.
     *
     * @return Id - The Id of the suggested owner User, or null if no suitable owner is found.
     */
    private static Id determineSuggestedOwner(  Field_Sales_Project_Members__c                      salesLeadToUpdate,
                                                Map<String, List<LeadOpportunitySetting__mdt>>      leadOpportunitySettingMap,
                                                Map<Id, List<Id>>                                   accountTerritoryMap,
                                                Map<Id, Map<String, UserTerritory2Association>>     territoryIdUserAssociationMap)
    {
        Id suggestedUserId = null;
        String key = salesLeadToUpdate.Account__r.Country__c + salesLeadToUpdate.Category__c; // First the Account country + Category
        if(!leadOpportunitySettingMap.containsKey(key)) return null;

        List<LeadOpportunitySetting__mdt> settingList = leadOpportunitySettingMap.get(key);
        for (LeadOpportunitySetting__mdt setting : settingList)
        {
            List<String> userRoleList = setting?.UserRoles__c.split(';');

            if (salesLeadToUpdate.Brand__c != null && setting.BrandsList__c.contains(salesLeadToUpdate.Brand__c)) // Brand is mandatory
            {
                Id accountId = (setting.AssignOwnerFrom__c == DEALER) ? salesLeadToUpdate.Dealer__c : salesLeadToUpdate.Account__c;

                if (accountId != null && accountTerritoryMap.containsKey(accountId))
                {
                    for (Id territoryId : accountTerritoryMap.get(accountId))
                    {
                        for (String userRole : userRoleList) // Search the account or dealer territories to get the right person based on role
                        {
                            suggestedUserId = territoryIdUserAssociationMap.get(territoryId)?.get(userRole.trim())?.UserId;
                            if (suggestedUserId != null) { break; }
                        }

                        if (suggestedUserId != null) { break; }
                    }
                }
            }

            if (suggestedUserId != null) {
                break;
            }
        }

        return suggestedUserId;
    }

    /**
     * Fetch Lead opportunity settings and arranges them into a map where the key is a combination of the Country__c and Category__c fields
     * @author hadib@salesforce.com | 06-09-2023
     *
     * @return Map<String, List<LeadOpportunitySetting__mdt>> - A map of lead opportunity settings key: (Country__c + Category__c) .
     */
    public static Map<String, List<LeadOpportunitySetting__mdt>> getLeadOpportunitySettings()
    {
        Map<String, List<LeadOpportunitySetting__mdt>> leadOpportunitySettingMap = new Map<String, List<LeadOpportunitySetting__mdt>>();

        for (LeadOpportunitySetting__mdt leadOpptySetting : LeadOpportunitySetting__mdt.getAll().values())
        {
            // 1-Skip setting if mandatory fields are empty
            if (String.isEmpty(leadOpptySetting.Country__c))    continue;
            if (String.isEmpty(leadOpptySetting.Category__c))   continue;
            if (String.isEmpty(leadOpptySetting.UserRoles__c))  continue;
            if (String.isEmpty(leadOpptySetting.BrandsList__c)) continue;

            // 2-Construct Map of settings with Country__c + Category__c as key (e.g. USImplants)
            String settingKeyString = leadOpptySetting.Country__c + leadOpptySetting.Category__c;
            if (leadOpportunitySettingMap.containsKey(settingKeyString)) {
                leadOpportunitySettingMap.get(settingKeyString).add(leadOpptySetting);
            } else {
                leadOpportunitySettingMap.put(settingKeyString, new List<LeadOpportunitySetting__mdt>{leadOpptySetting});
            }
        }
        return leadOpportunitySettingMap;
    }

    /**
     * Constructs a map of accounts and their associated territories.
     * @author hadib@salesforce.com | 06-09-2023
     *
     * @param accountIds    Set of Account Ids
     *
     * @return Map<Id,List<Id>> - A map where each Account Id leads to a list of associated territory Ids.
     */
    public static Map<Id,List<Id>> getAccountTerritoryMap(Set<Id> accountIds)
    {
        Map<Id,List<Id>> accountTerritoryMap = new Map<Id,List<Id>>();

        for (ObjectTerritory2Association association : [SELECT ObjectId, Territory2Id FROM ObjectTerritory2Association WHERE ObjectId IN :accountIds])
        {
            // Construct Map of accounts and territories where an accountId leads to a list of associated territories
            if (accountTerritoryMap.containsKey(association.ObjectId)) {
                accountTerritoryMap.get(association.ObjectId).add(association.Territory2Id);
            } else {
                accountTerritoryMap.put(association.ObjectId, new List<Id>{association.Territory2Id});
            }
        }
        return accountTerritoryMap;
    }

    /**
     * Fetch Account Territories based on the given Sales Leads
     * @author hadib@salesforce.com | 06-09-2023
     *
     * @param salesLeads Sales Leads records
     *
     * @return Map<Id, List<Id>> - Account Territories
     */
    public static Map<Id, List<Id>> getAccountTerritoryMap(List<Field_Sales_Project_Members__c> salesLeads)
    {
        Set<Id> accountIdSet = extractLeadAccountIds(salesLeads);
        Map<Id,List<Id>> accountTerritoryMap = getAccountTerritoryMap(accountIdSet);
        return accountTerritoryMap;
    }

    /**
     * Extracts a set of Account Ids associated with Sales Lead records.
     * @author hadib@salesforce.com | 06-09-2023
     *
     * @param salesLeads List of Sales Lead records.
     *
     * @return Set<Id> - A set of Account Ids linked to the provided Sales Lead records.
     */
    public static Set<Id> extractLeadAccountIds(List<Field_Sales_Project_Members__c> salesLeads)
    {
        Set<Id> accountIdSet = new Set<Id>();

        for (Field_Sales_Project_Members__c salesLead : salesLeads)
        {
            // Sets used to query the right AccountUserTerritory2View records
            accountIdSet.add(salesLead.Account__c);
            accountIdSet.add(salesLead.Dealer__c);
        }

        return accountIdSet;
    }

    /**
     * Fetch Territory to User Associations based on Account Territories
     * @author hadib@salesforce.com | 06-09-2023
     *
     * @param accountTerritoryMap aze
     *
     * @return aze
     */
    public static Map<Id, Map<String, UserTerritory2Association>> getTerritoryIdUserAssociationMap(Map<Id, List<Id>> accountTerritoryMap)
    {
        Set<Id> flattenedTerritoryIdSet = getFlattenedTerritoryIdSet(accountTerritoryMap);

        Map<Id, Map<String, UserTerritory2Association>> territoryIdUserAssociationMap = new Map<Id, Map<String, UserTerritory2Association>>();

        for (UserTerritory2Association userTerritoryAssociations : [ SELECT Id, Territory2Id, UserId, RoleInTerritory2
                                                                    FROM UserTerritory2Association
                                                                    WHERE Territory2Id IN :flattenedTerritoryIdSet ])
        {
            // Construct Map of territories and associated users based on RoleInTerritory2
            if (territoryIdUserAssociationMap.containsKey(userTerritoryAssociations.Territory2Id)) {
                territoryIdUserAssociationMap.get(userTerritoryAssociations.Territory2Id).put(userTerritoryAssociations.RoleInTerritory2, userTerritoryAssociations);
            } else {
                territoryIdUserAssociationMap.put(userTerritoryAssociations.Territory2Id, new Map<String, UserTerritory2Association>{userTerritoryAssociations.RoleInTerritory2 => userTerritoryAssociations});
            }
        }
        return territoryIdUserAssociationMap;
    }

    /**
     * Flatten the territory IDs for efficient processing.
     * @author hadib@salesforce.com | 06-09-2023
     *
     * @param listMap List of ids to flatten
     *
     * @return Set<Id> - Ids flattened
     */
    public static Set<Id> getFlattenedTerritoryIdSet(Map<Id,List<Id>> listMap)
    {
        Set<Id> flattenedIdsSet = new Set<Id>();
        for (List<Id> idList : listMap.values()) {
            flattenedIdsSet.addAll(idList);
        }
        return flattenedIdsSet;
    }

    /**
     * We find the sales lead that we can suggest their owner following the account country, category, brand and user role
     * @author hadib@salesforce.com | 06-09-2023
     *
     * @param salesLeads Sales Lead records to update their owner
     * @param leadOpportunitySettingMap Lead opportunity custom metadata
     * @param accountTerritoryMap Account Territories
     * @param territoryIdUserAssociationMap User Territories
     *
     * @return List<Field_Sales_Project_Members__c> - Sales leads updated with suggested owner
     */
    public static List<Field_Sales_Project_Members__c> detectSalesLeadsThatNeedsToBeUpdated(
            List<Field_Sales_Project_Members__c>                salesLeads,
            Map<String, List<LeadOpportunitySetting__mdt>>      leadOpportunitySettingMap,
            Map<Id, List<Id>>                                   accountTerritoryMap,
            Map<Id, Map<String, UserTerritory2Association>>     territoryIdUserAssociationMap)
    {
        List<Field_Sales_Project_Members__c> leadsToUpdate = new List<Field_Sales_Project_Members__c>();

        for (Field_Sales_Project_Members__c leadToUpdate : salesLeads) {
            Id previousSuggestedUserId = leadToUpdate.Sales_Rep__c;
            Id suggestedUserId = determineSuggestedOwner(leadToUpdate, leadOpportunitySettingMap, accountTerritoryMap, territoryIdUserAssociationMap);

            if (previousSuggestedUserId != suggestedUserId && suggestedUserId != null) {
                leadToUpdate.Sales_Rep__c = suggestedUserId;
                leadsToUpdate.add(leadToUpdate);
            }
        }

        return leadsToUpdate;
    }

    /**
     * Update the sales lead records with the new owners
     * @author hadib@salesforce.com | 06-09-2023
     *
     * @param leadsToUpdate Sales Leads to update
     */
    public static void updateSalesLeads(List<Field_Sales_Project_Members__c> leadsToUpdate)
    {
        if (!leadsToUpdate.isEmpty()) {
            update leadsToUpdate;
        }
    }
}