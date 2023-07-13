/**
 * Created by ohanafi on 22/6/2023.
 */

public with sharing class AccountFlagsController {

    @AuraEnabled(Cacheable = true)
        public static String getAccountFlagsJSON(Id accountId) {

        // Init flag values (ranging from 0 to 2, 0 being not found, 1 = active, 2 = expired)
        Integer dsCoreLight = 0;
        Integer dsCoreStandard = 0;
        Integer dsCoreAdvanced = 0;
        Integer dsCoreCare = 0;
        Integer dsCoreCreate = 0;

        // Retrieve service contracts related to the account
        List<ServiceContract> serviceContracts = [
                SELECT Status
                FROM ServiceContract
                WHERE AccountId = :accountId
        ];

        // Init lists of active/expired contracts
        List<ServiceContract> activeContracts = new List<ServiceContract>();
        List<ServiceContract> expiredContracts = new List<ServiceContract>();

        // Represents whether we are searching active or expired contracts
        Boolean isActive = false;

        // Separate the service contracts based on status (active or expired)
        for (ServiceContract contract : serviceContracts) {
            if (contract.Status == 'Active') {
                activeContracts.add(contract);
                isActive = true;
            } else if (contract.Status == 'Expired') {
                expiredContracts.add(contract);
            }
        }

        // If active subscriptions are available, we use them for search, otherwise we look for expired subscriptions
        if (!activeContracts.isEmpty()) {
            serviceContracts = activeContracts;
        } else if (!expiredContracts.isEmpty()) {
            serviceContracts = expiredContracts;
        } else {
            serviceContracts = new List<ServiceContract>();
        }

        System.debug(serviceContracts);

        if(!serviceContracts.isEmpty()){
            // Get a global set of service contract ids
            Set<Id> serviceContractIds = new Map<Id, ServiceContract>(serviceContracts).keySet();

            // We get the global list of contract line items associated with the provided set of service contracts, we also retrieve the PG1, PG2 and GPP codes
            List<ContractLineItem> contractLineItems = [
                SELECT  Id,
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

            System.debug(contractLineItemsMap);

            for(Id serviceContractId : contractLineItemsMap.keySet()){
                for(ContractLineItem eachLineItem : contractLineItemsMap.get(serviceContractId)){
                    // We calculate the flags values
                    Integer tempDsCoreLight = eachLineItem.PricebookEntry.Product2.PG2_Code__c == 'DC11' ? (isActive ? 1 : 2) : 0;
                    Integer tempDsCoreStandard = eachLineItem.PricebookEntry.Product2.PG2_Code__c == 'DC12' ? (isActive ? 1 : 2) : 0;
                    Integer tempDsCoreAdvanced = eachLineItem.PricebookEntry.Product2.PG2_Code__c == 'DC13' ? (isActive ? 1 : 2) : 0;
                    Integer tempDsCoreCare = eachLineItem.PricebookEntry.Product2.GPP_Code__c == 'DT' ? (isActive ? 1 : 2) : 0;

                    dsCoreLight = (tempDsCoreLight > dsCoreLight) ? tempDsCoreLight : dsCoreLight;
                    dsCoreStandard = (tempDsCoreStandard > dsCoreStandard) ? tempDsCoreStandard : dsCoreStandard;
                    dsCoreAdvanced = (tempDsCoreAdvanced > dsCoreAdvanced) ? tempDsCoreAdvanced : dsCoreAdvanced;
                    dsCoreCare = (tempDsCoreCare > dsCoreCare) ? tempDsCoreCare : dsCoreCare;
                }
            }
        }

        // Construct a Map of the results
        Map<String, Object> results = new Map<String, Object>();
        results.put('dsCoreLight', dsCoreLight);
        results.put('dsCoreStandard', dsCoreStandard);
        results.put('dsCoreAdvanced', dsCoreAdvanced);
        results.put('dsCoreCare', dsCoreCare);
        results.put('dsCoreCreate', dsCoreCreate);

        System.debug(results);

        return JSON.serialize(results);
    }

}