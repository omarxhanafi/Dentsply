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
    @AuraEnabled
    public static String getAccountActivityScorecard(Id accountId) {
        // Query for the oldest event on the account
        String lastEventDate;

        // Variable that indicates if the last event is assigned to the current user
        Boolean isLastEventAssignedToCurrentUser = false;

        Account acc = [SELECT OneSF_Id__c FROM Account WHERE Id = :accountId];
        String oneSfId = acc != null ? acc.OneSF_Id__c : null;

        Account accWithEvents = [
                SELECT Id,
                (SELECT Id, ActivityDate, OwnerId
                FROM ActivityHistories
                WHERE ActivitySubtype = 'Event'
                ORDER BY ActivityDate DESC
                LIMIT 1)
                FROM Account WHERE Id = :accountId
        ];

        if (accWithEvents != null) {
            if(!accWithEvents.ActivityHistories.isEmpty()){
                // Get the first event from the list
                ActivityHistory lastEvent = accWithEvents.ActivityHistories[0];
                lastEventDate = String.valueOf(lastEvent.ActivityDate);

                // Check if the event is assigned to the current user
                if (lastEvent.OwnerId == UserInfo.getUserId()) {
                    isLastEventAssignedToCurrentUser = true;
                }
            }
        } else {
            lastEventDate = null;
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

        Decimal totalCFEs = 10;

        try{
            // Getting the events logged benchmark through a SAQL query
            totalCFEs = getTotalCFEs(oneSfId);
        } catch (Exception e){
            DebugLog.addException(e, 'Failed to load the SAQL query');
        }

        // Construct a Map of the results
        Map<String, Object> results = new Map<String, Object>();
        results.put('lastEventDate', lastEventDate);
        results.put('isLastEventAssignedToCurrentUser', isLastEventAssignedToCurrentUser);
        results.put('futureEventsCount', futureEventsCount);
        results.put('completedTasksCount', completedTasksCount);
        results.put('callsLoggedCount', callsLoggedCount);
        results.put('emailsSentCount', emailsSentCount);
        results.put('eventsLoggedCount', eventsLoggedCount);
        results.put('totalCFEs', totalCFEs);

        System.debug(results);

        return JSON.serialize(results);
    }

    /**
    * getTotalCFEs Retrieving the events logged benchmark by loading a SAQL query
    * @author ohanafi@salesforce.com | 24-03-2024
    *
    * @param oneSfId OneSfId of the account
    *
    * @return Decimal - Total CFEs
    */
    private static Decimal getTotalCFEs(String oneSfId) {
        Decimal totalCFEs = 10;

        List<String> datasetDetails = findDatasetVersion('AccountRFM');

        if (datasetDetails[0] != null && datasetDetails[1] != null) {

//  Query for PROD
//            String query = 'q = load "' + datasetDetails[0] + '/' + datasetDetails[1] + '";';
//            query = query + 'acct = filter q by \'Account.OneSF_Id__c\' == "SF0982657";';
//            query = query + 'totals = group q by (\'Geography.Hierarchy.ETMCountry\',\'Products.Global.SBU_Name__c\', \'Account.OneAccount_Type__c\', \'FM_Category_AnySBU\');';
//            query = query + 'totals = foreach totals generate \'Geography.Hierarchy.ETMCountry\',totals.\'Products.Global.SBU_Name__c\' as \'Products.Global.SBU_Name__c\', totals.\'Account.OneAccount_Type__c\' as \'Account.OneAccount_Type__c\', totals.\'FM_Category_AnySBU\' as \'FM_Category_AnySBU\', avg(totals.\'CFECount\') as \'AvgCFEs\';';
//            query = query + 'result = group acct by (\'Geography.Hierarchy.ETMCountry\',\'Products.Global.SBU_Name__c\', \'Account.OneAccount_Type__c\', \'FM_Category_AnySBU\'), totals by (\'Geography.Hierarchy.ETMCountry\',\'Products.Global.SBU_Name__c\', \'Account.OneAccount_Type__c\', \'FM_Category_AnySBU\');';
//            query = query + 'result = foreach result generate coalesce(acct.\'Geography.Hierarchy.ETMCountry\',totals.\'Geography.Hierarchy.ETMCountry\') as \'Geography.Hierarchy.ETMCountry\',coalesce(acct.\'Products.Global.SBU_Name__c\',totals.\'Products.Global.SBU_Name__c\') as \'Products.Global.SBU_Name__c\',coalesce(acct.\'Account.OneAccount_Type__c\',totals.\'Account.OneAccount_Type__c\') as \'Account.OneAccount_Type__c\',coalesce(acct.\'FM_Category_AnySBU\',totals.\'FM_Category_AnySBU\') as \'FM_Category_AnySBU\', sum(totals.\'AvgCFEs\') as \'TotalCFEs\';';
//            query = query + 'result = group result by all;';
//            query = query + 'result = foreach result generate round(sum(\'TotalCFEs\')) as \'TotalCFEs\';';

            String query = 'q = load "' + datasetDetails[0] + '/' + datasetDetails[1] + '";';
            query = query + 'acct = filter q by \'Account.OneSF_Id__c\' == "' + oneSfId + '";';
            query = query + 'totals = group q by (\'Geography.Hierarchy.ETMCountry\',\'Products.Global.SBU_Name__c\', \'Account.OneAccount_Type__c\');';
            query = query + 'totals = foreach totals generate \'Geography.Hierarchy.ETMCountry\',totals.\'Products.Global.SBU_Name__c\' as \'Products.Global.SBU_Name__c\', totals.\'Account.OneAccount_Type__c\' as \'Account.OneAccount_Type__c\', avg(totals.\'CFECount\') as \'AvgCFEs\';';
            query = query + 'result = group acct by (\'Geography.Hierarchy.ETMCountry\',\'Products.Global.SBU_Name__c\', \'Account.OneAccount_Type__c\'), totals by (\'Geography.Hierarchy.ETMCountry\',\'Products.Global.SBU_Name__c\', \'Account.OneAccount_Type__c\');';
            query = query + 'result = foreach result generate coalesce(acct.\'Geography.Hierarchy.ETMCountry\',totals.\'Geography.Hierarchy.ETMCountry\') as \'Geography.Hierarchy.ETMCountry\',coalesce(acct.\'Products.Global.SBU_Name__c\',totals.\'Products.Global.SBU_Name__c\') as \'Products.Global.SBU_Name__c\',coalesce(acct.\'Account.OneAccount_Type__c\',totals.\'Account.OneAccount_Type__c\') as \'Account.OneAccount_Type__c\', sum(totals.\'AvgCFEs\') as \'TotalCFEs\';';
            query = query + 'result = group result by all;';
            query = query + 'result = foreach result generate round(sum(\'TotalCFEs\')) as \'TotalCFEs\';';

            String response = '';
            if (!Test.isRunningTest()) {
                ConnectApi.LiteralJson queryresult = ConnectApi.Wave.executeQuery(query);
                response = queryresult.json;
            } else {
                response = '{"results":{"records":[{"TotalCFEs":19}]}, "id":"56789"}';
            }

            Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response);
            Object resultList = results.get('results');

            Map<String, Object> tempMap = (Map<String, Object>) resultList;
            List<Object> records = (List<Object>) tempMap.get('records');

            if (!records.IsEmpty()) {
                String recordJSON = JSON.serialize(records[0]);
                Map<String, Object> recordFields = (Map<String, Object>) JSON.deserializeUntyped(recordJSON);

                totalCFEs = (Decimal) recordFields.get('TotalCFEs');
            }

        }

        return totalCFEs;
    }

    /**
     * findDatasetVersion Performs a callout to Einstein Analytics/Tableau CRM to collect the most recent version of a dataset
     * @author ohanafi@salesforce.com | 19-03-2024
     *
     * @param datasetName Name of the dataset
     *
     * @return String - Dataset details
     */
    private static String[] findDatasetVersion(String datasetName){

        HttpRequest req = new HttpRequest();

        //Endpoint is built upon a Named Credential called Analytics
        String endpoint = 'callout:Analytics/services/data/v50.0/wave/datasets';
        endpoint = endpoint +'/'+datasetName;
        req.setEndpoint(endpoint);
        req.setHeader('Content-Type', 'application/json');

        //Auth token is collected from Auth. Provider called SalesforceAnalytics
        req.setHeader('Authorization', 'Bearer {!$SalesforceAnalytics.OAuthToken}');
        req.setMethod('GET');

        http http = new http();
        HttpResponse res = new HttpResponse();

        if (!Test.isRunningTest()) {
            res = http.send(req);
        }
        else{
            res.setHeader('Content-Type', 'application/json');
            res.setStatusCode(200);
            res.setBody('{"currentVersionId":"12345", "id":"56789", "createdBy":{"id":"00520000001BhymAAC","name":"Force Flow","profilePhotoUrl":"https://dentsplysirona--geo--c.documentforce.com/profilephoto/005/T"}}');
        }

        Integer calloutStatus = res.getStatusCode();
        List<String> result = new List<String>{};

        //Handle response
        if(calloutStatus == 200){
            Map<String, Object> results = (Map<String, Object>)
                    JSON.deserializeUntyped(res.getBody());
            Map<String,Object> tempMap = (Map<String,Object>)results;

            String datasetId = String.valueOf(tempMap.get('id'));
            String versionId = String.valueOf(tempMap.get('currentVersionId'));

            result.add(datasetId);
            result.add(versionId);
        }
        else{
            System.debug(res.getStatus());
        }

        return result;

    }


}