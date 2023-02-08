/**
 * Controller for Flow_lookupLwc, help in searching for and retrieving records of different types (Accounts and Contacts)
 * Can also Retrieve a list of recently viewed records.
 *
 * History
 * 2021-06-23   Richard Trum (richard.trum@glimt.se)     Create New Class
 * 2022-01-01   Houssam ADIB (hadib@salesforce.com)      Add Support to Account search back - Refactor the class - Comment the class
 */
public with sharing class flowLookupLwcController {

    private final static Integer MAX_RESULTS = 5;
    private final static String STANDARD_ACCOUNT_ICON = 'standard:account';
    private final static String STANDARD_CONTACT_ICON = 'standard:contact';

    /**
     * Searches for records of the specified types (Account or Contact) that match the search term, and it returns the results as a list of LookupSearchResult objects.
     * The search results are filtered to exclude any records with IDs in the idsNotToInclude list.
     * If Contact is one of the objects being searched, the method also filters the search results to include only contacts that are related to the account specified by contactAccountId.
     *
     * @author          Richard Trum (richard.trum@glimt.se)
     * @refactoredBy    Houssam ADIB (hadib@salesforce.com)
     *
     * @param searchTerm        A string representing the search term that the user has entered
     * @param idsNotToInclude   A list of strings representing the IDs of records that should not be included in the search results
     * @param contactAccountId  The contact's account Id
     * @param searchObjects     A list of strings representing the objects that should be searched
     *
     * @return List<LookupSearchResult> - Returns the search results sorted alphabetically by title.
     */
    @AuraEnabled(Cacheable=true)
    public static List<LookupSearchResult> search(String searchTerm, List<String> idsNotToInclude, String contactAccountId, List<String> searchObjects)
    {
        searchTerm += '*';

        List<LookupSearchResult> results    = new List<LookupSearchResult>();

        if (searchObjects.contains('Account')) {
            results.addAll(searchAccounts(searchTerm, idsNotToInclude));
        }
        if (searchObjects.contains('Contact')) {
            results.addAll(searchContacts(searchTerm, idsNotToInclude, contactAccountId));
        }

        // Optionally sort all results by Title
        results.sort();

        return results;
    }

    /**
     * Searches for contacts that match the given search term and are related to the account specified by the given account ID
     * Returns the results as a list of LookupSearchResult objects.The search results are filtered to exclude any contacts with IDs in the given list of IDs to exclude.
     * @author          Richard Trum (richard.trum@glimt.se)
     * @refactoredBy    Houssam ADIB (hadib@salesforce.com)
     *
     * @param searchTerm        The search term to use when searching for contacts
     * @param idsNotToInclude   A list of contact IDs to exclude from the search results
     * @param contactAccountId  The ID of an account to which the searched contacts should be related
     *
     * @return List<LookupSearchResult> - objects representing the search results
     */
    private static List<LookupSearchResult> searchContacts(String searchTerm, List<String> idsNotToInclude, String contactAccountId)
    {
        List<LookupSearchResult> results = new List<LookupSearchResult>();
        Set<Id> contactIdSet = new Set<Id>();
        for (AccountContactRelation accConRelation : [  SELECT Id, ContactId FROM AccountContactRelation WHERE AccountId = :contactAccountId])
        {
            contactIdSet.add(accConRelation.ContactId);
        }

        List<List<SObject>> searchResults = new List<List<SObject>>();
        searchResults = [ FIND :searchTerm
        IN ALL FIELDS
        RETURNING Contact(Id, Name, FirstName, LastName, Email, Phone WHERE Id NOT IN :idsNotToInclude AND Id IN :contactIdSet)
        LIMIT :MAX_RESULTS
        ];

        Contact[] contacts = (List<Contact>) searchResults[0];
        for (Contact contact : contacts) {
            results.add(new LookupSearchResult(contact.Id, 'Contact', STANDARD_CONTACT_ICON, contact.Name, 'Contact • ' + contact.Name));
        }

        return results;
    }

    /**
     * Searches for accounts that match the given search term and returns the results as a list of LookupSearchResult objects.
     * The search results are filtered to exclude any accounts with IDs in the given list of IDs to exclude.
     * @author          Richard Trum (richard.trum@glimt.se)
     * @refactoredBy    Houssam ADIB (hadib@salesforce.com)
     *
     * @param searchTerm        The search term to use when searching for accounts
     * @param idsNotToInclude   A list of account IDs to exclude from the search results
     * @return List<LookupSearchResult> - Objects representing the search results
     */
    private static List<LookupSearchResult> searchAccounts(String searchTerm, List<String> idsNotToInclude)
    {
        List<List<SObject>> searchResults = new List<List<SObject>>();
        List<LookupSearchResult> results = new List<LookupSearchResult>();

        searchResults = [   FIND :searchTerm
        IN ALL FIELDS
        RETURNING Account(  Id, Name, BillingCity
                WHERE   Id NOT IN :idsNotToInclude
                AND
                RecordTypeId = :GlobalUtils.getRecordTypeId('Account','CIM_Account'))
        LIMIT :MAX_RESULTS
        ];

        Account[] accounts = (List<Account>) searchResults[0];
        for (Account account : accounts)
        {
            String subtitle = account.BillingCity == null ? 'Account' : 'Account • ' + account.BillingCity;
            results.add(new LookupSearchResult(account.Id, 'Account', STANDARD_ACCOUNT_ICON, account.Name, subtitle));
        }

        return results;
    }

    /**
     * Retrieves recently viewed records of type 'Account' or 'Contact' based on the given account ID and record ID
     * And returns the results as a list of LookupSearchResult objects.
     * @author          Richard Trum (richard.trum@glimt.se)
     * @refactoredBy    Houssam ADIB (hadib@salesforce.com)
     *
     * @param accountId     The ID of an account
     * @param recordId      The ID of a record
     * @return List<LookupSearchResult> - Objects representing the recently viewed records
     */
    @AuraEnabled(Cacheable=true)
    public static List<LookupSearchResult> getRecentlyViewed(String accountId, String recordId)
    {
        List<LookupSearchResult> results = new List<LookupSearchResult>();

        // Get recently viewed records of type Account or Opportunity
        /*List<RecentlyViewed> recentRecords = [
            SELECT Id, Name, Type
            FROM RecentlyViewed
            WHERE Type = 'Account' OR Type = 'Opportunity'
            ORDER BY LastViewedDate DESC
            LIMIT 5
        ];*/

        List<Contact> recentRecords = new List<Contact>();

        if(recordId.left(3) == '003')
        {
            recentRecords = [
                    SELECT Id, Name, FirstName, LastName
                    FROM Contact
                    WHERE Id =: recordId
            ];
        }
        else if(accountId != null)
        {
            recentRecords = [
                    SELECT Id, Name, FirstName, LastName
                    FROM Contact
                    WHERE AccountId =: accountId
            ];
        }

        // Convert recent records into LookupSearchResult
        for (Contact recentRecord : recentRecords)
        {
            results.add(
                    new LookupSearchResult( recentRecord.Id, 'Contact', STANDARD_CONTACT_ICON, recentRecord.Name, 'Contact • ' + recentRecord.Name )
            );
        }
        return results;
    }

}