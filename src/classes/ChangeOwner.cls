/*Version History
 * Date: 06-Nov-2018
 * Class Name: ChangeOwner
 * Created By: Amit Kumar Prabhat(amitkumar.prabhat@mindtree.com)
 * Related to: TFUS-000000178 : “take_ownership button
 * Related Test Class: ChangeOwnerTest.cls
 * History
 * 2022-11-30  Omar HANAFI  Changed sharing setting to "without sharing" and added a try catch block (TFUS-000004915)
*/

public without Sharing class ChangeOwner {
@AuraEnabled
    public static Task changeOwnerMethod(Id taskId) {
        try {
            if(taskId != null) {
                Task c = [
                        SELECT OwnerId
                        FROM Task
                        WHERE Id = :taskId
                        WITH SECURITY_ENFORCED
                ];

                c.OwnerId = UserInfo.getUserId();
                c.status = 'In Progress';

                update c;

                return c;
            }
            return null;
        } catch (Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }

}