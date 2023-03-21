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

        // Define the start and end strings to search for the user ID in the email body
        String idStart = '*INTERNAL\\';
        String idEnd = ' was';

        // Initialize the federation ID
        String federationId = null;

        // Search for the user ID in the email body
        Integer idStartIndex = textBody.indexOf(idStart);
        if (idStartIndex != -1) {
            idStartIndex += idStart.length();
            Integer idEndIndex = textBody.indexOf(idEnd, idStartIndex);
            if (idEndIndex != -1) {
                federationId = textBody.substring(idStartIndex, idEndIndex);
                System.debug('Federation ID: ' + federationId);
            }
        }

        // If a federation ID was found, freeze the user with that ID
        if (federationId != null) {
            // Query for the user with the given federation ID
            List<User> userList = [SELECT Id, CRM_team_comments__c FROM User WHERE FederationIdentifier = :federationId LIMIT 1];
            if(!userList.isEmpty()) {
                User userToFreeze = userList[0];
                if (userToFreeze != null) {
                    // Query for the user login record associated with the user
                    UserLogin ulogin = [SELECT Id, IsFrozen, UserId FROM UserLogin WHERE UserId = :userToFreeze.Id];

                    // Set the IsFrozen field to true to freeze the user
                    ulogin.IsFrozen = true;

                    // Add a comment to the user record to indicate that the user was frozen by an automated process
                    String freezeComment = 'Frozen on ' + Datetime.now() + ' by automated process';
                    userToFreeze.CRM_team_comments__c = String.isEmpty(userToFreeze.CRM_team_comments__c) ? freezeComment : userToFreeze.CRM_team_comments__c + ' ' + freezeComment;

                    // Update the user login and user records to save the changes
                    try {
                        update ulogin;
                        update userToFreeze;
                    } catch (Exception e){
                        DebugLog.addError(e.getMessage());
                    }

                }
            }


        }

        // Generate a successful result
        Messaging.InboundEmailResult result = new Messaging.InboundEmailResult();
        result.success = true;
        return result;
    }
}
