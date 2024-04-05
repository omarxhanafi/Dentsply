@IsTest
private class Test_leadContactController {
    
    @IsTest
    private static void testGetLeadDetails() {

        Lead l = new Lead();
        l.FirstName = 'Test';
        l.LastName = 'Test';
        //l.Email = 'test@dentsplysirona.com.invalid';
        l.Phone = '+4673123456';
        insert l;

        Lead res = leadContactController.getLeadDetails(l.Id);

        String emptyId = '';
        Lead emptyRes = new Lead();

        try{
            emptyRes = leadContactController.getLeadDetails(emptyId);
        }
        catch(Exception e){
            System.debug(e);
        }    

    }

    @IsTest
    private static void testGetContactDetails() {

        Contact c = new Contact();
        c.FirstName = 'Test';
        c.LastName = 'Test';
        //l.Email = 'test@dentsplysirona.com.invalid';
        c.Phone = '+4673123456';
        insert c;

        Contact res = leadContactController.getContactDetails(c.Id);


        String emptyId = '';
        Contact emptyRes = new Contact();

        try{
            emptyRes = leadContactController.getContactDetails(emptyId);
        }
        catch(Exception e){
            System.debug(e);
        }

    }
}