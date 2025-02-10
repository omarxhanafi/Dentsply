// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare namespace ProductProfilingHierarchyController {
    declare interface HierarchyNode {
        node?: Non_ERP_Products__c;
        nodeName?: string;
        children?: ProductProfilingHierarchyController.HierarchyNode[];
        isProfiled?: boolean;
        familyOrder?: number;
    }
}