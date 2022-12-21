/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class of ScheduleCreateProcedureTrackers
 *
 * @History
 * 21-12-2022   Omar     Created test class
 */
@isTest(seeAllData=false)
public without sharing class Test_ScheduleCreateProcedureTrackers {

    @isTest
    private static void testScheduler(){
        SchedulableContext sc ;
        ScheduleCreateProcedureTrackers sfu = new ScheduleCreateProcedureTrackers();
        sfu.execute(sc);
        string schedule = '0 5 1-23 * * ?';

        Test.startTest();
     		system.schedule('Process ScheduleCreateProcedureTrackers', schedule, sfu);
        Test.stopTest();
    }
}