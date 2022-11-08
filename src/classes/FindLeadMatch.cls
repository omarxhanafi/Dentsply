/*------------------------------------------------------------	
Author: 	Richard Trum (Glimt) 2019-11-28 	
Description:   	Class for handling match of leads (TFUS-000003774)
------------------------------------------------------------*/
public with sharing class FindLeadMatch {
	/*------------------------------------------------------------	
	Author: Richard Trum (Glimt) 2019-11-28 	
	Description: search for potential matches for the current lead   	
	Inputs: list of recordId, and a string contact and return a list of leadMatchResult 
	------------------------------------------------------------*/
    @AuraEnabled(cacheable=false)
    public static List<leadMatchResult> executeLeadMatchSearch (List<List<String>> input) {
      
        List<String> inputStrings = input[0];
        String recordId = inputStrings[0];
        String recordObject = inputStrings[1];
        List<Datacloud.FindDuplicatesResult> result = new List<Datacloud.FindDuplicatesResult>();
  
        Contact originalRecord = new Contact();
        
        List<String> res = new List<String>();
        List<leadMatchResult> output = new List<leadMatchResult>();
        LeadMatchResult dupRes = new LeadMatchResult();
        List<SObject> matchRecords = new List<SObject>();
        
        if(recordObject == 'Contact'){
            List<Lead> lead = [SELECT Id, FirstName, LastName, PostalCode, Country, Email FROM Lead WHERE Id =: recordId];
            List<Contact> contact = [SELECT Id, FirstName, LastName, AccountId, Email FROM Contact WHERE Id =: recordId];
            if(contact.size()>0){
                originalRecord = contact[0];
            }
            List<leadMatchResult> conRes = FindLeadMatch.customContactDuplicateSearch(recordId);

            List<leadMatchResult> accRes = FindLeadMatch.customAccountDuplicateSearch(recordId);

            output.addAll(conRes);
            output.addAll(accRes);

            Map<String, leadMatchResult> lmrMap = new Map<String, leadMatchResult>();

            for(leadMatchResult lmr : output){

                if(lmrMap.containsKey(lmr.matchRecord.Id)){
                    
                    Double conf = lmrMap.get(lmr.matchRecord.Id).matchConfidence + lmr.matchConfidence;
                    lmr.matchConfidence = conf;

                    List<String> reasons = lmrMap.get(lmr.matchRecord.Id).matchReasons;
                    reasons.addAll(lmr.matchReasons);

                    lmr.matchReasons = reasons;

                    lmrMap.put(lmr.matchRecord.Id, lmr);
                }
                else{
                    lmrMap.put(lmr.matchRecord.Id, lmr);
                }
            }

            output = lmrMap.values();
            
            try{
                result = Datacloud.FindDuplicates.findDuplicates(lead);
            }
            catch(Exception e){
                System.debug(e);
            }

            System.debug('Duplicates: ' + matchRecords);
            
        }
        
        Set<String> fieldDiffList = new Set<String>();
        
        if(result.size()>0){
        for (Datacloud.FindDuplicatesResult findDupeResult : result) {
            for (Datacloud.DuplicateResult dupeResult : findDupeResult.getDuplicateResults()) {
                  for (Datacloud.MatchResult matchResult : dupeResult.getMatchResults()) {
                        for (Datacloud.MatchRecord matchRecord : matchResult.getMatchRecords()) {
                            System.debug('Duplicate Record: ' + matchRecord.getRecord());
                            
                            //matchRecords.add(matchRecord.getRecord());
                            
                            SObject mRec = matchRecord.getRecord();
                            String resId = (String)mRec.get('Id');
                            res.add(resId);
                            
                            List<Datacloud.FieldDiff> fDiffs = matchRecord.getFieldDiffs();
                            
                            for(Integer j=0;j<fDiffs.size();j++){
                                System.debug(fDiffs[j]);
                                if(fDiffs[j].getDifference() == 'Different'){
                                    System.debug(fDiffs[j].getName());
                                    fieldDiffList.add(fDiffs[j].getName());
                                }
                            }
                                                      
                            
                        }
                  }
            }
        }
        }
        
        //dupRes.matchRecord = mRec;
        //dupRes.fieldDiffs = new List<String>(fieldDiffList);
        
        //output.add(dupRes);
  
        //List<List<leadMatchResult>> mainRes = new List<List<leadMatchResult>>();
        //mainRes.add(output);
        //System.debug(mainRes);

        for(LeadMatchResult lm : output){
          System.debug(lm);
          if(lm.matchConfidence == null){
            lm.matchConfidence = 0;
            lm.matchScore = 'Low';
          }
          else{
            //Normalize confidence results

            lm.matchConfidence = (lm.matchConfidence*100)/200;
            
            if(lm.matchConfidence > 69){
              lm.matchScore = 'High';
            }
            else if(lm.matchConfidence < 30){
              lm.matchScore = 'Low';
            }
            else{
              lm.matchScore = 'Medium';
            }

          }

          
        }

        //System.debug('Before sort ' + output);
        output.sort();
        System.debug('Sorted output ' + output);
        return output;      
        
    }
     /*------------------------------------------------------------	
	 Author: Richard Trum (Glimt) 2019-11-28 	
	 Description: find account that matchs the current lead record	
	 Inputs: Id of the lead to look for similar data in accounts  
	 ------------------------------------------------------------*/
      public static List<leadMatchResult> customAccountDuplicateSearch(String recordId){
          List<Account> result = new List<Account>();
          List<leadMatchResult> results = new List<LeadMatchResult>();
          
          Lead acc = [SELECT Id, Name, Street, City, Country, PostalCode, Company FROM Lead WHERE Id =: recordId LIMIT 1];
          
          List<Account> initialSearch = new List<Account>();

          if(acc.PostalCode != null && acc.PostalCode != ''){
              initialSearch = [SELECT Id, Name, ETM2_Street_Address__c , BillingCountry, ETM2_Zip_Code__c  FROM Account WHERE ETM2_Zip_Code__c =: acc.PostalCode AND Id !=: recordId];    
          }

          Map<String, Account> initialSearchMap = new Map<String, Account>();

          for(Account postcodeAcc : initialSearch){
            initialSearchMap.put(postcodeAcc.Id, postcodeAcc);
          }
          
          //SOSL
          List<list<SObject>> accountSearchList = new List<List<SObject>>();
          if(acc.Company != null){
            accountSearchList = [FIND:acc.Company IN ALL FIELDS RETURNING Account(Name, ETM2_Street_Address__c, BillingCity, ETM2_Zip_Code__c)];
            System.debug('SOSL result: ' + accountSearchList[0]);
          }
          
          Map<String, Double> accountIds = new Map<String, Double>();
          Map<String, List<String>> matchingReasons = new Map<String, List<String>>();

          if(accountSearchList.size()>0){
            for(SObject soslRes : accountSearchList[0]){
              if(!initialSearchMap.containsKey(soslRes.Id)){
                initialSearch.add((Account)soslRes);
                //contactMap.put(soslRes.Id, (Contact)soslRes);
              }
            }
          }

          System.debug(initialSearch);
          Integer arraySize = initialSearch.size();
          
          if(arraySize>0){
              for(Integer i=0;i<arraySize;i++){
                  String accName = acc.Company;
                  String compareName = initialSearch[i].Name;
                  Integer dist = -1;
                  if(accName != null){
                       dist = accName.getLevenshteinDistance(compareName, 4);
                  }
                  
                  Double matchConfidence = 0;
                  List<String> matchReasons = new List<String>();
                      
                  if(dist != -1){
                      System.debug('Found good match!' + initialSearch[i]);

                      if(accountIds.containsKey(initialSearch[i].Id)){
                        matchConfidence = accountIds.get(initialSearch[i].Id) + 40;
                        matchReasons = matchingReasons.get(initialSearch[i].Id);
                      }
                      else{
                        matchConfidence = 40;
                      }
                      accountIds.put(initialSearch[i].Id, matchConfidence);
                      matchReasons.add('Company name');
                      matchingReasons.put(initialSearch[i].Id, matchReasons);
                  }

                  String accStreet = acc.Street;
                  String compareStreet = initialSearch[i].ETM2_Street_Address__c;
                  Integer streetDist = -1;
                  if(accStreet != null){
                    streetDist = accStreet.getLevenshteinDistance(compareStreet, 4);
                  }

                  if(streetDist != -1){
                    System.debug('Found street match!' + initialSearch[i]);

                    if(accountIds.containsKey(initialSearch[i].Id)){
                      matchConfidence = accountIds.get(initialSearch[i].Id) + 20;
                      matchReasons = matchingReasons.get(initialSearch[i].Id);
                    }
                    else{
                      matchConfidence = 20;
                    }
                    accountIds.put(initialSearch[i].Id, matchConfidence);
                    matchReasons.add('Street name');
                    matchingReasons.put(initialSearch[i].Id, matchReasons);

                }


                  //Postal code matching

                  String accPostalcode = acc.PostalCode;
                  String comparePostalCode = initialSearch[i].ETM2_Zip_Code__c;
                  Integer zipDist = -1;

                  if(accPostalcode != null){
                    zipDist = accPostalcode.getLevenshteinDistance(comparePostalCode, 2);
                  }

                  if(zipDist != -1){
                    if(accountIds.containsKey(initialSearch[i].Id)){
                        matchConfidence = accountIds.get(initialSearch[i].Id) + 20;
                        matchReasons = matchingReasons.get(initialSearch[i].Id);
                      }
                      else{
                        matchConfidence = 20;
                      }
                      accountIds.put(initialSearch[i].Id, matchConfidence);
                      matchReasons.add('Postal code');
                      matchingReasons.put(initialSearch[i].Id, matchReasons);
                  }    
                    
                  
              }

              result = [SELECT Id, Name, ETM2_Street_Address__c, ETM2_Zip_Code__c, BillingCity, BillingCountry, Country__c FROM Account WHERE Id IN: accountIds.keySet()];
          
              for(Account a : result){
                
                leadMatchResult lrm = new leadMatchResult();
                lrm.matchRecord = a;
                lrm.matchConfidence = accountIds.get(a.Id);
                lrm.matchReasons = matchingReasons.get(a.Id);
                results.add(lrm);
    
              }
          
        }    
          
          return results;
          
      }
      
    	/*------------------------------------------------------------	
	 	Author: Richard Trum (Glimt) 2019-11-28 	
	 	Description: find Contacts that matchs the current lead record	
	 	Inputs: Id of the lead to look for similar data in Contacts  
	 	------------------------------------------------------------*/
    	  public static List<leadMatchResult> customContactDuplicateSearch(String recordId){
          List<Account> result = new List<Account>();
          
          //Contact con = [SELECT Id, FirstName, LastName, Full_Name__c, Email, Phone, Account.BillingPostalCode, Account.BillingCountry FROM Contact WHERE Id =: recordId LIMIT 1];
          Lead con = [SELECT Id, Name, FirstName, LastName, Email, Phone, Street, City, Country, PostalCode FROM Lead WHERE Id =: recordId LIMIT 1];
               
          //result.add(con);
          
          List<Contact> initialSearch = new List<Contact>();

          if(con.PostalCode != null && con.Email != null){
                initialSearch = [SELECT Id, FirstName, LastName, Full_Name__c, Email, Phone, AccountId FROM Contact WHERE (Account.BillingPostalCode =: con.PostalCode OR Email =: con.Email OR (FirstName LIKE: '%' + con.FirstName + '%') OR (LastName LIKE: '%' + con.LastName + '%')) AND Id !=: recordId]; //Account.BillingPostalCode =: con.PostalCode AND Account.BillingCity =: con.City
          }
          else if(con.PostalCode == null && con.Email != null){
                initialSearch = [SELECT Id, FirstName, LastName, Full_Name__c, Email, Phone, AccountId FROM Contact WHERE (Email =: con.Email OR (FirstName LIKE: '%' + con.FirstName + '%') OR (LastName LIKE: '%' + con.LastName + '%')) AND Id !=: recordId]; //Account.BillingPostalCode =: con.PostalCode AND Account.BillingCity =: con.City
          }
          else if(con.PostalCode != null && con.Email == null){
                initialSearch = [SELECT Id, FirstName, LastName, Full_Name__c, Email, Phone, AccountId FROM Contact WHERE (Account.BillingPostalCode =: con.PostalCode OR (FirstName LIKE: '%' + con.FirstName + '%') OR (LastName LIKE: '%' + con.LastName + '%')) AND Id !=: recordId];
          }
          else{
                initialSearch = [SELECT Id, FirstName, LastName, Full_Name__c, Email, Phone, AccountId FROM Contact WHERE ((FirstName LIKE: '%' + con.FirstName + '%') OR (LastName LIKE: '%' + con.LastName + '%')) AND Id !=: recordId];
          }

          List<AccountContactRelation> relations = [SELECT Id, ContactId, AccountId, Contact.FirstName, Contact.LastName, Contact.Full_Name__c, Contact.Email, Contact.Phone FROM AccountContactRelation WHERE Account.BillingPostalCode =: con.PostalCode AND IsDirect = false AND IsActive = true AND ContactId !=: recordId];

          System.debug('Indirect relationships: ' + relations);

          Set<String> acrContactIds = new Set<String>();
          Map<String, String> acrMap = new Map<String, String>();
          for(AccountContactRelation acr : relations){
              acrContactIds.add(acr.ContactId);
              acrMap.put(acr.ContactId, acr.AccountId);
          }

          List<Contact> acrContacts = [SELECT Id, FirstName, LastName, Full_Name__c, Email, Phone, AccountId FROM Contact WHERE Id IN: acrContactIds];

          //SOSL name search
          List<list<SObject>> contactSearchList = new List<List<SObject>>();
          String searchString = con.Name + ' OR ' + con.Email;
          contactSearchList = [FIND:con.Name IN ALL FIELDS RETURNING Contact(FirstName, LastName, Full_Name__c, Email, Phone, AccountId)];
          System.debug('SOSL result: ' + contactSearchList[0]);


          Map<Id, Contact> contactMap = new Map<Id, Contact>();

          for(Contact c : initialSearch){
            contactMap.put(c.Id, c);
          }

          for(SObject soslRes : contactSearchList[0]){
            if(!contactMap.containsKey(soslRes.Id)){
              initialSearch.add((Contact)soslRes);
              contactMap.put(soslRes.Id, (Contact)soslRes);
            }
          }

          for(Contact cAcr : acrContacts){
            if(!contactMap.containsKey(cAcr.Id)){
              initialSearch.add(cAcr);
            }  
          }

          Integer arraySize = initialSearch.size();
          Map<String, Double> accountIds = new Map<String, Double>();
          Map<String, List<String>> matchingReasons = new Map<String, List<String>>();
          
          for(Integer i=0;i<arraySize;i++){
              System.debug(initialSearch[i]);
              String conName = con.Name;
              String compareName = initialSearch[i].Full_Name__c;
              Integer dist = -1;
              if(conName != null){
                dist = conName.getLevenshteinDistance(compareName, 4);
              }
              System.debug(initialSearch[i].Email + ' - ' + con.Email);
              
              Double matchConfidence = 0;
              List<String> matchReasons = new List<String>();
              
              if(con.Email == initialSearch[i].Email){ //con.Email != null && 
                System.debug('Found email match!' + initialSearch[i]);
                  
                  if(accountIds.containsKey(initialSearch[i].AccountId)){
                    matchConfidence = accountIds.get(initialSearch[i].AccountId) + 80;
                    matchReasons = matchingReasons.get(initialSearch[i].AccountId);
                  }
                  else{
                   matchConfidence = 80;
                  }
                  
                  accountIds.put(initialSearch[i].AccountId, matchConfidence);
                  matchReasons.add('Email');
                  matchingReasons.put(initialSearch[i].AccountId, matchReasons);
                  
                  //Handle indirect relationships
                  if(acrMap.containsKey(initialSearch[i].Id)){
                    String acrAccId = acrMap.get(initialSearch[i].Id);
                    matchConfidence = 0;
                    matchReasons.clear();
                    if(accountIds.containsKey(acrAccId)){

                      matchConfidence = accountIds.get(acrAccId) + 80;
                      matchReasons = matchingReasons.get(acrAccId);
                    }
                    else{
                      matchConfidence = 80;
                    }
                      
                    accountIds.put(acrAccId, matchConfidence);
                    matchReasons.add('Email');
                    matchingReasons.put(acrAccId, matchReasons);
                  }
                  
              }
              System.debug('Distance: ' + dist);
              if(dist != -1){
                  System.debug('Found name match!' + initialSearch[i]);

                  System.debug(accountIds);
                  System.debug(initialSearch[0].Id);

                  matchConfidence = 0;
                  matchReasons.clear();
                  
                  if(accountIds.containsKey(initialSearch[i].AccountId)){
                    matchConfidence = accountIds.get(initialSearch[i].AccountId) + 40;
                    matchReasons = matchingReasons.get(initialSearch[i].AccountId);
                  }
                  else{
                    matchConfidence = 40;
                  }
                  
                  accountIds.put(initialSearch[i].AccountId, matchConfidence);
                  matchReasons.add('Contact name');
                  matchingReasons.put(initialSearch[i].AccountId, matchReasons);
              }
  
          }

          //Check through indirectly related contacts
          for(AccountContactRelation rel : relations){
            String conName = con.Name;
            String compareIndName = rel.Contact.Full_Name__c;
            Integer dist = -1;
            if(conName != null){
              dist = conName.getLevenshteinDistance(compareIndName, 2);
            }

            System.debug('Distance: ' + dist);
              
            Double matchConfidence = 0;
            List<String> matchReasons = new List<String>();

            if(dist != -1){
                System.debug('Found indirect name match!' + rel);

                System.debug(accountIds);
                System.debug(rel.ContactId);

                if(accountIds.containsKey(rel.AccountId)){
                  matchConfidence = accountIds.get(rel.AccountId) + 40;
                  matchReasons = matchingReasons.get(rel.AccountId);
                }
                else{
                  matchConfidence = 40;
                }
                
                accountIds.put(rel.AccountId, matchConfidence);
                matchReasons.add('Contact name');
                matchingReasons.put(rel.AccountId, matchReasons);
            }

          }

          result = [SELECT Id, Name, BillingStreet, BillingPostalCode, BillingCity, BillingCountry, Country__c FROM Account WHERE Id IN: accountIds.keySet()];
          

          List<leadMatchResult> results = new List<LeadMatchResult>();
          
          for(Account a : result){
            
            leadMatchResult lrm = new leadMatchResult();
            lrm.matchRecord = a;
            lrm.matchConfidence = accountIds.get(a.Id);
            lrm.matchReasons = matchingReasons.get(a.Id);
            results.add(lrm);

          }

          return results;
          
      }
		
     /*------------------------------------------------------------	
	 Author: Richard Trum (Glimt) 2019-11-28 	
	 Description: find related contacts that matchs the current lead record	
	 Inputs: Id of the lead to look for similar data in related contacts and account Id to search for related contacts   
	 ------------------------------------------------------------*/
      @AuraEnabled(cacheable=false)
      public static List<leadMatchResult> getRelatedContacts(String leadId, String accountId){


        Lead lead = [SELECT Id, Name, FirstName, LastName, PostalCode, Country, Email FROM Lead WHERE Id =: leadId];
        List<Contact> contacts = new List<Contact>();
        contacts = [SELECT Id, FirstName, LastName, Email, Full_Name__c FROM Contact WHERE AccountId =: accountId];


        List<AccountContactRelation> acrList = [SELECT Id, ContactId, AccountId, Contact.FirstName, Contact.LastName, Contact.Full_Name__c, Contact.Email, Contact.Phone FROM AccountContactRelation WHERE AccountId =: accountId AND IsDirect = false AND IsActive = true];

        Set<String> acrContactIds = new Set<String>();

        for(AccountContactRelation acr : acrList){
            acrContactIds.add(acr.ContactId);
        }

        List<Contact> acrContacts = [SELECT Id, FirstName, LastName, Full_Name__c, Email, Phone FROM Contact WHERE Id IN: acrContactIds];
        
        Map<String, Contact> acrContactMap = new Map<String, Contact>();

        for(Contact acrC : acrContacts){
          acrContactMap.put(acrC.Id, acrC);
        }

        List<leadMatchResult> output = new List<leadMatchResult>();
        
        for(Contact c: contacts){

            String leadName = lead.Name;
            String compareName = c.Full_Name__c;
            Integer dist = -1;

            dist = leadName.getLevenshteinDistance(compareName, 2);
            
      		leadMatchResult lrm = new leadMatchResult();
			List<String> reasons = new List<String>();
            
            if(lead.Email != null && lead.Email == c.Email){
                
                lrm.matchRecord = c;
                lrm.matchConfidence = 80;
                reasons.add('Email');
                lrm.matchReasons = reasons;

                if(dist != -1){

                  lrm.matchConfidence = lrm.matchConfidence + 40;
                  reasons.add('Name');
                  lrm.matchReasons = reasons;
  
                }
                
                output.add(lrm);

            }
            else if(dist != -1){

                lrm.matchRecord = c;
                lrm.matchConfidence = 40;
                reasons.add('Name');
                lrm.matchReasons = reasons;

                output.add(lrm);

            }
            else{
                lrm.matchRecord = c;
                lrm.matchConfidence = 0;

                output.add(lrm);

            }


        }

        for(AccountContactRelation acr: acrList){

          String leadName = lead.Name;
          String compareName = acr.Contact.Full_Name__c;
          Integer dist = -1;

          dist = leadName.getLevenshteinDistance(compareName, 2);

          if(lead.Email != null && lead.Email == acr.Contact.Email){
              
              leadMatchResult lrm = new leadMatchResult();
              lrm.matchRecord = acrContactMap.get(acr.ContactId);
              lrm.matchConfidence = 60;
              List<String> reasons = new List<String>();
              reasons.add('Email');
              lrm.matchReasons = reasons;

              output.add(lrm);

          }
          else if(dist != -1){

              leadMatchResult lrm = new leadMatchResult();
              lrm.matchRecord = acrContactMap.get(acr.ContactId);
              lrm.matchConfidence = 20;

              List<String> reasons = new List<String>();
              reasons.add('Name');
              lrm.matchReasons = reasons;

              output.add(lrm);

          }
          else{
              leadMatchResult lrm = new leadMatchResult();
              lrm.matchRecord = acrContactMap.get(acr.ContactId);
              lrm.matchConfidence = 0;

              output.add(lrm);

          }


        }

        System.debug('Before sorting: ' + output);

        output.sort();

        System.debug('After sorting: ' + output);

        for(leadMatchResult outP : output){

          outP.matchConfidence = (outp.matchConfidence *100)/120;

          if(outP.matchConfidence > 69){
            outp.matchScore = 'High';
          }
          else if(outP.matchConfidence < 30){
            outp.matchScore = 'Low';
          }
          else{
            outp.matchScore = 'Medium';
          }

        }

        return output;

      }
  
      
      public class leadMatchResult implements Comparable{
          
          @AuraEnabled 
          public SObject matchRecord;
          
          @AuraEnabled
          public List<String> fieldDiffs;
          
          @AuraEnabled
          public Double matchConfidence;

          @AuraEnabled
          public string matchScore;

          @AuraEnabled
          public List<String> matchReasons;

            public Integer compareTo(Object compareTo) {

              leadMatchResult compareToLead = (leadMatchResult)compareTo;

              Integer returnValue = 0;
              if (matchConfidence < compareToLead.matchConfidence) {
                  returnValue = 1;
              } else if (matchConfidence > compareToLead.matchConfidence) {
                  returnValue = -1;
              }
              System.debug(returnValue);
              return returnValue;       
          }
          
      }
      
  }