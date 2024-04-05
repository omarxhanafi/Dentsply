global class ProcessChildAccountsBatch implements Database.Batchable<sObject> {
    List<Id> accountIdsToUpdate; // Member variable to store Account Ids to update

    // Constructor to accept Account Ids list
    global ProcessChildAccountsBatch(List<Id> accountIds) {
        this.accountIdsToUpdate = accountIds;
    }

    global Database.QueryLocator start(Database.BatchableContext BC) {
        Set<Id> parentIdsWithChildren = new Set<Id>();
        if (!accountIdsToUpdate.isEmpty()) {
            // Filter the query based on provided Account Ids
            parentIdsWithChildren.addAll(accountIdsToUpdate);
        } else {
            // Original query for finding parent accounts without parents
            for (Account acc : [SELECT ParentId FROM Account WHERE
                    ParentId != null
                    AND LastModifiedById != '0056M00000ASZppQAH'
                    AND Parent.ParentId = NULL])
            {
                parentIdsWithChildren.add(acc.ParentId);
            }
        }

        // Query for the top-level parent accounts that don't have parents themselves
        return Database.getQueryLocator([
                SELECT Id FROM Account WHERE Id IN :parentIdsWithChildren
        ]);
    }

    global void execute(Database.BatchableContext BC, List<Account> scope) {
        for(Account parent : scope) {
            AccountHierarchyUpdater.updateChildAccountsCount(parent.Id);
        }
    }

    global void finish(Database.BatchableContext BC) {
        // Optionally, add any post-processing logic here
    }
}