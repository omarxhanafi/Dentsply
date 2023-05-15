/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Email Service handler to freeze users based on federation id
 * @Test-Class      Test_ES_FreezeUserHandler
 *
 * @History
 * 13-03-2023   Omar     Created Freeze User Handler class
 */


public class ES_FreezeUserHandler implements Messaging.InboundEmailHandler {
    /**
     * handleInboundEmail Implementation of 'Messaging.InboundEmailHandler' interface
     * @author ohanafi@salesforce.com | 14-03-2023
     *
     * @param email         Represents an inbound email object.
     * @param envelope      Stores the envelope information associated with the inbound email
     *
     * @return Messaging.InboundEmailResult - Used to return the result of the email service.
     */
    public Messaging.InboundEmailResult handleInboundEmail(Messaging.InboundEmail email, Messaging.InboundEnvelope envelope) {
        // Extract the plain text body of the email
        String textBody = email.plainTextBody;
        textBody = textBody.replaceAll('\\s', ''); // replace all whitespace characters with an empty string

        // Initialize the federation ID List
        List<String> federationIds = new List<String>();

        // Search for the user IDs in the email body
        String regexPattern = '(?<=\\*?From:\\*?INTERNAL\\\\)[a-zA-Z0-9]+(?=\\*?To:)';
        Pattern pattern = Pattern.compile(regexPattern);
        Matcher matcher = pattern.matcher(textBody);

        while (matcher.find()) {
            federationIds.add(matcher.group());
        }

        if(!federationIds.isEmpty()){
            // Get the list of users
            Map<Id, User> userMap = new Map<Id, User> ([
                    SELECT Id, CRM_team_comments__c, FederationIdentifier
                    FROM User
                    WHERE FederationIdentifier in :federationIds
            ]);

            // Checking the existence of the federation Ids
            List<String> foundFederationIds = new List<String>();
            List<String> notFoundFederationIds = new List<String>();
            for(String federationId : federationIds){
                Boolean found = false;
                for(User u : userMap.values()){
                    if(u.FederationIdentifier == federationId){
                        foundFederationIds.add(federationId);
                        found = true;
                        break;
                    }
                }
                if(!found){
                    notFoundFederationIds.add(federationId);
                }
            }


            // Get the list of UserLogin records
            List<UserLogin> userLoginList = [
                    SELECT Id, IsFrozen, UserId
                    FROM UserLogin
                    WHERE UserId = :userMap.keySet()
            ];

            for(User eachUser : userMap.values()){
                // Add a comment to the user record to indicate that the user was frozen by an automated process
                String freezeComment = 'Frozen on ' + Datetime.now() + ' by automated process';
                eachUser.CRM_team_comments__c = String.isEmpty(eachUser.CRM_team_comments__c) ? freezeComment : eachUser.CRM_team_comments__c + ' ' + freezeComment;
            }

            for(UserLogin eachUserLogin : userLoginList){
                // Set the IsFrozen field to true to freeze the user
                eachUserLogin.IsFrozen = true;
            }

            // Update the user login and user records to save the changes
            try {
                update userLoginList;
            } catch (Exception e){
                DebugLog.addError(e.getMessage());
            }

            try {
                update userMap.values();

                DebugLog.addInfo('Users Frozen: ' + foundFederationIds);

                if(!notFoundFederationIds.isEmpty()){
                    DebugLog.addInfo('Users not found: ' + notFoundFederationIds);
                }
            } catch (Exception e){
                DebugLog.addError(e.getMessage());
            }

        }

        // Generate a successful result
        Messaging.InboundEmailResult result = new Messaging.InboundEmailResult();
        result.success = true;
        return result;
    }
}
