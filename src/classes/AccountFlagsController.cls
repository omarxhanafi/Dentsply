/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Account Flags Controller.
 * @Test-Class      Test_AccountFlagsController
 *
 * @History
 * 22-06-2023   Omar     Create new AccountFlagsController class
 */

public with sharing class AccountFlagsController {

    /**
     * getAccountFlagsJSON Return a map of Account Flags related to the provided account
     * @author ohanafi@salesforce.com | 22-06-2023
     *
     * @param accountId   Id of the account
     *
     * @return String - Serialized map of flags
     */
    @AuraEnabled(Cacheable = true)
    public static String getAccountFlagsJSON(Id accountId) {
        // Get number of kol contract records related to the account
        Integer kolCount = [
                SELECT COUNT()
                FROM Contact
                WHERE Active_KOL__c = true AND AccountId = :accountId
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
        results.put('kol', new AccountFlag(kolCount > 0 ? 1 : 0, null));

        if(!activeContracts.isEmpty()){
            // We first get the flag values from the active contracts
            results.putAll(getContractFlags(activeContracts, true));

            // We check the expired contracts
            Map<String, AccountFlag> expiredResults = getContractFlags(expiredContracts, false);

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
            results.putAll(getContractFlags(expiredContracts, false));
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
                if(new List<String>{'customerNumber', 'dsCom', 'sureSmile', 'awo'}.contains(key)){
                    // If the flags related to the active source records are empty, we get the flag value from the inactive ones
                    if(results.get(key).value == 0){
                        results.put(key, inactiveResults.get(key));
                    }
                }
            }
        } else {
            results.putAll(getSourceRecordFlags(inactiveSourceRecords, false));
        }

        AccountFlag cerecClub = getCerecClubFlag(accountId);
        results.put('cerecClub', cerecClub);


        return JSON.serialize(results);
    }

    /**
     * getCerecClubFlag Return the CEREC Club flag related to the provided account
     * @author ohanafi@salesforce.com | 04-09-2023
     *
     * @param accountId   Id of the account
     *
     * @return String - Serialized map of flags
     */
    private static AccountFlag getCerecClubFlag(Id accountId) {
        // Init CEREC Club Flag
        AccountFlag cerecClub = new AccountFlag(0, null);

        // Getting the CEREC Club Contracts
        List<Contract> cerecContracts = [
                SELECT
                        Id, StartDate, EndDate, Name, Siroforce_Status__c
                FROM Contract
                WHERE AccountId = :accountId
                AND RecordType.DeveloperName = 'siroForceIntegration'
                AND Name LIKE '%CEREC CLUB%'
        ];

        if (!cerecContracts.isEmpty()) {
            // We look for active contracts first, if not found we check for any expired ones
            for (Contract eachContract : cerecContracts) {
                if (eachContract.Siroforce_Status__c == 'Active' && eachContract.StartDate <= System.today() && eachContract.EndDate >= System.today()) {
                    cerecClub = new AccountFlag(1, eachContract.Id);
                    break;
                } else if (eachContract.Siroforce_Status__c == 'Inactive' && eachContract.EndDate < System.today()) {
                    cerecClub = new AccountFlag(2, eachContract.Id);
                }
            }
        }
        return cerecClub;
    }

    /**
     * getAccountFlagsJSON Return a map of flags from a list of source records
     * @author ohanafi@salesforce.com | 22-06-2023
     *
     * @param sourceRecords   List of source records
     * @param isActive   Indicates if the source records are active or expired
     *
     * @return Map<String, AccountFlag> - Map of flags
     */
    private static Map<String, AccountFlag> getSourceRecordFlags(List<Source_Record__c> sourceRecords, Boolean isActive) {
        // Init flag values (ranging from 0 to 2, 0 being not found, 1 = active, 2 = inactive)
        AccountFlag customerNumber = new AccountFlag(0, null, null);
        AccountFlag dsCom = new AccountFlag(0, null);
        AccountFlag sureSmile = new AccountFlag(0, null);
        AccountFlag awo = new AccountFlag(0, null);
        AccountFlag siroForce = new AccountFlag(0, null);

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

            if(eachSourceRecord.Company_Code__c == 'SIROFORCE'){
                siroForce = new AccountFlag(isActive ? 1 : 2, eachSourceRecord.Id);
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
                customerNumber = new AccountFlag(isActive ? 1 : 2, erpSourceRecords[0].Id, erpSourceRecords[0].SearchInfo__c);
            } else {
                customerNumber = new AccountFlag(isActive ? 1 : 2, erpSourceRecords[0].Id, erpSourceRecords[0].Customer_Id__c);
            }
        }

        // Creating a map to store results
        Map<String, AccountFlag> results = new Map<String, AccountFlag>();
        results.put('customerNumber', customerNumber);
        results.put('dsCom', dsCom);
        results.put('sureSmile', sureSmile);
        results.put('awo', awo);
        results.put('siroForce', siroForce);

        return results;
    }

    /**
     * getContractFlags Return a map of flags from a list of contracts
     * @author ohanafi@salesforce.com | 22-06-2023
     *
     * @param contractsList   List of contracts
     * @param isActive   Indicates if the contracts are active or expired
     *
     * @return Map<String, AccountFlag> - Map of flags
     */
    private static Map<String, AccountFlag> getContractFlags(List<ServiceContract> contractsList, Boolean isActive) {
        // Get a global set of service contract ids
        Set<Id> serviceContractIds = new Map<Id, ServiceContract>(contractsList).keySet();

        // Init flag values (ranging from 0 to 2, 0 being not found, 1 = active, 2 = expired)
        AccountFlag dsCoreAccess = new AccountFlag(0, null);
        AccountFlag dsCoreLight = new AccountFlag(0, null);
        AccountFlag dsCoreStandard = new AccountFlag(0, null);
        AccountFlag dsCoreAdvanced = new AccountFlag(0, null);
        AccountFlag dsCoreCare = new AccountFlag(0, null);
        AccountFlag dsCoreLab = new AccountFlag(0, null);

        // We get the global list of contract line items associated with the provided set of service contracts, we also retrieve the PG1, PG2 and GPP codes
        String queryString = 'SELECT Id, ' +
                'ServiceContractId, ' +
                'PricebookEntry.Product2.GlobalSKUMapping__r.PG1_Code__c, ' +
                'PricebookEntry.Product2.GlobalSKUMapping__r.PG2_Code__c, ' +
                'PricebookEntry.Product2.GlobalSKUMapping__r.GPP_Code__c ' +
                'FROM ContractLineItem ' +
                'WHERE ServiceContractId IN :serviceContractIds';

        queryString += isActive ? ' AND StartDate <= TODAY AND EndDate >= TODAY' : ' AND EndDate < TODAY';

        List<ContractLineItem> contractLineItems = Database.query(queryString);

        // We group the contract line items by service contract id
        Map<Id, List<ContractLineItem>> contractLineItemsMap = new Map<Id, List<ContractLineItem>>();

        for (ContractLineItem lineItem : contractLineItems) {
            if (!contractLineItemsMap.containsKey(lineItem.ServiceContractId)) {
                contractLineItemsMap.put(lineItem.ServiceContractId, new List<ContractLineItem>());
            }

            contractLineItemsMap.get(lineItem.ServiceContractId).add(lineItem);
        }

        for (Id serviceContractId : contractLineItemsMap.keySet()) {
            for (ContractLineItem eachLineItem : contractLineItemsMap.get(serviceContractId)) {

                // We calculate the flag values
                Integer tempDsCoreAccess = (eachLineItem.PricebookEntry.Product2.GlobalSKUMapping__r.PG2_Code__c == 'DC10' || eachLineItem.PricebookEntry.Product2.GlobalSKUMapping__r.PG2_Code__c == 'DC14') ? (isActive ? 1 : 2) : 0;
                Integer tempDsCoreLight = eachLineItem.PricebookEntry.Product2.GlobalSKUMapping__r.PG2_Code__c == 'DC11' ? (isActive ? 1 : 2) : 0;
                Integer tempDsCoreStandard = eachLineItem.PricebookEntry.Product2.GlobalSKUMapping__r.PG2_Code__c == 'DC12' ? (isActive ? 1 : 2) : 0;
                Integer tempDsCoreAdvanced = eachLineItem.PricebookEntry.Product2.GlobalSKUMapping__r.PG2_Code__c == 'DC13' ? (isActive ? 1 : 2) : 0;
                Integer tempDsCoreCare = eachLineItem.PricebookEntry.Product2.GlobalSKUMapping__r.GPP_Code__c == 'DT' ? (isActive ? 1 : 2) : 0;
                Integer tempDsCoreLab = eachLineItem.PricebookEntry.Product2.GlobalSKUMapping__r.GPP_Code__c == 'DL' ? (isActive ? 1 : 2) : 0;

                // We compare the current flag value with the previous one
                dsCoreAccess = (tempDsCoreAccess > dsCoreAccess.value) ? new AccountFlag(tempDsCoreAccess, eachLineItem.Id) : dsCoreAccess;
                dsCoreLight = (tempDsCoreLight > dsCoreLight.value) ? new AccountFlag(tempDsCoreLight, eachLineItem.Id) : dsCoreLight;
                dsCoreStandard = (tempDsCoreStandard > dsCoreStandard.value) ? new AccountFlag(tempDsCoreStandard, eachLineItem.Id) : dsCoreStandard;
                dsCoreAdvanced = (tempDsCoreAdvanced > dsCoreAdvanced.value) ? new AccountFlag(tempDsCoreAdvanced, eachLineItem.Id) : dsCoreAdvanced;
                dsCoreCare = (tempDsCoreCare > dsCoreCare.value) ? new AccountFlag(tempDsCoreCare, eachLineItem.Id) : dsCoreCare;
                dsCoreLab = (tempDsCoreLab > dsCoreLab.value) ? new AccountFlag(tempDsCoreLab, eachLineItem.Id) : dsCoreLab;

                System.debug('dsCoreAccess : ' + dsCoreAccess);
            }
        }

        // Creating a map to store results
        Map<String, AccountFlag> results = new Map<String, AccountFlag>();
        results.put('dsCoreAccess', dsCoreAccess);
        results.put('dsCoreLight', dsCoreLight);
        results.put('dsCoreStandard', dsCoreStandard);
        results.put('dsCoreAdvanced', dsCoreAdvanced);
        results.put('dsCoreCare', dsCoreCare);
        results.put('dsCoreLab', dsCoreLab);

        return results;
    }

    // Wrapper class for flag data
    public class AccountFlag {
        // Value of the flag (0, 1, 2)
        @AuraEnabled public Integer value;

        // Id of the Contract Line Item, Contract or Source Record
        @AuraEnabled public String itemId;

        // Customer number (optional)
        @AuraEnabled public String customerNumber;

        public AccountFlag(Integer value, String itemId, String customerNumber) {
            this.value = value;
            this.itemId = itemId;
            this.customerNumber = customerNumber;
        }

        public AccountFlag(Integer value, String itemId) {
            this.value = value;
            this.itemId = itemId;
        }
    }

}