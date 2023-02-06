/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Class for updating contacts without triggering the duplicate rule.
 * @Test-Class      Test_UpdateContactsBypassDuplicate
 *
 * @History
 * 03-02-2023   Omar Hanafi     Created the UpdateContactsBypassDuplicate class.
 */

public with sharing class UpdateContactsBypassDuplicate {

    /**
     * updateContact Method to update contacts without triggering the duplicate rule.
     * @author ohanafi@salesforce.com | 03-02-2023
     *
     * @param contacts   List of ContactRecord objects
     *
     * @return void
     */
    @InvocableMethod(
            label='Update Contacts Bypass Duplicate'
            description='Update contacts without triggering the duplicate rule'
            category='Contact'
    )
    public static void updateContact(List<ContactRecord> contacts) {
        Database.DMLOptions dmlOpts = new Database.DMLOptions();
        dmlOpts.duplicateRuleHeader.allowSave = true;

        // Update the contacts
        List<Contact> recordsToUpdate = new List<Contact>();
        for (ContactRecord contactRecord : contacts) {
            recordsToUpdate.add(new Contact(
                    Id = contactRecord.Id,
                    Email = contactRecord.Email,
                    FirstName = contactRecord.FirstName,
                    LastName = contactRecord.LastName,
                    Preferred_Language__c = contactRecord.PreferredLanguage,
                    Profession__c = contactRecord.Profession,
                    Salutation = contactRecord.Salutation
            ));
        }

        Database.update(recordsToUpdate, dmlOpts);
    }

    //Contact Record class used to pass data to the UpdateContactsBypassDuplicate method.
    public class ContactRecord {
        @InvocableVariable(required=false)
        public Id Id;
        @InvocableVariable(required=false)
        public String Email;
        @InvocableVariable(required=false)
        public String FirstName;
        @InvocableVariable(required=true)
        public String LastName;
        @InvocableVariable(required=false)
        public String PreferredLanguage;
        @InvocableVariable(required=false)
        public String Profession;
        @InvocableVariable(required=false)
        public String Salutation;
    }
}
