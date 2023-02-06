/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class for UpdateContactsBypassDuplicate
 *
 * @History
 * 03-02-2023   Omar Hanafi     Created the Test_UpdateContactsBypassDuplicate class.
 */

@isTest
private class Test_UpdateContactsBypassDuplicate {

    @IsTest
    private static void testUpdateContact() {
        // Create a test contact
        Contact contact = new Contact();
        contact.FirstName = 'Test';
        contact.LastName = 'Contact';
        insert contact;

        // Prepare the input for the invocable method
        UpdateContactsBypassDuplicate.ContactRecord contactRecord = new UpdateContactsBypassDuplicate.ContactRecord();
        contactRecord.Id = contact.Id;
        contactRecord.Email = 'test@example.com';
        contactRecord.FirstName = 'Test';
        contactRecord.LastName = 'Contact';
        contactRecord.PreferredLanguage = 'English';
        contactRecord.Profession = 'Engineer';
        contactRecord.Salutation = 'Mr.';

        List<UpdateContactsBypassDuplicate.ContactRecord> contacts = new List<UpdateContactsBypassDuplicate.ContactRecord>();
        contacts.add(contactRecord);

        // Call the invocable method
        UpdateContactsBypassDuplicate.updateContact(contacts);

        // Verify the contact has been updated
        Contact updatedContact = [SELECT Email, FirstName, LastName, Preferred_Language__c, Profession__c, Salutation FROM Contact WHERE Id = :contact.Id];

        System.assertEquals('Test', updatedContact.FirstName);
        System.assertEquals('Contact', updatedContact.LastName);
    }
}
