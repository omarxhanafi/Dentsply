/*------------------------------------------------------------	
Author: 	Richard Trum (Glimt) 2019-11-20 	
Description:   	Generic class to find users related to an account through ETM
20220729   Roberto Narbona            TFUS-000004576
20220909   Aoussar Nihad              TFUS-000004326 (added getSuggestedUsers method )
------------------------------------------------------------*/

public with sharing class UsersInAccountTerritories {

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
                        System.debug('Brand: ' + brand);
                    	settingsMap.put(brand, setting);
                	}
            	}
            	else{
                	settingsMap.put(setting.Category__c, setting);
            	}    
        	}
            System.debug('Settings map: ' + settingsMap);
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
            
        	For (ObjectTerritory2Association t2a : territories){                
                
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
            	For(ObjectTerritory2Association dt2a : dealerTerritories){
                
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

    
    @AuraEnabled
    public static List<LeadOpportunitySetting__mdt> getSalesLeadSettings(String category, String country){
        
        List<LeadOpportunitySetting__mdt> settings = [SELECT DeveloperName, Category__c, Country__c, BrandsList__c, ShowDistributor__c, Dealer_Distributor_is_Mandatory__c, IsTest__c FROM LeadOpportunitySetting__mdt WHERE (Category__c =:category AND Country__c =: country)];
        
        return settings;
    }
    /**
    * @description : get proposed owner of a lead based on the category and brand choosed and which roles are compatible from
	* the custom metadata LeadOpportunitySetting__mdt used on the Flow_SuggestedUsersBasedonBrand
    * @author naoussar@salesforce.com | 23-09-2022 
    * @param String recordId: account Id 
    * @param String String categoryInput category name choosed by the user 
    * @param String String brandInput brand name choosed by the user 
    * @param String dealerId: dealer choosed choosed on teh UI
    **/
    @AuraEnabled
    public static List<UserTerritory2Association> getSuggestedUsers(String recordId, String categoryInput, String brandInput, String dealerId){
        List<UserTerritory2Association> suggestedUsers = new List<UserTerritory2Association>();
        try{
            Set<UserTerritory2Association> users = new Set<UserTerritory2Association>();
            Set<Id> userSet = new Set<Id>();
            Set<Id> territoriesIds = new Set<Id>(); 
            List<UserTerritory2Association> usersToAdd = new List<UserTerritory2Association>();   
            	ObjectTerritory2Association[] territories = [SELECT ObjectId, SobjectType, Territory2Id 
                                                             FROM ObjectTerritory2Association 
                                                             WHERE ObjectId =: recordId];
                
                ObjectTerritory2Association[] dealerTerritories = new List<ObjectTerritory2Association>();
                
                Account acc = [SELECT Id, Country__c FROM Account WHERE Id =: recordId];
                User currentUser = [SELECT Id, Name FROM User WHERE Id =: UserInfo.getUserId()];
                Set<String> roleMap = new Set<String>();
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
                if(settingsMap.size() == 0 ){
                    for (ObjectTerritory2Association t2a : territories){                
                        territoriesIds.add(t2a.Territory2Id);
                    }
                    usersToAdd = [SELECT UserId, User.Name, Territory2Id, RoleInTerritory2, IsActive 
                                  FROM UserTerritory2Association 
                                  WHERE Territory2Id IN: territoriesIds AND UserId !=: currentUser.Id
                                 ];
                    UserTerritory2Association currentUserRole = new UserTerritory2Association();
                    currentUserRole.UserId = currentUser.Id;
                    currentUserRole.User = currentUser;
                    currentUserRole.RoleInTerritory2 = 'Current user';
                    
                    suggestedUsers.add(currentUserRole);
                    suggestedUsers.addAll(usersToAdd);
                    
                }else{
                    if(settingsMap.get(brandInput) != null){
                    String roleList = settingsMap.get(brandInput).UserRoles__c;
                    String[] roles = roleList.split(';');
                    for(String role:roles){
                        roleMap.add(role);
                    }
                    }
                    System.debug('roleMap'+roleMap);
                    for (ObjectTerritory2Association t2a : territories){                
                        territoriesIds.add(t2a.Territory2Id);
                    }
                    usersToAdd = [SELECT UserId, User.Name, Territory2Id, RoleInTerritory2, IsActive 
                                                             FROM UserTerritory2Association 
                                                             WHERE Territory2Id IN: territoriesIds AND UserId !=: currentUser.Id
                                                             ];
                    
                	for(UserTerritory2Association user: usersToAdd){
                    if(roleMap.contains(user.RoleInTerritory2)){
                        users.add(user);
                        userSet.add(user.UserId);
                     }
               		}
               
                UserTerritory2Association currentUserRole = new UserTerritory2Association();
                currentUserRole.UserId = currentUser.Id;
                currentUserRole.User = currentUser;
                currentUserRole.RoleInTerritory2 = 'Current user';
                
                users.add(currentUserRole);
               
            
            users.addAll(usersToAdd);  
            suggestedUsers.addAll(users); 
        }
        }catch(Exception e) {
    		System.debug('An exception occurred: ' + e);
		}
        return suggestedUsers;
       	
	}
    
    /**
    * @description :  isManualAssignmentVisible to check for a given category and brand if the lead is eligible for 
    * a manual owner assignment 
    * @author naoussar@salesforce.com | 23-09-2022 
    * @param String recordId current account Id used to retrieve the country to match custom metadata 
    * @param String String categoryInput category name choosed by the user 
    * @param String String brandInput brand name choosed by the user 
    **/
    @AuraEnabled
    public static Boolean isManualAssignmentVisible(String recordId, String categoryInput, String brandInput){
    	Boolean isManualAssignmentVisible;
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
        isManualAssignmentVisible = settingsMap.get(brandInput).ShowManualSalesLeadOwnerAssignment__c;
        return isManualAssignmentVisible;
    }



}