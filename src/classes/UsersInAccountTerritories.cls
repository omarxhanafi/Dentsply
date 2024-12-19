/*------------------------------------------------------------	
Author: 	    Richard Trum (Glimt) 2019-11-20
Description:   	Generic class to find users related to an account through ETM

Test Class:     Test_UsersInAccountTerritories
History:
2022-07-29      Roberto Narbona     TFUS-000004576
2022-09-09      Aoussar Nihad       TFUS-000004326 (added getSuggestedUsers method )
2022-12-02      Houssam ADIB        TFUS-000005010 (re-Designed getSuggestedUsers method)
------------------------------------------------------------*/

public with sharing class UsersInAccountTerritories {

    /**
     * isManualAssignmentVisible to check for a given category and brand if the lead is eligible for
     * a manual owner assignment
     * @author naoussar@salesforce.com | 23-09-2022
     *
     * @param recordId          recordId current account Id used to retrieve the country to match custom metadata
     * @param categoryInput     String categoryInput category name selected by the user
     * @param brandInput        String brandInput brand name selected by the user
     *
     * @return Boolean - isManualAssignmentVisible
     */
    @AuraEnabled
    public static Boolean isManualAssignmentVisible(String recordId, String categoryInput, String brandInput){
        Boolean isManualAssignmentVisible = false;
        Account acc = [SELECT Id, Country__c FROM Account WHERE Id =: recordId];
        //Get Custom Metadata records
        LeadOpportunitySetting__mdt[] oppSettings = new LeadOpportunitySetting__mdt[]{};
        if(Test.IsRunningTest()){
            oppSettings = [SELECT DeveloperName, ShowManualSalesLeadOwnerAssignment__c,Category__c, BrandsList__c, Country__c, AssignOwnerFrom__c, UserRoles__c, IsTest__c FROM LeadOpportunitySetting__mdt WHERE IsTest__c =: true];
        }
        else{
            oppSettings = [SELECT DeveloperName, ShowManualSalesLeadOwnerAssignment__c , Category__c, BrandsList__c , Country__c, AssignOwnerFrom__c, UserRoles__c, IsTest__c FROM LeadOpportunitySetting__mdt WHERE Country__c =: acc.Country__c AND Category__c =:categoryInput AND IsTest__c =: false];
        }
        Map<String, LeadOpportunitySetting__mdt> settingsMap = new Map<String, LeadOpportunitySetting__mdt>();
        for(LeadOpportunitySetting__mdt setting: oppSettings){
            if(setting.BrandsList__c  != null){
                String brands = setting.BrandsList__c ;
                String[] brandList = brands.split(';');
                for(String brand : brandList){
                    settingsMap.put(brand, setting);
                }
            }
        }

        if(settingsMap.containsKey(brandInput))
        {
            isManualAssignmentVisible = settingsMap.get(brandInput).ShowManualSalesLeadOwnerAssignment__c;
        }
        return isManualAssignmentVisible;
    }

    /**
     * TODO
     * @author Richard Trum | XX-XX-XXXX
     *
     * @param recordId          TODO
     * @param categoryInput     TODO
     * @param brandInput        TODO
     * @param dealerId          TODO
     *
     * @return List<UserTerritory2Association> - TODO
     */
    @AuraEnabled
    public static List<UserTerritory2Association> getUsers(String recordId, String categoryInput, String brandInput, String dealerId){
            
        List<UserTerritory2Association> users = new List<UserTerritory2Association>();
        Set<Id> userSet = new Set<Id>();
            
        if(recordId != null){
         
        	ObjectTerritory2Association[] territories = [SELECT ObjectId, SobjectType, Territory2Id 
                                                         FROM ObjectTerritory2Association 
                                                         WHERE ObjectId =: recordId];
            
            ObjectTerritory2Association[] dealerTerritories = new List<ObjectTerritory2Association>();
            
            Account acc = [SELECT Id, Country__c FROM Account WHERE Id =: recordId];
            User currentUser = [SELECT Id, Name FROM User WHERE Id =: UserInfo.getUserId()];
            Set<String> roleMap = new Set<String>();
            
            if(acc.Country__c == 'DE' && (categoryInput == 'Equipment & Imaging' || categoryInput == 'Digital Group')){
            
                if(dealerId != null){                   
                    dealerTerritories = [SELECT ObjectId, SobjectType, Territory2Id 
                                                         FROM ObjectTerritory2Association 
                                                         WHERE ObjectId =: dealerId];                
                }
                
            //Get Custom Metadata records
        	LeadOpportunitySetting__mdt[] oppSettings = new LeadOpportunitySetting__mdt[]{};
        	if(Test.IsRunningTest()){
            	oppSettings = [SELECT DeveloperName, Category__c, BrandsList__c, Country__c, AssignOwnerFrom__c, UserRoles__c, IsTest__c FROM LeadOpportunitySetting__mdt WHERE IsTest__c =: true];
        	}
        	else{
        		oppSettings = [SELECT DeveloperName, Category__c, BrandsList__c, Country__c, AssignOwnerFrom__c, UserRoles__c, IsTest__c FROM LeadOpportunitySetting__mdt WHERE Country__c =: acc.Country__c AND Category__c =:categoryInput AND IsTest__c =: false];
        	}
            
            Map<String, LeadOpportunitySetting__mdt> settingsMap = new Map<String, LeadOpportunitySetting__mdt>();
        	for(LeadOpportunitySetting__mdt setting: oppSettings){
            	if(setting.BrandsList__c != null){
                	String brands = setting.BrandsList__c;
                	String[] brandList = brands.split(';');
                	for(String brand : brandList){
                    	settingsMap.put(brand, setting);
                	}
            	}
            	else{
                	settingsMap.put(setting.Category__c, setting);
            	}    
        	}
            String roleList = settingsMap.get(brandInput).UserRoles__c;
            String[] roles = roleList.split(';');
            for(String role:roles){
                roleMap.add(role);
            }
                
            }       
            else{
            			            
            UserTerritory2Association currentUserRole = new UserTerritory2Association();
            currentUserRole.UserId = currentUser.Id;
            currentUserRole.User = currentUser;
            currentUserRole.RoleInTerritory2 = 'Current user';
            
           	users.add(currentUserRole);
            
            }    
            
        	for (ObjectTerritory2Association t2a : territories){
                
                List<UserTerritory2Association> usersToAdd = [SELECT UserId, User.Name, Territory2Id, RoleInTerritory2, IsActive 
                                                     FROM UserTerritory2Association 
                                                     WHERE Territory2Id=:t2a.Territory2Id AND UserId !=: currentUser.Id
                                                     ];
                
                if(acc.Country__c == 'DE' && (categoryInput == 'Equipment & Imaging' || categoryInput == 'Digital Group')){
                	for(UserTerritory2Association user: usersToAdd){
                        if(roleMap.contains(user.RoleInTerritory2)){
							users.add(user);
                            userSet.add(user.UserId);
                        }
               		}
                    
                }
                else{                                
 					users.addAll(usersToAdd);
                }    
            }
         
            if(dealerId != null && acc.Country__c == 'DE' && (categoryInput == 'Equipment & Imaging' || categoryInput == 'Digital Group')){        
            	for(ObjectTerritory2Association dt2a : dealerTerritories){
                
                 	List<UserTerritory2Association> dealerUsersToAdd = [SELECT UserId, User.Name, Territory2Id, RoleInTerritory2, IsActive 
                                                     FROM UserTerritory2Association 
                                                     WHERE Territory2Id=:dt2a.Territory2Id AND UserId !=: currentUser.Id
                                                     ];
                    
                    for(UserTerritory2Association dealerUser: dealerUsersToAdd){
                        if(roleMap.contains(dealerUser.RoleInTerritory2) && !userSet.contains(dealerUser.UserId)){
							users.add(dealerUser);
                        }
               		}                
            	}
           }
        }
        
      return users;  

    }

    /**
     * TODO
     * @author Richard Trum | XX-XX-XXXX
     *
     * @param recordIds     TODO
     *
     * @return Map<Id, List<UserTerritory2Association>> - TODO
     */
    @AuraEnabled
    public static Map<Id, List<UserTerritory2Association>> getUsersFromMultipleAccounts(List<Id> recordIds){
                        
                ObjectTerritory2Association[] customerTerritories = [SELECT ObjectId, SobjectType, Territory2Id 
                                                                     FROM ObjectTerritory2Association 
                                                                     WHERE ObjectId IN: recordIds];        
                Set<Id> customerTerritoryIds = new Set<Id>();
                Map<Id, List<Id>> accountTerritories = new Map<Id, List<Id>>();
                
                for(ObjectTerritory2Association terr : customerTerritories){
                    customerTerritoryIds.add(terr.Territory2Id);
                    
                    if(accountTerritories.containskey(terr.ObjectId)){
                        accountTerritories.get(terr.ObjectId).add(terr.Territory2Id);
                    }
                    else{
                        List<Id> terrIdList = new List<Id>();
                        terrIdList.add(terr.Territory2Id);
                        accountTerritories.put(terr.ObjectId, terrIdList);
                    }
                }
        
                List<UserTerritory2Association> usersToAdd = [SELECT UserId, User.Name, Territory2Id, RoleInTerritory2, IsActive 
                                                             FROM UserTerritory2Association 
                                                             WHERE Territory2Id IN:customerTerritoryIds
                                                             ];
                Map<Id, List<UserTerritory2Association>> userTerritoryMap = new Map<Id, List<UserTerritory2Association>>();
                
                for(UserTerritory2Association userToAdd : usersToAdd){
                        
                    if(userTerritoryMap.containskey(userToAdd.Territory2Id)){
                        userTerritoryMap.get(userToAdd.Territory2Id).add(userToAdd);
                    }
                    else{
                        List<UserTerritory2Association> userIdList = new List<UserTerritory2Association>();
                        userIdList.add(userToAdd);
                        userTerritoryMap.put(userToAdd.Territory2Id, userIdList);
                    }    
                        
                }

                Map<Id, List<UserTerritory2Association>> userAccountMap = new Map<Id, List<UserTerritory2Association>>();

                for(Id accId : accountTerritories.keySet()){
                    List<Id> accTerritories = accountTerritories.get(accId);
                    List<UserTerritory2Association> userList = new List<UserTerritory2Association>();
                    for(Id terrId : accTerritories){
                        if(userTerritoryMap.get(terrId) != null){
                            userList.addAll(userTerritoryMap.get(terrId));
                        }
                    }
                    
                    if(userList.size()>0){
                        userAccountMap.put(accId, userList);
                    }    
                }


                return userAccountMap;

    }

    /**
     * TODO
     * @author          naoussar@salesforce.com | 23-09-2022
     * @param category  TODO
     * @param country   TODO
     *
     * @return List<LeadOpportunitySetting__mdt> - TODO
     */
    @AuraEnabled
    public static List<LeadOpportunitySetting__mdt> getSalesLeadSettings(String category, String country){
        
        List<LeadOpportunitySetting__mdt> settings = [SELECT DeveloperName, Category__c, Country__c, BrandsList__c, ShowDistributor__c, Dealer_Distributor_is_Mandatory__c, IsTest__c FROM LeadOpportunitySetting__mdt WHERE (Category__c =:category AND Country__c =: country)];
        
        return settings;
    }

    /**
     * Get proposed owner of a lead based on the category and brand selected and which roles are compatible from
	 * the custom metadata LeadOpportunitySetting__mdt used on the Flow_SuggestedUsersBasedOnBrand
     * @author          naoussar@salesforce.com | 23-09-2022
     * @redesignedBy    hadib@salesforce.com    | 01-12-2022
     *
     * @param accountId         Account Id
     * @param categoryInput     CategoryInput category name selected by the user
     * @param brandInput        Brand name selected by the user
     * @param dealerId          Selected dealer on the UI
     *
     * @return List<UserTerritory2Association> - Users to suggest as owner
     */
    @AuraEnabled
    public static List<UserTerritory2Association> getSuggestedUsers(String accountId, String categoryInput, String brandInput, String dealerId)
    {

        // Step 1 - Prepare the current user as a suggested user, as it will always be suggested.
        List<UserTerritory2Association> suggestedUsers = new List<UserTerritory2Association>();
        User currentUser = [SELECT Id, Name FROM User WHERE Id = :UserInfo.getUserId()];
        suggestedUsers.add(createCurrentUserManually(currentUser));

        try
        {
            // Step 2 - We will add more suggested user only if the user has selected both required fields (category & brand)
            //          If he does, we will provide new suggested users based on whether we have an existing leadOpp Settings for the combination of (Account Country,category,brand)
            //              YES -> we check in the settings the field AssignOwnerFrom__c
            //                          Then we order the suggested users based on their role and the role specified in the settings
            //              NO  -> we return all the sales team assigned to both account + dealer (if selected)
            if (String.isNotBlank(categoryInput) && String.isNotBlank(brandInput))
            {
                Boolean isOrdered = false;
                Account currentAccount;
                // The account is required to find the Lead Opp Settings for its country
                List<Account> accountQuery = [SELECT Id, Country__c FROM Account WHERE Id = :accountId];
                if(!accountQuery.isEmpty()) {
                    currentAccount = accountQuery[0];
                } else {
                    return suggestedUsers;
                }

                // Retrieve all Territories (Account+Dealer's ones)
                Map<String, List<ObjectTerritory2Association>> allAccountAndDealerTerritories = getAccountAndDealerTerritories(accountId, dealerId);

                // Step 3 - Retrieve the leadOpp Settings that let us know which object will be used to get the obj territories (Dealer or Account)

                LeadOpportunitySetting__mdt leadOppSettings = getLeadOppSettingsByCountryAndCategoryAndBrand(currentAccount?.Country__c, categoryInput, brandInput);

                // We retrieved by (category,Account Country). Then we will filter by (brand), and we return one record.
                List<ObjectTerritory2Association> filteredTerritories = new List<ObjectTerritory2Association>();
                if (leadOppSettings != null)
                {
                    // We can filter by dealer || account. (The custom metadata field AssignOwnerFrom__c)
                    // We can sort the suggested users by the brand
                    filteredTerritories = getFilteredTerritoriesBasedOnLeadOppSettings(leadOppSettings, accountId, dealerId, allAccountAndDealerTerritories);
                    isOrdered = true;
                }
                else
                {
                    // We can't filter by dealer || account. We will return both.
                    // No ordering of the suggested users
                    if(allAccountAndDealerTerritories?.get(accountId) != null)
                    {
                        filteredTerritories.addAll(allAccountAndDealerTerritories.get(accountId));  // Account Territories
                    }
                    if(allAccountAndDealerTerritories?.get(dealerId) != null)
                    {
                        filteredTerritories.addAll(allAccountAndDealerTerritories.get(dealerId));   // Dealer Territories
                    }
                }

                // Step 4 - We have the object territories, now, we will search for all the users assigned there.
                List<UserTerritory2Association> territoriesUsers = getUserAssignedToAllTerritories(filteredTerritories, currentUser);
                suggestedUsers.addAll(territoriesUsers);

                if(isOrdered)
                {
                    // Step 5 - Order the suggested users if we went through a custom metadata settings, because it specifies the best role
                    suggestedUsers = orderByRole(suggestedUsers,leadOppSettings);
                }
            }
        }
        catch (Exception e)
        {
            DebugLog.addException(e, 'UsersInAccountTerritories.getSuggestedUsers');
            if(Test.isRunningTest()){
                throw e;
            }
        }

        return suggestedUsers;
    }

    /**
     * Sort manually the list of suggested users. We user a new List, we add the ones that has the right role (leadOppSettings.UserRoles__c)
     * Then we add the rest of the users.
     * We end up with an ordered list that starts with the ones having the preferred roles in leadOppSettings.UserRoles__c
     * @author hadib@salesforce.com | 01-12-2022
     *
     * @param suggestedUsers    The list of the suggested users to order based on their role
     * @param leadOppSettings   The lead opp custom metadata settings record
     *
     * @return List<UserTerritory2Association> - Sorted list of suggested users
     */
    private static List<UserTerritory2Association> orderByRole(List<UserTerritory2Association> suggestedUsers, LeadOpportunitySetting__mdt leadOppSettings)
    {
        List<UserTerritory2Association> preferredUsers = new List<UserTerritory2Association>();
        List<UserTerritory2Association> restOfUsers = new List<UserTerritory2Association>();

        String userRoleInSettings = leadOppSettings?.UserRoles__c;
        List<String> rolesList = new List<String>();

        if (userRoleInSettings != null) {
            rolesList.addAll(userRoleInSettings.split(';'));
        }

        for(UserTerritory2Association user : suggestedUsers)
        {
            Boolean isPreferred = false;

            // Loop on role to see if this is a preferred User
            for (String role : rolesList)
            {
                if(user.RoleInTerritory2 == role)
                {
                    isPreferred = true;
                }
            }

            // Add the user to one of the two lists: preferred and normal users
            if(isPreferred)
            {
                preferredUsers.add(user);
            }
            else{
                restOfUsers.add(user);
            }
        }

        // The preferred users are already added in the preferredUsers list. Now we just add the rest of users at the end.
        preferredUsers.addAll(restOfUsers);
        return preferredUsers;
    }

    /**
     * We will get a map of object territories, mainly account and dealer ones. and we will filter them based on
     * brandSettings.AssignOwnerFrom__c.
     * @author hadib@salesforce.com | 01-12-2022
     *
     * @param brandSettings     The lead opportunity settings that corresponds to the (category, brand) combination
     * @param accountId         The id of the current Account opened
     * @param dealerId          The id of the dealer selected in the 'New Sales Lead' Modal
     * @param allAccountAndDealerTerritories    Map of object territories associated with the account and the dealer selected
     *
     * @return List<ObjectTerritory2Association> - The right object territories to use to find the suggested users.
     */
    private static List<ObjectTerritory2Association> getFilteredTerritoriesBasedOnLeadOppSettings(
            LeadOpportunitySetting__mdt brandSettings,
            String accountId,
            String dealerId,
            Map<String, List<ObjectTerritory2Association>> allAccountAndDealerTerritories)
    {
        List<ObjectTerritory2Association> filteredObjectTerritories = new List<ObjectTerritory2Association>();

        String objectId;

        switch on brandSettings.AssignOwnerFrom__c {
            when 'Account' {
                // Get Users from account territories
                objectId = accountId;
            }
            when 'Dealer' {
                // Fall back to the account if no dealer selected and the custom metadata wants the dealer
                objectId = (String.isNotBlank(dealerId)) ? dealerId : accountId;
            }
             // Otherwise, If it's 'Manual'. Here normally the user will pick an owner manually. We don't have to suggest any.
        }

        if(allAccountAndDealerTerritories?.get(objectId) != null)
        {
            filteredObjectTerritories.addAll(allAccountAndDealerTerritories.get(objectId));
        }

        return filteredObjectTerritories;
    }

    /**
     * Get a list of LeadOpportunitySetting__mdt based on the combination of (Country, Category and brand)
     * @author hadib@salesforce.com | 01-12-2022
     *
     * @param countryInput      Country input
     * @param categoryInput     Category selected in the 'New Sales Lead' modal
     * @param brandInput        Brand selected in the 'New Sales Lead' modal
     *
     * @return LeadOpportunitySetting__mdt - Correspondent settings for the combination of the current (account country,category,brand)
     */
    private static LeadOpportunitySetting__mdt getLeadOppSettingsByCountryAndCategoryAndBrand(String countryInput, String categoryInput, String brandInput)
    {
        LeadOpportunitySetting__mdt[] leadOppSettings = getLeadOppSettingsByCountryAndCategory(countryInput, categoryInput);

        LeadOpportunitySetting__mdt brandSettings = filterBrandSettings(leadOppSettings, brandInput);

        return brandSettings;
    }

    /**
     * Get a list of LeadOpportunitySetting__mdt based on the combination of (Country, Category and brand)
     * @author hadib@salesforce.com | 01-12-2022
     *
     * @param countryInput      Country input
     * @param categoryInput     Category selected in the 'New Sales Lead' modal
     * @param brandInput        Brand selected in the 'New Sales Lead' modal
     *
     * @return LeadOpportunitySetting__mdt - Correspondent settings for the combination of the current (account country,category,brand)
     */
    @AuraEnabled
    public static LeadOpportunitySetting__mdt getLeadOppSettingsByCountryAndBrand(String countryInput, String brandInput)
    {
        LeadOpportunitySetting__mdt[] leadOppSettings = getLeadOppSettingsByCountry(countryInput);

        LeadOpportunitySetting__mdt brandSettings = filterBrandSettings(leadOppSettings, brandInput);

        return brandSettings;
    }

    /**
     * Get a filtered list of LeadOpportunitySetting__mdt based on the brand field and a list of LeadOpportunitySetting__mdt records
     * @author ohanafi@salesforce.com | 22-03-2023
     *
     * @param leadOppSettings      LeadOpportunitySetting__mdt records
     * @param brandInput        Brand selected in the 'New Sales Lead' modal
     *
     * @return LeadOpportunitySetting__mdt - Filtered list based on brand
     */
    private static LeadOpportunitySetting__mdt filterBrandSettings(LeadOpportunitySetting__mdt[] leadOppSettings, String brandInput) {
        LeadOpportunitySetting__mdt brandSettings;
        for (LeadOpportunitySetting__mdt setting : leadOppSettings) {
            if (String.isNotBlank(setting.BrandsList__c)) {
                String brands = setting.BrandsList__c ;
                List<String> brandList = brands.split(';');

                if (brandList.contains(brandInput)) {
                    brandSettings = setting;
                    break;
                }
            }
        }
        return brandSettings;
    }

    /**
     * Get a list of LeadOpportunitySetting__mdt based on the combination of (Country and Category)
     * @author naoussar@salesforce.com | 23-09-2022
     *
     * @param countryInput      Country
     * @param categoryInput     Category selected in the modal
     * @return LeadOpportunitySetting__mdt - custom metadata records
     */
    private static LeadOpportunitySetting__mdt[] getLeadOppSettingsByCountryAndCategory(String countryInput, String categoryInput)
    {
        LeadOpportunitySetting__mdt[] leadOppSettings = new LeadOpportunitySetting__mdt[]{};

        leadOppSettings = [
                SELECT  DeveloperName, ShowManualSalesLeadOwnerAssignment__c, Category__c, BrandsList__c, Country__c,
                        AssignOwnerFrom__c, UserRoles__c, IsTest__c
                FROM    LeadOpportunitySetting__mdt
                WHERE   Country__c = :countryInput AND Category__c = :categoryInput AND IsTest__c = :false
        ];

        return leadOppSettings;
    }

    /**
     * Get a list of LeadOpportunitySetting__mdt based on the Country field
     * @author ohanafi@salesforce.com | 22-03-2023
     *
     * @param countryInput      Country
     * @return LeadOpportunitySetting__mdt - custom metadata records
     */
    private static LeadOpportunitySetting__mdt[] getLeadOppSettingsByCountry(String countryInput)
    {
        LeadOpportunitySetting__mdt[] leadOppSettings = new LeadOpportunitySetting__mdt[]{};

        leadOppSettings = [
                SELECT  DeveloperName, ShowManualSalesLeadOwnerAssignment__c, Category__c, BrandsList__c, Country__c,
                        AssignOwnerFrom__c, UserRoles__c, IsTest__c
                FROM    LeadOpportunitySetting__mdt
                WHERE   Country__c = :countryInput AND IsTest__c = :false
        ];

        return leadOppSettings;
    }

    /**
     * Retrieves object territories associated with both the account and the dealer and stores them in a map with two keys, dealer and account
     * @author hadib@salesforce.com | 01-12-2022
     *
     * @param accountId     The current account opened
     * @param dealerId      The dealer selected in the UI (Might be a null if nothing is selected)
     *
     * @return Map<String,List<ObjectTerritory2Association>> - Map of two keys (acc,dealer) with their object territories
     */
    private static Map<String,List<ObjectTerritory2Association>> getAccountAndDealerTerritories(String accountId, String dealerId)
    {
        Map<String,List<ObjectTerritory2Association>> accountAndDealerTerritories = new Map<String,List<ObjectTerritory2Association>>();
        Set<String> objectsIds = new Set<String>{accountId, dealerId};
        List<ObjectTerritory2Association> allTerritories = [    SELECT ObjectId, SobjectType, Territory2Id
                                                                FROM ObjectTerritory2Association
                                                                WHERE ObjectId IN :objectsIds ];

        for (ObjectTerritory2Association territory : allTerritories)
        {
            if(territory.ObjectId == accountId)
            {
                if(accountAndDealerTerritories.containsKey(accountId))
                {
                    accountAndDealerTerritories.get(accountId).add(territory);
                }
                else {
                    accountAndDealerTerritories.put(accountId,new List<ObjectTerritory2Association>{territory});
                }

            }
            else if(territory.ObjectId == dealerId)
            {
                if(accountAndDealerTerritories.containsKey(dealerId))
                {
                    accountAndDealerTerritories.get(dealerId).add(territory);
                }
                else {
                    accountAndDealerTerritories.put(dealerId,new List<ObjectTerritory2Association>{territory});
                }
            }
        }

        return accountAndDealerTerritories;
    }

    /**
     * Retrieves all the users assigned to a set of territories. All except the current user. we will add this one manually anyway.
     * @author hadib@salesforce.com | 01-12-2022
     *
     * @param territories List of object territories
     * @param currentUser Current user (will be omitted in the query)
     *
     * @return List<UserTerritory2Association> - List of users assigned the the object territories
     */
    private static List<UserTerritory2Association> getUserAssignedToAllTerritories( ObjectTerritory2Association[] territories, User currentUser)
    {
        List<UserTerritory2Association> usersToAdd = new List<UserTerritory2Association>();
        if(territories != null)
        {
            Set<Id> territoriesIds = extractTerritoriesIds(territories);

            // Search for User assigned to the set of Territories
            usersToAdd = [
                    SELECT  UserId, User.Name, Territory2Id, RoleInTerritory2, IsActive
                    FROM    UserTerritory2Association
                    WHERE   Territory2Id IN :territoriesIds
                    AND
                    UserId != :currentUser.Id
            ];
        }

        return usersToAdd;
    }

    /**
     * Extracts all the values of ObjectTerritory2Association.Territory2Id in a Set
     * @author hadib@salesforce.com | 01-12-2022
     *
     * @param territories List of territories
     *
     * @return Set of ObjectTerritory2Association.Territory2Id values
     */
    private static Set<Id> extractTerritoriesIds(ObjectTerritory2Association[] territories)
    {
        Set<Id> territoriesIds = new Set<Id>();
        for (ObjectTerritory2Association t2a : territories) {
            territoriesIds.add(t2a.Territory2Id);
        }
        return territoriesIds;
    }

    /**
     * Creates a fake assignment for the current user to a territory
     * @author hadib@salesforce.com | 1-12-2022
     *
     * @param currentUser The current logged in User
     *
     * @return UserTerritory2Association - User Territory assignment
     */
    private static UserTerritory2Association createCurrentUserManually(User currentUser)
    {
        UserTerritory2Association currentUserRole = new UserTerritory2Association();
        currentUserRole.UserId = currentUser.Id;
        currentUserRole.User = currentUser;
        currentUserRole.RoleInTerritory2 = 'Current user';
        return currentUserRole;
    }


    /**
     * TODO
     * @author          richard.trum@glimt.se | 28-03-2023
     * @param category  TODO
     * @param accountId   TODO
     *
     * @return List<LeadOpportunitySetting__mdt> - TODO
     */
    @AuraEnabled
    public static List<LeadOpportunitySetting__mdt> getOpportunitySettings(String category, String accountid){
        
        List<Account> accList = [SELECT Id, Country__c FROM Account WHERE Id =: accountId];

        List<LeadOpportunitySetting__mdt> settings = new List<LeadOpportunitySetting__mdt>();
        if(accList.size()>0){
            settings = [SELECT DeveloperName, Category__c, Country__c, BrandsList__c, ShowDistributor__c, Dealer_Distributor_is_Mandatory__c, IsTest__c FROM LeadOpportunitySetting__mdt WHERE (Category__c =:category AND Country__c =: accList[0].Country__c)];
        }
        System.debug(settings);
        return settings;
    }
}