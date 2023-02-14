/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Class to Schedule BatchCreateProcedureTrackers Batchable Class
 * @Test-Class      Test_ScheduleCreateProcedureTrackers
 *
 * @History
 * 21-12-2022   Omar     Created Schedulable class
 */
global class ScheduleCreateProcedureTrackers implements Schedulable {
    global void execute (SchedulableContext ctx){
        Database.executeBatch(new BatchCreateProcedureTrackers());
    }
}