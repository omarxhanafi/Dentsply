// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare namespace WorkflowProfilingController {
    declare interface ProductFamilyWrapper {
        productFamily?: ProductFamily__c;
        competitorProducts?: WorkflowProfilingController.NonERPProductWrapper[];
        dsProducts?: WorkflowProfilingController.NonERPProductWrapper[];
    }
}