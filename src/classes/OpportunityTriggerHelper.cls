/*-------------------------------------------------------------------------------------------------------
Author:         Richard Trum (Glimt) 20200907
Description:    Opportunity Trigger Helper Class
Test Class:     Test_OpportunityPB 
History 
20210906    kdoruibin               TFUS-000002909: Updated setOpportunityName according to new naming framework
20200907    Richard Trum            Created trigger framework for Opportunities
20220729   Roberto Narbona            TFUS-000004576
20230322    Roberto                 added setActualCloseDate method TFUS-000005474
20230503    Richard Trum            commented out usage of old record types (TFUS-5578)
20230824    Richard                 Migrated methods from the Opportunity: After Handler flow trigger

----------------------------------------------------------------------------------------*/

public with sharing class OpportunityTriggerHelper {



    /*------------------------------------------------------------
    Description:    Sets the Opportunity Pre-Defined field values
    Inputs:         @param newOpportunityList      List of new or updated opportunities
    ------------------------------------------------------------*/
    public static void setPreDefinedFields(List<Opportunity> newOpportunityList, Map<Id, Opportunity> oldOpportunityMap)
    {
        setActualCloseDate(newOpportunityList , oldOpportunityMap);
        setLastStageChangeDate(newOpportunityList , oldOpportunityMap);
        setUserCountry(newOpportunityList , oldOpportunityMap);
        setOpportunityName(newOpportunityList);
        setOpportunityOverallNotes(newOpportunityList);
    }

    /*------------------------------------------------------------
    Description:    Sets the opportunity Overall notes field
                    Equals : Customer Notes + '-' + (br/) + Description
    Inputs:         @param newOpportunityList      List of new or updated opportunities

    ------------------------------------------------------------*/
    public static void setOpportunityOverallNotes(List<Opportunity> newOpportunityList)
    {
        for(Opportunity newOpportunity : newOpportunityList)
        {
            newOpportunity.OverallNotes__c = newOpportunity.CustomerNotes__c;
            if(newOpportunity.Description != null)
            {
                if(!String.isBlank(newOpportunity.OverallNotes__c))
                {
                    newOpportunity.OverallNotes__c += ' -\r\n' + newOpportunity.Description;
                }
                else
                {
                    newOpportunity.OverallNotes__c = newOpportunity.Description;
                }
            }
        }
    }

    /*------------------------------------------------------------  
    Description:    
    Inputs:         @param newOpportunityList and @param oldOpportunityMap
    ------------------------------------------------------------*/
    public static void setOpportunityName(List<Opportunity> newOpportunityList) {
		
        // Don't run unless configured to do so.
        BatchSettings__c settings = BatchSettings__c.getInstance('Default');
                    
        String recordTypeId = Schema.Sobjecttype.Opportunity.getRecordTypeInfosByDeveloperName().get('Lightning_Pipeline_Opportunity').getRecordTypeId();
        //String dealerRecordTypeId = Schema.Sobjecttype.Opportunity.getRecordTypeInfosByDeveloperName().get('Dealer_Community').getRecordTypeId();
    
        Set<Id> accountIdSet = new Set<Id>();
        Set<Id> ownerIdSet = new Set<Id>();
        for (Opportunity oppty : newOpportunityList) {
            accountIdSet.add(oppty.AccountId);
            ownerIdSet.add(oppty.OwnerId);
        }

        // Get related accounts
        Map<Id, Account> accountMap = new Map<Id, Account>([SELECT Id, Name, Country__c FROM Account WHERE Id IN :accountIdSet]);
        // Get opportunity owners
        Map<Id, User> ownerMap = new Map<Id, User>([SELECT Id, Name FROM User WHERE Id IN :ownerIdSet]);

        // Get Opportunity Naming Settings
        Map<String, OpportunityNamingSetting__mdt> oppNameSettingMap = new Map<String, OpportunityNamingSetting__mdt>();
        for (OpportunityNamingSetting__mdt oppNameSetting : OpportunityNamingSetting__mdt.getAll().values()) {
            oppNameSettingMap.put(oppNameSetting.Country__c, oppNameSetting);
        }

        for (Opportunity oppty : newOpportunityList) {
            if (oppty.RecordTypeId != recordTypeId) continue; //&& oppty.RecordTypeId != dealerRecordTypeId
            if (oppty.ManualName__c != false) continue;

            Account relatedAccount = accountMap.get(oppty.AccountId);
            OpportunityNamingSetting__mdt relatedOpptyNamingSetting = oppNameSettingMap.containsKey(relatedAccount?.Country__c) ? 
                oppNameSettingMap.get(relatedAccount?.Country__c) : 
                oppNameSettingMap.get(null);

            if (relatedOpptyNamingSetting == null) continue;
            
            String stringOne = getNameField(relatedOpptyNamingSetting.Field1__c, oppty, accountMap, ownerMap);
            String stringTwo = getNameField(relatedOpptyNamingSetting.Field2__c, oppty, accountMap, ownerMap);
            String stringThree = getNameField(relatedOpptyNamingSetting.Field3__c, oppty, accountMap, ownerMap);
            String stringFour = getNameField(relatedOpptyNamingSetting.Field4__c, oppty, accountMap, ownerMap);
            String stringFive = getNameField(relatedOpptyNamingSetting.Field5__c, oppty, accountMap, ownerMap);
            
            List<String> fieldList = new List<String>{ stringOne, stringTwo, stringThree, stringFour, stringFive };
            
            String nameString = '';
            for (String field : fieldList) {
                if (String.isBlank(field)) continue;
                nameString = formatName(nameString, field, relatedOpptyNamingSetting.Separator__c);
            }

            // Opportunity Name max length 120
            oppty.Name = nameString.abbreviate(120);
        }
                  	
    }

    /**
    * @description Helper method for setOpportunityName(newOpportunityList)
    * @author kdoruibin@salesforce.com | 09-06-2021 
    * @param String fieldName 
    * @param Opportunity oppty 
    * @param Map<Id Account> accountMap 
    * @param Map<Id User> ownerMap 
    * @return String 
    **/
    private static String getNameField(String fieldName, Opportunity oppty, Map<Id, Account> accountMap, Map<Id, User> ownerMap) {
        // Set input token
        if ('Account.Name'.equals(fieldName)) {
            fieldName = accountMap.get(oppty.AccountId)?.Name;
        }
        if ('CloseDate'.equals(fieldName)) {
            fieldName = String.valueOf(oppty.CloseDate);
        }
        if ('NA_Category__c'.equals(fieldName)) {
            fieldName = oppty.NA_Category__c;
        }
        if ('NA_Brand__c'.equals(fieldName)) {
            fieldName = oppty.NA_Brand__c;
        }
        if ('Owner.Name'.equals(fieldName)) {
            fieldName = ownerMap.get(oppty.OwnerId)?.Name;
        }
        if ('Type'.equals(fieldName)) {
            fieldName = oppty.Type;
        }
        return fieldName;
    }

    /**
    * @description Helper method for setOpportunityName(newOpportunityList)
    * @author kdoruibin@salesforce.com | 09-06-2021 
    * @param String nameString 
    * @param String input 
    * @param String spacingToken 
    * @return String 
    **/
    private static String formatName(String nameString, String input, String spacingToken) {
        // Set spacing token, default to blank space if none
        spacingToken = String.IsNotBlank(spacingToken) ? ' ' + spacingToken + ' ' : ' ';

        if (String.isBlank(nameString)) {
            nameString = input;
        } else {
            nameString = String.IsNotBlank(input) ? nameString + spacingToken + input : nameString;
        }
        return nameString;
    }
    
    /*------------------------------------------------------------  
    Description:    
    Inputs:         @param newOpportunityList and @param oldOpportunityMap
    ------------------------------------------------------------*/
    public static void sendDealerEmail(List<Opportunity> newOpportunityList) {
		
        Set<Id> campaignIds = new Set<Id>();
        Set<Id> accountIds = new Set<Id>();
        Set<Id> dealerIds = new Set<Id>();

    	for (Opportunity o : newOpportunityList) {
        	if (o.CampaignId != null) {
            	campaignIds.add(o.CampaignId);
        	}
            if(o.AccountId != null){
                accountIds.add(o.AccountId);
            }
            if(o.Dealer__c != null){
                dealerIds.add(o.Dealer__c);
            }
    	}
        
        //Get all Customer Accounts related to the included Campaign Members
        Map<Id, Account> customers = new Map<Id, Account>(
            [SELECT Id, Name, Country__c FROM Account WHERE Id IN: accountIds]
        );
        
        //Get all countries related to the included Opportunities
        Set<String> countries = new Set<String>();
        for(Account customer : customers.values()){
            countries.add(customer.Country__c);
        }
        
        //Only loop if any German or Austrian opportunity is included
        if(countries.contains('DE') || countries.contains('AT')){        
        
        //Get all Campaigns related to the included Opportunities 
        Map<Id, Campaign> campaigns = new Map<Id, Campaign>(
        	[SELECT Id, RecordTypeId, OwnerId, Email_Template__c, ReplyToEmail__c, Brands__c, RecordType.DeveloperName, Include_in_Dealer_Community__c, Notify_Dealer_Sales_Rep_by_Email__c from Campaign where Id in :campaignIds]
        );

        //Get all Dealers related to the included Campaign Members
        Map<Id, Account> dealers = new Map<Id, Account>(
            [SELECT Id, Name, 
            (SELECT AccountId, ContactId, IsActive, IsDirect, Roles, Specialty__c, Contact.Email, Contact.Legacy_ID__c FROM AccountContactRelations)
            FROM Account WHERE Id IN: dealerIds]
        );
        
        //Get Custom Metadata records related to the previously queried countries
        LeadOpportunitySetting__mdt[] oppSettings = GlobalUtils.getOpportunitySettings(countries);

        Map<String, LeadOpportunitySetting__mdt> settingsMap = GlobalUtils.getSettingsMap(oppSettings);
        
        
        //Loop Opportunities
        for(Opportunity opp: newOpportunityList){
            
            if(opp.CampaignId != null){
            String notifyDealerReps = campaigns.get(opp.CampaignId).Notify_Dealer_Sales_Rep_by_Email__c;
            System.debug('Notify dealer reps?: ' + notifyDealerReps);    
            String campaignRecordType = campaigns.get(opp.CampaignId).RecordType.DeveloperName;
            System.debug(campaignRecordType);
            String replyToAddress = campaigns.get(opp.CampaignId).ReplyToEmail__c;
            System.debug('ReplyTo address: ' + replyToAddress);    
			
                        if(notifyDealerReps == 'Yes' && campaignRecordType == 'Digital_Marketing_Campaign' && (customers.get(opp.AccountId).Country__c == 'DE' || customers.get(opp.AccountId).Country__c == 'AT') && opp.Dealer__c != null){
                            
                            Integer count = 10;
                            String emailTemplateId = campaigns.get(opp.CampaignId).Email_Template__c;
                            
                            if(emailTemplateId != null || emailTemplateId != ''){
                                                                
                                Set<String> roleMap = new Set<String>();
                				String roleList = settingsMap.get(opp.NA_Brand__c).UserRoles__c;
                				String[] roles = roleList.split(';');
                				for(String role:roles){
                    				roleMap.add(role);
                				}
                                
                                List<AccountContactRelation> dealerContacts = new List<AccountContactRelation>();
                					if(dealers!= null){
                    					Account dealerAcc = dealers.get(opp.Dealer__c);                    
                    						if(dealerAcc != null){
                    							dealerContacts = dealers.get(opp.Dealer__c).AccountContactRelations;
                    						}    
                				}
                                
                                List<Id> contactIds = new List<Id>();
                                
                                for(AccountContactRelation rel : dealerContacts){
                        			if(rel.Specialty__c != null){
                            			if(roleMap.contains(rel.Specialty__c)){
											 //toAddresses.add(rel.Contact.Email);
											 contactIds.add(rel.ContactId);                                
                            			}
                        			}
                    			}
								
                                if(!Test.isRunningTest()){
                            		Messaging.reserveSingleEmailCapacity(contactIds.size());
                                }
                                
                                for(Id contId : contactIds){
                            	Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
                                
                            	// Assign the addresses for the To list to the mail object.    
                            	//mail.setToAddresses(toAddresses);
                            
                            	// Specify the name used as the display name.
								mail.setSenderDisplayName('Dentsply Sirona');
                            	mail.setTargetObjectId(contId);
                                //mail.setTreatTargetObjectAsRecipient(false);
                                
                                mail.setWhatId(opp.Id);
                                
                            	mail.setTemplateId(emailTemplateId);
                                    
                                if(replyToAddress != null){
                                    mail.setReplyTo(replyToAddress);
                                }    
                            
                                if(!Test.isRunningTest()){
                            		// Send the email
									Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
                                }
                                }
                            }
           					
                        }
            }
            
        }
            
        }    
    
    }
    
    
    /*------------------------------------------------------------  
    Description:    
    Inputs:         @param newOpportunityList and @param oldOpportunityMap
    ------------------------------------------------------------*/
    public static void createAssets(List<Opportunity> newOpportunityList) {
        set<string> oppIds = new set<string>();
        for(opportunity opp : newOpportunityList){
                oppIds.add(opp.Id);
        }
        List<Opportunity> opps = new List<Opportunity>();
        if (!oppIds.isEmpty()) {
            opps = [SELECT Id, (SELECT Name, Opportunity__c FROM Assets__r WHERE Opportunity__c IN: oppIds AND Opportunity__r.Account.Country__c = 'TR' AND Opportunity__r.HasOpportunityLineItem = true AND Opportunity__r.IsWon = true), (SELECT Opportunity.AccountId, OpportunityId, Opportunity.CloseDate, UnitPrice, Quantity, PriceBookEntry.Product2Id, PriceBookEntry.Product2.Name, Description FROM OpportunityLineItems WHERE PriceBookEntry.Product2.ServicableItem__c = true) FROM Opportunity WHERE Id IN: oppIds AND Account.Country__c = 'TR' AND HasOpportunityLineItem = true AND IsWon = true];
        }
        List<Asset> assetsToInsert = new List<Asset>();
        if (!opps.isEmpty()) {
            for(Opportunity opp : opps){
                system.debug(opp.Assets__r.isEmpty());
                if(opp.Assets__r.isEmpty()){
                    for(OpportunityLineItem oLI : opp.OpportunityLineItems){
                        Asset ast = new Asset();
                        ast.AccountId = oLI.Opportunity.AccountId ;
                        ast.Product2Id = oLI.PriceBookEntry.Product2Id ;
                        ast.Quantity = oLI.Quantity ;
                        ast.Price = oLI.UnitPrice ;
                        ast.PurchaseDate = oLI.Opportunity.CloseDate ;
                        ast.Opportunity__c = oLI.OpportunityId ;
                        ast.Status = 'Open' ;
                        ast.Description = oLI.Description ;
                        ast.Name = oLI.PriceBookEntry.Product2.Name ;
                        assetsToInsert.add(ast);
                    }
                }
            }
        }
        if (!assetsToInsert.isEmpty()) {
            insert assetsToInsert;
        }
    }

    /*------------------------------------------------------------  
    Description:    
    Inputs:         @param newOpportunityList and @param oldOpportunityMap
    ------------------------------------------------------------*/
    public static void setActualCloseDate(List<Opportunity> newOpportunityList, Map<Id, Opportunity> oldOpportunityMap) {
        
        for(Integer i=0; i < newOpportunityList.Size(); i++){
            /* for updates when opp has been closed*/
            if( oldOpportunityMap != null && 
                newOpportunityList[i].IsClosed == true &&
                oldOpportunityMap.get(newOpportunityList[i].Id).IsClosed == false){
                    newOpportunityList[i].ActualCloseDate__c = date.today();
            }
            /* for inserts */
            if(oldOpportunityMap == null && newOpportunityList[i].IsClosed == true){
                newOpportunityList[i].ActualCloseDate__c = date.today();
            }
        }        
    }


    /*------------------------------------------------------------  
    Description:    Setting the Last_Stage_Change_Date__c for new or updated records
    Inputs:         @param newOpportunityList and @param oldOpportunityMap
    ------------------------------------------------------------*/
    public static void setLastStageChangeDate(List<Opportunity> newOpportunityList, Map<Id, Opportunity> oldOpportunityMap) {
        
        for(Integer i=0; i < newOpportunityList.Size(); i++){
            /* for updates when opp stage has been changed*/
            if( oldOpportunityMap != null && 
                oldOpportunityMap.get(newOpportunityList[i].Id).StageName != newOpportunityList[i].StageName){
                    newOpportunityList[i].Last_Stage_Change_Date__c = date.today();
            }
            /* for inserts */
            if(oldOpportunityMap == null && newOpportunityList[i].StageName != null){
                newOpportunityList[i].Last_Stage_Change_Date__c = date.today();
            }
        }        
    }

    /*------------------------------------------------------------  
    Description:    Setting the User Country for new or updated records
    Inputs:         @param newOpportunityList and @param oldOpportunityMap
    ------------------------------------------------------------*/
    public static void setUserCountry(List<Opportunity> newOpportunityList, Map<Id, Opportunity> oldOpportunityMap) {

        Set<Id> userSet = new Set<Id>();

        for(Integer i=0; i < newOpportunityList.Size(); i++){
            userSet.add(newOpportunityList[i].OwnerId);
            userSet.add(newOpportunityList[i].CreatedById);
        }
        
        Map<Id, User> userMap = new Map<Id, User>([SELECT Id, User_Country__c FROM User WHERE Id IN: userSet]);
        
        for(Integer j=0; j < newOpportunityList.Size(); j++){
            newOpportunityList[j].User_Country__c = userMap.get(newOpportunityList[j].OwnerId).User_Country__c;
        }
        
    }    

}