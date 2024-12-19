/*-------------------------------------------------------------------------------------------------------
Author:         Kevin Do (Salesforce) 20190924
Description:    Contract Trigger Helper Class
Test Class:     
History:
20200205    Kevin Do            Bug fix on updateAllowedDiscount to recalculate formula fields 
20190924    Kevin Do            Created Class
20211206	Roberto Narbona		Uopdated SAQL query(TFUS-000003784)
20231114    Richard Trum        Cleaned up methods related to the retired Pricing Contract record type/functionality
----------------------------------------------------------------------------------------*/

global with sharing class ContractTriggerHelper {
    private static final String SOBJECT_NAME = 'Contract';
    
    /*------------------------------------------------------------  
    Description:    Method migrated from Contract_Default_Process_Builder: Contract: Set start parameters criteria node 
                    Containing Contract_Update_sales_history Flow and Contract_find_previous Flow
                    Should only be called before insert or from Update sales history button on Contract record page.
    Inputs:         @param newContractList
    ------------------------------------------------------------*/
    public static void setStartParameters(List<Contract> newContractList) {
        // Create a Set of AccountIds of the Contract AccountIds
        Set<Id> accountToQueryIdSet = new Set<Id>();
        Set<Contract> contractToUpdateSet = new Set<Contract>();
        for (Contract contractRecord : newContractList) {
            // Only update Contracts with Record Type 'DiscountContract'
            if (contractRecord.RecordTypeId == GlobalUtils.getRecordTypeId(SOBJECT_NAME, 'DiscountContract')) {
                accountToQueryIdSet.add(contractRecord.AccountId);
                contractToUpdateSet.add(contractRecord);
            }
        }
         // Get related Account records
        Map<Id, Account> relatedAccountMap = new Map<Id, Account>([
            SELECT Id, OneSF_Id__c, Country__c,
                (SELECT Id, AccountId FROM Contracts ORDER BY CreatedDate DESC LIMIT 1)
            FROM Account
            WHERE Id IN :accountToQueryIdSet
        ]);

        for (Contract contractToUpdate: contractToUpdateSet) {
            // Only update Contracts where Account.Country__c is 'DE'
            if ('DE'.equalsIgnoreCase(relatedAccountMap.get(contractToUpdate.AccountId).Country__c)) {
                Account relatedAccount = relatedAccountMap.get(contractToUpdate.AccountId);
                setPreviousContract(contractToUpdate, relatedAccount);
            }
        }
    }

    /*------------------------------------------------------------  
    Description:    Helper method for setStartParameters()
                    Method migrated from Contract_Default_Process_Builder (Find previous contract)
                    Updates Contract sales fields based on its' Account fields
    Inputs:         @param contractToUpdate, @param relatedAccount
    ------------------------------------------------------------*/
    public static void setPreviousContract(Contract contractToUpdate, Account relatedAccount) {
        if (!relatedAccount.Contracts.isEmpty() && null == contractToUpdate.Previous_contract__c && relatedAccount.Contracts[0].Id != contractToUpdate.Id) {
            contractToUpdate.Previous_contract__c = relatedAccount.Contracts[0].Id;
        }
    }

}