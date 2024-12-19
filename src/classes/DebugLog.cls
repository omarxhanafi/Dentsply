/*------------------------------------------------------------
Author:        Miguel Coimbra (Salesforce)
Description:   Generic Class providing a service for logging messages, error or any other information
               to a Debug Log Object for troubleshooting purposes
Test Class:    TestDebugLog
History
	190917	    Miguel - Created class
	            Houssam - Add more methods
------------------------------------------------------------*/
global without sharing class DebugLog {
    private final static String INFO 		= 'Info';
    private final static String ERROR		= 'Error';
    private final static String FATAL		= 'Fatal';

    global DebugLog(){}

    public static void addInfo(String description){
        createLog(DebugLog.INFO, description);
    }

    public static void addInfo(String description, String objectId){
        createLog(DebugLog.INFO, description, objectId);
    }

    public static void addInfo(String description, String objectId, String comments){
        createLog(DebugLog.INFO, description, objectId, comments);
    }

    public static void addError(String description){
        createLog(DebugLog.ERROR, description);
    }

    public static DebugLog__c returnError(String context, String type, String message, String comments){
        return createLog(DebugLog.ERROR, context, type, message, comments);
    }

    public static void addError(String description, String objectId){
        createLog(DebugLog.ERROR, description, objectId);
    }

    public static Database.SaveResult addException(Exception ex, String errorType){
        return createException(DebugLog.FATAL,''+ex.getCause(), ''+ex.getLineNumber(), ''+ex.getMessage(), ''+ex.getStackTraceString(), ''+ex.getTypeName(), '' + errorType,errorType);
    }

    @future
    public static void addInfoFuture(String description){
        createLog(DebugLog.INFO, description);
    }

    @future
    public static void addErrorFuture(String description){
        createLog(DebugLog.ERROR, description);
    }

    private static void createLog(String severity, String description){
        DebugLog__c dl = new DebugLog__c();
        dl.Severity__c = severity;
        dl.Message__c = description.left(32768);
        dl.DateTime__c = System.now();
        Database.Saveresult saveresult = Database.insert(dl);
    }

    private static void createLog(String severity, String description, String objectId){
        DebugLog__c dl = new DebugLog__c();
        dl.Severity__c = severity;
        dl.Message__c = description.left(32768);
        dl.DateTime__c = System.now();
        dl.ObjectId__c = objectId?.left(18);
        Database.Saveresult saveresult = Database.insert(dl);
    }

    private static void createLog(String severity, String description, String objectId, String comments){
        DebugLog__c dl = new DebugLog__c();
        dl.Severity__c = severity;
        dl.Message__c = description.left(32768);
        dl.DateTime__c = System.now();
        dl.Comments__c = comments.left(32768);
        dl.ObjectId__c = objectId.left(18);
        Database.Saveresult saveresult = Database.insert(dl);
    }

    private static DebugLog__c createLog(String severity, String context, String type, String message, String comments){
        DebugLog__c dl = new DebugLog__c();
        dl.Severity__c = severity;
        dl.Cause__c = context.left(32768);
        dl.TypeName__c = type.left(32768);
        dl.Message__c = message.left(32768);
        dl.Comments__c = comments.left(32768);
        dl.DateTime__c = System.now();
        return dl;
    }

    private static Database.SaveResult createException(String severity, String cause, String linenumber, String message, String stacktracestring, String typename, String Comments){
        Database.SaveResult saveResult;
        DebugLog__c dl = new DebugLog__c();
        dl.Severity__c = severity;
        dl.Cause__c = cause.left(32768);
        dl.LineNumber__c = linenumber;
        dl.Message__c = message.left(32768);
        dl.StackTraceString__c = stacktracestring.left(32768);
        dl.TypeName__c = typename.left(32768);
        dl.Comments__c = comments.left(32768);
        dl.DateTime__c = System.now();
        saveResult = Database.insert(dl);
        return saveResult;
    }

    private static Database.SaveResult createException(String severity, String cause, String linenumber, String message, String stacktrace, String typename, String Comments, String errorType){
        Database.SaveResult saveResult;
        DebugLog__c dl = new DebugLog__c();
        dl.Severity__c = severity;
        dl.Cause__c = cause.left(32768);
        dl.LineNumber__c = linenumber;
        dl.Message__c = message.left(32768);
        dl.StackTraceString__c = stacktrace.left(32768);
        dl.TypeName__c = typename.left(32768);
        dl.Comments__c = comments.left(32768);
        dl.DateTime__c = System.now();
        dl.ErrorType__c = errorType.left(255);
        saveResult = Database.insert(dl);
        return saveResult;
    }
}