public class AccountHierarchyUpdater {

    public static void updateChildAccountsCount(String parentId) {
        Map<Id, Integer> accountIdToChildCountMap = new Map<Id, Integer>();

        // Query top-level parent accounts
        List<Account> topLevelParents = [SELECT Id FROM Account WHERE id=:parentId];

        // Iterate over top-level parent accounts and start recursive counting
        for (Account parent : topLevelParents) {
            accountIdToChildCountMap = countChildAccounts(parent, accountIdToChildCountMap, 0);
        }

        // Update ChildAccountsCount__c for each account
        System.debug('Final Result for:'+parentId+'. Is:' + JSON.serializePretty(accountIdToChildCountMap));
        updateAccounts(accountIdToChildCountMap);
    }

    private static Map<Id, Integer> countChildAccounts(Account parent, Map<Id, Integer> accountIdToChildCountMap, Integer level) {
        Integer childCount = 0;

        // Query child accounts for the current parent
        List<Account> childAccounts = [SELECT Id FROM Account WHERE ParentId = :parent.Id];

        // Recursively count child accounts for each direct child
        for (Account child : childAccounts) {
            childCount++; // Increment count for the current child
            accountIdToChildCountMap = countChildAccounts(child, accountIdToChildCountMap, level + 1);
            // Add the count of child accounts for the current child to the current count
            childCount += accountIdToChildCountMap.containsKey(child.Id) ? accountIdToChildCountMap.get(child.Id) : 0;
        }

        // Update child count for the current parent account
        accountIdToChildCountMap.put(parent.Id, childCount);

        return accountIdToChildCountMap;
    }


    private static void updateAccounts(Map<Id, Integer> accountIdToChildCountMap) {
        List<Account> accountsToUpdate = new List<Account>();

        // Update ChildAccountsCount__c for each account
        for (Id accountId : accountIdToChildCountMap.keySet()) {
            Account acc = new Account(Id = accountId, ChildAccountsCount__c = accountIdToChildCountMap.get(accountId));
            accountsToUpdate.add(acc);
        }

        // Perform the update
        if (!accountsToUpdate.isEmpty()) {
            update accountsToUpdate;
        }
    }
}