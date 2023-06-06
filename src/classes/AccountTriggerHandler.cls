/*------------------------------------------------------------
Author:         Kevin Do (Salesforce) 2019-09-25
Description:    Account Trigger Handler Class.
History
<Date>      <Authors Name>     <Brief Description of Change>
20190924    Kevin Do            Migrated DC_AccountTrigger and AccountSetPayerLookup triggers. (#TFUS1030)
20200326    Kevin Do            Added call to setAccountSubSegmentation in beforeInsert and beforeUpdate (#TFUS-000001698)
20200817    Richard Trum        Added afterUpdate section, calling the new updateRelatedContactAddresses method (#TFUS2084)
20210405    Nisreen Al-Saleh    Added afterInsert, calling the createEntitlement method (#TFUS-000001231)
20230326    Roberto Narbona     TFUS-000003734
------------------------------------------------------------*/

public class AccountTriggerHandler extends TriggerHandler {
    private List<Account> oldAccountList, newAccountList;
    private Map<Id, Account> oldAccountMap, newAccountMap;

    public AccountTriggerHandler() {
        oldAccountList = (List<Account>) Trigger.old;
        newAccountList = (List<Account>) Trigger.new;
        oldAccountMap = (Map<Id, Account>) Trigger.oldMap;
        newAccountMap = (Map<Id, Account>) Trigger.newMap;
    }

    protected override void beforeInsert() {
        AccountTriggerHelper.setPostalCodeInfoAndEtmCode(newAccountList, oldAccountMap);
        AccountTriggerHelper.setPayerLookup(newAccountList, oldAccountMap);
        // WorkFlows
        for(Account account : newAccountList) {
            AccountTriggerHelper.overridePotential(account);
        }
        AccountTriggerHelper.updateRecordsType(newAccountList);
        AccountTriggerHelper.updateVolume(newAccountList);
        AccountTriggerHelper.updateAccountsInfo(newAccountList);
        AccountTriggerHelper.setAccountSubSegmentation(newAccountList, oldAccountMap);
    }

    protected override void beforeUpdate() {
        AccountTriggerHelper.setPostalCodeInfoAndEtmCode(newAccountList, oldAccountMap);
        AccountTriggerHelper.setPayerLookup(newAccountList, oldAccountMap);
        // WorkFlows
        for(Account account : newAccountList) {
            AccountTriggerHelper.overridePotential(account);
        }
        AccountTriggerHelper.updateRecordsType(newAccountList);
        AccountTriggerHelper.updateVolume(newAccountList);
        AccountTriggerHelper.updateAccountsInfo(newAccountList);
        AccountTriggerHelper.setAccountSubSegmentation(newAccountList, oldAccountMap);  
    }

    protected override void afterUpdate(){
        AccountTriggerHelper.updateRelatedContactAddresses(newAccountList, oldAccountMap, newAccountMap);
        AccountTriggerHelper.createEntitlement(newAccountList);
        
    }
    protected override void afterInsert() {
       AccountTriggerHelper.createEntitlement(newAccountList);
    }
}