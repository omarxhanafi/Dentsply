@isTest(seeAllData=false)
public class VFMapAnythingControllerTest {
    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.createUsers(1, 'System Administrator');
        List<User> userIntegrationList = TestDataFactory.insertIntegrationUsers(1, 'System Administrator');
        TestDataFactory.createGlobalIntegrationSettings(userIntegrationList);
       
    }

    @isTest
    public static void VFMapAnythingControllerTest() {

        Test.startTest();
        VFMapAnythingController ctrl = new VFMapAnythingController();
        pagereference pageToCheck = ctrl.init();
        Test.stopTest();
        System.assertEquals(null, pageToCheck);

    }
}