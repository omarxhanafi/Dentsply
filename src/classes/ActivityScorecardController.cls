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
        // Query for the oldest event on the account
        String firstEventDate;

        List<Event> events = [
                SELECT ActivityDate
                FROM Event
                WHERE WhatId = :accountId
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
                WHERE WhatId = :accountId
                AND ActivityDate > TODAY
        ];

        // Count the number of completed tasks on the account
        Integer completedTasksCount = [
                SELECT COUNT()
                FROM Task
                WHERE WhatId = :accountId
                AND IsClosed = true
                AND TaskSubtype <> 'Call'
                AND Type <> 'Email'
                AND ActivityDate = LAST_N_DAYS:365
        ];

        // Count the number of calls logged on the account
        Integer callsLoggedCount = [
                SELECT COUNT()
                FROM Task
                WHERE WhatId = :accountId
                AND TaskSubtype = 'Call'
                AND ActivityDate = LAST_N_DAYS:365
        ];

        // Count the number of emails sent on the account
        Integer emailsSentCount = [
                SELECT COUNT()
                FROM Task
                WHERE WhatId = :accountId
                AND Type = 'Email'
                AND ActivityDate = LAST_N_DAYS:365
        ];

        // Count the number of events logged on the account
        Integer eventsLoggedCount = [
                SELECT COUNT()
                FROM Event
                WHERE WhatId = :accountId
                AND ActivityDate = LAST_N_DAYS:365
        ];

        // Construct a Map of the results
        Map<String, Object> results = new Map<String, Object>();
        results.put('firstEvent', firstEventDate);
        results.put('futureEventsCount', futureEventsCount);
        results.put('completedTasksCount', completedTasksCount);
        results.put('callsLoggedCount', callsLoggedCount);
        results.put('emailsSentCount', emailsSentCount);
        results.put('eventsLoggedCount', eventsLoggedCount);

        System.debug(results);

        return JSON.serialize(results);
    }
}