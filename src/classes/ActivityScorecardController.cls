/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Activity Scorecard Controller.
 * @Test-Class      Test_ActivityScorecardController
 *
 * @History
 * 22-06-2023   Omar     Create new ActivityScorecardController class
 */
public without sharing class ActivityScorecardController {

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

        Account accWithEvents = [
                SELECT Id,
                    (SELECT Id, ActivityDate
                    FROM ActivityHistories
                    WHERE ActivitySubtype = 'Event'
                    ORDER BY ActivityDate ASC)
                FROM Account WHERE Id = :accountId
        ];


        if (accWithEvents != null) {
            if(!accWithEvents.ActivityHistories.isEmpty()){
                firstEventDate = String.valueOf(accWithEvents.ActivityHistories[0].ActivityDate);
            }
        } else {
                firstEventDate = null;
        }

        // Count the number of future events on the account
        Integer futureEventsCount = [
                SELECT COUNT()
                FROM Event
                WHERE (WhatId = :accountId OR AccountId = :accountId)
                AND ActivityDate > TODAY
        ];

        // Count the number of completed tasks on the account
        Integer completedTasksCount = 0;

        Account accWithPastTasks = [
                SELECT Id,
                (SELECT Id
                FROM ActivityHistories
                WHERE ActivitySubtype = 'Task'
                AND ActivityDate = LAST_N_DAYS:365
                AND IsClosed = TRUE)
                FROM Account WHERE Id = :accountId
        ];

        if (accWithPastTasks != null) {
            completedTasksCount = accWithPastTasks.ActivityHistories != null ? accWithPastTasks.ActivityHistories.size() : 0;
        }

        // Count the number of calls logged on the account
        Integer callsLoggedCount = 0;

        Account accWithPastCalls = [
                SELECT Id,
                (SELECT Id
                FROM ActivityHistories
                WHERE ActivitySubtype = 'Call'
                AND ActivityDate = LAST_N_DAYS:365)
                FROM Account WHERE Id = :accountId
        ];

        if (accWithPastCalls != null) {
            callsLoggedCount = accWithPastCalls.ActivityHistories != null ? accWithPastCalls.ActivityHistories.size() : 0;
        }

        // Count the number of emails sent on the account
        Integer emailsSentCount = 0;

        Account accWithPastEmails = [
                SELECT Id,
                (SELECT Id
                FROM ActivityHistories
                WHERE ActivitySubtype = 'Email'
                AND ActivityDate = LAST_N_DAYS:365)
                FROM Account WHERE Id = :accountId
        ];

        if (accWithPastEmails != null) {
            emailsSentCount = accWithPastEmails.ActivityHistories != null ? accWithPastEmails.ActivityHistories.size() : 0;
        }

        // Count the number of events logged on the account
        Integer eventsLoggedCount = 0;

        // Get the current date and time
        Datetime currentDate = Datetime.now();

        Account accWithPastEvents = [
                SELECT Id,
                (SELECT Id
                FROM ActivityHistories
                WHERE ActivitySubtype = 'Event'
                AND ActivityDateTime <= :currentDate
                AND ActivityDateTime >= :currentDate.addMonths(-12))
                FROM Account WHERE Id = :accountId
        ];

        if (accWithPastEvents != null) {
            eventsLoggedCount = accWithPastEvents.ActivityHistories != null ? accWithPastEvents.ActivityHistories.size() : 0;
        }

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