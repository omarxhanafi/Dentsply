/*-------------------------------------------------------------------------------------------------------
Author:         Roberto Narbona 
Description:    Contact Trigger Helper Class
Test Class:      
History 
20210401        Roberto Narbona         created showNoDeleteError method TFUS-000002832
20210908        Roberto Narbona        Refractoring done cause TFUS TFUS-000003164
20220622        Roberto Narbona        Refractoring done cause TFUS TFUS-000004110
20220622        Houssam ADIB            DS com Encryption logic TFUS-000006026
--------------------------------------------------------------------------------------------------------*/

public with sharing class ContactTriggerHelper {


    private static final string ENCRYPTION_FNAME_ATTRIBUTE = 'fname=';
    private static final string ENCRYPTION_LNAME_ATTRIBUTE = 'lname=';
    private static final string ENCRYPTION_EMAIL_ATTRIBUTE = 'email=';
    private static final string ENCRYPTION_CIM360ID_ATTRIBUTE = 'cim360id=';
    private static final string ENCRYPTION_SEPARATOR = '&';
    private static final string ENCRYPTION_ALGORITHM = 'AES256';


    public static void setValues(List<Contact> newContactList,Map<Id, Contact> newContactMap, Map<Id, Contact> oldContactMap){
        Map<String, CountryCodeMap__mdt> countryCodeMapping = new Map<String, CountryCodeMap__mdt>();
        List<CountryCodeMap__mdt> countryList = [SELECT  Country_Code_full__c, Country_Code_2_digit__c FROM CountryCodeMap__mdt];
        for (CountryCodeMap__mdt country : countryList) {
            countryCodeMapping.put(country.Country_Code_2_digit__c, country);
        }

        Set<Id> contactAccountIds = new Set<Id>();
        for(Contact contact : newContactList)
        {
            contactAccountIds.add(contact.AccountId);
        }

        Map<ID, Account> mapAccounts = new Map<ID, Account>([SELECT Id, CIM360Id__c, CurrencyIsoCode, Country__c FROM Account WHERE Id IN: contactAccountIds]);

        Blob aesKey = getAESKeyFromCustomSetting();
        Boolean isAesKeyNull = (aesKey == null);

        for (Contact contact : newContactList) {
            //Story TFUS-000004110

            contact.CurrencyIsoCode = (!mapAccounts.isempty() && contact.AccountId != null && mapAccounts.get(contact.AccountId)!= null && mapAccounts.get(contact.AccountId).CurrencyIsoCode != null) ? mapAccounts.get(contact.AccountId).CurrencyIsoCode : contact.CurrencyIsoCode;

            //Migrated process builder entry -> Entry country validation

            if(!mapAccounts.isempty() && contact.Country__c == null && contact.AccountId != null && mapAccounts.get(contact.AccountId)!= null && mapAccounts.get(contact.AccountId).country__c != null){ //add account country null exception
                string country = mapAccounts.get(contact.AccountId).country__c;
                contact.country__c = countryCodeMapping.get(Country).Country_Code_full__c;
            }
            //Migrated process builder entry -> Marketing Consent not given
            if((contact.Email == null || contact.InsertEmailMarketingConsentCollected__c == 'No' ) && (newContactMap == null  || (newContactMap != null && contact.email != oldContactMap.get(contact.Id).email) || (newContactMap != null && contact.InsertEmailMarketingConsentCollected__c != oldContactMap.get(contact.Id).InsertEmailMarketingConsentCollected__c)))
                {
                contact.Email_Consent_collected__c = 'No';
                contact.HasOptedOutOfEmail = true;
            }
            //Migrated process builder entry -> Email Marketing consent process
            if( contact.Email != null && contact.InsertEmailMarketingConsentCollected__c == 'Yes' && (newContactMap == null ||(newContactMap != null && contact.InsertEmailMarketingConsentCollected__c != oldContactMap.get(contact.Id).InsertEmailMarketingConsentCollected__c) || (newContactMap != null && contact.email != oldContactMap.get(contact.Id).email))){
                contact.Email_Consent_collected__c = 'Yes';
                contact.Email_Consent_Date__c = system.today();
                contact.HasOptedOutOfEmail = false;
            }
            //Migrated process builder entry -> Email Opt-Out Denied by Customer *only for change so not insert*
            if( (newContactMap != null && contact.HasOptedOutOfEmail != oldContactMap.get(contact.Id).HasOptedOutOfEmail)
                && contact.HasOptedOutOfEmail == true && contact.Email_Consent_collected__c != 'Please Select Yes or No'){
                    contact.Email_Consent_collected__c = 'No';
            }
            //Migrated process builder entry -> Email Opt-In Confirmed By Customer *only for change so not insert*
            if((newContactMap != null && contact.HasOptedOutOfEmail != oldContactMap.get(contact.Id).HasOptedOutOfEmail)
                && contact.HasOptedOutOfEmail == false && contact.Email_Consent_collected__c != 'Please Select Yes or No' ){
                    contact.Email_Consent_collected__c = 'Yes';

            }
            //Migrated process builder entry -> Email Marketing Consent - Delete Email
            if(contact.Email == null){
                contact.Email_Consent_Date__c = null;
                contact.HasOptedOutOfEmail= false;
            }
            //Migrated process builder entry -> Set Inactive Field Value in Duplicate Management
            if(contact.InsertEmailMarketingConsentCollected__c == 'Yes'){
                contact.inactive_dedupe_HQ__c = 'FALSE';
            }
            //Migrated process builder entry -> US Owner Assignment
            if(!mapAccounts.isempty() && contact.accountId != null && mapAccounts.get(contact.AccountId) != null && mapAccounts.get(contact.AccountId).country__c != null && (mapAccounts.get(contact.AccountId).country__c == 'US' || mapAccounts.get(contact.AccountId).country__c == 'CA')   && contact.OwnerId != '0056M00000A0kR9QAJ'){
                contact.OwnerId = '0056M00000A0kR9QAJ';
            }
            //Migrated process builder entry -> BR Owner Assignment
            if(!mapAccounts.isempty() && contact.accountId != null && mapAccounts.get(contact.AccountId)!= null && mapAccounts.get(contact.AccountId).country__c != null && mapAccounts.get(contact.AccountId).country__c == 'BR' &&  contact.OwnerId != '0056M000009Z3c2QAC'){
                contact.OwnerId = '0056M000009Z3c2QAC';
            }

            //Migrated process builder entry -> Set Inactive Field Value in Duplicate - Active
            if(contact.Inactive__c == false){
                contact.inactive_dedupe_HQ__c = 'FALSE';
            }

            if(!isAesKeyNull) setEncryptedUrl(contact,aesKey,mapAccounts);

        }
    }

    /**
     * Retrieves the AES Key from the custom settings
     * @author hadib@salesforce.com | 11-11-2023
     * @return Bloc - AES Key
     */
    public static Blob getAESKeyFromCustomSetting()
    {
        Blob aesKey;
        EncryptionSettings__c settings = EncryptionSettings__c.getInstance();
        if (settings != null && settings.AesKey__c != null) {
            // Convert the base64-encoded string back to a Blob
            aesKey = EncodingUtil.base64Decode(settings.AesKey__c);
        }
        return aesKey;
    }

    /**
     * Encrypt contact field using AES Key and put the value in DScomUrlParam__c field
     * @author hadib@salesforce.com | 11-11-2023
     * @param contact Contact record
     * @param aesKey AES Key as a blob
     * @param parentAccounts Parent Accounts
     */
    public static void setEncryptedUrl(Contact contact, Blob aesKey, Map<Id,Account> parentAccounts)
    {
        // Original text
        String textToEncrypt = '';
        if (contact.FirstName != null) {
            textToEncrypt += ENCRYPTION_FNAME_ATTRIBUTE + contact.FirstName + ENCRYPTION_SEPARATOR;
        }
        if (contact.LastName != null) {
            textToEncrypt += ENCRYPTION_LNAME_ATTRIBUTE + contact.LastName + ENCRYPTION_SEPARATOR;
        }
        if (contact.Email != null) {
            textToEncrypt += ENCRYPTION_EMAIL_ATTRIBUTE + contact.Email + ENCRYPTION_SEPARATOR;
        }
        if (parentAccounts.get(contact.AccountId)?.CIM360Id__c != null) {
            textToEncrypt += ENCRYPTION_CIM360ID_ATTRIBUTE + parentAccounts.get(contact.AccountId).CIM360Id__c;
        }
        // Remove the trailing ENCRYPTION_SEPARATOR ('&') if any
        if (textToEncrypt.endsWith(ENCRYPTION_SEPARATOR)) {
            textToEncrypt = textToEncrypt.removeEnd(ENCRYPTION_SEPARATOR);
        }

        // Encrypt with the AES key
        Blob encryptedData = Crypto.encryptWithManagedIV(ENCRYPTION_ALGORITHM, aesKey, Blob.valueOf(textToEncrypt));
        String encryptedText = EncodingUtil.base64Encode(encryptedData);

        contact.DScomUrlParam__c = EncodingUtil.urlEncode(encryptedText, 'UTF-8');
    }

    public static void showNoDeleteError(Map<Id, Contact> contactsMap, List<Contact> contactList){
        Map<Id, Contact> contactsCopy = contactsMap.clone();
        //keeping only those contacts with KOLs
        contactsCopy.keySet().retainAll(
        new Map<Id, AggregateResult>(
            [SELECT Contact__c Id
             FROM Expert__c
             WHERE Contact__c = :contactList
             GROUP BY Contact__c]).keySet());
        for(Contact record: contactsCopy.values()) {
            record.addError(Label.KOLDeleteError);
        }
    }
}