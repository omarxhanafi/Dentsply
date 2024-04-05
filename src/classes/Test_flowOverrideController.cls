/*------------------------------------------------------------	
	Author: 		Richard Trum (Glimt) 2023-12-01	
	Description:   	Test class related to the class flowOverrideController
	------------------------------------------------------------*/ 
    @IsTest
    private with sharing class Test_flowOverrideController {
        
        @IsTest
        private static void testGetFlowOverride() {

            String objName = 'Opportunity';
            String actionname = 'new';
            ActionOverride__mdt res = flowOverrideController.getFlowOverride(objName, actionname);

            Assert.isNotNull(res, 'Test_flowOverrideController: Action override cmdt should not be null');
        }

        @IsTest
        private static void testMismatchGetFlowOverride() {

            String objName = '';
            String actionname = '';
            ActionOverride__mdt res = flowOverrideController.getFlowOverride(objName, actionname);

            Assert.isNotNull(res, 'Test_flowOverrideController: Action override cmdt should not be null');
        }
    }