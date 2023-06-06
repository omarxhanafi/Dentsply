/*-------------------------------------------------------------------------------------------------------
Author:         Kevin Do (Salesforce) 20190924
Description:    Account Trigger Helper Class
Test Class:     AccountSetPayerLookupTest, DC_UT_AccountTrigger 
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
----------------------------------------------------------------------------------------*/

public with sharing class AccountTriggerHelper {

    public static Boolean forceUpdate = false;
    private static final String SOBJECT_NAME = 'Account';
    private static final String TRUE_STRING = 'True';
    private static final String NO_USAGE_STRING = 'No Usage';
    private static final String HIGH_USAGE_STRING = 'High Usage';
    private static final String MEDIUM_USAGE_STRING = 'Medium Usage';
    
 
    private static final Map<String, Id> RECORD_TYPES_NAME_IDS = GlobalUtils.getRecordTypeMapNameIds(SOBJECT_NAME);
    private static final Id CLASSIC_ERP_RECORDTYPE_IDS = RECORD_TYPES_NAME_IDS.get('ERP_Account');
    private static final Id CLASSIC_ERP_LAB_RECORDTYPE_IDS = RECORD_TYPES_NAME_IDS.get('ERP_Lab_Account');
    private static final Id CLASSIC_ERP_DISTRIBUTOR_RECORDTYPE_IDS = RECORD_TYPES_NAME_IDS.get('ERP_Distributor');
    private static final Id CLASSIC_NON_ERP_RECORDTYPE_IDS = RECORD_TYPES_NAME_IDS.get('Non_ERP_Account');
    private static final Id CLASSIC_NON_ERP_LAB_RECORDTYPE_IDS = RECORD_TYPES_NAME_IDS.get('Non_ERP_Lab_Account');
    private static final Id CLASSIC_NON_ERP_DISTRIBUTOR_RECORDTYPE_IDS = RECORD_TYPES_NAME_IDS.get('Non_ERP_Distributor'); 
    private static final Id CLASSIC_PARTNER_RECORDTYPE_IDS = RECORD_TYPES_NAME_IDS.get('Partner_DI'); 
    private static final Id CLASSIC_GEOGRAPHICAL_RECORDTYPE_IDS = RECORD_TYPES_NAME_IDS.get('Geographical_Account');
    private static final Id CLASSIC_COMPETITOR_RECORDTYPE_IDS = RECORD_TYPES_NAME_IDS.get('Competitor');
    private static final Id CIM_RECORDTYPE_ID = RECORD_TYPES_NAME_IDS.get('CIM_Account');

                                                            
    /*------------------------------------------------------------  
    Description:    Method migrated from DC_AccountTrigger trigger
    Inputs:         @param newAccountList and @param oldAccountMap
    ------------------------------------------------------------*/
    
    public static void setPostalCodeInfoAndEtmCode(List<Account> newAccountList, Map<Id, Account> oldAccountMap) {
        Set<String> eTm2ZipCodecSet = new Set<String>();
        List<Account> accountEtm2ZipCodeList = new List<Account>();

        for (Account account : newAccountList) {
            if (!String.isEmpty(account.ETM2_Zip_Code__c)) {
                if (oldAccountMap == null) {
                    accountEtm2ZipCodeList.add(account);
                    eTm2ZipCodecSet.add(account.ETM2_Zip_Code__c);
                } else if (account.ETM2_Zip_Code__c != oldAccountMap.get(account.Id).ETM2_Zip_Code__c) {
                    accountEtm2ZipCodeList.add(account);
                    eTm2ZipCodecSet.add(account.ETM2_Zip_Code__c);
                }
            }
        }

        if (!accountEtm2ZipCodeList.isEmpty()) {
            updateFieldsByETM2ZipCode(accountEtm2ZipCodeList, eTm2ZipCodecSet);
        }
    }

    /*------------------------------------------------------------
    Description:    Method migrated from AccountSetPayerLookup trigger
    Inputs:         @param newAccountList and @param oldAccountMap
    ------------------------------------------------------------*/
    /*When poland goes to LEX this will go away in while "&& classicErpRecordTypeIds.contains(account.RecordTypeId)" condition has been added*/
    public static void setPayerLookup(List<Account> newAccountList, Map<Id, Account> oldAccountMap) {
        // Collect a list of all Payer_Movex__c values of the affected Accounts.
        List<Account> affectedAccountList = new List<Account>();
        Set<String> payerMovexNumberSet = new Set<String>();
        List<Id> classicErpRecordTypeIds = new List<Id>{CLASSIC_ERP_RECORDTYPE_IDS,
                                                        CLASSIC_ERP_LAB_RECORDTYPE_IDS,
                                                        CLASSIC_ERP_DISTRIBUTOR_RECORDTYPE_IDS};
        for (Account newAccount : newAccountList) {
            if (!String.isBlank(newAccount.Payer_Movex__c) && classicErpRecordTypeIds.contains(newAccount.RecordTypeId)) {
                if (oldAccountMap == null) {
                    affectedAccountList.add(newAccount);
                    payerMovexNumberSet.add(newAccount.Payer_Movex__c);
                } else if (newAccount.Payer_Movex__c != oldAccountMap.get(newAccount.Id).Payer_Movex__c) {
                    affectedAccountList.add(newAccount);
                    payerMovexNumberSet.add(newAccount.Payer_Movex__c);
                }
            }
        }

        // Short-circuit execution if no affected accounts were found.
        If (affectedAccountList.isEmpty()) {
            return;
        }

        Map<String, Id> accountMap = new Map<String, Id>();
        if (!payerMovexNumberSet.isEmpty()) {
            // Query the Id and Movex__c values for related payer Accounts.
            List<Account> accountList = [SELECT Id, Movex__c FROM Account WHERE Movex__c IN :payerMovexNumberSet];
            // Construct a map of Movex__c to Id.
            for (Account account : accountList) {
                accountMap.put(account.Movex__c, account.Id);
            }
        }
        relatePayerLookup(affectedAccountList, accountMap);

    }
    // Set the Id value of the related payer Account in the Payer_Lookup__c field of each affected Account.

    public static void relatePayerLookup(List<Account> affectedAccountList, Map<String, Id> accountMap) {
        for (Account account : affectedAccountList) {
            if (!String.isBlank(account.Payer_Movex__c) && accountMap.containsKey(account.Payer_Movex__c)) {
                Id payerLookupId = accountMap.get(account.Payer_Movex__c);

                // Don't create a circular lookup by setting the field to the Id value of the Account itself!
                if (account.Id != payerLookupId) {
                    account.Payer_Lookup__c = payerLookupId;
                    continue;
                }
            }
            account.Payer_Lookup__c = null;
        }
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
    Description:    Method migrated from  Workflows
                    WF-ACC-01 : 'Override ATL Abut Potential' (Created on 07/08/2014)
                    WF-ACC-02 : 'Override ATL ISUS Potential' (Created on 08/08/2014)
                    WF-ACC-03 : 'Override Simplant Potential' (Created on 09/05/2014)
                    WF-ACC-04 : 'Overwrite Implants Potential'(Created on 16/02/2015)
    Inputs:         @param newAccount
    ------------------------------------------------------------*/
    /*When poland goes to LEX this will go away in while new if
     statement added "classicErpRecordTypeIds.contains(account.RecordTypeId)" condition has been added*/
    public static void overridePotential(Account newAccount) {
        List<Id> classicErpRecordTypeIds = new List<Id>{CLASSIC_ERP_RECORDTYPE_IDS,
                                                        CLASSIC_ERP_LAB_RECORDTYPE_IDS,
                                                        CLASSIC_ERP_DISTRIBUTOR_RECORDTYPE_IDS};
        if(classicErpRecordTypeIds.contains(newAccount.RecordTypeId)){
            // In case the potential is less than the current sales
            if(TRUE_STRING.equals(newAccount.Override_ATL_Abut_Potential__c)) {
                newAccount.ATL_Abut_Potential_Year__c = newAccount.Sold_Atlantis_Abut_s_L12M__c;
            }
            // In case the potential is less than the current sales
            if(TRUE_STRING.equals(newAccount.Override_ATL_ISUS_Potential__c)) {
                newAccount.ATL_ISUS_Potential_Year__c = newAccount.Sold_ATL_ISUS_L12M__c;
            }
            // In case the potential is less than the current sales
            if(TRUE_STRING.equals(newAccount.Override_Simplant_Potential__c)) {
                newAccount.SP_Guides_Potential_Year__c = newAccount.Sold_Guides_L12M__c;
            }
            /* 
                If Sold Implants L12M > Implants Potential / Year, 
                then the system will overwrite current potential with
                the Sold Implants L12M value. This Boolean logic checked in a help field
            */
            if(TRUE_STRING.equals(newAccount.Overwrite_Implants_Potential__c)) {
                if('Long Purchasing Cycle >1 Year'.equals(newAccount.Custom_Segmentation__c)) {
                    if(((newAccount.Sold_Implants_L12M__c + newAccount.Sold_Implants_L13_24M__c) / 2) > 0) {
                        newAccount.Implants_Potential_Year__c = 
                            (newAccount.Sold_Implants_L12M__c + newAccount.Sold_Implants_L13_24M__c) / 2;
                    }else {
                        newAccount.Implants_Potential_Year__c = 0;
                    }
                }else {
                    If(newAccount.Sold_Implants_L12M__c > 0) {
                        newAccount.Implants_Potential_Year__c = newAccount.Sold_Implants_L12M__c;
                    }else {
                        newAccount.Implants_Potential_Year__c = 0;
                    }                        
                }
            }
        }
    }

    
    /*------------------------------------------------------------ 
    Description:    Method migrated from  Workflows
                    WF-ACC-12 : 'Update Volume SP Guides to No Usage' (Created on 08/05/2014)
                    WF-ACC-13 : 'Update Volume SP Guides to Low Usage' (Created on 08/05/2014)
                    WF-ACC-14 : 'Update Volume SP Guides to Medium Usage' (Created on 08/05/2014)
                    WF-ACC-15 : 'Update Volume SP Guides to High Usage' (Created on 08/05/2014)
                    WF-ACC-16 : 'Update Volume (Implants) to No usage' (Created on 16/02/2015)
                    WF-ACC-17 : 'Update Volume (Implants) to Low' (Created on 16/02/2015)
                    WF-ACC-18 : 'Update Volume (Implants) to Medium' (Created on 16/02/2015)
                    WF-ACC-19 : 'Update Volume (Implants) to High' (Created on 16/02/2015)
                    WF-ACC-20 : 'Update Volume (ATL ISUS) to No Usage' (Created on 12/11/2013)
                    WF-ACC-21 : 'Update Volume (ATL ISUS) to Low' (Created on 12/11/2013)
                    WF-ACC-22 : 'Update Volume (ATL ISUS) to Medium' (Created on 11/11/2013)
                    WF-ACC-23 : 'Update Volume (ATL ISUS) to High'(Created on 11/11/2013)
                    WF-ACC-24 : 'Update Volume (ATL Abut) to No Usage'(Created on 18/06/2010)
                    WF-ACC-25 : 'Update Volume (ATL Abut) to Low'(Created on 29/05/2009)
                    WF-ACC-26 : 'Update Volume (ATL Abut) to Medium'(Created on 29/05/2009)
                    WF-ACC-27 : 'Update Volume (ATL Abut) to High'(Created on 29/05/2009)
    Inputs:         @param newAccount
    ------------------------------------------------------------*/
    public static void updateVolume(List<Account> newAccountList)  {
        List<Id> classicERPAndNonERPRecordTypes= new List<Id>{CLASSIC_ERP_RECORDTYPE_IDS,
                                                              CLASSIC_ERP_LAB_RECORDTYPE_IDS,
                                                              CLASSIC_ERP_DISTRIBUTOR_RECORDTYPE_IDS,
                                                              CLASSIC_NON_ERP_RECORDTYPE_IDS,
                                                              CLASSIC_NON_ERP_LAB_RECORDTYPE_IDS,
                                                              CLASSIC_NON_ERP_DISTRIBUTOR_RECORDTYPE_IDS};
        for(Account newAccount : newAccountList) {  
            if(classicERPAndNonERPRecordTypes.contains(newAccount.RecordTypeId)){  
                updateSPGuidesVolume(newAccount);
                updateImplantsVolume(newAccount);
                updateATLAbutVolume(newAccount);
                
            }
        }
    }

    public static void updateSPGuidesVolume(Account newAccount) {
        // Update Volume SP Guides to No Usage
        if((newAccount.SP_Guides_Potential_Year__c == null || newAccount.SP_Guides_Potential_Year__c <= 0))
        {
            newAccount.Volume_Simplant__c = NO_USAGE_STRING;
        }
        // Update Volume SP Guides to Low Usage
        if(newAccount.SP_Guides_Potential_Year__c > 0 && newAccount.SP_Guides_Potential_Year__c < 5)  {
            newAccount.Volume_Simplant__c = 'Low Usage';
        }
        // Update Volume SP Guides to Medium Usage
        if(newAccount.SP_Guides_Potential_Year__c >= 5 && newAccount.SP_Guides_Potential_Year__c < 15)  {
            newAccount.Volume_Simplant__c = MEDIUM_USAGE_STRING;
        }
        // Update Volume SP Guides to High Usage
        if(newAccount.SP_Guides_Potential_Year__c >= 15)  {
            newAccount.Volume_Simplant__c = HIGH_USAGE_STRING;
        }
	}

    public static void updateImplantsVolume(Account newAccount) {
        // Update Volume (Implants) to No usage
        if(newAccount.Implants_Potential_Year__c == null || newAccount.Implants_Potential_Year__c <= 0) {
            newAccount.Volume_Implants__c = NO_USAGE_STRING;
        }
        // Update Volume (Implants) to Low
        if(newAccount.Implants_Potential_Year__c > 0 && newAccount.Implants_Potential_Year__c < 30) {
            newAccount.Volume_Implants__c = 'Low Usage';
        }
        // Update Volume (Implants) to Medium
        if(newAccount.Implants_Potential_Year__c >= 30 && newAccount.Implants_Potential_Year__c < 100) {
            newAccount.Volume_Implants__c = MEDIUM_USAGE_STRING;
        }
        // Update Volume (Implants) to High
        if(newAccount.Implants_Potential_Year__c >= 100) {
            newAccount.Volume_Implants__c = HIGH_USAGE_STRING;
        }
	}

    public static void updateATLAbutVolume(Account newAccount) {
        // Update Volume (ATL Abut) to No Usage
        if(newAccount.ATL_Abut_Potential_Year__c == 0) {
            newAccount.Volume_ATL_Abut__c = NO_USAGE_STRING; 
        }  
        // Update Volume (ATL Abut) to Low
        if(newAccount.ATL_Abut_Potential_Year__c >= 1 && newAccount.ATL_Abut_Potential_Year__c <= 99 ) {
            newAccount.Volume_ATL_Abut__c  = 'Low Usage';
        }
        // Update Volume (ATL Abut) to Medium
        if( newAccount.ATL_Abut_Potential_Year__c >= 100 && newAccount.ATL_Abut_Potential_Year__c <= 299) {
            newAccount.Volume_ATL_Abut__c = MEDIUM_USAGE_STRING;
        }
        // Update Volume (ATL Abut) to High
        if( newAccount.ATL_Abut_Potential_Year__c >= 300 ) {
            newAccount.Volume_ATL_Abut__c = HIGH_USAGE_STRING;
        }
	}

    /*------------------------------------------------------------ 
    Description:    Method migrated from  Workflows
                    WF-ACC-28 : 'Set Partner Account' (Created on 04/07/2016)
                    WF-ACC-29 : 'Set Non-ERP Lab Accounts' (Created on 04/07/2016)
                    WF-ACC-30 : 'Set Non-ERP Distributor' (Created on 04/07/2016)
                    WF-ACC-31 : 'Set Non-ERP Accounts' (Created on 04/07/2016)
                    WF-ACC-32 : 'Set ERP Account' (Created on 04/07/2016)
                    WF-ACC-33 : 'Set ERP Lab Accounts' (Created on 04/07/2016)
                    WF-ACC-34 : 'Set ERP Distributor' (Created on 04/07/2016)
                    WF-ACC-35 : 'Set Competitor Account' (Created on 04/07/2016)
                    WF-ACC-36 : 'Set Geographical Account' (Created on 04/07/2016)
    Inputs:         @param newAccount
    ------------------------------------------------------------*/
    public static void updateRecordsType(List<Account> newAccountList) {
        
        List<Id> recordTypeIdsToCheck = new List<Id>{CLASSIC_ERP_RECORDTYPE_IDS,
                                                    CLASSIC_ERP_LAB_RECORDTYPE_IDS,
                                                    CLASSIC_ERP_DISTRIBUTOR_RECORDTYPE_IDS,
                                                    CLASSIC_NON_ERP_RECORDTYPE_IDS,
                                                    CLASSIC_NON_ERP_LAB_RECORDTYPE_IDS,
                                                    CLASSIC_NON_ERP_DISTRIBUTOR_RECORDTYPE_IDS,
                                                    CLASSIC_PARTNER_RECORDTYPE_IDS,
                                                    CLASSIC_GEOGRAPHICAL_RECORDTYPE_IDS};
        for(Account newAccount: newAccountList)  {
            Boolean isRecordTypeToCheck = recordTypeIdsToCheck.contains(newAccount.RecordTypeId);//!GlobalUtils.ifRecordTypeInList(SOBJECT_NAME, recordTypes3, newAccount.RecordTypeId);
            updatePartnerRecordType(isRecordTypeToCheck, newAccount);
            updateNonERPLabRecordType(isRecordTypeToCheck, newAccount);
            updateNonERPDistributorRecordType(isRecordTypeToCheck, newAccount);
            updateNonERPAccountRecordType(isRecordTypeToCheck, newAccount);
            updateERPAccountRecordType(isRecordTypeToCheck, newAccount);
            updateERPLabRecordType(isRecordTypeToCheck, newAccount);
            updateERPDistributorRecordType(isRecordTypeToCheck, newAccount);
            updateCompetitorRecordType(isRecordTypeToCheck, newAccount);
            updateGeographycalRecordType(isRecordTypeToCheck, newAccount);
            
        }
    }

    public static void updatePartnerRecordType(Boolean isRecordTypeToCheck, Account newAccount) {
        // Used for ONE SFDC to check values in Account Type & ERP# fields and set the correct record type of the Account.
        if( isRecordTypeToCheck  
        && (String.ISBLANK(newAccount.RecordTypeId) 
             || newAccount.RecordTypeId != CLASSIC_PARTNER_RECORDTYPE_IDS)  
        && 'Partner'.equals(newAccount.OneAccount_Type__c)) {
         newAccount.RecordTypeId = CLASSIC_PARTNER_RECORDTYPE_IDS;
        }
	}

    public static void updateNonERPLabRecordType(Boolean isRecordTypeToCheck, Account newAccount) {
        // Used for ONE SFDC to check values in Account Type & ERP# fields and set the correct record type of the Account.
        if(isRecordTypeToCheck 
        && String.ISBLANK(newAccount.Movex__c)
        &&  (String.ISBLANK(newAccount.RecordTypeId) 
             || newAccount.RecordTypeId != CLASSIC_NON_ERP_LAB_RECORDTYPE_IDS) 
        &&  'Dental Laboratory'.equals(newAccount.OneAccount_Type__c)) {
            newAccount.RecordTypeId  = CLASSIC_NON_ERP_LAB_RECORDTYPE_IDS;
        }
	}

    public static void updateNonERPDistributorRecordType(Boolean isRecordTypeToCheck, Account newAccount) {
        // Used for ONE SFDC to check values in Account Type & ERP# fields and set the correct record type of the Account.
        if(isRecordTypeToCheck 
        && String.ISBLANK(newAccount.Movex__c)
        &&  (String.ISBLANK(newAccount.RecordTypeId) 
             || newAccount.RecordTypeId != CLASSIC_NON_ERP_DISTRIBUTOR_RECORDTYPE_IDS)
        &&  ('Wholesaler'.equals(newAccount.OneAccount_Type__c) 
             || 'Distributor'.equals(newAccount.OneAccount_Type__c))) {
            newAccount.RecordTypeId = CLASSIC_NON_ERP_DISTRIBUTOR_RECORDTYPE_IDS;
        }
	}

    public static void updateNonERPAccountRecordType(Boolean isRecordTypeToCheck, Account newAccount) {
        // Used for ONE SFDC to check values in Account Type & ERP# fields and set the correct record type of the Account.
        Boolean isInvalidAccountType = ('Dental Clinic'.equals(newAccount.OneAccount_Type__c) 
                                        || 'Hospital'.equals(newAccount.OneAccount_Type__c) 
                                        || 'University'.equals(newAccount.OneAccount_Type__c) 
                                        || 'Government'.equals(newAccount.OneAccount_Type__c) 
                                        || 'Insurance Care Center'.equals(newAccount.OneAccount_Type__c) 
                                        || 'Purchasing Group'.equals(newAccount.OneAccount_Type__c));
        if(isRecordTypeToCheck
        && String.ISBLANK(newAccount.Movex__c) 
        && (String.ISBLANK(newAccount.RecordTypeId) 
            || newAccount.RecordTypeId != CLASSIC_NON_ERP_RECORDTYPE_IDS)
        && isInvalidAccountType) {
            newAccount.RecordTypeId = CLASSIC_NON_ERP_RECORDTYPE_IDS;
        }
	}

    public static void updateERPAccountRecordType(Boolean isRecordTypeToCheck, Account newAccount) {
        // Used for ONE SFDC to check values in Account Type & ERP# fields and set the correct record type of the Account.
        Boolean isInvalidAccountType = ('Dental Clinic'.equals(newAccount.OneAccount_Type__c) 
                                        || 'Hospital'.equals(newAccount.OneAccount_Type__c) 
                                        || 'University'.equals(newAccount.OneAccount_Type__c) 
                                        || 'Government'.equals(newAccount.OneAccount_Type__c) 
                                        || 'Insurance Care Center'.equals(newAccount.OneAccount_Type__c) 
                                        || 'Purchasing Group'.equals(newAccount.OneAccount_Type__c));
        if(isRecordTypeToCheck 
        && String.ISNOTBLANK(newAccount.Movex__c)
        &&  (String.ISBLANK(newAccount.RecordTypeId) 
             || newAccount.RecordTypeId != CLASSIC_ERP_RECORDTYPE_IDS)
        &&  isInvalidAccountType) {
        newAccount.RecordTypeId = CLASSIC_ERP_RECORDTYPE_IDS;
        }
	}

    public static void updateERPLabRecordType(Boolean isRecordTypeToCheck, Account newAccount) {
        //Used for ONE SFDC to check values in Account Type & ERP# fields and set the correct record type of the Account.
        if(isRecordTypeToCheck
        && (String.ISNOTBLANK(newAccount.Movex__c))  
        && (String.ISBLANK(newAccount.RecordTypeId) 
             || newAccount.RecordTypeId != CLASSIC_ERP_LAB_RECORDTYPE_IDS)
        &&  'Dental Laboratory'.equals(newAccount.OneAccount_Type__c)) {
           newAccount.RecordTypeId = CLASSIC_ERP_LAB_RECORDTYPE_IDS;
        }
	}

    public static void updateERPDistributorRecordType(Boolean isRecordTypeToCheck, Account newAccount) {
        //  Used for ONE SFDC to check values in Account Type & ERP# fields and set the correct record type of the Account.
        if(isRecordTypeToCheck 
        && (String.ISNOTBLANK(newAccount.Movex__c))  
        && (String.ISBLANK(newAccount.RecordTypeId) 
            || newAccount.RecordTypeId != CLASSIC_ERP_DISTRIBUTOR_RECORDTYPE_IDS)  
        && ( 'Wholesaler'.equals(newAccount.OneAccount_Type__c) || 'Distributor'.equals(newAccount.OneAccount_Type__c))) {
        newAccount.RecordTypeId = CLASSIC_ERP_DISTRIBUTOR_RECORDTYPE_IDS;
        }
	}

    public static void updateCompetitorRecordType(Boolean isRecordTypeToCheck, Account newAccount) {
        // Used for ONE SFDC to check values in Account Type & ERP# fields and set the correct record type of the Account.
        if(isRecordTypeToCheck 
        && String.ISBLANK(newAccount.Movex__c) 
        && (String.ISBLANK(newAccount.RecordTypeId) 
            || newAccount.RecordTypeId != CLASSIC_COMPETITOR_RECORDTYPE_IDS)  
        &&  'Competitor'.equals(newAccount.OneAccount_Type__c)) {
        newAccount.RecordTypeId = CLASSIC_COMPETITOR_RECORDTYPE_IDS;
        }
	}

    public static void updateGeographycalRecordType(Boolean isRecordTypeToCheck, Account newAccount) {
        // Used for ONE SFDC to check values in Account Type & ERP# fields and set the correct record type of the Account.
        if(isRecordTypeToCheck
        &&(String.ISBLANK(newAccount.RecordTypeId) 
           || newAccount.RecordTypeId != CLASSIC_GEOGRAPHICAL_RECORDTYPE_IDS)  
        &&  ('Dealer Sell Out Data Region'.equals(newAccount.OneAccount_Type__c) || 'Zip/Postal Code'.equals(newAccount.OneAccount_Type__c)
             || 'First letters of Zip/Postal Code'.equals(newAccount.OneAccount_Type__c)|| 'Region'.equals(newAccount.OneAccount_Type__c) 
             || 'Country'.equals(newAccount.OneAccount_Type__c))) {
         newAccount.RecordTypeId = CLASSIC_GEOGRAPHICAL_RECORDTYPE_IDS;
        }
	}
    /*------------------------------------------------------------ 
    Description:    Method migrated from  Workflows
                    WF-ACC-37 : 'Set product area = Dental' (Created on 12/01/2017)
                    WF-ACC-38 : 'Update Loss Type (D)' (Created on 04/02/2010)
                    WF-ACC-39 : 'Set Implant Segmentation N/A' (Created on 16/02/2015)  
                    WF-ACC-40 : 'Set AWO Approval Date' (Created on 06/07/2010)   
                    WF-ACC-41 : 'Override Custom Segmentation' (Created on 16/02/2015)  
    Inputs:         @param newAccount
    ------------------------------------------------------------*/
    public static void updateAccountsInfo(List<Account> newAccountList) {
        List<Id> recordTypesToCheck = new List<Id> {CLASSIC_PARTNER_RECORDTYPE_IDS,
                                                    CLASSIC_ERP_RECORDTYPE_IDS,
                                                    CLASSIC_ERP_DISTRIBUTOR_RECORDTYPE_IDS,
                                                    CLASSIC_ERP_LAB_RECORDTYPE_IDS,
                                                    CLASSIC_GEOGRAPHICAL_RECORDTYPE_IDS,
                                                    CLASSIC_NON_ERP_RECORDTYPE_IDS,
                                                    CLASSIC_NON_ERP_LAB_RECORDTYPE_IDS,
                                                    CLASSIC_NON_ERP_DISTRIBUTOR_RECORDTYPE_IDS};
        for(Account newAccount: newAccountList) {                                                
            
            // States if this customer is replacing/is a replacement of an old Movex#.
            // If 0= Customer is replacing an old customer. This means this is not a "truly NEW" customer.
            // If 1 =  This customer is being replaced. This meas this is not a "truly LOST customer"
            if(newAccount.Movex_Reference_Reason__c == 1 
              && recordTypesToCheck.contains(newAccount.RecordTypeId) ) {
                  newAccount.Loss_Type_D__c= 'Administrative Reason';
            }
            
            // Sets the date when the AWO was first Approved. If the AWO-field is disabled, this field 
            // will NOT be changed, which means that it shows the FIRST time the customer was approved.
            // Used for analysis and reporting
            if(newAccount.AWO_Approval_Date__c == null && newAccount.Atlantis_Web_Order_Customer__c) {
                newAccount.AWO_Approval_Date__c = Date.today() - 1;
            }

            updateCustomSegmantation(newAccount);
            
        }
    }

    public static void updateCustomSegmantation( Account newAccount) {
        //To guarantee the quality of Custom Segmentation , this rule validates the selection in that
        // field and deselect it if the criteria are not met. Refer to the training material for more details.
        Boolean isNullOr20Status = (String.ISBLANK(newAccount.Status__c) || '20'.equals(newAccount.Status__c));
        Boolean isHighMediumNoneUsage = (MEDIUM_USAGE_STRING.equals(newAccount.Volume_Implants__c) 
                                        || HIGH_USAGE_STRING.equals(newAccount.Volume_Implants__c) 
                                        || NO_USAGE_STRING.equals(newAccount.Volume_Implants__c));
        Boolean isYearForSegmentationUpdate = (newAccount.Implants_Potential_Year__c > 0 
                                              || newAccount.Referral_Potential_Year__c >= 5);
        if(('Segmentation N/A'.equals(newAccount.Custom_Segmentation__c)
            && isYearForSegmentationUpdate 
            && isNullOr20Status)   
            || 
            ('Educate'.equals(newAccount.Custom_Segmentation__c) && newAccount.Implants_Potential_Year__c > 0 
                && isNullOr20Status)   
            || 
            ('Implants Starter'.equals(newAccount.Custom_Segmentation__c) 
                && isHighMediumNoneUsage)) {
            newAccount.Custom_Segmentation__c  = '';
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
            if (null != oldAccountMap) {
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
    
    /*------------------------------------------------------------ 
    Description:    Method to create an entitlement for each newly created account. 
    It uses a custom metadata to find the correct entitlement id for each country
    Inputs:         @param newAccount List
    ------------------------------------------------------------*/ 
	public static void createEntitlement(Account[] newAccs) {
        
        List <Entitlement> createEntitlement = new List <Entitlement> {};
        Map <Id,List<Entitlement>> mapOfAccountIdToEntitlement = new Map <Id,List<Entitlement>> ();
        Map <String,String> SLANameCountryMap = new Map <String,String> ();
        // countrySLAIdsMap will hold country name and a list of process ids related to that country
        Map <String,List<Id>> countrySLAIdsMap = new Map <String,List<Id>> ();
        Set <String> countriesSet = new Set <String> ();
        
        for (Account acc: newAccs) {
            countriesSet.add(acc.Country__c);
        }
        
        List <CountrySLA__mdt> customData = [Select Entitlement_Process__c, Country__c from CountrySLA__mdt where Country__c IN: countriesSet];
        for (CountrySLA__mdt c: customData) {
                SLANameCountryMap.put(c.Entitlement_Process__c, c.Country__c);
        }
        
        List <SlaProcess> slaProcesses = [select name, id, VersionNumber,SobjectType from SlaProcess where name IN: SLANameCountryMap.keySet() and IsActive = true];
        for (SlaProcess sProcess: slaProcesses) {
            // check if the map already contains the 
            String countryName = SLANameCountryMap.get(sProcess.name);
            if ((countryName != Null) && (!countrySLAIdsMap.containsKey(countryName))) {
                countrySLAIdsMap.put(countryName, new List<Id>());
            }
            countrySLAIdsMap.get(countryName).add(sProcess.Id);
        }
        
        List <Entitlement> entitlement = [Select AccountId,SlaProcess.SobjectType,SlaProcessId From Entitlement Where AccountId in: newAccs];
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