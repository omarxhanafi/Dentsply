/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Activity Scorecard Controller.
 * @Test-Class      Test_ActivityScorecardController
 *
 * @History
 * 22-06-2023   Omar     Create new ActivityScorecardController class
 */
public class ActivityScorecardController {

     /**
     * getAccountActivityScorecard Return a map of scorecard info related to the provided account
     * @author ohanafi@salesforce.com | 22-06-2023
     *
     * @param accountId Id of the account
     *
     * @return String - Serialized map of scorecard info
     */
    @AuraEnabled(Cacheable = true)
    public static String getAccountActivityScorecard(Id accountId) {
        // Get account details (Type and country)
//        Account accountDetails = [
//                SELECT OneAccount_Type__c, Country__c
//                FROM Account
//                WHERE Id = :accountId
//        ];

//        String accountType = accountDetails?.OneAccount_Type__c;
//        String accountCountry = accountDetails?.Country__c;

        // Query for the oldest event on the account
        String firstEventDate;

        List<Event> events = [
                SELECT ActivityDate
                FROM Event
                WHERE AccountId = :accountId
                ORDER BY ActivityDate ASC
                LIMIT 1
        ];


        if (events != null && !events.isEmpty()) {
                firstEventDate = String.valueOf(events[0].ActivityDate);
        } else {
                firstEventDate = null;
        }

        // Count the number of future events on the account
        Integer futureEventsCount = [
                SELECT COUNT()
                FROM Event
                WHERE AccountId = :accountId
                AND ActivityDate > TODAY
        ];

        // Count the number of completed tasks on the account
        Integer completedTasksCount = [
                SELECT COUNT()
                FROM Task
                WHERE AccountId = :accountId
                AND IsClosed = true
                AND Type <> 'Call'
                AND Type <> 'Email'
                AND ActivityDate = LAST_N_DAYS:365
        ];

        // Benchmark of completed tasks on the account
//        List<AggregateResult> completedTasksBenchmark = [
//                SELECT COUNT(Id) result
//                FROM Task
//                WHERE Account.OneAccount_Type__c = :accountType
//                AND Account.Country__c = :accountCountry
//                AND IsClosed = true
//                GROUP BY AccountId
//                ORDER BY COUNT(Id) DESC
//                LIMIT 1
//        ];

        // Count the number of calls logged on the account
        Integer callsLoggedCount = [
                SELECT COUNT()
                FROM Task
                WHERE AccountId = :accountId
                AND Type = 'Call'
                AND ActivityDate = LAST_N_DAYS:365
        ];

        // Benchmark of calls logged on the account
//        List<AggregateResult> callsLoggedBenchmark = [
//                SELECT COUNT(Id) result
//                FROM Task
//                WHERE Account.OneAccount_Type__c = :accountType
//                AND Account.Country__c = :accountCountry
//                AND Type = 'Call'
//                GROUP BY AccountId
//                ORDER BY COUNT(Id) DESC
//                LIMIT 1
//        ];

        // Count the number of emails sent on the account
        Integer emailsSentCount = [
                SELECT COUNT()
                FROM Task
                WHERE AccountId = :accountId
                AND Type = 'Email'
                AND ActivityDate = LAST_N_DAYS:365
        ];

        // Benchmark of emails sent on the account
//        List<AggregateResult> emailsSentBenchmark = [
//                SELECT COUNT(Id) result
//                FROM Task
//                WHERE Account.OneAccount_Type__c = :accountType
//                AND Account.Country__c = :accountCountry
//                AND Type = 'Email'
//                GROUP BY AccountId
//                ORDER BY COUNT(Id) DESC
//                LIMIT 1
//        ];

        // Count the number of events logged on the account
        Integer eventsLoggedCount = [
                SELECT COUNT()
                FROM Event
                WHERE AccountId = :accountId
                AND ActivityDate = LAST_N_DAYS:365
        ];

        // Benchmark of events logged on the account
//        List<AggregateResult> eventsLoggedBenchmark = [
//                SELECT COUNT(Id) result
//                FROM Event
//                WHERE Account.OneAccount_Type__c = :accountType
//                AND Account.Country__c = :accountCountry
//                GROUP BY AccountId
//                ORDER BY COUNT(Id) DESC
//                LIMIT 1
//        ];


        // Construct a Map of the results
        Map<String, Object> results = new Map<String, Object>();
        results.put('firstEvent', firstEventDate);
        results.put('futureEventsCount', futureEventsCount);
        results.put('completedTasksCount', completedTasksCount);
        results.put('callsLoggedCount', callsLoggedCount);
        results.put('emailsSentCount', emailsSentCount);
        results.put('eventsLoggedCount', eventsLoggedCount);

//        results.put('completedTasksBenchmark', !completedTasksBenchmark.isEmpty() ? completedTasksBenchmark.get(0)?.get('result') : 0);
//        results.put('callsLoggedBenchmark', !callsLoggedBenchmark.isEmpty() ? callsLoggedBenchmark.get(0)?.get('result') : 0);
//        results.put('emailsSentBenchmark', !emailsSentBenchmark.isEmpty() ? emailsSentBenchmark.get(0)?.get('result') : 0);
//        results.put('eventsLoggedBenchmark', !eventsLoggedBenchmark.isEmpty() ? eventsLoggedBenchmark.get(0)?.get('result') : 0);

        System.debug(results);

        return JSON.serialize(results);
    }
}