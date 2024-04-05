@IsTest
public without sharing class MappingManagementTest {

    @TestSetup
    private static void setup(){
        TestDataFactory.assignPermissionSet(UserInfo.getUserId(),'Global_Campaigns_CVENT_Campaigns');
    }
    @IsTest
    public static void testRetrieveSourceData() {
        System.runAs(new User(Id=UserInfo.getUserId()))
        {
            // Given
            String eventCode = 'P7N2MG8Y827';
            CventEvents__Event__c event = TestDataFactory.createCventEvent(eventCode, true);

            // When
            Test.startTest();
            quickCreateCampaignFromCventController.ResultWrapper result = quickCreateCampaignFromCventController.createCampaignFromCvent(eventCode,'',false);
            Test.stopTest();

            // Then
            System.assertEquals(null, result.error, 'Conversion has errors');
        }
    }

    @IsTest
    public static void testlaunchValidationAsynchronous() {
        System.runAs(new User(Id=UserInfo.getUserId()))
        {
            // When We launch mappings validation
            Test.startTest();
            {
                MappingManagement.launchValidationAsynchronous(CventManagement.SOURCE_OBJECT_TEMP, CventManagement.TARGET_OBJECT_LEAD);
                MappingManagement.tickTargetFieldAsInvalid('Status', 'Error Msg',
                        CventManagement.SOURCE_OBJECT_TEMP, CventManagement.TARGET_OBJECT_LEAD);
            }
            Test.stopTest();

            // Then
            List<DynamicMapping__mdt> newMappings = [SELECT Id FROM DynamicMapping__mdt WHERE isNew__c = TRUE];
            if(newMappings.size() > 0)
            {
                Boolean isDeploymentTriggered = false;
                List<DebugLog__c> deploymentLogs = [SELECT Id,Message__c,Comments__c FROM DebugLog__c];
                for(DebugLog__c log : deploymentLogs)
                {
                    if(log.Message__c == 'Launched Metadata Deployment Job.')
                    {
                        isDeploymentTriggered = true;
                    }
                }
                System.assert(isDeploymentTriggered, 'No deployment enqueued to validate new mappings');
            }
        }
    }

    @IsTest
    static void testValidateMapping()
    {
        System.runAs(new User(Id=UserInfo.getUserId()))
        {
            // Given
            List<DynamicMapping__mdt> mappings = MappingManagement.getMapping(
                    CventManagement.SOURCE_OBJECT_TEMP,
                    CventManagement.TARGET_OBJECT_LEAD,
                    true);

            // When
            Test.startTest();
            MappingManagement.validateMapping(CventManagement.SOURCE_OBJECT_TEMP, CventManagement.TARGET_OBJECT_LEAD, mappings);
            Test.stopTest();

            // Then
            List<DynamicMapping__mdt> newMappings = [SELECT Id FROM DynamicMapping__mdt WHERE isNew__c = TRUE];
            if(newMappings.size() > 0)
            {
                Boolean isDeploymentTriggered = false;
                List<DebugLog__c> deploymentLogs = [SELECT Id,Message__c,Comments__c FROM DebugLog__c];
                for(DebugLog__c log : deploymentLogs)
                {
                    if(log.Message__c == 'Launched Metadata Deployment Job.')
                    {
                        isDeploymentTriggered = true;
                    }
                }
                System.assert(isDeploymentTriggered, 'No deployment enqueued to validate new mappings');
            }
        }
    }

}