
public class ActivityScorecardController {

    @AuraEnabled(Cacheable = true)
    public static String getAccountActivityScorecard(Id accountId) {
        // Query for the oldest event on the account
        Date firstEventDate = [
                SELECT ActivityDate
                FROM Event
                WHERE AccountId = :accountId
                ORDER BY ActivityDate ASC
                LIMIT 1
        ]?.ActivityDate;

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
                AND CreatedDate = LAST_N_MONTHS:12
        ];

        // Count the number of calls logged on the account
        Integer callsLoggedCount = [
                SELECT COUNT()
                FROM Task
                WHERE AccountId = :accountId
                AND Type = 'Call'
                AND CreatedDate = LAST_N_MONTHS:12
        ];

        // Count the number of emails sent on the account
        Integer emailsSentCount = [
                SELECT COUNT()
                FROM Task
                WHERE AccountId = :accountId
                AND Type = 'Email'
                AND CreatedDate = LAST_N_MONTHS:12
        ];

        // Count the number of events logged on the account
        Integer eventsLoggedCount = [
                SELECT COUNT()
                FROM Event
                WHERE AccountId = :accountId
                AND CreatedDate = LAST_N_MONTHS:12
        ];

        // Output the results
        System.debug('First Event Date: ' + firstEventDate);
        System.debug('Future Events Count: ' + futureEventsCount);
        System.debug('Completed Tasks Count: ' + completedTasksCount);
        System.debug('Calls Logged Count: ' + callsLoggedCount);
        System.debug('Emails Sent Count: ' + emailsSentCount);
        System.debug('Events Logged Count: ' + eventsLoggedCount);


        // Construct a Map of the results
        Map<String, Object> results = new Map<String, Object>();
        results.put('firstEventDate', firstEventDate);
        results.put('futureEventsCount', futureEventsCount);
        results.put('completedTasksCount', completedTasksCount);
        results.put('callsLoggedCount', callsLoggedCount);
        results.put('emailsSentCount', emailsSentCount);
        results.put('eventsLoggedCount', eventsLoggedCount);

        return JSON.serialize(results);
    }
}
