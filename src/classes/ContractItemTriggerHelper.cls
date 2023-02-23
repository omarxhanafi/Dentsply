/*----------------------------------------------------------------------------------------
Author:         Roberto Narbona
Description:    Contract Item Trigger Helper Class
Test class      

History
----------------------------------------------------------------------------------------*/
public with sharing class ContractItemTriggerHelper {

    public static final String PREVENT_DELETION_MESSAGE = 'Contract items that are not in Draft contracts cannot be deleted.';

    public static void canBeDeleted(List<ContractItem__c> oldContractItemList) {
        if (oldContractItemList.isEmpty()) return ;
        for (ContractItem__c cI: oldContractItemList){
            if (cI.NoDelete__c == true){
                cI.addError(PREVENT_DELETION_MESSAGE);
            }
        }
    }
}