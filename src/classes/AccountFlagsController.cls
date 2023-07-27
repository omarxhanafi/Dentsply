/**
 * Created by ohanafi on 22/6/2023.
 */

public with sharing class AccountFlagsController {

    @AuraEnabled(Cacheable = true)
    public static String getAccountFlagsJSON(Id accountId) {
        // Get account record
        Account account = [
                SELECT KOLAccount__c
                FROM Account
                WHERE Id = :accountId
                LIMIT 1
        ];

        // Retrieve service contracts related to the account
        List<ServiceContract> serviceContractsList = [
                SELECT Status
                FROM ServiceContract
                WHERE AccountId = :accountId
        ];

        // Init lists of active/expired contracts
        List<ServiceContract> activeContracts = new List<ServiceContract>();
        List<ServiceContract> expiredContracts = new List<ServiceContract>();

        // Separate the service contracts based on status (active or expired)
        for (ServiceContract contract : serviceContractsList) {
            if (contract.Status == 'Active') {
                activeContracts.add(contract);
            } else if (contract.Status == 'Expired') {
                expiredContracts.add(contract);
            }
        }

        System.debug('activeContracts : ' + activeContracts);
        System.debug('expiredContracts : ' + expiredContracts);

        // Init a Map of the results
        Map<String, AccountFlag> results = new Map<String, AccountFlag>();

        // KOL flag
        results.put('kol', new AccountFlag(account?.KOLAccount__c == true ? 1 : 0, null));

        if(!activeContracts.isEmpty()){
            // We first get the flag values from the active contracts
            results.putAll(getDSCoreFlags(activeContracts, true));

            // We check the expired contracts
            Map<String, AccountFlag> expiredResults = getDSCoreFlags(expiredContracts, false);

            // If no DS Core results were found from the active contracts, we get the expired results
            if(results.get('dsCoreAccess').value == 0 && results.get('dsCoreLight').value == 0 && results.get('dsCoreStandard').value == 0 && results.get('dsCoreAdvanced').value == 0){
                results.put('dsCoreAccess', expiredResults.get('dsCoreAccess'));
                results.put('dsCoreLight', expiredResults.get('dsCoreLight'));
                results.put('dsCoreStandard', expiredResults.get('dsCoreStandard'));
                results.put('dsCoreAdvanced', expiredResults.get('dsCoreAdvanced'));
            }

            if(results.get('dsCoreCare').value == 0){
                results.put('dsCoreCare', expiredResults.get('dsCoreCare'));
            }

        } else {
            results.putAll(getDSCoreFlags(expiredContracts, false));
        }

        // Retrieve source records  related to the account
        List<Source_Record__c> sourceRecordsList = [
                SELECT Name, Status__c, Customer_Id__c, Source_Id__c, SearchInfo__c, Company_Code__c, SuresmileAlignerPlatform__c, Atlantis_Web_Order_Customer__c
                FROM Source_Record__c
                WHERE CIM_Account__c = :accountId
        ];

        // Init lists of active/inactive source records
        List<Source_Record__c> activeSourceRecords = new List<Source_Record__c>();
        List<Source_Record__c> inactiveSourceRecords = new List<Source_Record__c>();

        // Separate the source records based on status (active or inactive)
        for (Source_Record__c eachSourceRecord : sourceRecordsList) {
            if (eachSourceRecord.Status__c == 'Active') {
                activeSourceRecords.add(eachSourceRecord);
            } else if (eachSourceRecord.Status__c == 'Inactive') {
                inactiveSourceRecords.add(eachSourceRecord);
            }
        }

        if(!activeSourceRecords.isEmpty()){
            // We first get the flag values from the active source records
            results.putAll(getSourceRecordFlags(activeSourceRecords, true));

            // We get the inactive flags
            Map<String, AccountFlag> inactiveResults = getSourceRecordFlags(inactiveSourceRecords, false);

            for(String key : inactiveResults.keySet()){
                // If the flags related to the active source records are empty, we get the flag value from the inactive ones
                if(new List<String>{'customerNumber', 'dsCom', 'sureSmile', 'awo'}.contains(key)){
                    if(results.get(key).value == 0){
                        results.put(key, inactiveResults.get(key));
                    }
                }
            }
        } else {
            results.putAll(getSourceRecordFlags(inactiveSourceRecords, false));
        }

        System.debug(results);

        return JSON.serialize(results);
    }

    private static Map<String, AccountFlag> getSourceRecordFlags(List<Source_Record__c> sourceRecords, Boolean isActive) {
        // Init flag values (ranging from 0 to 2, 0 being not found, 1 = active, 2 = inactive)
        AccountFlag customerNumber = new AccountFlag(0, null);
        AccountFlag dsCom = new AccountFlag(0, null);
        AccountFlag sureSmile = new AccountFlag(0, null);
        AccountFlag awo = new AccountFlag(0, null);

        // Init list of source records related to an erp customer
        List<Source_Record__c> erpSourceRecords = new List<Source_Record__c>();

        for(Source_Record__c eachSourceRecord : sourceRecords){
            // We calculate the flag values
            if(eachSourceRecord.Company_Code__c != null){
                if(eachSourceRecord.Company_Code__c.contains('BUYDS')){
                    dsCom = new AccountFlag(isActive ? 1 : 2, eachSourceRecord.Id);
                }
            }

            if(eachSourceRecord.SuresmileAlignerPlatform__c == true){
                sureSmile = new AccountFlag(isActive ? 1 : 2, eachSourceRecord.Id);
            }

            if(eachSourceRecord.Atlantis_Web_Order_Customer__c != null){
                awo = new AccountFlag(isActive ? 1 : 2, eachSourceRecord.Id);
            }

            // If the SourceId is contained within the defined list of ERP codes, we add to the ERP Source records list
            if(new List<String>{'7', '1', '2', '31', '8', '58', '4', '33', '37', '17', '9', '39', '41', '46', '49', '18', '56', '3'}.contains(eachSourceRecord.Source_Id__c)){
                erpSourceRecords.add(eachSourceRecord);
            }

            System.debug('Source ID : ' + eachSourceRecord.Source_Id__c);

        }

        System.debug('erpSourceRecords ' + erpSourceRecords);

        if(!erpSourceRecords.isEmpty()){
            if(erpSourceRecords.size() > 1){
                customerNumber = new AccountFlag(isActive ? 1 : 2, erpSourceRecords[0].SearchInfo__c);
            } else {
                customerNumber = new AccountFlag(isActive ? 1 : 2, erpSourceRecords[0].Customer_Id__c);
            }
        }

        // Creating a map to store results
        Map<String, AccountFlag> results = new Map<String, AccountFlag>();
        results.put('customerNumber', customerNumber);
        results.put('dsCom', dsCom);
        results.put('sureSmile', sureSmile);
        results.put('awo', awo);

        return results;
    }

    private static Map<String, AccountFlag> getDSCoreFlags(List<ServiceContract> activeContracts, Boolean isActive) {
        // Get a global set of service contract ids
        Set<Id> serviceContractIds = new Map<Id, ServiceContract>(activeContracts).keySet();

        // Init flag values (ranging from 0 to 2, 0 being not found, 1 = active, 2 = expired)
        AccountFlag dsCoreAccess = new AccountFlag(0, null);
        AccountFlag dsCoreLight = new AccountFlag(0, null);
        AccountFlag dsCoreStandard = new AccountFlag(0, null);
        AccountFlag dsCoreAdvanced = new AccountFlag(0, null);
        AccountFlag dsCoreCare = new AccountFlag(0, null);

        // We get the global list of contract line items associated with the provided set of service contracts, we also retrieve the PG1, PG2 and GPP codes
        List<ContractLineItem> contractLineItems = [
                SELECT Id,
                        ServiceContractId,
                        ContractLineItem.PricebookEntry.Product2.PG1_Code__c,
                        ContractLineItem.PricebookEntry.Product2.PG2_Code__c,
                        ContractLineItem.PricebookEntry.Product2.GPP_Code__c
                FROM ContractLineItem
                WHERE ServiceContractId IN :serviceContractIds
        ];

        // We group the contract line items by service contract id
        Map<Id, List<ContractLineItem>> contractLineItemsMap = new Map<Id, List<ContractLineItem>>();

        for (ContractLineItem lineItem : contractLineItems) {
            if (!contractLineItemsMap.containsKey(lineItem.ServiceContractId)) {
                contractLineItemsMap.put(lineItem.ServiceContractId, new List<ContractLineItem>());
            }

            contractLineItemsMap.get(lineItem.ServiceContractId).add(lineItem);
        }

        System.debug('Contract line items : ' + contractLineItemsMap);

        for (Id serviceContractId : contractLineItemsMap.keySet()) {
            for (ContractLineItem eachLineItem : contractLineItemsMap.get(serviceContractId)) {

                // We calculate the flag values
                Integer tempDsCoreAccess = eachLineItem.PricebookEntry.Product2.PG2_Code__c == 'DC10' ? (isActive ? 1 : 2) : 0;
                Integer tempDsCoreLight = eachLineItem.PricebookEntry.Product2.PG2_Code__c == 'DC11' ? (isActive ? 1 : 2) : 0;
                Integer tempDsCoreStandard = eachLineItem.PricebookEntry.Product2.PG2_Code__c == 'DC12' ? (isActive ? 1 : 2) : 0;
                Integer tempDsCoreAdvanced = eachLineItem.PricebookEntry.Product2.PG2_Code__c == 'DC13' ? (isActive ? 1 : 2) : 0;
                Integer tempDsCoreCare = eachLineItem.PricebookEntry.Product2.GPP_Code__c == 'DT' ? (isActive ? 1 : 2) : 0;

                // We compare the current flag value with the previous one
                dsCoreAccess = (tempDsCoreAccess > dsCoreAccess.value) ? new AccountFlag(tempDsCoreAccess, eachLineItem.Id) : dsCoreAccess;
                dsCoreLight = (tempDsCoreLight > dsCoreLight.value) ? new AccountFlag(tempDsCoreLight, eachLineItem.Id) : dsCoreLight;
                dsCoreStandard = (tempDsCoreStandard > dsCoreStandard.value) ? new AccountFlag(tempDsCoreStandard, eachLineItem.Id) : dsCoreStandard;
                dsCoreAdvanced = (tempDsCoreAdvanced > dsCoreAdvanced.value) ? new AccountFlag(tempDsCoreAdvanced, eachLineItem.Id) : dsCoreAdvanced;
                dsCoreCare = (tempDsCoreCare > dsCoreCare.value) ? new AccountFlag(tempDsCoreCare, eachLineItem.Id) : dsCoreCare;
            }
        }

        // Creating a map to store results
        Map<String, AccountFlag> results = new Map<String, AccountFlag>();
        results.put('dsCoreAccess', dsCoreAccess);
        results.put('dsCoreLight', dsCoreLight);
        results.put('dsCoreStandard', dsCoreStandard);
        results.put('dsCoreAdvanced', dsCoreAdvanced);
        results.put('dsCoreCare', dsCoreCare);

        return results;
    }

    // Wrapper class for flag data
    public class AccountFlag {
        // Value of the flag (0, 1, 2)
        @AuraEnabled public Integer value;

        // Id of the Contract Line Item
        @AuraEnabled public String itemId;

        public AccountFlag(Integer value, String itemId) {
            this.value = value;
            this.itemId = itemId;
        }
    }

}