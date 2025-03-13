// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare namespace ProductProfilingHierarchyController {
    declare interface HierarchyNode {
        node?: any;
        nodeName?: string;
        children?: ProductProfilingHierarchyController.HierarchyNode[];
        isProfiled?: boolean;
        familyOrder?: number;
    }
}