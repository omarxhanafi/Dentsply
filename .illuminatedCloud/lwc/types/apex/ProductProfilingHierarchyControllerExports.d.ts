// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/ProductProfilingHierarchyController.deleteProductProfilingRecord" {
    export default function deleteProductProfilingRecord(params: {recordId: string}): Promise<boolean>;
}

declare module "@salesforce/apex/ProductProfilingHierarchyController.getAccountFromProcedureTracker" {
    export default function getAccountFromProcedureTracker(params: {procedureTrackerId: string}): Promise<string>;
}

declare module "@salesforce/apex/ProductProfilingHierarchyController.getAllCategories" {
    export default function getAllCategories(params: {recordId: string, SBU: string}): Promise<string[]>;
}

declare module "@salesforce/apex/ProductProfilingHierarchyController.getChildProducts" {
    export default function getChildProducts(params: {recordId: string, node: string, manufacturer: string, searchString: string, category: string, competitor: boolean, focus: boolean, localcat: string, workflow: string}): Promise<ProductProfilingHierarchyController.HierarchyNode[]>;
}

declare module "@salesforce/apex/ProductProfilingHierarchyController.getDistinctValues" {
    export default function getDistinctValues(params: {field_name: string, recordId: string}): Promise<string[]>;
}

declare module "@salesforce/apex/ProductProfilingHierarchyController.getLocalCategories" {
    export default function getLocalCategories(params: {recordId: string, SBU: string, manufacturer: string}): Promise<string[]>;
}

declare module "@salesforce/apex/ProductProfilingHierarchyController.getManufacturers" {
    export default function getManufacturers(params: {recordId: string, SBU: string}): Promise<string[]>;
}

declare module "@salesforce/apex/ProductProfilingHierarchyController.getProductProfiling" {
    export default function getProductProfiling(params: {recordId: string}): Promise<any[]>;
}

declare module "@salesforce/apex/ProductProfilingHierarchyController.getProductProfilingMap" {
    export default function getProductProfilingMap(params: {recordId: string}): Promise<any>;
}

declare module "@salesforce/apex/ProductProfilingHierarchyController.getSBUs" {
    export default function getSBUs(params: {recordId: string}): Promise<string[]>;
}

declare module "@salesforce/apex/ProductProfilingHierarchyController.getWorkflows" {
    export default function getWorkflows(params: {recordId: string}): Promise<any[]>;
}

declare module "@salesforce/apex/ProductProfilingHierarchyController.publishPPCreationEvent" {
    export default function publishPPCreationEvent(): Promise<void>;
}

declare module "@salesforce/apex/ProductProfilingHierarchyController.publishPPCreationEventWP" {
    export default function publishPPCreationEventWP(): Promise<void>;
}

declare module "@salesforce/apex/ProductProfilingHierarchyController.updateProductProfilingRecords" {
    export default function updateProductProfilingRecords(params: {productProfilingList: any[]}): Promise<void>;
}