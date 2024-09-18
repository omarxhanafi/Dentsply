/*-------------------------------------------------------------------------------------------------------
Author:         Kevin Do (Salesforce) 20190924
Description:    Account Trigger Helper Class
Test Class:     Test_AccountTrigger
History
20200914    Kevin Do            Hotfix: Replaced 'UK' country value with 'GB' 
20190924    Kevin Do            Migrated DC_AccountTrigger and AccountSetPayerLookup triggers. (#TFUS1030)
20190930    Ahmed LOUDRASSI     create overridePotential and dentalProspectMovex. (#TFUS-000001032)
20200128    Chris Payne         Fixes missing record type mapping for account ownership for AT accounts. (#TFUS-000001490)
20200326    Kevin Do            Added setAccountSubSegmentation method (#TFUS-000001698)
20200817    Richard Trum        Added method updateRelatedContactAddresses (#TFUS-000002084)
20210405    Nisreen Al-Saleh     Added method createEntitlement (#TFUS-000001231)
20220905    Tobias Nygren        Removed default Owner Logic: TFUS-000004729
20220906	Nisreen AlSaleh		Update createEntitlement (TFUS-000004769)
20221013	Nisreen/Nihad		Update createEntitlement (TFUS-000004844)
20230224    roberto narbona     Cleanup story (TFUS-000003722)
20240729    Miguel Coimbra      Clean up V2
----------------------------------------------------------------------------------------*/

