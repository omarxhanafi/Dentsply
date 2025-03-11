// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/WorkflowProfilingController.createOrUpdateWorkflowProfilings" {
    export default function createOrUpdateWorkflowProfilings(params: {newRecords: WorkflowProfiling__c[]}): Promise<void>;
}

declare module "@salesforce/apex/WorkflowProfilingController.createProductProfiling" {
    export default function createProductProfiling(params: {accountId: string, nonErpProductId: string}): Promise<void>;
}

declare module "@salesforce/apex/WorkflowProfilingController.getProductFamilyListByWorkflowId" {
    export default function getProductFamilyListByWorkflowId(params: {workflowId: string, accountId: string}): Promise<WorkflowProfilingController.ProductFamilyWrapper[]>;
}

declare module "@salesforce/apex/WorkflowProfilingController.getWorkflowProfilingsByAccount" {
    export default function getWorkflowProfilingsByAccount(params: {accountId: string}): Promise<WorkflowProfiling__c[]>;
}

declare module "@salesforce/apex/WorkflowProfilingController.getWorkflows" {
    export default function getWorkflows(params: {accountId: string}): Promise<Workflow__c[]>;
}