public with sharing class AccountTriggerHelper {

    public  static Boolean      forceUpdate         = false;
    private static final String SOBJECT_NAME        = 'Account';
    private static final String NO_USAGE_STRING     = 'No Usage';
    private static final String HIGH_USAGE_STRING   = 'High Usage';
    private static final String MEDIUM_USAGE_STRING = 'Medium Usage';

 
    private static final Map<String, Id> RECORD_TYPES_NAME_IDS = GlobalUtils.getRecordTypeMapNameIds(SOBJECT_NAME);
    private static final Id CIM_RECORDTYPE_ID = RECORD_TYPES_NAME_IDS.get('CIM_Account');

    /**
     * All of these methods:
     * - setPostalCodeInfoAndEtmCode
     * - updateRecordsType
     * - updateAccountsInfo
     *
     * @param newAccountList -
     * @param oldAccountList -
     * @param newAccountMap -
     * @param oldAccountMap -
     */
    public static void beforeTriggerLoopOnAccounts(  List<Account>       newAccountList,     List<Account>       oldAccountList,
                                                    Map<Id, Account>    newAccountMap,      Map<Id, Account>    oldAccountMap)
    {
        Set<String>     eTm2ZipCodecSet         = new Set<String>();
        List<Account>   accountEtm2ZipCodeList  = new List<Account>();

        // A-Filtering + processes inside loop:
        for (Account newAccount : newAccountList)
        {
            if(newAccount.ChildAccountsCount__c == null) newAccount.ChildAccountsCount__c = 0; // To clean old data having ChildAccountsCount__c null
            // Filtering accounts for setPostalCodeInfoAndEtmCode
            if (!String.isEmpty(newAccount.ETM2_Zip_Code__c))
            {
                if (oldAccountMap == null) {
                    accountEtm2ZipCodeList.add(newAccount);
                    eTm2ZipCodecSet.add(newAccount.ETM2_Zip_Code__c);
                } else if (newAccount.ETM2_Zip_Code__c != oldAccountMap.get(newAccount.Id).ETM2_Zip_Code__c) {
                    accountEtm2ZipCodeList.add(newAccount);
                    eTm2ZipCodecSet.add(newAccount.ETM2_Zip_Code__c);
                }
            }
        }

        // B-Processes outside loop after filtering:
            // setPostalCodeInfoAndEtmCode
        if (!accountEtm2ZipCodeList.isEmpty()) {
            updateFieldsByETM2ZipCode(accountEtm2ZipCodeList, eTm2ZipCodecSet);
        }
    }

    /**
     * Updates parent accounts based on the changes in child accounts.
     * @author hadib@salesforce.com | 01-03-2024
     *
     * @param newAccountList - List of new or updated accounts.
     * @param oldAccountMap - Map of old accounts.
     * @param counter - The counter to be added or subtracted based on the changes.
     */
    public static void updateParentAccounts(List<Account> newAccountList, Map<Id, Account> oldAccountMap, Decimal counter) {
        // Set to store unique parent IDs
        Set<Id> parentsIds = new Set<Id>();

        // Map to store accounts that have parents
        Map<Id, Account> hasParent = new Map<Id, Account>();

        // Map to store the differences in counters for each account
        Map<Id, Decimal> accountCountDifferences = getAccountCountDifferences(newAccountList, hasParent, parentsIds, counter, oldAccountMap);

        // Query for parent accounts
        Map<Id, Account> parents = getParents(parentsIds);

        // Increment or Decrement Parents Counter
        List<Account> parentsToUpdate = applyCounterToParents(hasParent, parents, accountCountDifferences);

        // Update Parents Counter
        updateParents(parentsToUpdate);
    }

    /**
     * Updates parent accounts' counters.
     * @author hadib@salesforce.com | 01-03-2024
     *
     * @param parentsToUpdate - List of parent accounts to be updated.
     */
    public static void updateParents(List<Account> parentsToUpdate) {
        try {
            update parentsToUpdate;
        } catch (Exception e) {
            DebugLog.addException(e, 'Error In updating Parent Accounts Counter');
        }
    }

    /**
     * Increments or decrements the counters for parent accounts.
     * @author hadib@salesforce.com | 01-03-2024
     *
     * @param hasParent - Map of account IDs to child accounts.
     * @param parents - Map of parent account IDs to parent accounts.
     * @param accountCountDifferences - Map of account IDs to count differences.
     * @return List of parent accounts to be updated.
     */
    public static List<Account> applyCounterToParents(Map<Id, Account> hasParent, Map<Id, Account> parents, Map<Id, Decimal> accountCountDifferences)
    {
        List<Account> parentsToUpdate = new List<Account>();
        for (Account newAccount : hasParent.values())
        {
            Account parent = parents.get(newAccount.ParentId);
            if (parent != null && accountCountDifferences?.get(newAccount.Id) != null){
                if(parent.ChildAccountsCount__c == null) parent.ChildAccountsCount__c = 0;
                parent.ChildAccountsCount__c += accountCountDifferences?.get(newAccount.Id);
                parentsToUpdate.add(parent);
            }
        }
        return parentsToUpdate;
    }

    /**
     * Queries parent accounts based on the provided parent IDs.
     * @author hadib@salesforce.com | 01-03-2024
     *
     * @param parentsIds - Set of parent account IDs.
     * @return Map of parent account IDs to parent accounts.
     */
    public static Map<Id, Account> getParents(Set<Id> parentsIds) {
        Map<Id, Account> parents = new Map<Id, Account>([SELECT Name, ChildAccountsCount__c, ParentId FROM Account WHERE Id IN :parentsIds]);
        return parents;
    }

    /**
     * Calculates the count differences for child accounts.
     * @author hadib@salesforce.com | 01-03-2024
     *
     * @param newAccountList - List of new or updated accounts.
     * @param hasParent - Map of account IDs to child accounts.
     * @param parentsIds - Set of parent account IDs.
     * @param counter - The counter to be added or subtracted based on the changes.
     * @param oldAccountMap - Map of old accounts.
     * @return Map of account IDs to count differences.
     */
    public static Map<Id, Decimal> getAccountCountDifferences(List<Account> newAccountList, Map<Id, Account> hasParent, Set<Id> parentsIds, Decimal counter, Map<Id, Account> oldAccountMap) {
        Map<Id, Decimal> accountCountDifferences = new Map<Id, Decimal>();
        Decimal oldCounter;
        if (newAccountList != null) // A- After Insert, After Update, After Undelete
        {

            for (Account newAccount : newAccountList) {
                if (newAccount.ParentId != null) {
                    hasParent.put(newAccount.Id, newAccount);
                    parentsIds.add(newAccount.ParentId);

                    // In the update context, the counter has been modified
                    if (counter == null) {
                        if (oldAccountMap != null)
                        {
                            oldCounter = oldAccountMap.get(newAccount.Id)?.ChildAccountsCount__c;
                            if(oldCounter == null) oldCounter = 0; // To process old data having null value in ChildAccountsCount__c

                            if( oldCounter != newAccount.ChildAccountsCount__c) // In the update context, the field has changed value.
                            {
                                counter = newAccount.ChildAccountsCount__c - oldCounter;
                            }
                        }
                    }

                    accountCountDifferences.put(newAccount.Id, counter); // Counter can be '+1' (insert,undelete) or the 'difference' (update)
                }
            }
        } else if (oldAccountMap != null) // B- Delete Context
        {
            for (Account deletedAccount : oldAccountMap.values()) {
                if (deletedAccount.ParentId != null) {
                    hasParent.put(deletedAccount.Id, deletedAccount);
                    parentsIds.add(deletedAccount.ParentId);
                    accountCountDifferences.put(deletedAccount.Id, counter); // Counter always equal to '-1'
                }
            }
        }
        return accountCountDifferences;
    }


    /*------------------------------------------------------------
    Description:    Helper method migrated from DC_AccountTrigger
                    Updates Postal_Code_Info__c and DC_ETM_Code__c fields
    Inputs:         @param accountList List of Account where ETM2ZipCode not null or was changed
                    @param eTM2ZipCodecSet Set of related ETM2ZipCodes from Account List
    ------------------------------------------------------------*/
    private static void updateFieldsByETM2ZipCode(List<Account> accountList, Set<String> eTM2ZipCodecSet) {
        List<Postal_Codes__c> postalCodesList = [
                SELECT Id, Name, DC_ETM_Code__c, Country_Picklist__c
                FROM Postal_Codes__c
                WHERE Name IN :eTM2ZipCodecSet];
        Map<String, Postal_Codes__c> namesPostalCodesMap = new Map<String, Postal_Codes__c>();

        for (Postal_Codes__c postalCodes : postalCodesList) {
            namesPostalCodesMap.put(postalCodes.Name+postalCodes.Country_Picklist__c, postalCodes);
        }

        for (Account account : accountList) {
            Postal_Codes__c postalCode = namesPostalCodesMap.get(account.ETM2_Zip_Code__c+account.Country__c);
            if (postalCode != null) {
                account.Postal_Code_Info__c = postalCode.Id;
                account.DC_ETM_Code__c = postalCode.DC_ETM_Code__c;
            }
        }
    }

    /*------------------------------------------------------------
    Description:    Method used for Account Sub Segmentation categorization in before insert and before update
                    Queries AccountSubSegmentationMatrix__mdt to determine logic
    Inputs:         @param newAccountList @param oldAccountMap
    ------------------------------------------------------------*/
    public static void setAccountSubSegmentation(List<Account> newAccountList, Map<Id, Account> oldAccountMap) {
        Set<String> countrySet = new Set<String>();
        countrySet = setCountrySet( newAccountList,  oldAccountMap);


        // Use the account countrySet to filter accsubseg mdt
        List<AccountSubSegmentationMatrix__mdt> accSubSegList = new List<AccountSubSegmentationMatrix__mdt>([
            SELECT Country__c, ControllingField__c, TargetField__c, MediumThresholdMax__c, MediumThresholdMin__c, LowThresholdMIN__c
            FROM AccountSubSegmentationMatrix__mdt
            WHERE Country__c IN :countrySet
        ]);
        // Escape if no AccountSubSegmentationMatrix__mdt exists for the accounts
        if (accSubSegList.isEmpty()) return;
        // Put accsubseg mdt records in a map containing lists of mdt with country as key
        Map<String, List<AccountSubSegmentationMatrix__mdt>> countryAccSubSegMap = new Map<String, List<AccountSubSegmentationMatrix__mdt>>();
        for (AccountSubSegmentationMatrix__mdt accSubSegRecord : accSubSegList) {
            if (countryAccSubSegMap.containsKey(accSubSegRecord.Country__c)) {
                countryAccSubSegMap.get(accSubSegRecord.Country__c).add(accSubSegRecord);
            } else {
                countryAccSubSegMap.put(accSubSegRecord.Country__c, new List<AccountSubSegmentationMatrix__mdt>{accSubSegRecord});
            }
        }
        // Main logic
        for (Account accountRecord : newAccountList) {
            // Scrub old target fields if this is an update and Account.Country__c has changed
            if (oldAccountMap != null) {
                String oldAccountCountry = !String.isBlank(oldAccountMap.get(accountRecord.Id).Country__c) ? oldAccountMap.get(accountRecord.Id).Country__c : 'null';
                if (!oldAccountCountry.equals(accountRecord.Country__c) && null != countryAccSubSegMap.get(oldAccountCountry)) {
                    for (AccountSubSegmentationMatrix__mdt accSubSegRecord : countryAccSubSegMap.get(oldAccountCountry)) {
                        try {
                            accountRecord.put(accSubSegRecord.TargetField__c, null);
                        } catch (Exception e) {
                            DebugLog.addException(e, 'AccountTriggerHelper.setAccountSubSegmentation');
                        }
                    }
                }
            }
            // Do the main logic to set the target fields only if we have mdt for the Account.Country__c
            if (null == countryAccSubSegMap.get(accountRecord.Country__c)) continue;

            getAndSetTargetFields( accountRecord, oldAccountMap, countryAccSubSegMap);

        }
    }

    public static Set<String> setCountrySet(List<Account> newAccountList, Map<Id, Account> oldAccountMap){
        Set<String> countrySet = new Set<String>();
        // Loop through accounts and add their countries to a set
        for (Account accountRecord : newAccountList) {
            if (!String.isBlank(accountRecord.Country__c)) {
                countrySet.add(accountRecord.Country__c);
            } 
            if (null != oldAccountMap && !String.isBlank(oldAccountMap.get(accountRecord.Id).Country__c)) {
                countrySet.add(oldAccountMap.get(accountRecord.Id).Country__c);
            } 
        }
        return countrySet;
    }

    public static void getAndSetTargetFields(Account accountRecord, Map<Id, Account> oldAccountMap, Map<String, List<AccountSubSegmentationMatrix__mdt>> countryAccSubSegMap){
        for (AccountSubSegmentationMatrix__mdt accSubSegRecord : countryAccSubSegMap.get(accountRecord.Country__c)) {
            Integer newAccControllingField = Integer.valueOf(accountRecord.get(accSubSegRecord.ControllingField__c));
            // Escape block
            if (null == oldAccountMap && null == newAccControllingField) {
                continue;
            } else if (null != oldAccountMap && false == forceUpdate) {
                Integer oldAccControllingField = Integer.valueOf(oldAccountMap.get(accountRecord.Id).get(accSubSegRecord.ControllingField__c));
                String oldAccCountry = oldAccountMap.get(accountRecord.Id).Country__c;
                if (newAccControllingField == oldAccControllingField && accountRecord.Country__c.equals(oldAccCountry)) continue;
            }
            setTargetFields( accountRecord, accSubSegRecord , newAccControllingField);
        }
    }

    public static void setTargetFields(Account accountRecord, AccountSubSegmentationMatrix__mdt accSubSegRecord , Integer newAccControllingField){
        // Main logic
        try {
            if (null == newAccControllingField) {
                accountRecord.put(accSubSegRecord.TargetField__c, null);
            } else if (newAccControllingField < accSubSegRecord.LowThresholdMIN__c) {
                accountRecord.put(accSubSegRecord.TargetField__c, 'N/A');
            } else if (newAccControllingField > accSubSegRecord.MediumThresholdMAX__c) {
                accountRecord.put(accSubSegRecord.TargetField__c, 'High');
            } else if (newAccControllingField < accSubSegRecord.MediumThresholdMIN__c) {
                accountRecord.put(accSubSegRecord.TargetField__c, 'Low');
            } else {
                accountRecord.put(accSubSegRecord.TargetField__c, 'Medium');
            }
        } catch (Exception e) {
            DebugLog.addException(e, 'AccountTriggerHelper.setAccountSubSegmentation');
        }
    }
    
    
    /*------------------------------------------------------------ 
    Description:    Method to update Turkish contacts that are having MailingAddress = 
    Account.BillingAddress with the new BillingAddress from the related account  
    Inputs:         @param newAccount List
                    @param oldAccountMap Map
                    @param newAccountMap Map
    ------------------------------------------------------------*/
    public static void updateRelatedContactAddresses(List<Account> newAccountList, Map<Id, Account> oldAccountMap, Map<Id, Account> newAccountMap) {
        Map<Id, String> changedAccounts = new Map<Id, String>();
        changedAccounts = getChangedAddress(newAccountList , oldAccountMap);
        
    
        //Find all contacts related to the previously found accounts
        List<Contact> contacts= [SELECT Id, Name, MailingCity, MailingStreet, MailingPostalCode, MailingCountry, MailingState, AccountId FROM Contact WHERE Account.Id IN: changedAccounts.keySet()];

        List<Contact> contactsToUpdate = new List<Contact>();

        for(Contact contact : contacts){
            if(
                //Only add contacts that had the exact same address as the account
                contact.MailingStreet == oldAccountMap.get(contact.AccountId).BillingStreet && 
                contact.MailingCity == oldAccountMap.get(contact.AccountId).BillingCity &&
                contact.MailingPostalCode == oldAccountMap.get(contact.AccountId).BillingPostalCode &&
                contact.MailingCountry == oldAccountMap.get(contact.AccountId).BillingCountry &&
                contact.MailingState == oldAccountMap.get(contact.AccountId).BillingState
            ){
                contact.MailingStreet = newAccountMap.get(contact.AccountId).BillingStreet;
                contact.MailingCity = newAccountMap.get(contact.AccountId).BillingCity;
                contact.MailingPostalCode = newAccountMap.get(contact.AccountId).BillingPostalCode;
                contact.MailingCountry = newAccountMap.get(contact.AccountId).BillingCountry;
                contact.MailingState = newAccountMap.get(contact.AccountId).BillingState;
                contactsToUpdate.add(contact);
            }
        }
        
        if(!contactsToUpdate.IsEmpty()){
            try{
                update contactsToUpdate;     
            }
            catch(DmlException e){
                DebugLog.addException(e, 'AccountTriggerHelper.updateRelatedContactAddresses');
            }
        }
        
    }

    public static Map<Id, String> getChangedAddress(List<Account> newAccountList, Map<Id, Account> oldAccountMap){
        Map<Id, String> changedAccounts = new Map<Id, String>();
            
        for(Account account : newAccountList) {
                
                //Find all Turkish accounts where any part of the address has changed
                if(account.RecordTypeId == CIM_RECORDTYPE_ID && 'TR'.equals(account.Country__c) && 
                (account.BillingStreet != oldAccountMap.get(account.Id).BillingStreet ||
                account.BillingCity != oldAccountMap.get(account.Id).BillingCity ||
                account.BillingPostalCode != oldAccountMap.get(account.Id).BillingPostalCode ||
                account.BillingCountry != oldAccountMap.get(account.Id).BillingCountry ||
                account.BillingState != oldAccountMap.get(account.Id).BillingState)
                )
                {
                        changedAccounts.put(account.Id, account.Name);
                }
        }
        return changedAccounts;
    }

    /**
     * Calls the future method createEntitlementFuture to create Entitlements - TFUS-00006510
     * @author hadib@salesforce.com | 22/02/2024
     * @param newAccountList New Accounts
     */
    public static void createEntitlement(List<Account> newAccountList)
    {
        Set<Id> accountIds = new Set<Id>();
        for(Account newAccount : newAccountList)
        {
            accountIds.add(newAccount.Id);
        }
        AccountTriggerHelper.createEntitlementFuture(accountIds);
    }
    
    /*------------------------------------------------------------ 
    Description:    Method to create an entitlement for each newly created account. 
    It uses a custom metadata to find the correct entitlement id for each country
    Inputs:         @param newAccount List
    ---------------------------------------------------------
    ---*/
	public static void createEntitlementFuture(Set<Id> accountIds) {


        Account[] newAccs = [ SELECT Id, Name, Country__c FROM Account WHERE Id IN :accountIds];
        List <Entitlement> createEntitlement = new List <Entitlement> {};
        Map <Id,List<Entitlement>> mapOfAccountIdToEntitlement = new Map <Id,List<Entitlement>> ();
        Map <String,String> SLANameCountryMap = new Map <String,String> ();
        // countrySLAIdsMap will hold country name and a list of process ids related to that country
        Map <String,List<Id>> countrySLAIdsMap = new Map <String,List<Id>> ();
        Set <String> countriesSet = new Set <String> ();
        
        for (Account acc: newAccs) {
            countriesSet.add(acc.Country__c);
        }
        
        List <CountrySLA__mdt> customData = [SELECT Entitlement_Process__c, Country__c FROM CountrySLA__mdt WHERE Country__c IN: countriesSet];
        for (CountrySLA__mdt c: customData) {
                SLANameCountryMap.put(c.Entitlement_Process__c, c.Country__c);
        }
        
        List <SlaProcess> slaProcesses = [SELECT Name, Id, VersionNumber,SobjectType FROM SlaProcess WHERE Name IN: SLANameCountryMap.keySet() AND IsActive = TRUE];
        for (SlaProcess sProcess: slaProcesses) {
            // check if the map already contains the 
            String countryName = SLANameCountryMap.get(sProcess.name);
            if ((countryName != null) && (!countrySLAIdsMap.containsKey(countryName))) {
                countrySLAIdsMap.put(countryName, new List<Id>());
            }
            countrySLAIdsMap.get(countryName).add(sProcess.Id);
        }
        
        List <Entitlement> entitlement = [SELECT AccountId,SlaProcess.SobjectType,SlaProcessId FROM Entitlement WHERE AccountId IN: newAccs];
        if (!entitlement.isEmpty()){
        	for (Entitlement etitlementItem: entitlement) {
                if ((!mapOfAccountIdToEntitlement.containsKey(etitlementItem.AccountId))) {
                	mapOfAccountIdToEntitlement.put(etitlementItem.AccountId, new List<Entitlement>());
            	}
            	mapOfAccountIdToEntitlement.get(etitlementItem.AccountId).add(etitlementItem);
            }
        }
        // Check whether the account has an existing entitlement 
        for (Account acc: newAccs) {
            //check number of entitlement per each account 
            Integer numberOfEntitlmentPerAcc = mapOfAccountIdToEntitlement.containsKey(acc.Id) ? mapOfAccountIdToEntitlement.get(acc.Id).size() : 0;
            //create a new entitlement only for accounts having  0 entitlement
            if (( numberOfEntitlmentPerAcc == 0) && countrySLAIdsMap.containsKey(acc.Country__c)) { 
                //loop over the process related to the country to create entitlement for each process 
                for(Id salesprocessId : countrySLAIdsMap.get(acc.Country__c)){
                    //check if current process already exist for this account if yes skip the creation if no proceed 
                    if(mapOfAccountIdToEntitlement.containsKey(acc.Id)){
                        for(Entitlement accountEntitlement :mapOfAccountIdToEntitlement.get(acc.Id)){
                            if(accountEntitlement.SlaProcessId == salesprocessId ){
                                continue;
                            }
                    }
                    }
                    createEntitlement.add(new Entitlement( Name = acc.name, /* Give a standard name*/
                                                            AccountId = acc.Id, /* Link the Entitlement to the account */
                                                            SlaProcessId = salesprocessId, /* id of the slaprocess related to the current acc country */
                                                            StartDate = system.Today(),
                                                            EndDate = system.today() + 1095, /* Set EndDate after 3 years */
                                                            Type = 'Phone Support'));
                        
                     
                	}
                }
            
        }
        try {
            insert createEntitlement;
        } catch (DMLException e) {
            DebugLog.addException(e, 'Error on Create Entitlement');
        }
        
    }
}